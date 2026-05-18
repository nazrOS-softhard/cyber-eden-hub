import { createFileRoute } from "@tanstack/react-router";
import { RainBackground } from "@/components/RainBackground";
import { Sidebar } from "@/components/Sidebar";
import { HeroCover } from "@/components/HeroCover";
import { ArticleCard } from "@/components/ArticleCard";
import { AccessPanel, ActionBar, ActivityFeed } from "@/components/HUDPanels";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "киберэдэН — nazrOS · операционная среда реальности" },
      { name: "description", content: "Интерактивная цифровая платформа экосистемы nazrOS: журнал, дев-хаб, киберспорт, стриминг и cyberpunk-соцсеть." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      {/* Atmospheric layers */}
      <div className="pointer-events-none absolute inset-0 hud-grid opacity-30" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, oklch(0.62 0.28 295 / 0.18), transparent 55%), radial-gradient(ellipse at 90% 100%, oklch(0.78 0.18 220 / 0.15), transparent 55%)",
        }}
      />
      <RainBackground />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]" />

      <div className="relative z-20 flex h-full w-full">
        <Sidebar />

        <main className="relative flex flex-1 flex-col gap-3 p-3 md:p-4">
          {/* Top status bar */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between glass rounded-md px-4 py-2 font-mono text-[10px] tracking-widest text-foreground/70"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--acid)] shadow-[0_0_10px_var(--acid)]" />
              <span>SYS · ONLINE</span>
              <span className="text-foreground/30">|</span>
              <span className="hidden sm:inline">NODE: kyiv-03</span>
              <span className="text-foreground/30 hidden sm:inline">|</span>
              <span className="hidden md:inline">UPLINK: 1.2 Gbit</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cyan">user_0xnazr</span>
              <span className="text-foreground/30">|</span>
              <span className="text-neon animate-flicker">REC ●</span>
            </div>
          </motion.div>

          {/* Body grid */}
          <div className="grid flex-1 min-h-0 grid-cols-12 grid-rows-6 gap-3">
            {/* HERO — magazine cover */}
            <div className="col-span-12 row-span-4 lg:col-span-7">
              <HeroCover />
            </div>

            {/* Right column — articles */}
            <div className="col-span-12 row-span-4 lg:col-span-5 flex flex-col gap-3 min-h-0 overflow-hidden">
              <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
                <ArticleCard tag="Кибербезопасность" title="НОВОЕ ПОКОЛЕНИЕ / XDR" subtitle="Как работают современные системы детекции и реагирования" page="24" accent="neon" delay={0.2} />
                <ArticleCard tag="Gamedev" title="DESIGN / THE FUTURE" subtitle="Как создаются миры, в которые хочется вернуться" page="44" accent="cyan" delay={0.3} />
                <ArticleCard tag="Хакинг" title="RED TEAM / TRADECRAFT" subtitle="Реальные техники атак и обхода защиты" page="36" accent="acid" delay={0.4} />
                <ArticleCard tag="Киберспорт" title="BEYOND / THE GAME" subtitle="Аналитика, мета и психология победителей" page="58" accent="neon" delay={0.5} />
              </div>
              <ArticleCard tag="Интервью" title="TEAM YANDEX / о пути к титулам" subtitle="О пути к титулам и будущем киберспорта" page="72" accent="cyan" delay={0.6} />
            </div>

            {/* Bottom row — HUD */}
            <div className="col-span-12 row-span-2 lg:col-span-7 grid grid-cols-12 gap-3 min-h-0">
              <div className="col-span-12 sm:col-span-7"><ActionBar /></div>
              <div className="col-span-12 sm:col-span-5"><ActivityFeed /></div>
            </div>
            <div className="col-span-12 row-span-2 lg:col-span-5 min-h-0">
              <AccessPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
