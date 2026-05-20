import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/events")({
  component: () => (
    <PageShell
      tag="events · calendar sync"
      title={<>со<span className="text-acid">бытия</span></>}
      subtitle="митапы · хакатоны · турниры"
    />
  ),
});
