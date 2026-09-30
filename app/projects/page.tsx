import LogHero from '@/components/LogHero';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/projects';

export const metadata = {
  title: 'Projects | Otavio Rosa',
  description: 'Things I have built.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <LogHero title="Projects" subtitle="Things I've built, from shipped products to computer vision experiments." />

      <main className="pb-24 -mt-14" style={{ background: 'var(--bg)' }}>
        <div className="px-6 pt-4" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="space-y-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.href} project={project} index={i} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
