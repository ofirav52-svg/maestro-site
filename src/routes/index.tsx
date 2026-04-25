import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/producer-portrait.jpg";
import console_ from "@/assets/console.jpg";
import podcast from "@/assets/podcast.jpg";
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

const values = [
  "intentionality",
  "altruism",
  "consistency",
  "transparency",
  "community",
  "craft",
];

const mixesA = ["billie eilish", "harry styles", "the kid laroi", "summer walker", "omar apollo"];
const mixesB = ["sza", "finneas", "raye", "khalid", "camila cabello"];

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

        {/* Bio + values */}
        <Card className="bg-cream text-cream-foreground md:col-span-2 flex items-end">
          <p className="text-2xl sm:text-3xl md:text-4xl leading-tight font-display">
            an independent mix engineer crafting records with intention, clarity,
            and a love for the people behind the songs.
          </p>
        </Card>

        <Card className="bg-sage text-sage-foreground">
          <h2 className="text-4xl sm:text-5xl mb-6">values</h2>
          <ul className="space-y-1.5 text-lg">
            {values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </Card>

        {/* Mixes */}
        <ImageCard src={console_} alt="Analog mixing console" />

        <Card className="bg-cream text-cream-foreground md:col-span-2">
          <div className="flex items-baseline justify-between flex-wrap gap-4">
            <h2 className="text-4xl sm:text-5xl">mixes</h2>
            <p className="text-sm opacity-70">multiple grammy nominated records</p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1.5 text-lg">
            {[...mixesA, ...mixesB].map((m) => (
              <div key={m} className="flex items-center gap-3 py-1 border-b border-current/10">
                <span className="opacity-40 text-sm tabular-nums">·</span>
                <span>{m}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink href="#discography">open discography</PillLink>
            <PillLink href="#spotify">listen on spotify</PillLink>
          </div>
        </Card>

        {/* Podcasting */}
        <Card className="bg-clay text-clay-foreground md:col-span-2">
          <h2 className="text-4xl sm:text-5xl">podcasting</h2>
          <p className="mt-6 text-lg opacity-90 max-w-xl">
            providing high-quality insight to the pro audio industry through
            long-form conversations with artists, engineers, and producers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink href="#live">live with alex</PillLink>
            <PillLink href="#conversations">conversations at</PillLink>
          </div>
        </Card>

        <ImageCard src={podcast} alt="Podcast recording session" />

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
