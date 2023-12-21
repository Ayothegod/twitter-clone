import { useParams, useLocation } from "react-router-dom";
import { useActionStore } from "../../lib/stores/actionStore";
import { posts } from "../../utils/mockData";
import { StepBack, MoreVertical } from "lucide-react";
import testProfile from "../../assets/20220529_232847.jpg";

export default function PostBody() {
  const { postId } = useParams();
  // const location  = useLocation()

  const following = false;
  // once i start using api, we dont need to use an array, we just get the data directly from api and display it

  // since no api yet - get post whose id === postId
  const post = posts.filter((post) => post.id === postId);
  const user = useActionStore((state) => state.user);

  return (
    <main className="w-full">
      {/* header */}
      <header className="flex items-center gap-8 border-b w-full py-1 px-2">
        <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-full">
          <StepBack className="" />
        </div>
        <p className="text-xl font-bold">Post</p>
      </header>

      {/* post body */}
      <div>
        <div className="flex justify-between items-center p-2">
          <div className="flex gap-4 items-center">
            <img
              src={testProfile}
              alt="test-image"
              className="h-10 w-10 rounded-full cursor-pointer"
            />

            <div className="flex flex-col gap-1 leading-3">
              <p className="font-bold leading-3">{user.name}</p>
              <p className="text-gray-600 font-medium ">@{user.username}</p>
            </div>
          </div>

          <div className="flex items-center">
            {/* follow button */}
            <div>
              {/* only display if its not your post, and also check if you are not following, if yes -> follow button else following button */}
              {following ? (
                <button className="">Follow</button>
              ) : (
                <button className="solid-btn bg-black text-sm">
                  Following
                </button>
              )}
            </div>

            {/* postDropdown => should prob be a component so it can be imported */}
            <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-full">
              <MoreVertical />
            </div>
          </div>
        </div>

        {/* post detail */}
        <div>
          <div className="p-2 text-gray-900 ">
            {post.map((post) => (
              <div key={post.id}>
                <div className="border-b">
                  <p>{post.content}</p>

                  <div className="text-gray-500 font-semibold text-sm space-x-2 my-2">
                    {/* destructure the time the post was created in this format => 10:30pm */}
                    <span>{1230}PM</span>
                    <span>•</span>
                    <span>{post.timestamp}</span>

                    {/* no of post likes */}
                    {/* <span>{130}</span> */}
                  </div>
                </div>

                {/* activity count point */}
                <div className="border-b py-2 space-x-4 text-sm font-semibold">
                  <span>{4} <span className="text-gray-500">Reposts</span></span>
                  <span>{130} <span className="text-gray-500">Likes</span></span>
                </div>

                {/* Bookmark point */}
                <div className="border-b py-2 space-x-4 text-sm font-semibold">
                  <span>{2} <span className="text-gray-500">Bookmarks</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// useNavigate => used to route and navigate programtically like useRouter in react
