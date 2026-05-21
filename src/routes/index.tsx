import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  component: () => (
    <PageShell
      tag="NAZROS // OS"
      title={<span className="text-neon">КИБЕРЭДЭН</span>}
      subtitle="ОПЕРАЦИОННАЯ СРЕДА РЕАЛЬНОСТИ"
    >
      <div className="text-center">
        <p className="text-gray-400">Добро пожаловать в CyberEden.</p>
      </div>
    </PageShell>
  ),
});