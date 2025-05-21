import { useEffect } from "react";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

import { Button } from "./ui/button";

interface InfiniteScrollProps {
  isManual?: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

/**
 * A component that implements infinite scrolling functionality.
 * It automatically triggers loading of more content when the user scrolls near the bottom.
 *
 * @param props.isManual - If true, disables automatic fetching of next page when scrolling
 * @param props.hasNextPage - Boolean indicating if there are more pages to load
 * @param props.isFetchingNextPage - Boolean indicating if the next page is currently being fetched
 * @param props.fetchNextPage - Function to call to load the next page of content
 *
 * @example
 * ```tsx
 * <InfiniteScroll
 *   hasNextPage={hasNextPage}
 *   isFetchingNextPage={isFetchingNextPage}
 *   fetchNextPage={fetchNextPage}
 * />
 * ```
 */
export function InfiniteScroll({
  isManual = false,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: InfiniteScrollProps) {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage && !isManual) {
      fetchNextPage();
    }
  }, [
    isIntersecting,
    hasNextPage,
    isManual,
    isFetchingNextPage,
    fetchNextPage,
  ]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div ref={targetRef} className="h-1">
        {hasNextPage ? (
          <Button
            variant="secondary"
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground">No more results</p>
        )}
      </div>
    </div>
  );
}
