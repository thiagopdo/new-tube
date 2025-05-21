import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { formatDuration } from "@/lib/utils";

import { THUMBNAIL_FALLBACK } from "../../constants";

interface VideoThumbnailProps {
  title: string;
  duration: number;
  imageUrl?: string | null;
  previewUrl?: string | null;
}

export function VideoThumbnailSkeleton() {
  return (
    <div className="relative w-full overflow-hidden  rounded-xl aspect-video">
      <Skeleton className="size-full" />
    </div>
  );
}

export function VideoThumbnail({
  title,
  imageUrl,
  previewUrl,
  duration,
}: VideoThumbnailProps) {
  return (
    <div className="relative group">
      {/* thumbnail wrapper */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl || THUMBNAIL_FALLBACK}
          alt={title}
          fill
          className="size-full object-cover group-hover:opacity-0"
        />
        <Image
          unoptimized={!!previewUrl}
          src={previewUrl || THUMBNAIL_FALLBACK}
          alt={title}
          fill
          className="size-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      {/* Video duration box */}
      <div className="absolute bottom-2 right-2 px-1 py-0.5 bg-black/80  rounded font-medium text-white text-sm">
        {formatDuration(duration)}
      </div>
    </div>
  );
}
