#!/usr/bin/env python3
"""
Convert scraped JSON blog posts to Markdown with frontmatter.
"""
import json
import os
import re
from pathlib import Path
from datetime import datetime
from html import unescape

# Paths
SCRAPED_DIR = Path.home() / "shehashope-scraped" / "blogs"
OUTPUT_DIR = Path.home() / "projects" / "shehashope" / "content" / "blog"

def clean_html(html_content):
    """Remove HTML tags and clean up content."""
    if not html_content:
        return ""
    
    # Unescape HTML entities
    text = unescape(html_content)
    
    # Remove script and style tags and their content
    text = re.sub(r'<script[^>]*>.*?</script>', '', text, flags=re.DOTALL | re.IGNORECASE)
    text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL | re.IGNORECASE)
    
    # Convert common HTML elements to markdown
    text = re.sub(r'<h1[^>]*>(.*?)</h1>', r'\n# \1\n', text, flags=re.DOTALL)
    text = re.sub(r'<h2[^>]*>(.*?)</h2>', r'\n## \1\n', text, flags=re.DOTALL)
    text = re.sub(r'<h3[^>]*>(.*?)</h3>', r'\n### \1\n', text, flags=re.DOTALL)
    text = re.sub(r'<h4[^>]*>(.*?)</h4>', r'\n#### \1\n', text, flags=re.DOTALL)
    text = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<b[^>]*>(.*?)</b>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<em[^>]*>(.*?)</em>', r'*\1*', text, flags=re.DOTALL)
    text = re.sub(r'<i[^>]*>(.*?)</i>', r'*\1*', text, flags=re.DOTALL)
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    text = re.sub(r'<p[^>]*>(.*?)</p>', r'\n\1\n', text, flags=re.DOTALL)
    
    # Handle links
    text = re.sub(r'<a[^>]*href=["\']([^"\']*)["\'][^>]*>(.*?)</a>', r'[\2](\1)', text, flags=re.DOTALL)
    
    # Handle lists
    text = re.sub(r'<li[^>]*>(.*?)</li>', r'\n- \1', text, flags=re.DOTALL)
    text = re.sub(r'<ul[^>]*>', '\n', text)
    text = re.sub(r'</ul>', '\n', text)
    text = re.sub(r'<ol[^>]*>', '\n', text)
    text = re.sub(r'</ol>', '\n', text)
    
    # Remove remaining HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    
    # Clean up whitespace
    text = re.sub(r'\n\s*\n\s*\n+', '\n\n', text)
    text = text.strip()
    
    return text

def extract_slug(filename):
    """Extract slug from filename."""
    return filename.replace('.json', '')

def convert_post(json_path):
    """Convert a single JSON post to Markdown."""
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Extract data
    title = data.get('title', 'Untitled')
    date_str = data.get('date', '')
    content_html = data.get('content', '')
    images = data.get('images', [])
    url = data.get('url', '')
    
    # Parse date
    try:
        if date_str:
            # Try different date formats
            for fmt in ['%B %d, %Y', '%b %d, %Y', '%Y-%m-%d']:
                try:
                    date_obj = datetime.strptime(date_str, fmt)
                    date_formatted = date_obj.strftime('%Y-%m-%d')
                    break
                except ValueError:
                    continue
            else:
                date_formatted = date_str
        else:
            date_formatted = datetime.now().strftime('%Y-%m-%d')
    except:
        date_formatted = datetime.now().strftime('%Y-%m-%d')
    
    # Clean content
    content_clean = clean_html(content_html)
    
    # Get featured image
    featured_image = images[0] if images else ""
    
    # Create slug from filename
    slug = extract_slug(json_path.name)
    
    # Build frontmatter
    title_escaped = title.replace('"', '\\"')
    frontmatter = f"""---
title: "{title_escaped}"
date: "{date_formatted}"
slug: "{slug}"
"""
    
    if featured_image:
        frontmatter += f'image: "{featured_image}"\n'
    
    if images:
        frontmatter += "images:\n"
        for img in images[:5]:  # Limit to first 5 images
            frontmatter += f'  - "{img}"\n'
    
    frontmatter += "---\n\n"
    
    # Combine frontmatter and content
    markdown = frontmatter + content_clean
    
    return markdown, slug

def main():
    """Convert all posts."""
    # Create output directory
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # Get all JSON files
    json_files = sorted(SCRAPED_DIR.glob('*.json'))
    
    print(f"Found {len(json_files)} posts to convert...")
    
    converted = 0
    failed = []
    
    for json_path in json_files:
        try:
            markdown, slug = convert_post(json_path)
            
            # Write markdown file
            output_path = OUTPUT_DIR / f"{slug}.md"
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(markdown)
            
            converted += 1
            if converted % 10 == 0:
                print(f"Converted {converted}/{len(json_files)}...")
        
        except Exception as e:
            failed.append((json_path.name, str(e)))
            print(f"❌ Failed to convert {json_path.name}: {e}")
    
    print(f"\n✅ Converted {converted} posts successfully!")
    
    if failed:
        print(f"\n❌ Failed to convert {len(failed)} posts:")
        for filename, error in failed:
            print(f"  - {filename}: {error}")
    
    print(f"\n📁 Output: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
