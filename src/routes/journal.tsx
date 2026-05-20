import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/journal")({
  component: () => (
    <PageShell
      tag="cyber.mag · issue 03"
      title={<>жур<span className="text-neon">нал</span></>}
      subtitle="статьи · интервью · хроники сети"
    />
  ),
});
