export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-900/60 bg-[#0b0b0b]/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-md bg-gradient-to-br from-white to-zinc-300"></div>
            <span className="text-lg font-semibold tracking-tight">Adaptar</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <a className="hover:text-zinc-200 transition" href="#features">
              Features
            </a>
            <a className="hover:text-zinc-200 transition" href="#showcase">
              Showcase
            </a>
            <a className="hover:text-zinc-200 transition" href="#pricing">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex h-9 items-center rounded-md border border-zinc-800 px-3 text-sm text-zinc-300 hover:bg-zinc-900">
              Docs
            </button>
            <button className="inline-flex h-9 items-center rounded-md bg-white px-4 text-sm font-medium text-black hover:bg-zinc-200">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_55%)]"></div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Design, build, and launch with
                <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  {" "}
                  Adaptar
                </span>
              </h1>
              <p className="mt-5 text-zinc-400 text-base md:text-lg">
                Describe your vision once. Get production‑ready React, Tailwind,
                and accessible UI in seconds.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button className="inline-flex h-11 items-center rounded-md bg-white px-5 text-sm font-medium text-black hover:bg-zinc-200">
                  Start for free
                </button>
                <button className="inline-flex h-11 items-center rounded-md border border-zinc-800 px-5 text-sm text-zinc-300 hover:bg-zinc-900">
                  Watch demo
                </button>
              </div>
              <div className="mt-8 text-xs text-zinc-500">
                No credit card required
              </div>
            </div>

            {/* Prompt/Preview */}
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-5">
                <div className="text-xs text-zinc-500 mb-3">Prompt</div>
                <div className="rounded-lg border border-zinc-900 bg-zinc-950 p-4">
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Build a sleek SaaS landing page with a hero, feature grid of
                    four cards, testimonial, pricing, and a sticky header.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <button className="inline-flex h-9 items-center rounded-md bg-white px-4 text-sm font-medium text-black hover:bg-zinc-200">
                    Generate
                  </button>
                  <button className="inline-flex h-9 items-center rounded-md border border-zinc-800 px-4 text-sm text-zinc-300 hover:bg-zinc-900">
                    Randomize
                  </button>
                </div>
              </div>
              <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-5">
                <div className="text-xs text-zinc-500 mb-3">Preview</div>
                <div className="rounded-lg border border-zinc-900 bg-gradient-to-b from-zinc-900/30 to-zinc-950 p-6">
                  <div className="h-40 rounded-lg border border-zinc-800/60 bg-zinc-900/40"></div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-md border border-zinc-800/60 bg-zinc-900/40"></div>
                    <div className="h-20 rounded-md border border-zinc-800/60 bg-zinc-900/40"></div>
                    <div className="h-20 rounded-md border border-zinc-800/60 bg-zinc-900/40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-zinc-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Everything you need to move fast
            </h2>
            <p className="mt-3 text-zinc-400">
              Production‑grade building blocks with sensible defaults and
              beautiful details.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <FeatureCard
              title="Accessible UI"
              desc="WCAG‑aware components out of the box"
              emoji="♿"
            />
            <FeatureCard
              title="Clean Code"
              desc="Readable React + Tailwind patterns"
              emoji="✨"
            />
            <FeatureCard
              title="Dark‑first"
              desc="Pristine dark UI with subtle depth"
              emoji="🌑"
            />
            <FeatureCard
              title="Ship fast"
              desc="From idea to deploy in minutes"
              emoji="⚡"
            />
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="border-t border-zinc-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="rounded-xl border border-zinc-900 bg-zinc-950">
            <div className="flex items-center gap-1 border-b border-zinc-900 px-4 py-2">
              <span className="size-3 rounded-full bg-zinc-700"></span>
              <span className="size-3 rounded-full bg-zinc-700"></span>
              <span className="size-3 rounded-full bg-zinc-700"></span>
            </div>
            <div className="p-6 md:p-10">
              <div className="h-64 w-full rounded-lg border border-zinc-800/60 bg-[linear-gradient(120deg,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0.02)_60%)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing (simple placeholder) */}
      <section id="pricing" className="border-t border-zinc-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="mt-3 text-zinc-400">
              Start free. Upgrade when you are ready to scale.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <PriceCard
              name="Free"
              price="$0"
              desc="Playground access and exports"
              highlight={false}
            />
            <PriceCard
              name="Pro"
              price="$19"
              desc="Unlimited projects and themes"
              highlight={true}
            />
            <PriceCard
              name="Team"
              price="$49"
              desc="Collaboration and roles"
              highlight={false}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-xl border border-zinc-900 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Turn ideas into polished interfaces
              </h3>
              <p className="mt-3 text-zinc-400">
                Skip boilerplate. Keep the craft. Adaptar generates code youll be
                proud to ship.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <button className="inline-flex h-11 items-center rounded-md bg-white px-5 text-sm font-medium text-black hover:bg-zinc-200">
                  Create your first project
                </button>
                <button className="inline-flex h-11 items-center rounded-md border border-zinc-800 px-5 text-sm text-zinc-300 hover:bg-zinc-900">
                  Explore templates
                </button>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/5 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900/60">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded-sm bg-zinc-200"></div>
            <span>Adaptar</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">Build faster with AI</span>
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-zinc-300" href="#">
              Privacy
            </a>
            <a className="hover:text-zinc-300" href="#">
              Terms
            </a>
            <a className="hover:text-zinc-300" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  desc: string;
  emoji: string;
};

function FeatureCard({ title, desc, emoji }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-5">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-base">
          <span>{emoji}</span>
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-zinc-400">{desc}</div>
        </div>
      </div>
    </div>
  );
}

type PriceCardProps = {
  name: string;
  price: string;
  desc: string;
  highlight?: boolean;
};

function PriceCard({ name, price, desc, highlight }: PriceCardProps) {
  return (
    <div
      className={[
        "rounded-xl border bg-zinc-950 p-6",
        highlight
          ? "border-zinc-700 ring-1 ring-zinc-600/50"
          : "border-zinc-900",
      ].join(" ")}
    >
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-sm text-zinc-400">{name}</div>
          <div className="mt-1 text-3xl font-semibold">{price}</div>
        </div>
        {highlight && (
          <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-black">
            Popular
          </span>
        )}
      </div>
      <p className="mt-4 text-sm text-zinc-400">{desc}</p>
      <button className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-sm text-zinc-200 hover:bg-zinc-800">
        Choose {name}
      </button>
    </div>
  );
}
