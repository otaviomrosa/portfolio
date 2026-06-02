import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

// ─── Accent tokens ──────────────────────────────────────────────────────────
const BLUE = '#e8e8e8';
const BLUE_MID = '#909090';

// ─── Data ──────────────────────────────────────────────────────────────────

const experiences = [
  {
    org: 'USF Bellini College of AI, Cybersecurity and Computing',
    roles: [
      {
        title: 'Research Assistant — Generative Image Detection',
        supervisor: 'Prof. Utkarsh Ojha',
        period: 'Jan 2026 – Present',
        bullets: [
          'Thesis research on the "Neural Turing Test": can deep classifiers reliably distinguish real photographs from state-of-the-art synthetic images?',
          'Probing representational limits of discriminative networks via alternative image modalities; mapping where and why discriminative ability breaks down.',
          'Co-author on a paper submitted to NeurIPS.',
        ],
      },
      {
        title: 'Undergraduate Researcher — Language GRASP Lab',
        supervisor: 'Dr. Gene Kim',
        period: 'Jan 2026 – Present',
        bullets: [
          'Large-scale behavioral analysis of open-source LLMs investigating nationality-based compliance bias via neuron probing and integrated gradients.',
          'Presented "Quantifying Nationality-Based Compliance Bias in Qwen 2.5" at the 2026 AI+X Symposium.',
        ],
      },
      {
        title: 'Undergraduate Researcher — RARE Lab',
        supervisor: 'Dr. Zhao Han',
        period: 'Nov 2025 – Apr 2026',
        bullets: [
          'Built high-speed data acquisition pipelines for the Unitree Go2 quadruped robot.',
          'Engineered a synchronized Master–Slave system (Python + WebRTC) for camera-projector calibration.',
          'Managed edge deployments on NVIDIA Jetson Orin Nano across ROS 2, SSH, and UDP/TCP.',
        ],
      },
    ],
  },
  {
    org: 'ClearSet.AI',
    roles: [
      {
        title: 'Software Engineer Intern',
        supervisor: '',
        period: 'May – Jul 2025',
        bullets: [
          'Built 30+ Angular/TypeScript UI components, reducing feature dev time by ~20%.',
          'Authored 30+ SQL migration scripts across 6 zero-downtime production releases.',
          'Resolved 50+ full-stack bugs (C# .NET + Angular), cutting the backlog by 25%.',
        ],
      },
    ],
  },
  {
    org: 'Google Developer Group on Campus at USF',
    roles: [
      {
        title: 'Community Lead',
        supervisor: '',
        period: 'Jan – May 2025',
        bullets: [
          'Co-led HackUSF: 200+ participants, $3 000+ in prizes.',
          'Organized workshops with 20+ industry professionals; secured sponsorships cutting costs 40%.',
        ],
      },
    ],
  },
];

const skillGroups = [
  {
    label: 'AI / ML',
    tags: ['PyTorch', 'Computer Vision', 'Generative Models', 'Diffusion Models', 'LLMs',
           'Transformers', 'Fine-tuning', 'NLP', 'Mechanistic Interpretability',
           'Feature Attribution', 'Hugging Face', 'OpenCV', 'NumPy', 'scikit-learn'],
  },
  {
    label: 'Systems',
    tags: ['Python', 'ROS 2', 'NVIDIA Jetson', 'CUDA', 'Edge Deployment',
           'WebRTC', 'Docker', 'Linux/Unix', 'C# .NET'],
  },
  {
    label: 'Web & Data',
    tags: ['Angular', 'TypeScript', 'React', 'FastAPI', 'REST APIs', 'SQL', 'PostgreSQL', 'Git'],
  },
  {
    label: 'Research',
    tags: ['Experimental Design', 'Scientific Writing', 'Bias Analysis',
           'Statistical Analysis', 'Data Visualization'],
  },
];

const education = [
  {
    school: 'University of South Florida',
    degree: 'Master of Science, Computer Science',
    period: '2026 – 2027',
    current: true,
  },
  {
    school: 'University of South Florida',
    degree: "Bachelor's Degree, Computer Science",
    period: '2024 – 2026',
    current: false,
  },
  {
    school: 'Hillsborough Community College',
    degree: 'Associate of Arts, Computer Science',
    period: '2022 – 2024',
    current: false,
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function SectionHeading({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span
        className="text-xs tabular-nums"
        style={{ color: 'var(--text-muted)' }}
      >
        {num}
      </span>
      <span
        className="text-sm font-medium tracking-wide uppercase"
        style={{ color: BLUE_MID }}
      >
        {children}
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.07), transparent)' }}
      />
    </div>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────

export default function ProfileContent() {
  return (
    <main className="pb-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-20 pt-16">

          {/* ── Sticky sidebar ─────────────────────────────────────────────── */}
          <aside className="mb-16 lg:mb-0">
            <div className="lg:sticky lg:top-24 space-y-8">

              {/* Identity */}
              <div>
                <p className="text-lg font-semibold mb-1" style={{ color: 'var(--text)' }}>
                  Otavio Rosa
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  MS CS · USF<br />
                  Computer Vision &amp; GenAI
                </p>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                {[
                  { value: 'NeurIPS', sub: 'paper submitted' },
                  { value: '3×', sub: 'research labs' },
                  { value: "Spring '27", sub: 'graduating' },
                ].map((s) => (
                  <div key={s.sub}>
                    <p className="text-base font-semibold" style={{ color: BLUE }}>
                      {s.value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />

              {/* Links */}
              <nav className="space-y-2">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com/otaviomrosa' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rosaotavio' },
                  { icon: Mail, label: 'Email', href: 'mailto:otavio.exec@gmail.com' },
                ].map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="link-muted flex items-center gap-2 text-sm group"
                  >
                    <Icon size={13} strokeWidth={1.6} />
                    {label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-60 transition-opacity -ml-1"
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── Scrollable content ──────────────────────────────────────────── */}
          <div className="space-y-20">

            {/* About */}
            <section>
              <p className="text-base md:text-lg leading-relaxed font-light mb-4" style={{ color: 'var(--text-secondary)' }}>
                I work on{' '}
                <span style={{ color: 'var(--text)' }}>computer vision</span>,{' '}
                <span style={{ color: 'var(--text)' }}>generative AI</span>,{' '}and{' '}
                <span style={{ color: 'var(--text)' }}>synthetic media detection</span>.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-light mb-4" style={{ color: 'var(--text-secondary)' }}>
                My work has included LLM bias research, robotic vision systems, and edge AI deployment.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-light mb-4" style={{ color: 'var(--text-secondary)' }}>
                I'm looking for AI/ML Engineering roles where research depth meets production systems.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-light" style={{ color: 'var(--text-secondary)' }}>
                Previously at <span style={{ color: 'var(--text)' }}>ClearSet.AI</span>.
              </p>

            </section>

            {/* Experience */}
            <section>
              <SectionHeading num="01">Experience</SectionHeading>
              <div className="space-y-0">
                {experiences.map((org) =>
                  org.roles.map((role, ri) => (
                    <div
                      key={`${org.org}-${ri}`}
                      className="py-7"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                        <div>
                          <p className="text-base font-semibold" style={{ color: 'var(--text)' }}>
                            {role.title}
                          </p>
                          <p className="text-sm mt-0.5" style={{ color: BLUE_MID }}>
                            {role.supervisor ? `${role.supervisor} · ` : ''}{org.org}
                          </p>
                        </div>
                        <span
                          className="text-sm shrink-0"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {role.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {role.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="text-base leading-relaxed pl-3 relative"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            <span
                              className="absolute left-0 top-[9px] w-1 h-1 rounded-full"
                              style={{ background: 'var(--text-muted)' }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* Skills */}
            <section>
              <SectionHeading num="02">Skills &amp; Stack</SectionHeading>
              <div className="space-y-6">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p
                      className="text-xs tracking-wide uppercase mb-3"
                      style={{ color: 'var(--text-muted)' }}
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

            {/* Education */}
            <section>
              <SectionHeading num="03">Education</SectionHeading>
              <div className="space-y-0">
                {education.map((ed) => (
                  <div
                    key={ed.degree}
                    className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="flex items-start gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-base font-medium" style={{ color: 'var(--text)' }}>
                            {ed.school}
                          </p>
                          {ed.current && (
                            <span
                              className="text-[9px] font-semibold tracking-widest uppercase px-1.5 py-0.5 rounded"
                              style={{
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                color: BLUE,
                              }}
                            >
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                          {ed.degree}
                        </p>
                      </div>
                    </div>
                    <span
                      className="text-sm shrink-0"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {ed.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <SectionHeading num="04">Certifications</SectionHeading>
              <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                UR2PhD Undergraduate Research Training Course Participant
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
