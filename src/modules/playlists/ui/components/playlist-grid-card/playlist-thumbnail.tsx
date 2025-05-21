import { ListVideoIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { THUMBNAIL_FALLBACK } from "@/modules/videos/constants";

type PlaylistThumbnailProps = {
  title: string;
  className?: string;
  videoCount: number;
  imageUrl?: string | null;
};

export function PlaylistThumbnailSkeleton() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl aspect-video">
      <Skeleton className="size-full" />
    </div>
  );
}

export function PlaylistThumbnail({
  title,
  className,
  videoCount,
  imageUrl,
}: PlaylistThumbnailProps) {
  const compactViews = useMemo(() => {
    return Intl.NumberFormat("en", {
      notation: "compact",
    }).format(videoCount);
  }, [videoCount]);

  return (
    <div className={cn("relative pt-3", className)}>
      <div className="relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[97%] overflow-hidden rounded-xl bg-black/20 aspect-video" />
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[98.5%] overflow-hidden rounded-xl bg-black/25 aspect-video" />
        {/* MAIN IMAGE */}

        <div className="relative overflow-hidden w-full rounded-xl aspect-video">
          <Image
            src={imageUrl || THUMBNAIL_FALLBACK}
            alt={title}
            fill
            className="w-full h-full object-cover"
            priority={true}
          />

          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex items-center gap-x-2">
              <PlayIcon className="size-4 text-white fill-white" />
              <span className="text-white font-medium">Play all</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video duration box  */}

      <div className="absolute bottom-2 right-2 px-1 py-0.5 bg-black/80  rounded flex items-center gap-x-1 font-medium text-white text-xs">
        <ListVideoIcon className="size-4" />
        {compactViews} videos
      </div>
    </div>
  );
}
