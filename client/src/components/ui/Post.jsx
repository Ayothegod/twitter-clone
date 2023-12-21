/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import testProfile from "../../assets/20220529_232847.jpg";
import { usersData } from "../../utils/mockData";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreVertical,
  Repeat2,
  Share,
} from "lucide-react";

export default function Post({ id, user_id, timestamp, content, isRecommend }) {
  const userData = usersData.filter((data) => data.id === user_id);
  console.log(timestamp);
  return (
    <div
      className={`border-b p-4 flex gap-4 w-full hover:bg-gray-100 ${
        isRecommend && "hover:bg-gray-200 border-none"
      }`}
    >
      <img
        src={testProfile}
        alt="test-image"
        className="h-10 w-10 rounded-full cursor-pointer"
      />

      <div className="w-full relative">
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
              1h
            </div>

            {/* move this tab outside or make it absolute */}
          </div>

          {/* Content of the tweet! */}
          <p className="text-gray-700">{content}</p>
        </Link>

        <div className=" absolute right-0 top-0 hover:bg-gray-200 hover:rounded-full cursor-pointer">
          <MoreVertical className=" h-5 w-5" />
        </div>

        {/* move this stuff to a seperate component, so it can be reused on postBody page */}
        <div className="mt-4 flex items-center justify-between ">
          <Link
            to=""
            className="text-slate-500 flex items-center gap-1 cursor-pointer hover:text-action"
          >
            <MessageCircle className="h-5 w-5 " />
            {/* this bracket is to display dynamic comment/like/retweet cahnge */}
            {<p>0</p> } 
          </Link>
          <div className="text-slate-500 flex items-center gap-1 cursor-pointer hover:text-green-600">
            <Repeat2 className="h-5 w-5 " />
            {<p>0</p>}
          </div>
          <div className="text-slate-500 flex items-center gap-1 cursor-pointer hover:text-red-600">
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
