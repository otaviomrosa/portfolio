import LogHero from '@/components/LogHero';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Study Log — Otavio Rosa',
  description: 'Notes, research dives, and things I\'m currently thinking about.',
};

export default function LogPage() {
  const posts = getAllPosts();

  return (
    <>
      <LogHero />

      <main className="pb-24 -mt-14" style={{ background: 'var(--bg)' }}>
        <div className="px-6 pt-4" style={{ maxWidth: '780px', margin: '0 auto' }}>
          {posts.length === 0 ? (
            <div
              className="card text-center py-16"
              style={{ maxWidth: '680px', margin: '0 auto' }}
            >
              <p className="text-3xl mb-3" aria-hidden>
                ✦
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                No posts yet. Add an{' '}
                <code
                  className="text-xs px-1.5 py-0.5 rounded"
                  style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                >
                  .mdx
                </code>{' '}
                file to{' '}
                <code
                  className="text-xs px-1.5 py-0.5 rounded"
                  style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                >
                  /content/posts/
                </code>
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
