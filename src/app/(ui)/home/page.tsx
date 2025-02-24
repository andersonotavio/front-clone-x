import { HomeHeader } from "@/components/home/home-header";
import { HomeTweetFeed } from "@/components/home/home-tweet-feed";
import { TweePost } from "@/components/tweets/tweet-post";

export default function Page() {

  return (
    <div>
      <HomeHeader />  
      <TweePost />
      <HomeTweetFeed />
    </div>
  );
}