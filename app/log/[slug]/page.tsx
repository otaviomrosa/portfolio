import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { getAllPosts, getPost } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import ParticleCanvas from '@/components/ParticleCanvas';

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPost(params.slug);
    return { title: `${post.title} — Otavio Rosa`, description: post.excerpt };
  } catch {
    return { title: 'Post — Otavio Rosa' };
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      {/* ── Header ── */}
      <header className="relative overflow-hidden" style={{ height: '44vh', minHeight: '240px' }}>
        {post.image ? (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                style={{ objectPosition: 'center', transform: 'scale(1.1)' }}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{ background: 'var(--image-overlay)' }}
            />
          </>
        ) : (
          <>
            <div className="absolute left-0 right-0 bottom-0 top-16">
              <ParticleCanvas className="w-full h-full" fadeBottom />
            </div>
            <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
          </>
        )}

        {/* Back link */}
        <div className="absolute top-20 left-0 right-0 z-10 px-6" style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Link
            href="/log"
            className="inline-flex items-center gap-1.5 text-xs rounded-full px-3 py-1.5"
            style={{
              color: 'var(--text)',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid var(--glass-border)',
            }}
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            Study Log
          </Link>
        </div>

        <div
          className="absolute left-0 right-0 z-10 mx-auto flex h-28 md:h-36 w-full max-w-[760px] flex-col justify-end px-6"
          style={{ bottom: '1.5rem' }}
        >
          <div className="max-w-full">
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                <Calendar size={12} strokeWidth={1.5} />
                {formatDate(post.date)}
              </span>
              {post.tags && post.tags.length > 0 && (
                <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <Tag size={12} strokeWidth={1.5} />
                  {post.tags.join(', ')}
                </span>
              )}
            </div>
            <h1
              className="text-2xl md:text-4xl font-bold leading-tight tracking-tight"
              style={{ color: 'var(--text)' }}
            >
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      {/* ── Article body ── */}
      <main className="pb-24" style={{ background: 'var(--bg)' }}>
        <div className="px-6 pt-10" style={{ maxWidth: '760px', margin: '0 auto' }}>
          {/* MDX content */}
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} />
          </div>

          {/* Footer */}
          <div className="gradient-divider mt-16 mb-8" />
          <Link href="/log" className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--text)' }}>
            <ArrowLeft size={15} strokeWidth={1.5} />
            Back to Study Log
          </Link>
        </div>
      </main>
    </>
  );
}
