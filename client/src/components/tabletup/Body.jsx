import { Settings } from "lucide-react";
import CreatePost from "./CreatePost";
import { posts } from "../../utils/mockData";
import Post from "../ui/Post";

export default function Body() {
  return (
    <div className="min-h-screen w-full">
      <header className="p-4 border-b sticky top-0 bg-white/80">
        <div className="hidden sm:flex items-center justify-between ">
          <p className="font-bold text-xl"> For you</p>
          <Settings />
        </div>
        {/* <div className="">
          <p className="text-center font-semibold"></p>
          Incase i want to add a followings only view
        </div> */}
      </header>

      <CreatePost />

      {/* render posts, all post from the database using timestamp */}
      <div className="flex flex-col">
        {posts && posts.map((post) => <Post key={post.id} {...post} />)}
      </div>
    </div>
  );
}
