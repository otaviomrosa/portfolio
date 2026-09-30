import ParticleCanvas from '@/components/ParticleCanvas';

export const metadata = {
  title: 'Resume | Otavio Rosa',
  description: 'Resume of Otavio Rosa.',
};

export default function ResumePage() {
  return (
    <main className="relative overflow-hidden pb-16" style={{ background: 'var(--bg)' }}>
      <div className="absolute left-0 right-0 top-16" style={{ height: '28rem' }}>
        <ParticleCanvas className="w-full h-full" fadeBottom />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--hero-overlay)' }}
      />

      <div className="relative z-10 px-6" style={{ paddingTop: '8rem' }}>
        <div
          className="card overflow-hidden mx-auto"
          style={{ maxWidth: '820px', height: '85vh', minHeight: '600px' }}
        >
          <iframe src="/resume.pdf" title="Resume" className="w-full h-full" style={{ border: 'none' }} />
        </div>
        <p className="text-center mt-4">
          <a href="/resume.pdf" download className="link-muted text-xs">
            Download PDF
          </a>
        </p>
      </div>
    </main>
  );
}
