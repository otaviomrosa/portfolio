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
            <Image src={post.image} alt={post.title} fill className="object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(8,8,16,0.4), rgba(8,8,16,0.85) 80%, var(--bg) 100%)' }}
            />
          </>
        ) : (
          <>
            <div className="absolute inset-0">
              <ParticleCanvas className="w-full h-full" />
            </div>
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(8,8,16,0.3), transparent 40%, var(--bg) 100%)' }}
            />
          </>
        )}

        {/* Back link */}
        <div className="absolute top-20 left-0 right-0 px-6" style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Link
            href="/log"
            className="link-muted inline-flex items-center gap-1.5 text-xs"
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            Study Log
          </Link>
        </div>

        {/* Post title in header */}
        <div
          className="absolute bottom-8 left-0 right-0 px-6 z-10"
          style={{ maxWidth: '760px', margin: '0 auto' }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-3">
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
      </header>

      {/* ── Article body ── */}
      <main className="pb-24" style={{ background: 'var(--bg)' }}>
        <div className="px-6 pt-10" style={{ maxWidth: '760px', margin: '0 auto' }}>
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          )}

          {/* MDX content */}
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} />
          </div>

          {/* Footer */}
          <div className="gradient-divider mt-16 mb-8" />
          <Link href="/log" className="link-accent inline-flex items-center gap-2 text-sm">
            <ArrowLeft size={15} strokeWidth={1.5} />
            Back to Study Log
          </Link>
        </div>
      </main>
    </>
  );
}
