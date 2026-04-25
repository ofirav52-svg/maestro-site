import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/producer-portrait.jpg";
import connect from "@/assets/connect.jpg";

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

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
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
      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-opacity hover:opacity-80"
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {/* Hero */}
        <Card className="bg-clay text-clay-foreground md:col-span-2 md:row-span-1 min-h-[60vh] flex flex-col justify-between">
          <div>
            <p className="text-lg sm:text-xl font-medium opacity-90">mixed by</p>
            <h1 className="mt-2 text-6xl sm:text-7xl md:text-8xl leading-[0.9]">
              alex rivera
            </h1>
          </div>
          <p className="text-sm sm:text-base opacity-80 mt-10">
            at the gift shop · downtown los angeles
          </p>
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
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {songs.map((s) => (
              <figure key={s.title} className="group">
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

        <Card className="bg-sage text-sage-foreground md:col-span-2">
          <h2 className="text-4xl sm:text-5xl">connect</h2>
          <p className="mt-6 text-lg opacity-90 max-w-xl">
            bridging the gap between the creative and technical aspects of
            making records. open for:
          </p>
          <ul className="mt-6 space-y-1.5 text-lg">
            <li>· mixing</li>
            <li>· interviews</li>
            <li>· speaking</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink href="mailto:hello@mixedbyalex.com">email</PillLink>
            <PillLink href="https://instagram.com">instagram</PillLink>
          </div>
        </Card>

        {/* Footer */}
        <Card className="bg-cream text-cream-foreground md:col-span-3 !py-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm opacity-70">© {new Date().getFullYear()} alex rivera</p>
          <p className="text-sm opacity-70">los angeles, ca</p>
        </Card>
      </div>
    </main>
  );
}
