import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

/**
 * Client Intake Form
 * --------------------------------------------------------------
 * Design concept: the form is framed as a short "book" the client
 * is opening for the first time — each section is a numbered
 * chapter, and a spine of progress on the left fills in as they
 * move through their own story. No external UI kit required；
 * everything below is self-contained (fonts, layout, styling).
 */

const SECTIONS = [
  { id: "personal", chapter: "01", title: "Personal information" },
  { id: "season", chapter: "02", title: "Your current season" },
  { id: "wellness", chapter: "03", title: "Emotional & mental wellness" },
  { id: "fitness", chapter: "04", title: "Fitness & nutrition" },
  { id: "support", chapter: "05", title: "Support preferences" },
  { id: "commitment", chapter: "06", title: "Commitment" },
] as const;

export default function ClientIntakeForm() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);
  const [submitting, setSubmitting] = useState(false);

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentFormElement = event.currentTarget;
    const formData = new FormData(currentFormElement);

    formData.append("access_key", "0e96f1ee-8a50-404c-baab-4973d5e0dbff");

    try {
      setSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Sent",
          text: "Your intake form has been received. Thank you for sharing.",
          confirmButtonColor: "#5B7553",
        });
        setForm({});
        currentFormElement.reset();
        setActiveSection(SECTIONS[0].id);
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Your form could not be sent. Please try again.",
          confirmButtonColor: "#5B7553",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Connection error",
        text: "Check your connection and try again.",
        confirmButtonColor: "#5B7553",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Track which chapter is in view to drive the spine + active nav state
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const progressPercent = ((activeIndex + 1) / SECTIONS.length) * 100;

  return (
    <div className="intake-root">
      <style>{CSS}</style>

      <div className="intake-shell">
        {/* SPINE / CHAPTER NAV */}
        <nav className="intake-toc" aria-label="Form sections">
          <div className="toc-mark">Client Intake</div>
          <div className="toc-line">
            <div className="toc-line-fill" style={{ height: `${progressPercent}%` }} />
          </div>
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id} className={activeSection === s.id ? "is-active" : ""}>
                <a href={`#${s.id}`}>
                  <span className="toc-chapter">{s.chapter}</span>
                  <span className="toc-title">{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
          <p className="toc-note">Confidential · held with care</p>
        </nav>

        {/* MAIN */}
        <div className="intake-main">
          <header className="intake-hero">
            <span className="hero-eyebrow">Before we begin</span>
            <h1>Let&rsquo;s get to know your story.</h1>
            <p>
              Take your time here — there&rsquo;s no rush and no wrong answers.
              Every question exists to help me understand you a little better
              before we sit down together.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="intake-form">
            {/* Honeypot / form label field, kept hidden as in the original */}
            <div style={{ display: "none" }}>
              <Input name="Client Intake Form" onChange={handleChange} />
            </div>

            <Chapter
              id="personal"
              chapter="01"
              title="Personal information"
              refCb={(el) => (sectionRefs.current.personal = el)}
            >
              <Row>
                <Input label="Full name" name="fullName" onChange={handleChange} required />
                <Input label="Email address" name="email" type="email" onChange={handleChange} />
              </Row>
              <Row>
                <Input label="Phone number" name="phone" onChange={handleChange} required />
                <Input label="Pronouns" name="pronouns" onChange={handleChange} />
              </Row>
              <Input label="How did you hear about me?" name="referral" onChange={handleChange} />
            </Chapter>

            <Chapter
              id="season"
              chapter="02"
              title="Your current season"
              refCb={(el) => (sectionRefs.current.season = el)}
            >
              <Textarea label="What brought you here at this time?" name="reason" onChange={handleChange} />
              <Textarea label="Top three challenges you're facing" name="challenges" onChange={handleChange} />
              <Textarea label="How is this affecting your life?" name="impact" onChange={handleChange} />
              <Textarea label="What are you hoping will change?" name="goals" onChange={handleChange} />
            </Chapter>

            <Chapter
              id="wellness"
              chapter="03"
              title="Emotional & mental wellness"
              refCb={(el) => (sectionRefs.current.wellness = el)}
            >
              <Textarea label="Have you done coaching or therapy before?" name="therapyHistory" onChange={handleChange} />
              <Textarea label="What does your current support system look like?" name="currentSupport" onChange={handleChange} />
              <Textarea label="Any emotional patterns or triggers worth knowing?" name="triggers" onChange={handleChange} />
              <Textarea label="How do you tend to respond under stress?" name="stressResponse" onChange={handleChange} />
            </Chapter>

            <Chapter
              id="fitness"
              chapter="04"
              title="Fitness & nutrition"
              subtitle="Optional"
              refCb={(el) => (sectionRefs.current.fitness = el)}
            >
              <Textarea label="Fitness goals" name="fitnessGoals" onChange={handleChange} />
              <Textarea label="Nutrition goals" name="nutritionGoals" onChange={handleChange} />
              <Textarea label="Injuries or limitations to be aware of" name="injuries" onChange={handleChange} />
            </Chapter>

            <Chapter
              id="support"
              chapter="05"
              title="Support preferences"
              refCb={(el) => (sectionRefs.current.support = el)}
            >
              <Textarea label="What type of support feels best for you?" name="supportStyle" onChange={handleChange} />
              <Textarea label="What makes you feel safe and supported?" name="safetyNeeds" onChange={handleChange} />
            </Chapter>

            <Chapter
              id="commitment"
              chapter="06"
              title="Commitment"
              refCb={(el) => (sectionRefs.current.commitment = el)}
            >
              <Textarea label="Are you ready to commit to your growth?" name="commitment" onChange={handleChange} />
              <Textarea label="Anything else you'd like me to know?" name="extra" onChange={handleChange} />
            </Chapter>

            <div className="intake-submit">
              <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? "Sending…" : "Submit intake"}
              </button>
              <p>Your responses are confidential and held with care.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ---------------- UI BUILDING BLOCKS ---------------- */

function Chapter({
  id,
  chapter,
  title,
  subtitle,
  children,
  refCb,
}: {
  id: string;
  chapter: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  refCb: (el: HTMLDivElement | null) => void;
}) {
  return (
    <section id={id} ref={refCb} className="chapter">
      <div className="chapter-head">
        <span className="chapter-number">{chapter}</span>
        <div>
          <h2>{title}</h2>
          {subtitle && <span className="chapter-subtitle">{subtitle}</span>}
        </div>
      </div>
      <div className="chapter-body">{children}</div>
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="field-row">{children}</div>;
}

function Input({ label, ...props }: any) {
  return (
    <label className="field">
      {label && <span className="field-label">{label}</span>}
      <input className="field-input" {...props} />
    </label>
  );
}

function Textarea({ label, ...props }: any) {
  return (
    <label className="field">
      {label && <span className="field-label">{label}</span>}
      <textarea className="field-textarea" rows={3} {...props} />
    </label>
  );
}

/* ---------------- STYLES ---------------- */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

.intake-root {
  --paper: #EFEEE6;
  --surface: #FFFFFF;
  --ink: #202A1F;
  --ink-soft: #5B6355;
  --moss: #5B7553;
  --moss-deep: #3F5636;
  --clay: #B98356;
  --line: #DCD8C8;
  --focus: #7C9B6E;

  background: var(--paper);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  padding: 48px 24px 96px;
}

.intake-shell {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 64px;
  align-items: start;
}

/* ---- TOC / spine ---- */
.intake-toc {
  position: sticky;
  top: 48px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.toc-mark {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.toc-line {
  position: relative;
  width: 2px;
  background: var(--line);
  border-radius: 2px;
  align-self: flex-start;
  height: 0;
}

.intake-toc ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-left: 2px solid var(--line);
}

.intake-toc li a {
  display: flex;
  gap: 10px;
  align-items: baseline;
  text-decoration: none;
  color: var(--ink-soft);
  padding: 8px 0 8px 16px;
  margin-left: -2px;
  border-left: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.intake-toc li.is-active a {
  color: var(--ink);
  border-left: 2px solid var(--moss);
}

.toc-chapter {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: var(--clay);
  min-width: 18px;
}

.toc-title {
  font-size: 13px;
  line-height: 1.3;
}

.toc-note {
  font-size: 12px;
  color: var(--ink-soft);
  margin: 8px 0 0 16px;
}

/* ---- Hero ---- */
.intake-hero {
  max-width: 620px;
  margin-bottom: 56px;
}

.hero-eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--clay);
}

.intake-hero h1 {
  font-family: 'Fraunces', serif;
  font-weight: 500;
  font-size: clamp(32px, 4vw, 44px);
  line-height: 1.15;
  margin: 12px 0 16px;
  color: var(--ink);
}

.intake-hero p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-soft);
}

/* ---- Chapters ---- */
.chapter {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 40px clamp(20px, 4vw, 48px);
  margin-bottom: 24px;
  scroll-margin-top: 32px;
}

.chapter-head {
  display: flex;
  gap: 18px;
  align-items: baseline;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line);
}

.chapter-number {
  font-family: 'Fraunces', serif;
  font-size: 28px;
  font-weight: 500;
  color: var(--clay);
  line-height: 1;
}

.chapter-head h2 {
  font-family: 'Fraunces', serif;
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  color: var(--ink);
}

.chapter-subtitle {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
}

.chapter-body {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

/* ---- Fields ---- */
.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  font-size: 13px;
  color: var(--ink-soft);
  line-height: 1.4;
}

.field-input,
.field-textarea {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: var(--ink);
  background: transparent;
  border: none;
  border-bottom: 1.5px solid var(--line);
  padding: 8px 2px;
  transition: border-color 0.2s ease, background 0.2s ease;
  resize: vertical;
}

.field-textarea {
  border: 1.5px solid var(--line);
  border-radius: 10px;
  padding: 12px 14px;
  background: rgba(91, 117, 83, 0.02);
}

.field-input:focus,
.field-textarea:focus {
  outline: none;
  border-color: var(--focus);
  background: rgba(124, 155, 110, 0.06);
}

/* ---- Submit ---- */
.intake-submit {
  text-align: center;
  padding: 24px 0 8px;
}

.submit-btn {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: var(--moss);
  border: none;
  padding: 15px 42px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
}

.submit-btn:hover:not(:disabled) {
  background: var(--moss-deep);
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.intake-submit p {
  margin-top: 14px;
  font-size: 13px;
  color: var(--ink-soft);
}

/* ---- Responsive ---- */
@media (max-width: 860px) {
  .intake-shell {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .intake-toc {
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--paper);
    padding: 12px 0;
    flex-direction: row;
    align-items: center;
    overflow-x: auto;
  }

  .toc-mark,
  .toc-note,
  .toc-title {
    display: none;
  }

  .intake-toc ol {
    flex-direction: row;
    border-left: none;
    border-bottom: 2px solid var(--line);
    gap: 0;
  }

  .intake-toc li a {
    border-left: none;
    border-bottom: 2px solid transparent;
    padding: 6px 14px;
  }

  .intake-toc li.is-active a {
    border-left: none;
    border-bottom: 2px solid var(--moss);
  }

  .field-row {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
`;