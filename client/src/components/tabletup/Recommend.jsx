// fetch the data/post with the most like
import { Link } from "react-router-dom";
import { posts, usersData } from "../../utils/mockData";
import Post from "../ui/Post";
import UserFollowCard from "../ui/UserFollowCard";
import { Copyright } from "lucide-react";

export default function Recommend() {
  const post = posts.filter((post) => post.user_id == 1);
  return (
    <div className="hidden xl:block p-4 space-y-4">
      {/* search */}
      <div className="sticky top-0 bg-white">
        <input
          type="text"
          placeholder="Search"
          className="btn py-2 placeholder:text-base"
        />
      </div>

      <div className="p-4 bg-gray-100 rounded-xl space-y-2">
        <p className="text-2xl font-bold">Subscribe to Premium</p>
        <p className=" leading-5">
          Subscribe to be the first to enjoy our new features as we release
          them.
        </p>
        <button className="solid-btn">Subscribe</button>
      </div>

      <div className="p-4 bg-gray-100 rounded-xl space-y-2">
        <p className="text-xl font-bold">Trending on Tweeter</p>
        {/* put the most liked post here */}
        <div className="bg-white">
          {post && post.map((post) => <Post key={post.id} {...post} isRecommend={true}/>)}
        </div>
      </div>

      {/* Who to follow */}
      <div className="p-4 bg-gray-100 rounded-xl space-y-2">
        <p className="text-xl font-bold">Who to follow</p>
        {/* put first 3 registered people here apart from yourself*/}
        {
          usersData && usersData.map(user => (
            <UserFollowCard key={user.id} {...user}/>
          ))
        }
        <Link to="/">
        <p className="text-action font-semibold">show more</p></Link>
      </div>

      {/* Footer stuff */}
      <div className="flex gap-4 flex-wrap text-gray-500 text-sm font-semibold">
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Ads Info</p>
        <p className="flex items-center"><Copyright className="h-4 w-4"/> 2023 Tweeter. </p>
      </div>
    </div>
  );
}
