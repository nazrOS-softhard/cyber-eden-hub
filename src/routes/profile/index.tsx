import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/profile")({
  component: () => {
    const [activeTab, setActiveTab] = useState("КИБЛА");

    return (
      <PageShell
        tag="ЛИЧНЫЙ КАБИНЕТ"
        title={<><span className="text-neon">КИБЛА</span> КИБЕРА</>}
       
      >
        {/* Фильтры-вкладки */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {["КИБЛА", "ПРОГРЕСС", "ИНВЕНТАРЬ"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded border text-sm tracking-wider transition ${
                activeTab === tab
                  ? "bg-[var(--neon)]/20 border-[var(--neon)] text-[var(--neon)]"
                  : "bg-transparent border-gray-700 text-gray-400 hover:border-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 text-left mt-32">
          {activeTab === "КИБЛА" && (
            <>
              {/* ЛЕВАЯ КОЛОНКА */}
              <div className="lg:col-span-1 space-y-6">
                {/* Аватар и профиль */}
                <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-6 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 p-1">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <span className="text-4xl">👾</span>
                    </div>
                  </div>
                  <button className="mt-4 px-4 py-1.5 border border-gray-600 text-xs rounded hover:bg-gray-800 transition">
                    СМЕНИТЬ АВАТАР
                  </button>
                  <h2 className="mt-4 text-xl font-bold font-display">CyberUser_08</h2>
                  <p className="text-sm text-cyan">Architect</p>
                  <div className="mt-4 w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-400" style={{ width: "65%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>8 700 / 13 000 XP</span>
                  </div>
                </div>

                {/* Подключённые аккаунты с активными ползунками */}
                <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">ПОДКЛЮЧЁННЫЕ АККАУНТЫ</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-black/40 p-3 rounded border border-gray-700">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400">✈️</span>
                        <span className="text-sm">Telegram</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
                          <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-green-400 transition-all"></div>
                        </div>
                        <span className="text-xs text-gray-400">Авторизован</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-black/40 p-3 rounded border border-gray-700">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400">VK</span>
                        <span className="text-sm">ВКонтакте</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
                          <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-green-400 transition-all"></div>
                        </div>
                        <span className="text-xs text-gray-400">Авторизован</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Score */}
                <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">TRUST SCORE</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-green-400">94</span>
                    <span className="text-sm text-green-400">Наивысший уровень</span>
                  </div>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-teal-400" style={{ width: "94%" }}></div>
                  </div>
                </div>

                {/* Уровни */}
                <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">УРОВНИ</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="text-sm">Observer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="text-sm">Operator</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="text-sm">Architect</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                      <span className="text-sm text-gray-500">Core Developer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ПРАВАЯ КОЛОНКА */}
              <div className="lg:col-span-2 space-y-6">
                {/* Загрузка артефактов */}
                <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">ЗАГРУЗКА ЦИФРОВЫХ АРТЕФАКТОВ</h3>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 text-center hover:border-purple-500 transition">
                    <div className="text-4xl mb-2">📁</div>
                    <p className="text-sm text-gray-400">Перетащи или нажми для загрузки</p>
                    <p className="text-xs text-gray-500 mt-2">Artifacts · Cyberware · Tools · Designs · XP</p>
                  </div>
                </div>

                {/* Достижения */}
                <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">ДОСТИЖЕНИЯ</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/40 border border-gray-700 rounded p-3">
                      <div className="flex items-center gap-2 text-cyan">
                        <span>🔰</span>
                        <span className="text-sm">Первый контакт</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Вощёл в систему</p>
                    </div>
                    <div className="bg-black/40 border border-gray-700 rounded p-3">
                      <div className="flex items-center gap-2 text-purple-400">
                        <span>📰</span>
                        <span className="text-sm">Теневой протокол</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Прочёл статью о хакинге</p>
                    </div>
                    <div className="bg-black/40 border border-gray-700 rounded p-3">
                      <div className="flex items-center gap-2 text-yellow-400">
                        <span>🎥</span>
                        <span className="text-sm">Сигнальный огонь</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Запустил стрим</p>
                    </div>
                    <div className="bg-black/40 border border-gray-700 rounded p-3">
                      <div className="flex items-center gap-2 text-green-400">
                        <span>🏗️</span>
                        <span className="text-sm">Архитектор реальности</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Достиг уровня Architect</p>
                    </div>
                  </div>
                </div>

                {/* Цифровой инвентарь */}
                <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">ЦИФРОВОЙ ИНВЕНТАРЬ</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-black/40 p-3 rounded border border-gray-700">
                      <div className="flex items-center gap-3">
                        <span className="text-orange-400">🗂️</span>
                        <span className="text-sm">RedTeam_Tools.zip</span>
                      </div>
                      <span className="text-xs text-gray-500">4.2 MB</span>
                      <span className="text-xs text-green-400">+120 XP</span>
                    </div>
                    <div className="flex items-center justify-between bg-black/40 p-3 rounded border border-gray-700">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400">📄</span>
                        <span className="text-sm">CyberSec_Report_v1.pdf</span>
                      </div>
                      <span className="text-xs text-gray-500">2.1 MB</span>
                      <span className="text-xs text-green-400">+80 XP</span>
                    </div>
                    <div className="flex items-center justify-between bg-black/40 p-3 rounded border border-gray-700">
                      <div className="flex items-center gap-3">
                        <span className="text-green-400">🖼️</span>
                        <span className="text-sm">nazrOS_wallpaper.png</span>
                      </div>
                      <span className="text-xs text-gray-500">5.8 MB</span>
                      <span className="text-xs text-green-400">+50 XP</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "ПРОГРЕСС" && (
            <div className="col-span-3 text-center py-12">
              <h3 className="text-xl font-bold text-cyan">ПРОГРЕСС</h3>
              <p className="text-gray-400 mt-2">Здесь будет отображаться прогресс кибера.</p>
            </div>
          )}

          {activeTab === "ИНВЕНТАРЬ" && (
            <div className="col-span-3 text-center py-12">
              <h3 className="text-xl font-bold text-neon">ИНВЕНТАРЬ</h3>
              <p className="text-gray-400 mt-2">Здесь будет полный список инвентаря.</p>
            </div>
          )}
        </div>
      </PageShell>
    );
  },
});
