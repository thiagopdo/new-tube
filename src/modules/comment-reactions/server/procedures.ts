import { and, eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/db";
import { commentReactions } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

/**
 * Comment Reactions Router
 * 
 * Handles reactions (likes/dislikes) on comments.
 * 
 * Procedures:
 * - like: Toggle a like reaction on a comment
 *   Input: { commentId: string }
 *   Returns: The created/deleted reaction
 * 
 * - dislike: Toggle a dislike reaction on a comment
 *   Input: { commentId: string }
 *   Returns: The created/deleted reaction
 */


export const commentReactionsRouter = createTRPCRouter({
  like: protectedProcedure
    .input(z.object({ commentId: z.string().uuid() }))
    .mutation(async ({ input, ctx }) => {
      const { commentId } = input;
      const { id: userId } = ctx.user;

      const [existingCommentReactionLike] = await db
        .select()
        .from(commentReactions)
        .where(
          and(
            eq(commentReactions.commentId, commentId),
            eq(commentReactions.userId, userId),
            eq(commentReactions.type, "like")
          )
        );

      if (existingCommentReactionLike) {
        const [deletedViewerReaction] = await db
          .delete(commentReactions)
          .where(
            and(
              eq(commentReactions.userId, userId),
              eq(commentReactions.commentId, commentId)
            )
          )
          .returning();

        return deletedViewerReaction;
      }

      const [createdCommentReaction] = await db
        .insert(commentReactions)
        .values({
          commentId,
          userId,
          type: "like",
        })
        .onConflictDoUpdate({
          target: [commentReactions.userId, commentReactions.commentId],
          set: { type: "like" },
        })
        .returning();

      return createdCommentReaction;
    }),

  dislike: protectedProcedure
    .input(z.object({ commentId: z.string().uuid() }))
    .mutation(async ({ input, ctx }) => {
      const { commentId } = input;
      const { id: userId } = ctx.user;

      const [existingCommentReactionDislike] = await db
        .select()
        .from(commentReactions)
        .where(
          and(
            eq(commentReactions.commentId, commentId),
            eq(commentReactions.userId, userId),
            eq(commentReactions.type, "dislike")
          )
        );

      if (existingCommentReactionDislike) {
        const [deletedViewerReaction] = await db
          .delete(commentReactions)
          .where(
            and(
              eq(commentReactions.userId, userId),
              eq(commentReactions.commentId, commentId)
            )
          )
          .returning();

        return deletedViewerReaction;
      }

      const [createdCommentReaction] = await db
        .insert(commentReactions)
        .values({
          commentId,
          userId,
          type: "dislike",
        })
        .onConflictDoUpdate({
          target: [commentReactions.userId, commentReactions.commentId],
          set: { type: "dislike" },
        })
        .returning();

      return createdCommentReaction;
    }),
});
