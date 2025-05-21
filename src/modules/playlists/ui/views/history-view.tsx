import { HistoryVideosSection } from "../sections/history-videos-section";

export function HistoryView() {
  return (
    <div className="max-w-screen-md mx-auto mb-10 pt-2.5 flex flex-col gap-y-6 ">
      <div>
        <h1 className="text-2xl font-bold">History</h1>
        <p className="text-xs text-muted-foreground">Watched videos</p>
      </div>
      <HistoryVideosSection />
    </div>
  );
}
