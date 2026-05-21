import { motion } from "framer-motion";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

// Данные событий
const events = [
  {
    id: 1,
    title: "CyberHack 2025: Безопасность будущего",
    description: "Главный хакатон киберсистемы nazrOS. 48 часов непрерывного кодинга, менторство от топ-специалистов и призовой фонд.",
    type: "ХАКАТОН",
    status: "РЕГИСТРАЦИЯ ОТКРЫТА",
    topic: "Кибербезопасность",
    location: "Москва, цифровое деловое пространство",
    participants: 340,
    prize: "500 000 ₽",
    date: "NaN",
  },
  {
    id: 2,
    title: "nazrOS DevCon: Offline Edition",
    description: "Конференция разработчиков экосистемы nazrOS. Доклады, мастер-классы, нетворкинг.",
    type: "OFFLINE",
    status: "СКОРО",
    topic: "Кибербезопасность",
    location: "Санкт-Петербург, планетарий #1",
    participants: 180,
    prize: null,
    date: "NaN",
  },
  {
    id: 3,
    title: "Game Jam: Pixel Revolt",
    description: "12-часовой геймджем для инди-разработчиков. Тема объявляется в момент старта.",
    type: "ХАКАТОН",
    status: "РЕГИСТРАЦИЯ ОТКРЫТА",
    topic: "Геймдев",
    location: "ONLINE",
    participants: 215,
    prize: "100 000 ₽ + публикация в маркетплейсе",
    date: "NaN",
  },
  {
    id: 4,
    title: "Meetup: Реверс-инжиниринг для начинающих",
    description: "Практический воркшоп по основам реверс-инжиниринга мобильных приложений.",
    type: "OFFLINE",
    status: "СКОРО",
    topic: "Хакинг",
    location: "Казань, IT парк",
    participants: 40,
    prize: null,
    date: "NaN",
  },
  {
    id: 5,
    title: "CTF: Shadow Protocol",
    description: "Захват флага — командное соревнование по кибербезопасности. Категории: Web, Crypto, Forensics, Pwn.",
    type: "ONLINE",
    status: "РЕГИСТРАЦИЯ ОТКРЫТА",
    topic: "Кибербезопасность",
    location: "ONLINE",
    participants: 480,
    prize: "200 000 ₽",
    date: "NaN",
  },
  {
    id: 6,
    title: "Hackathon: OS Builder Challenge",
    description: "Создай собственный дистрибутив Linux из исходников. Оценивается оригинальность, удобство и производительность.",
    type: "ХАКАТОН",
    status: "СКОРО",
    topic: "Цифровая этика",
    location: "ONLINE",
    participants: 95,
    prize: "150 000 ₽ + место в маркетплейсе",
    date: "NaN",
  },
];

export const Route = createFileRoute("/events")({
  component: () => {
    const [filterTopic, setFilterTopic] = useState("Все");

    const filteredEvents = filterTopic === "Все"
      ? events
      : events.filter((e) => e.topic === filterTopic);

    return (
      <PageShell
        tag="БАЗА ЗНАНИЙ СИНДИКАТА"
        title={<><span className="text-cyan">СОБЫ</span><span className="text-acid">ТИЯ</span></>}
      >
        <div className="mt-12 w-full max-w-full">
          <div className="flex flex-wrap gap-3 mb-8 justify-center w-full max-w-full">
            {["Все", "Кибербезопасность", "Геймдев", "Киберспорт", "Хакинг", "Цифровая этика"].map((topic) => (
              <button
                key={topic}
                onClick={() => setFilterTopic(topic)}
                className={`px-4 py-1.5 rounded-full text-xs tracking-wider transition ${
                  filterTopic === topic
                    ? "bg-[var(--neon)]/20 border border-[var(--neon)] text-[var(--neon)]"
                    : "bg-transparent border border-gray-700 text-gray-400 hover:border-gray-500"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 w-full max-w-full">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.005 }}
                className="group flex flex-col md:flex-row items-stretch bg-[#0d0d0d] border border-gray-800 rounded overflow-hidden hover:border-[var(--neon)]/50 transition-all"
              >
                <div className="flex flex-col items-center justify-center p-6 bg-black/40 border-r border-gray-800 min-w-[140px]">
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">ДАТА</div>
                  <div className="text-4xl font-bold font-display text-white">{event.date || "TBA"}</div>
                </div>

                <div className="flex-1 p-6 text-left">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-purple-900/40 text-[var(--neon)] text-[10px] uppercase tracking-wider border border-[var(--neon)]/30 rounded">
                      {event.type}
                    </span>
                    <span className="px-2 py-0.5 bg-cyan-900/40 text-cyan text-[10px] uppercase tracking-wider border border-cyan/30 rounded">
                      {event.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display">{event.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{event.description}</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">📍 {event.location}</span>
                    <span className="flex items-center gap-1">👤 {event.participants} участников</span>
                    {event.prize && (
                      <span className="flex items-center gap-1 text-yellow-400">🏆 {event.prize}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center p-6 border-l border-gray-800 min-w-[120px]">
                  <button className="px-4 py-2 bg-[var(--neon)] hover:bg-[var(--cyan)] text-black font-bold text-xs tracking-wider rounded transition">
                    {event.status === "СКОРО" ? "ЖДИТЕ" : "УЧАСТВОВАТЬ"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </PageShell>
    );
  },
});
