import { LikedVideosSection } from "../sections/liked-videos-section";

export function LikedView() {
  return (
    <div className="max-w-screen-md mx-auto mb-10 pt-2.5 flex flex-col gap-y-6 ">
      <div>
        <h1 className="text-2xl font-bold">Liked</h1>
        <p className="text-xs text-muted-foreground">Liked videos</p>
      </div>
      <LikedVideosSection />
    </div>
  );
}
