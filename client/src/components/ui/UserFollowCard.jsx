/* eslint-disable react/prop-types */
import testProfile from "../../assets/20220529_232847.jpg";

export default function UserFollowCard({ name, username }) {
  return (
    <div className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg flex items-center gap-4">
      <img
        src={testProfile}
        alt="test-image"
        className="h-10 w-10 rounded-full cursor-pointer"
      />

      <div className="">
        <p className="font-bold">{name}</p>
        <p className="text-gray-500">@{username}</p>
      </div>

      <button className="solid-btn ml-auto">Follow</button>
    </div>
  );
}
