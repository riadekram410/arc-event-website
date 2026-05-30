import EventDetailsPage from "@/components/pages/EventDetailsPage";
import { prisma } from "@/lib/prisma";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);

  if (isNaN(id)) {
    return <EventDetailsPage />;
  }

  const segment = await prisma.segment.findUnique({
    where: { id },
  });

  return <EventDetailsPage dbSegment={segment || undefined} />;
}
