import { UploadDropzone } from "@uploadthing/react";

import { OurFileRouter } from "@/app/api/uploadthing/core"; // Add this import
import { ResponsiveModal } from "@/components/responsive-modal";
import { trpc } from "@/trpc/client";

interface BannerUploadModalProps {
  userId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BannerUploadModal({
  userId,
  open,
  onOpenChange,
}: BannerUploadModalProps) {
  const utils = trpc.useUtils();

  function onUploadComplete() {
    utils.users.getOne.invalidate({ id: userId });
    onOpenChange(false);
  }

  return (
    <ResponsiveModal
      title="Upload a banner"
      open={open}
      onOpenChange={onOpenChange}
    >
      <UploadDropzone<OurFileRouter, "bannerUploader">
        endpoint="bannerUploader"
        onClientUploadComplete={onUploadComplete}
      />
    </ResponsiveModal>
  );
}
