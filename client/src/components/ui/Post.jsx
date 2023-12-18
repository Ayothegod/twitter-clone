/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import testProfile from "../../assets/20220529_232847.jpg";
import { usersData } from "../../utils/mockData";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Share,
} from "lucide-react";

export default function Post({ id, user_id, timestamp, content }) {
  const userData = usersData.filter((data) => data.id === user_id);
  console.log(timestamp);
  return (
    <div className="border-b p-4 flex gap-4 w-full hover:bg-gray-100">
      <img
        src={testProfile}
        alt="test-image"
        className="h-10 w-10 rounded-full cursor-pointer"
      />
      <div className="w-full">
        <Link to={`/tweets/${id}`}>
          <div className="flex items-center gap-2 w-full ">
            {userData.map((data) => (
              <div key={data.id} className="contents">
                <p className="font-bold text- ">{data.name}</p>
                <p className="text-gray-400 font-semibold">@{data.username}</p>
              </div>
            ))}
            <span className="text-sm text-gray-400 font-semibold">•</span>
            <div className="text-sm text-gray-400 font-semibold">
              {/* <p>{timestamp.toString()}</p> */}
              1hour
            </div>
            <MoreHorizontal className=" ml-auto" />
          </div>

          {/* Content of the tweet! */}
          <p className="text-gray-700">{content}</p>
        </Link>
        <div className="mt-4 flex items-center justify-between ">
          <Link to="" className="text-slate-500 flex items-center gap-1 cursor-pointer">
            <MessageCircle className="h-5 w-5 " />
            {<p>0</p>}
          </Link>
          <div className="text-slate-500 flex items-center gap-1 cursor-pointer">
            <Repeat2 className="h-5 w-5 " />
            {<p>0</p>}
          </div>
          <div className="text-slate-500 flex items-center gap-1 cursor-pointer">
            <Heart className="h-5 w-5 " />
            {<p>0</p>}
          </div>
          <div className="text-slate-500 flex items-center gap-2 ">
            <Bookmark className="h-5 w-5 cursor-pointer" />
            <Share className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
