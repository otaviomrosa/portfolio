import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import OrcidIcon from './OrcidIcon';

const HIGHLIGHT = 'var(--text)';
const LABEL = 'var(--text-muted)';

// ─── Data ──────────────────────────────────────────────────────────────────

type Role = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

const experiences: Role[] = [
  {
    title: 'Founder',
    org: "Please Don't Scroll",
    period: 'Jun 2026 – Present',
    bullets: [
      'Designed, built and shipped a Manifest V3 Chrome extension published to the Chrome Web Store, a web dashboard and a Postgres backend, sharing one dependency-free JavaScript core so auth, sync and URL-matching logic live in a single place.',
      "Wrote 138 zero-dependency unit tests on Node's built-in runner, covering URL-matching rules and the exact shape of every REST call via a mocked fetch.",
      'Automated extension releases with a packaging script that strips dev-only origins, prunes unreferenced files and fails the build on any broken reference, cutting the shipped bundle from 2.45 MB to 83 KB.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    org: 'ClearSet.AI',
    period: 'May 2025 – Dec 2025',
    bullets: [
      'Built 30+ reusable Angular/TypeScript UI components (e.g., data tables, form builders, dashboards) that became the shared base for 6+ product features.',
      'Fixed 50+ bugs across the full application stack, from the C# .NET backend to the Angular frontend, implementing unit testing to improve system reliability and contributing to a 15% decrease in critical support tickets.',
      'Wrote the SQL migrations for 4 feature rollouts and 10+ production data fixes, all deployed with zero downtime across 20,000+ user records.',
    ],
  },
];

const research: Role[] = [
  {
    title: 'Graduate AI & CV Researcher',
    org: 'Dr. Utkarsh Ojha · University of South Florida',
    period: 'Jan 2026 – Present',
    bullets: [
      'Co-first author, ICLR 2027 submission: showed real and AI-generated images remain separable under extreme abstraction (edge maps, heavy blur/downsampling) across 10 datasets, suggesting detectors rely on global composition rather than local artifacts.',
      "Trained 400+ binary classifiers across 9 architectures (ResNet, DenseNet, SRNet, ViT, and 5 CNN variants) on CelebA, FFHQ, ImageNet, and generated datasets, running 1,000+ GPU-hours of SLURM jobs on USF's HPC cluster.",
    ],
  },
  {
    title: 'Undergraduate CV & Robotics Researcher',
    org: 'RARE Lab · University of South Florida',
    period: 'Nov 2025 – Apr 2026',
    bullets: [
      'Built real-time projector-camera compensation for the Unitree Go2 quadruped (OpenCV, PyTorch, ROS2), reducing projection distortion on irregular surfaces by ~70% at 24 FPS for navigation in simulated disaster environments.',
      "Set up an Ubuntu 20.04 VM on Apple Silicon that resolved ROS2 networking issues with the robot's peripherals.",
    ],
  },
];

const organizations: Role[] = [
  {
    title: 'Community Chair',
    org: 'Google Developer Group',
    period: 'Jan 2025 – May 2025',
    bullets: [
      'Led planning for HackUSF 2025 (300+ participants), managing 10+ organizers, timeline and logistics, and budget of $5,000.',
    ],
  },
];

const skillGroups = [
  {
    label: 'Languages',
    tags: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'C/C++', 'C#', 'SQL'],
  },
  {
    label: 'Web',
    tags: ['Angular', 'React', 'Node.js', '.NET', 'REST APIs'],
  },
  {
    label: 'AI / ML',
    tags: ['PyTorch', 'OpenCV', 'NumPy', 'scikit-learn', 'Matplotlib'],
  },
  {
    label: 'Infra & Tools',
    tags: ['Git', 'Linux', 'PostgreSQL', 'SLURM/HPC', 'ROS2', 'Chrome Extensions (MV3)', 'Docker'],
  },
  {
    label: 'Spoken Languages',
    tags: ['English (Fluent)', 'Portuguese (Native)', 'Spanish (Advanced)', 'Japanese (Lower-intermediate)'],
  },
];

const education = [
  {
    school: 'University of South Florida',
    degree: 'M.S., Computer Science',
    details: ['GPA: 4.0/4.0'],
    period: 'May 2027',
    current: true,
  },
  {
    school: 'University of South Florida',
    degree: 'B.S., Computer Science',
    details: ['GPA: 3.9/4.0', "Presidential Honors Scholarship, Honors Medallion, 8x Dean's List"],
    period: 'May 2026',
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
        style={{ color: LABEL }}
      >
        {children}
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(to right, var(--divider), transparent)' }}
      />
    </div>
  );
}

function RoleList({ roles }: { roles: Role[] }) {
  return (
    <div className="space-y-0">
      {roles.map((role) => (
        <div
          key={`${role.org}-${role.title}`}
          className="py-7"
          style={{ borderBottom: '1px solid var(--divider)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
            <div>
              <p className="text-base font-semibold" style={{ color: 'var(--text)' }}>
                {role.title}
              </p>
              <p className="text-sm mt-0.5" style={{ color: LABEL }}>
                {role.org}
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
      ))}
    </div>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────

export default function ProfileContent() {
  return (
    <main className="pb-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-20 pt-12">

          {/* ── Sticky sidebar ─────────────────────────────────────────────── */}
          <aside className="mb-16 lg:mb-0">
            <div className="lg:sticky lg:top-24 space-y-8">

              {/* Stats */}
              <div className="space-y-3">
                {[
                  { value: 'ICLR 2027', sub: 'co-first author submission' },
                  { value: '4.0 GPA', sub: 'M.S. Computer Science' },
                  { value: "Spring '27", sub: 'graduating' },
                ].map((s) => (
                  <div key={s.sub}>
                    <p className="text-base font-semibold" style={{ color: HIGHLIGHT }}>
                      {s.value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: 'var(--divider)' }} />

              {/* Links */}
              <nav className="space-y-2">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com/otaviomrosa', color: 'var(--icon-github)' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rosaotavio', color: 'var(--icon-linkedin)' },
                  { icon: Mail, label: 'Email', href: 'mailto:otavio.exec@gmail.com', color: 'var(--icon-email)' },
                  { icon: OrcidIcon, label: 'ORCID', href: 'https://orcid.org/0009-0000-2002-8375', color: 'var(--icon-orcid)' },
                ].map(({ icon: Icon, label, href, color }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="link-muted flex items-center gap-2 text-sm group"
                  >
                    <span style={{ color }} className="flex items-center">
                      <Icon size={15} strokeWidth={1.6} />
                    </span>
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
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                I work on{' '}
                <span style={{ color: 'var(--text)' }}>computer vision</span>,{' '}
                <span style={{ color: 'var(--text)' }}>generative AI</span>,{' '}and{' '}
                <span style={{ color: 'var(--text)' }}>synthetic media detection</span>.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                My work has included AI-generated image detection, robotic vision systems, and shipping full-stack products.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                I'm looking for AI/ML Engineering roles where research depth meets production systems.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Founder of <span style={{ color: 'var(--text)' }}>Please Don't Scroll</span>, previously at <span style={{ color: 'var(--text)' }}>ClearSet.AI</span>.
              </p>

            </section>

            {/* Experience */}
            <section>
              <SectionHeading num="01">Experience</SectionHeading>
              <RoleList roles={experiences} />
            </section>

            {/* Research */}
            <section>
              <SectionHeading num="02">Research</SectionHeading>
              <RoleList roles={research} />
            </section>

            {/* Skills */}
            <section>
              <SectionHeading num="03">Skills &amp; Stack</SectionHeading>
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
              <SectionHeading num="04">Education</SectionHeading>
              <div className="space-y-0">
                {education.map((ed) => (
                  <div
                    key={ed.degree}
                    className="py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1"
                    style={{ borderBottom: '1px solid var(--divider)' }}
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
                                background: 'var(--divider)',
                                border: '1px solid var(--divider-bright)',
                                color: HIGHLIGHT,
                              }}
                            >
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                          {ed.degree}
                        </p>
                        {ed.details.map((d) => (
                          <p key={d} className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                            {d}
                          </p>
                        ))}
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

            {/* Organizations */}
            <section>
              <SectionHeading num="05">Organizations</SectionHeading>
              <RoleList roles={organizations} />
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
