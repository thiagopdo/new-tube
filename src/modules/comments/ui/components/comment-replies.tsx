import { CornerDownRight, Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";

import { CommentItem } from "./comment-item";

interface CommentRepliesProps {
  parentId: string;
  videoId: string;
}

export function CommentReplies({ parentId, videoId }: CommentRepliesProps) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    trpc.comments.getMany.useInfiniteQuery(
      {
        limit: DEFAULT_LIMIT,
        videoId,
        parentId,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  return (
    <div className="pl-14">
      <div className="flex flex-col gap-4 mt-2">
        {isLoading && (
          <div className="flex items-center justify-center">
            <Loader2Icon className="text-muted-foreground animate-spin size-6" />
          </div>
        )}

        {!isLoading &&
          data?.pages
            .flatMap((page) => page.items)
            .map((comment) => (
              <CommentItem key={comment.id} comment={comment} variant="reply" />
            ))}
      </div>
      {hasNextPage && (
        <Button
          variant="tertiary"
          size="sm"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          <CornerDownRight />
          Show more replies
        </Button>
      )}
    </div>
  );
}
