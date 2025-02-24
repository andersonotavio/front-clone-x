import { tweet } from "@/data/tweet"
import { TweetItem } from "../tweets/tweet-item"


export const HomeTweetFeed = () => {
  return(
    <div>
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
    </div>
  )
}