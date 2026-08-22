export type Program = {
  slug: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
};

export const programs: Program[] = [
  {
    slug: 'india',
    name: 'India',
    imageSrc: '/images/where-we-work/india.jpg',
    imageAlt: 'Two smiling girls in India',
  },
  {
    slug: 'nepal',
    name: 'Nepal',
    imageSrc: '/images/where-we-work/nepal.jpg',
    imageAlt: 'Woman sewing at a trade school in Nepal',
  },
  {
    slug: 'myanmar',
    name: 'Myanmar',
    imageSrc: '/images/where-we-work/myanmar-friends.jpg',
    imageAlt: 'Two smiling girls standing arm in arm in Myanmar',
    imageClassName: 'object-top',
  },
  {
    slug: 'philippines',
    name: 'Philippines',
    imageSrc: '/images/where-we-work/philippines-classroom.jpg',
    imageAlt: 'Smiling student writing in a classroom in the Philippines',
    imageClassName: 'object-[center_35%]',
  },
  {
    slug: 'uganda',
    name: 'Uganda',
    imageSrc: '/images/where-we-work/uganda-students.jpg',
    imageAlt: 'Three smiling students standing arm in arm in Uganda',
    imageClassName: 'object-[center_12%]',
  },
  {
    slug: 'argentina',
    name: 'Argentina',
    imageSrc: '/images/where-we-work/argentina.jpg',
    imageAlt: 'Young child playing with colorful blocks at an early childhood center in Argentina',
    imageClassName: 'object-[center_43%]',
  },
  {
    slug: 'colombia',
    name: 'Colombia',
    imageSrc: '/images/where-we-work/colombia-sewing-student.jpg',
    imageAlt: 'Smiling student seated at a sewing machine in Colombia',
    imageClassName: 'object-[center_43%]',
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
