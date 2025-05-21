import { UserSection } from "../sections/user-section";
import { VideosSection } from "../sections/videos-section";

type UserViewProps = {
  userId: string;
};

export function UserView({ userId }: UserViewProps) {
  return (
    <div className="flex flex-col max-w-[1300px] mx-auto pt-2.5 px-4 mb-10 gap-y-6]">
      <UserSection userId={userId} />
      <VideosSection userId={userId} />
    </div>
  );
}
