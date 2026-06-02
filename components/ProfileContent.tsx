import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

// ─── Data ──────────────────────────────────────────────────────────────────

const experiences = [
  {
    org: 'USF Bellini College of AI, Cybersecurity and Computing',
    orgShort: 'USF — Bellini College',
    roles: [
      {
        title: 'Research Assistant — Generative Image Detection',
        supervisor: 'Prof. Utkarsh Ojha',
        period: 'Jan 2026 – Present',
        bullets: [
          'Thesis research on the "Neural Turing Test": can deep classifiers reliably distinguish real photographs from state-of-the-art synthetic images?',
          'Probing representational limits of discriminative networks via alternative image modalities; identifying failure modes of real-vs-synthetic detection.',
          'Co-author on a paper submitted to NeurIPS.',
        ],
      },
      {
        title: 'Undergraduate Researcher — Language GRASP Lab',
        supervisor: 'Dr. Gene Kim',
        period: 'Jan 2026 – Present',
        bullets: [
          'Large-scale behavioral analysis of open-source LLMs to investigate nationality-based compliance bias using mechanistic interpretability (neuron probing, integrated gradients).',
          'Presented "Quantifying Nationality-Based Compliance Bias in Qwen 2.5" at the 2026 AI+X Symposium.',
        ],
      },
      {
        title: 'Undergraduate Researcher — RARE Lab',
        supervisor: 'Dr. Zhao Han',
        period: 'Nov 2025 – Apr 2026',
        bullets: [
          'Built high-speed data acquisition pipelines for the Unitree Go2 quadruped, targeting human-robot interaction and computer vision datasets.',
          'Engineered a synchronized Master–Slave automation system (Python + WebRTC) for camera-projector calibration, dramatically reducing ML dataset generation overhead.',
          'Managed edge deployments on NVIDIA Jetson Orin Nano across ROS 2, SSH, and UDP/TCP, bridging real-time motion control and high-level vision subsystems.',
        ],
      },
    ],
  },
  {
    org: 'ClearSet.AI',
    orgShort: 'ClearSet.AI',
    roles: [
      {
        title: 'Software Engineer Intern',
        supervisor: '',
        period: 'May 2025 – Jul 2025',
        bullets: [
          'Built 30+ responsive Angular/TypeScript UI components, reducing new-feature development time by ~20%.',
          'Authored 30+ SQL migration scripts across 6 zero-downtime production releases.',
          'Resolved 50+ bugs across C# .NET backend and Angular frontend, cutting the internal backlog by 25%.',
        ],
      },
    ],
  },
  {
    org: 'Google Developer Group on Campus at USF',
    orgShort: 'GDG @ USF',
    roles: [
      {
        title: 'Community Lead',
        supervisor: '',
        period: 'Jan 2025 – May 2025',
        bullets: [
          'Co-led HackUSF — 200+ participants, $3 000+ in prizes, logistics managed end-to-end.',
          'Organized workshops in collaboration with 20+ industry professionals.',
          'Secured sponsorships that reduced event costs by 40%.',
        ],
      },
    ],
  },
];

const skillGroups = [
  {
    label: 'AI / ML Research',
    gradient: 'linear-gradient(135deg, rgba(12,16,38,0.7) 0%, rgba(14,10,30,0.7) 100%)',
    borderColor: 'rgba(90,110,220,0.12)',
    tags: [
      'PyTorch', 'Computer Vision', 'Generative Models', 'Diffusion Models',
      'LLMs', 'Transformers', 'Fine-tuning', 'NLP',
      'Mechanistic Interpretability', 'Feature Attribution', 'Hugging Face',
      'OpenCV', 'NumPy', 'scikit-learn',
    ],
  },
  {
    label: 'Systems & Infrastructure',
    gradient: 'linear-gradient(135deg, rgba(10,14,20,0.7) 0%, rgba(8,12,18,0.7) 100%)',
    borderColor: 'rgba(255,255,255,0.08)',
    tags: [
      'Python', 'ROS 2', 'NVIDIA Jetson', 'CUDA',
      'Edge Deployment', 'WebRTC', 'Docker', 'Linux/Unix',
      'SSH', 'UDP/TCP', 'C# .NET',
    ],
  },
  {
    label: 'Web & Software',
    gradient: 'linear-gradient(135deg, rgba(10,14,20,0.7) 0%, rgba(8,12,18,0.7) 100%)',
    borderColor: 'rgba(255,255,255,0.08)',
    tags: [
      'Angular', 'TypeScript', 'React', 'FastAPI',
      'REST APIs', 'SQL', 'PostgreSQL', 'Git',
    ],
  },
  {
    label: 'Research Methods',
    gradient: 'linear-gradient(135deg, rgba(14,10,28,0.7) 0%, rgba(10,14,20,0.7) 100%)',
    borderColor: 'rgba(120,100,220,0.1)',
    tags: [
      'Experimental Design', 'Scientific Writing', 'Bias Analysis',
      'Statistical Analysis', 'Data Visualization', 'Academic Presentation',
    ],
  },
];

const education = [
  {
    school: 'University of South Florida',
    degree: "Bachelor's Degree, Computer Science",
    period: 'Aug 2024 – May 2026',
  },
  {
    school: 'Hillsborough Community College',
    degree: 'Associate of Arts, Computer Science',
    period: 'Jan 2022 – May 2024',
  },
];

const certifications = ['UR2PhD Undergraduate Research Training Course Participant'];

// ─── Section label ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <p
        className="text-xs font-semibold tracking-[0.28em] uppercase whitespace-nowrap"
        style={{ color: '#6878b0' }}
      >
        {children}
      </p>
      <div className="flex-1 gradient-divider" />
    </div>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────

export default function ProfileContent() {
  return (
    <main className="relative z-10 pb-24" style={{ background: 'var(--bg)' }}>
      <div className="section-container">

        {/* ── About ── */}
        <section className="pt-20 pb-16">
          <SectionLabel>About</SectionLabel>
          <div
            className="card p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(16,20,38,0.55) 0%, rgba(20,14,32,0.55) 100%)',
              border: '1px solid rgba(90,110,220,0.1)',
            }}
          >
            <p className="text-base md:text-lg leading-relaxed mb-4 font-light" style={{ color: 'var(--text-secondary)' }}>
              I build and study systems at the intersection of{' '}
              <span style={{ color: 'var(--text)' }}>Computer Vision</span> and{' '}
              <span style={{ color: 'var(--text)' }}>Generative AI</span>. My thesis research tackles a deceptively
              hard problem: can a neural network tell the difference between a real photo and an AI-generated one?
            </p>
            <p className="text-base md:text-lg leading-relaxed font-light" style={{ color: 'var(--text-secondary)' }}>
              Along the way I've investigated LLM bias at scale, built real-time vision pipelines for a quadruped
              robot, and managed edge deployments on NVIDIA Jetson hardware. That mix of research depth and
              engineering experience is what I bring to{' '}
              <span style={{ color: 'var(--text)' }}>AI/ML Engineering</span>.
            </p>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="pb-16">
          <SectionLabel>Experience</SectionLabel>
          <div className="space-y-10 pl-4 timeline-line">
            {experiences.map((org) =>
              org.roles.map((role, ri) => (
                <div key={`${org.orgShort}-${ri}`} className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[21px] top-[18px] w-2.5 h-2.5 rounded-full ring-2 ring-[var(--bg)]"
                    style={{
                      background: ri === 0
                        ? 'linear-gradient(135deg, #6878b0, #9878b8)'
                        : 'var(--border-bright)',
                    }}
                  />
                  <div className="card card-hover p-5 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                      <div>
                        <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                          {role.title}
                        </p>
                        {role.supervisor && (
                          <p className="text-xs mt-0.5" style={{ color: '#7888b8' }}>
                            {role.supervisor}
                          </p>
                        )}
                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                          {org.orgShort}
                        </p>
                      </div>
                      <span className="text-xs shrink-0 mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {role.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {role.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex gap-2.5 text-sm leading-relaxed"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--text-muted)' }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="pb-16">
          <SectionLabel>Skills &amp; Stack</SectionLabel>
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="card p-5"
                style={{ background: group.gradient, border: `1px solid ${group.borderColor}` }}
              >
                <p
                  className="text-[10px] tracking-widest uppercase mb-3 font-semibold"
                  style={{ color: '#6878b0' }}
                >
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="pb-16">
          <SectionLabel>Education</SectionLabel>
          <div className="space-y-4">
            {education.map((ed) => (
              <div
                key={ed.school}
                className="card card-hover p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
              >
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                    {ed.school}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {ed.degree}
                  </p>
                </div>
                <span className="text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                  {ed.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="pb-16">
          <SectionLabel>Certifications</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span key={c} className="tag">{c}</span>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="pb-4">
          <SectionLabel>Contact</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Email', value: 'otavio.exec@gmail.com', href: 'mailto:otavio.exec@gmail.com' },
              { label: 'LinkedIn', value: '/in/rosaotavio', href: 'https://www.linkedin.com/in/rosaotavio' },
              { label: 'GitHub', value: '/otaviomrosa', href: 'https://github.com/otaviomrosa' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card card-hover p-4 flex items-center justify-between group"
              >
                <div>
                  <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: 'var(--text-muted)' }}>
                    {item.label}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.value}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  strokeWidth={1.5}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: '#7888b8' }}
                />
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
