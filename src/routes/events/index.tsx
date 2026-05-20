import { motion } from "framer-motion";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

const events = [
  {
    id: 1,
    title: "CyberHack 2025: Безопасность будущего",
    description: "Главный хакатон экосистемы nazrOS. 48 часов непрерывного кодинга, менторство от топ-специалистов и призовой фонд.",
    type: "ХАКАТОН",
    status: "РЕГИСТРАЦИЯ ОТКРЫТА",
    topic: "Кибербезопасность",
    location: "Москва, цифровое пространство",
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
        tag="EVENTS • CALENDAR SYNC"
        title={<><span className="text-acid">СОБЫ</span>ТИЯ</>}
      >
        <div className="mt-12"> {/* ← добавили отступ */}
          {/* Подзаголовок-фильтр */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center mt-8">
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

          {/* Сетка событий */}
          <div className="flex flex-col gap-4 max-w-5xl mx-auto w-full">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.005 }}
                className="group flex flex-col md:flex-row items-stretch bg-[#0d0d0d] border border-gray-800 rounded overflow-hidden hover:border-[var(--neon)]/50 transition-all"
              >
                {/* ... остальной код карточки ... */}
              </motion.div>
            ))}
          </div>
        </div>
      </PageShell>
    );
  },
});
