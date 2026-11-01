import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portrait from "@/assets/producer-portrait.jpg";
import connect from "@/assets/connect.jpg";
import filmVibe from "@/assets/film-vibe.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const CONTACT_EMAIL = "hello@mixedbyalex.com";
const WHATSAPP_NUMBER = "15551234567"; // update with real number (digits only, country code first)
const INSTAGRAM_HANDLE = "mixedbyalex"; // update with real handle

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mixed by alex rivera — mix engineer, los angeles" },
      {
        name: "description",
        content:
          "alex rivera is an independent mix engineer in los angeles, crafting records with intention, clarity, and warmth.",
      },
      { property: "og:title", content: "mixed by alex rivera" },
      {
        property: "og:description",
        content: "mix engineer based in los angeles. intentional, transparent, warm.",
      },
    ],
  }),
  component: Index,
});

const songs = [
  { title: "song title one", year: "2024" },
  { title: "song title two", year: "2024" },
  { title: "song title three", year: "2023" },
  { title: "song title four", year: "2023" },
  { title: "song title five", year: "2023" },
  { title: "song title six", year: "2022" },
];

const testimonials = [
  {
    quote:
      "alex made our record sound exactly like the version i'd been hearing in my head for years. patient, intuitive, and seriously talented.",
    name: "maya chen",
    role: "artist · 'paper hearts'",
  },
  {
    quote:
      "working with alex felt like a real collaboration. every note in the mix had intention. the band has never sounded better.",
    name: "daniel ortiz",
    role: "producer · sundown records",
  },
  {
    quote:
      "warm, transparent, and full of life. our single jumped out of every speaker we tested it on.",
    name: "sasha lin",
    role: "artist · 'midnight bloom'",
  },
  {
    quote:
      "incredible turnaround and even better mixes. alex is now the only person i trust with our masters.",
    name: "jordan reeves",
    role: "label a&r · little wave",
  },
  {
    quote:
      "thoughtful, fast, and kind. the kind of engineer you want to make ten more records with.",
    name: "ivy delacroix",
    role: "songwriter",
  },
  {
    quote:
      "alex elevated the project beyond what we thought was possible. our streams doubled in the first month.",
    name: "marcus webb",
    role: "artist · 'open road'",
  },
];

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <figure className="flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[460px] rounded-[var(--radius)] bg-cream/60 text-cream-foreground p-8 sm:p-10 mx-3 flex flex-col justify-between min-h-[260px]">
      <blockquote className="text-lg sm:text-xl leading-snug font-display">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm">
        <div className="font-semibold">{name}</div>
        <div className="opacity-60">{role}</div>
      </figcaption>
    </figure>
  );
}

function Card({
  className = "",
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-[var(--radius)] p-8 sm:p-10 md:p-12 ${className}`}
    >
      {children}
    </div>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] aspect-[3/4] md:aspect-auto md:h-full">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        width={896}
        height={1216}
      />
    </div>
  );
}

function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-opacity hover:opacity-80"
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject || "new inquiry from mixedbyalex.com",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const whatsappText = encodeURIComponent(
    "hi alex — i'd love to talk about a mix project.",
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  return (
    <div className="mt-8 space-y-4">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-lg font-bold text-cream transition-opacity hover:opacity-80"
      >
        message on whatsapp <span aria-hidden>→</span>
      </a>

      <div className="flex flex-nowrap items-center gap-2 pt-2">
        <button
          type="button"
          onClick={() => setShowEmailForm((v) => !v)}
          aria-expanded={showEmailForm}
          className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-ink/30 px-3 py-2 text-xs font-medium text-sage-foreground transition-colors hover:bg-ink/5"
        >
          {showEmailForm ? "hide email form" : "send an email"}{" "}
          <span aria-hidden>{showEmailForm ? "↑" : "↓"}</span>
        </button>
        <a
          href={`https://ig.me/m/${INSTAGRAM_HANDLE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-ink/30 px-3 py-2 text-xs font-medium text-sage-foreground transition-colors hover:bg-ink/5"
        >
          dm on instagram <span aria-hidden>→</span>
        </a>
      </div>

      {showEmailForm && (
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm opacity-80">name</Label>
              <Input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-cream/40 border-ink/20 text-sage-foreground placeholder:text-sage-foreground/50"
                placeholder="your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm opacity-80">email</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-cream/40 border-ink/20 text-sage-foreground placeholder:text-sage-foreground/50"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm opacity-80">subject</Label>
            <Input
              id="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-cream/40 border-ink/20 text-sage-foreground placeholder:text-sage-foreground/50"
              placeholder="mixing inquiry"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm opacity-80">message</Label>
            <Textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-cream/40 border-ink/20 text-sage-foreground placeholder:text-sage-foreground/50 min-h-[120px]"
              placeholder="tell me a little about the project..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-opacity hover:opacity-80"
          >
            send email <span aria-hidden>→</span>
          </button>
        </form>
      )}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {/* Hero */}
        <Card className="bg-clay text-clay-foreground md:col-span-2 md:row-span-1 flex flex-col justify-end">
          <div>
            <p className="text-lg sm:text-xl font-medium opacity-90">Prod by</p>
            <h1
              className="mt-2 font-fresh font-semibold tracking-tight leading-[0.95] whitespace-nowrap"
              style={{ fontSize: "clamp(2.75rem, 8.5vw, 7.5rem)" }}
            >
              Ofir Avni
            </h1>
          </div>
        </Card>

        <ImageCard src={portrait} alt="Portrait of alex rivera in the studio" />

        {/* Bio */}
        <Card className="bg-cream text-cream-foreground md:col-span-3 flex items-end">
          <p className="text-2xl sm:text-3xl md:text-4xl leading-tight font-display">
            an independent mix engineer crafting records with intention, clarity,
            and a love for the people behind the songs.
          </p>
        </Card>

        {/* Selected works */}
        <Card className="bg-sage text-sage-foreground md:col-span-3">
          <div className="flex items-baseline justify-between flex-wrap gap-4">
            <h2 className="text-4xl sm:text-5xl">selected works</h2>
            <p className="text-sm opacity-70">a few records i've made</p>
          </div>
          <div className="mt-8 flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory -mx-2 px-2 pb-2">
            {songs.map((s) => (
              <figure key={s.title} className="group flex-shrink-0 w-[75%] sm:w-[45%] md:w-[32%] snap-start">
                <div className="aspect-square overflow-hidden rounded-[var(--radius)] bg-current/10 flex items-center justify-center">
                  <span className="text-xs opacity-40 uppercase tracking-wider">artwork</span>
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-2">
                  <span className="text-base">{s.title}</span>
                  <span className="text-sm opacity-60 tabular-nums">{s.year}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Card>

        {/* Connect */}
        <ImageCard src={connect} alt="Studio monitors and notes" />

        <Card id="connect" className="bg-sage text-sage-foreground md:col-span-2 scroll-mt-4">
          <h2 className="text-4xl sm:text-5xl">connect</h2>
          <p className="mt-6 text-lg opacity-90 max-w-xl">
            bridging the gap between the creative and technical aspects of
            making records.
          </p>
          <ContactSection />
        </Card>

        {/* Client results */}
        <Card className="bg-clay text-clay-foreground md:col-span-3 !px-0 sm:!px-0 md:!px-0 overflow-hidden">
          <div className="px-8 sm:px-10 md:px-12 flex items-baseline justify-between flex-wrap gap-4">
            <h2 className="text-4xl sm:text-5xl">client results</h2>
            <p className="text-sm opacity-70">words from the people i've worked with</p>
          </div>

          <div className="mt-10 marquee-mask">
            <div className="flex w-max animate-marquee">
              {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={`row1-${i}`} {...t} />
              ))}
            </div>
          </div>

          <div className="mt-4 marquee-mask">
            <div className="flex w-max animate-marquee-slow" style={{ animationDirection: "reverse" }}>
              {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
                <TestimonialCard key={`row2-${i}`} {...t} />
              ))}
            </div>
          </div>
        </Card>

        {/* Film vibe image */}
        <ImageCard src={filmVibe} alt="Vintage film camera with photo prints and film strips on a wooden desk" />

        {/* FAQ */}
        <Card className="bg-cream text-cream-foreground md:col-span-2">
          <div className="flex items-baseline justify-between flex-wrap gap-4">
            <h2 className="text-4xl sm:text-5xl">got questions?</h2>
            <p className="text-sm opacity-70">a few things people often ask</p>
          </div>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {[
              {
                q: "do you offer revisions?",
                a: "yes — every mix includes two rounds of revisions so we can dial things in until it feels right. additional rounds are always available if needed.",
              },
              {
                q: "what do i get with delivery?",
                a: "you'll receive your final mix in 24-bit wav, an mp3 reference, instrumental and a cappella versions, and stems on request.",
              },
              {
                q: "how long does a project take?",
                a: "typical turnaround is 5–7 business days from the moment i receive your session. rush options are available depending on schedule.",
              },
              {
                q: "what genres do you work in?",
                a: "i mix across indie, alternative, pop, r&b, folk, and electronic — anything where the song is at the center.",
              },
              {
                q: "how does the process work?",
                a: "send over your session and references, i mix and share a first pass, we go through revisions together, then i deliver finals ready for mastering.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-ink/15 last:border-b-0"
              >
                <AccordionTrigger className="text-lg sm:text-xl font-display text-left hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base opacity-80 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Let's talk music CTA */}
        <div className="md:col-span-3 flex justify-center">
          <a
            href="#connect"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-medium text-cream transition-opacity hover:opacity-80"
          >
            let's talk music <span aria-hidden>→</span>
          </a>
        </div>

        {/* Footer */}
        <Card className="bg-cream text-cream-foreground md:col-span-3 !py-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm opacity-70">© {new Date().getFullYear()} alex rivera</p>
          <p className="text-sm opacity-70">los angeles, ca</p>
        </Card>
      </div>
    </main>
  );
}
