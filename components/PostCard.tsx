'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag } from 'lucide-react';
import type { PostMeta } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #0d1117 0%, #161b2e 50%, #0d1117 100%)',
  'linear-gradient(135deg, #0a0e1c 0%, #0e1830 50%, #0a0e1c 100%)',
  'linear-gradient(135deg, #0d1117 0%, #101c34 50%, #0d1117 100%)',
];

interface Props {
  post: PostMeta;
  index: number;
}

export default function PostCard({ post, index }: Props) {
  const gradient = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];

  return (
    <div>
      <Link href={`/log/${post.slug}`} className="block group">
        <article
          className="card card-hover overflow-hidden"
          style={{ maxWidth: '680px', margin: '0 auto' }}
        >
          {/* Image / gradient banner */}
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/7' }}>
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 680px"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                style={{ background: gradient }}
              >
                {/* Decorative dots cluster in fallback */}
                <div className="opacity-30">
                  {[...Array(7)].map((_, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-full mx-0.5"
                      style={{
                        width: 3 + (i % 3),
                        height: 3 + (i % 3),
                        background: 'var(--accent)',
                        opacity: 0.4 + (i % 3) * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
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
                <Calendar size={12} strokeWidth={1.5} />
                {formatDate(post.date)}
              </span>
              {post.tags && post.tags.length > 0 && (
                <span
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <Tag size={12} strokeWidth={1.5} />
                  {post.tags.slice(0, 2).join(', ')}
                </span>
              )}
            </div>

            {/* Title */}
            <h2
              className="text-base md:text-lg font-semibold leading-snug mb-2 transition-colors duration-200"
              style={{ color: 'var(--text)' }}
            >
              {post.title}
            </h2>

            {/* Excerpt */}
            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              {post.excerpt}
            </p>

            {/* Read more indicator */}
            <p
              className="mt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: 'var(--accent)' }}
            >
              Read more →
            </p>
          </div>
        </article>
      </Link>
    </div>
  );
}
