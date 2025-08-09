'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, MessageCircle } from 'lucide-react';

const AVATAR_URL = '/profile.jpg';

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-base sm:text-lg leading-relaxed text-neutral-700"
    >
      {children}
    </motion.div>
  </section>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-2xl border border-neutral-200 px-3 py-1 text-sm text-neutral-700 mr-2 mb-2">
    {children}
  </span>
);

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = {
    tgChannel: 'https://t.me/karpovdmitry',
    tgDM: 'https://t.me/karpov_dmitriy',
    linkedin: 'https://www.linkedin.com/in/karpovdmitrii/',
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-200/70 bg-white/60">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
          <a href="#top" className="font-semibold tracking-tight">Dmitry Karpov</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a className="hover:opacity-60" href="#about">About</a>
            <a className="hover:opacity-60" href="#experience">Experience</a>
            <a className="hover:opacity-60" href="#highlights">Highlights</a>
            <a className="hover:opacity-60" href="#contact">Contact</a>
          </nav>
          <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
            <svg width="22" height="22" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden border-t border-neutral-200 bg-white">
            <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-3 text-sm">
              <a className="hover:opacity-60" href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a className="hover:opacity-60" href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a className="hover:opacity-60" href="#highlights" onClick={() => setMenuOpen(false)}>Highlights</a>
              <a className="hover:opacity-60" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="pb-24">
        <section className="w-full max-w-5xl mx-auto px-6 sm:px-8 pt-16 sm:pt-28">
          <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight mb-4">
                Product leader in TravelTech
              </h1>
              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
                I design, launch and scale digital products that people love. Currently leading product streams in <span className="font-medium">Avito Travel</span> (short‑term rentals): seller & buyer funnels, personalization & search, monetization, and B2B corporate travel services.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={links.tgDM} className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm">
                  <Send className="w-4 h-4"/> Contact on Telegram
                </a>
                <a href={links.linkedin} className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 px-4 py-2 text-sm">
                  <Linkedin className="w-4 h-4"/> LinkedIn
                </a>
                <a href={links.tgChannel} className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 px-4 py-2 text-sm">
                  <MessageCircle className="w-4 h-4"/> TG Channel
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex justify-center sm:justify-end">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-neutral-200">
                <img src={AVATAR_URL} alt="Dmitry Karpov" className="w-full h-full object-cover"/>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="about" title="About">
          <p>
            8+ years in product and growth. Built and led teams up to 40 people, owned P&L (>$100M budgets), shipped from 0→1 and scaled existing products. Before Avito, I was a Unit Lead at <span className="font-medium">Skyeng</span> (adult English), where we redesigned learning experience beyond 1‑on‑1 lessons. I combine strategic thinking, analytics and hands‑on delivery.
          </p>
          <div className="mt-6 flex flex-wrap">
            <Tag>Product Strategy & Vision</Tag>
            <Tag>Experimentation & A/B</Tag>
            <Tag>Search & Personalization</Tag>
            <Tag>Monetization</Tag>
            <Tag>Team Building</Tag>
          </div>
        </Section>

        <Section id="experience" title="Recent experience">
          <div className="space-y-8">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">Avito Travel — Unit Lead / Principal PM</h3>
                <span className="text-sm text-neutral-500">2023 — present</span>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Lead STR (short‑term rentals) product streams: seller funnel & monetization, buyer funnel, personalization & search ranking, B2B corporate travel API.</li>
                <li>Owned OKRs across streams; improved conversion across listing & booking funnels; focused on content quality and liquidity growth.</li>
                <li>Built the seller playbook platform: onboarding, pricing guidance, quality rules, and analytics to help hosts run their business.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">Skyeng — Product Unit Lead (Adult English)</h3>
                <span className="text-sm text-neutral-500">2021 — 2023</span>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Led end‑to‑end product for adult segment; launched complex learning formats and improved engagement & monetization.</li>
                <li>Managed multi‑disciplinary team; built data‑driven roadmap and experimentation culture.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">Earlier</h3>
                <span className="text-sm text-neutral-500">—</span>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Telecom innovation (Beeline): won accelerator, launched a startup inside the company.</li>
                <li>Hackathons: prize at the world’s largest hackathon; >150 mentoring sessions.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="highlights" title="Selected highlights">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h4 className="font-medium mb-2">Platforms & funnels</h4>
              <p>Built scalable rules & guidance platform for hosts; improved 0→first booking activation and content quality across listings.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h4 className="font-medium mb-2">Search & ranking</h4>
              <p>Shipped ranking & personalization improvements to lift discovery and DAU→booking conversion.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h4 className="font-medium mb-2">Monetization</h4>
              <p>Ownership of tariffs & promotion mechanics; focus on long‑term liquidity and sustainable take‑rate.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h4 className="font-medium mb-2">Leadership</h4>
              <p>Grew and mentored product managers; aligned stakeholders, ran OKR cycles, and presented strategy to leadership.</p>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact & links">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a href={links.tgDM} className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm">
              <Send className="w-4 h-4"/> Message on Telegram
            </a>
            <a href={links.linkedin} className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 px-4 py-2 text-sm">
              <Linkedin className="w-4 h-4"/> LinkedIn profile
            </a>
            <a href={links.tgChannel} className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 px-4 py-2 text-sm">
              <MessageCircle className="w-4 h-4"/> Telegram channel @karpovdmitry
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-500">Prefer email? Ping me on Telegram for details.</p>
        </Section>

        <footer className="w-full max-w-5xl mx-auto px-6 sm:px-8 pb-16">
          <div className="border-t border-neutral-200 pt-6 text-sm text-neutral-500 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Dmitry Karpov</span>
            <span>Designed with a clean, Apple‑inspired aesthetic</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
