/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import testProfile from "../../assets/20220529_232847.jpg";
import { usersData } from "../../utils/mockData";
import { MoreHorizontal } from "lucide-react";

export default function Post({ id, user_id, timestamp, content }) {
  const userData = usersData.filter((data) => data.id === user_id);
    console.log(timestamp);
  return (
    <div className="border-b flex gap-4 pb-2 w-full">
      <img
        src={testProfile}
        alt="test-image"
        className="h-10 w-10 rounded-full cursor-pointer"
      />
      <div className="w-full">
        <Link to={`/tweets/${id}`}>

          <div className="flex items-center gap-2 w-full border">
            {userData.map((data) => (
              <div key={data.id} className="contents">
                <p className="font-bold text-lg ">{data.name}</p>
                <p className="text-sm text-slate-400 font-semibold">@{data.username}</p>
              </div>
            ))}
            <span className="text-sm text-slate-400 font-semibold">•</span>
            <div className="text-sm text-slate-400 font-semibold">
              {/* <p>{timestamp.toString()}</p> */}
              1hour
            </div>
            <MoreHorizontal className=" ml-auto"/>
          </div>


            {/* Content of the tweet! */}
            <p className="text-slate-600">{content}</p>
        </Link>
        <div>
            <Link to=""></Link>
        </div>
      </div>
    </div>
  );
}
