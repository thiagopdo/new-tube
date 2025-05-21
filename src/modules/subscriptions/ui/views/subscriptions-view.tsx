import { SubscriptionsSection } from "../sections/subscriptions-section";

export function SubscriptionsView() {
  return (
    <div className="max-w-screen-md mx-auto mb-10 pt-2.5 flex flex-col gap-y-6 ">
      <div>
        <h1 className="text-2xl font-bold"> All Subscriptions</h1>
        <p className="text-xs text-muted-foreground">
          Manage your subscriptions
        </p>
      </div>
      <SubscriptionsSection />
    </div>
  );
}
