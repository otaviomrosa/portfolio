'use client';

import Image from 'next/image';
import { Tag } from 'lucide-react';
import type { Project } from '@/lib/projects';

const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #0d1117 0%, #161b2e 50%, #0d1117 100%)',
  'linear-gradient(135deg, #0a0e1c 0%, #0e1830 50%, #0a0e1c 100%)',
  'linear-gradient(135deg, #0d1117 0%, #101c34 50%, #0d1117 100%)',
];

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const gradient = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];
  const contain = project.imageFit === 'contain';

  return (
    <div>
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block group">
        <article
          className="card card-hover card-post-list overflow-hidden"
          style={{ maxWidth: '680px', margin: '0 auto' }}
        >
          {/* Image / gradient banner */}
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: '16/7', background: contain ? '#fff' : undefined }}
          >
            {project.image ? (
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`${contain ? 'object-contain p-3' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                  sizes="(max-width: 768px) 100vw, 680px"
                  style={{ objectPosition: project.imagePosition ?? 'center' }}
                />
              </div>
            ) : (
              <div
                className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                style={{ background: gradient }}
              />
            )}
            {/* Shimmer overlay on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.06) 60%, transparent 80%)',
              }}
            />
          </div>

          {/* Text content */}
          <div className="p-5 md:p-6">
            {/* Meta row */}
            <div className="flex items-center gap-4 mb-3">
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                <Tag size={12} strokeWidth={1.5} />
                {project.tags.join(', ')}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-base md:text-lg font-semibold leading-snug mb-2 transition-colors duration-200"
              style={{ color: 'var(--text)' }}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>

            {/* Link indicator */}
            <p
              className="mt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: 'var(--accent)' }}
            >
              {project.linkLabel} →
            </p>
          </div>
        </article>
      </a>
    </div>
  );
}
