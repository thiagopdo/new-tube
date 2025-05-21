import { DEFAULT_LIMIT } from "@/constants";
import { SubscriptionsView } from "@/modules/subscriptions/ui/views/subscriptions-view";
import { HydrateClient, trpc } from "@/trpc/server";

export default async function SubscriptionsPage() {
  void trpc.subscriptions.getMany.prefetch({
    limit: DEFAULT_LIMIT,
  });
  return (
    <HydrateClient>
      <SubscriptionsView />
    </HydrateClient>
  );
}
