import fs from 'fs';
import path from 'path';

export interface Project {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  image?: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Please Don't Scroll",
    description:
      'A Chrome extension that blocks the sites that eat your day, with a 30-second pause before opening them or a full lock, plus profiles for work and evenings.',
    href: 'https://www.pleasedontscroll.com',
    linkLabel: 'Visit site',
    // Refreshed weekly by .github/workflows/project-screenshots.yml
    image: '/images/projects/pleasedontscroll.png',
    imagePosition: 'top',
    tags: ['Chrome Extension', 'JavaScript', 'Postgres'],
  },
  {
    title: 'Seam Carving',
    description:
      'Content-aware image resizing in Python. Repeatedly removes the lowest-energy seams of pixels so the important parts of an image survive when it shrinks.',
    href: 'https://github.com/otaviomrosa/seam-carving',
    linkLabel: 'View on GitHub',
    image: '/images/projects/seam-carving.png',
    imageFit: 'contain',
    tags: ['Python', 'OpenCV', 'NumPy'],
  },
  {
    title: 'Mascot Finder',
    description:
      "Finds the location, scale and rotation of USF's mascot Rocky in photos, using SIFT keypoints and a RANSAC affine fit written from scratch.",
    href: 'https://github.com/otaviomrosa/mascot-finder',
    linkLabel: 'View on GitHub',
    image: '/images/projects/mascot-finder.jpg',
    imagePosition: '55% 45%',
    tags: ['Python', 'OpenCV', 'SIFT', 'RANSAC'],
  },
  {
    title: 'ASL Translator',
    description:
      'Real-time webcam translator for static ASL letters, using MediaPipe hand tracking and a PyTorch CNN trained on Sign Language MNIST.',
    href: 'https://github.com/otaviomrosa/asl-translator',
    linkLabel: 'View on GitHub',
    tags: ['PyTorch', 'MediaPipe', 'OpenCV'],
  },
];

// Drops images that are not on disk yet so the card falls back to a gradient.
export function getAllProjects(): Project[] {
  return projects.map((p) =>
    p.image && !fs.existsSync(path.join(process.cwd(), 'public', p.image))
      ? { ...p, image: undefined }
      : p
  );
}
