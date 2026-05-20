import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/market")({
  component: () => (
    <PageShell
      tag="NAZROS • MARKET"
      title={<><span className="text-neon">МАР</span>КЕТ</>}
      subtitle="Цифровые продукты и устройства экосистемы nazrOS"
    >
      {/* Ваш код с карточками товаров */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ... карточки товаров ... */}
      </div>
    </PageShell>
  ),
});
