import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/profile")({
  component: () => (
    <PageShell
      tag="user · 0xnazr · S-07"
      title={<>про<span className="text-cyan">филь</span></>}
      subtitle="кабинет кибера · прогресс · достижения"
    />
  ),
});
