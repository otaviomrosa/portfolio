import HeroSection from '@/components/HeroSection';
import ProfileContent from '@/components/ProfileContent';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();
  const latestPost = posts[0] ? { title: posts[0].title, slug: posts[0].slug } : undefined;

  return (
    <>
      <HeroSection latestPost={latestPost} />
      <ProfileContent />
    </>
  );
}
