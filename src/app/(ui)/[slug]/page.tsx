import { GeneralHeder } from "@/components/ui/general-header";
import { user } from "@/data/user";

export default function Page() {
  return (
    <div>
      <GeneralHeder backHef="/">
        <div className="font-bold text-lg">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCount} posts</div>
      </GeneralHeder>
    </div>
  );
}