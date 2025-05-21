import { SubscribedVideosSection } from "../sections/subscribed-videos-section";

export function SubscribedView() {
  return (
    <div className="max-w-[2400px] mx-auto mb-10 pt-2.5 flex flex-col gap-y-6 ">
      <div>
        <h1 className="text-2xl font-bold">Subscribed</h1>
        <p className="text-xs text-muted-foreground">
          Videos from your creators
        </p>
      </div>
      <SubscribedVideosSection />
    </div>
  );
}
