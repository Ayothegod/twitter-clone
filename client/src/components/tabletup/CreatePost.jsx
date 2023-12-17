import { ImageIcon, LocateIcon, StickerIcon } from "lucide-react";
import testProfile from "../../assets/20220529_232847.jpg";

export default function CreatePost() {
  return (
    <div className="hidden sm:flex gap-4 p-4 w-full border-b ">
      <div className="h-12 w-14">
        <img
          src={testProfile}
          alt="test-image"
          className="h-full w-full rounded-full cursor-pointer"
        />
      </div>
      <div className="w-full space-y-2">
        <textarea
          type="text"
          className="p-2 w-full"
          placeholder="What is happening?"
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <ImageIcon className=" text-action hover:text-action-disabled" />
            <StickerIcon className=" text-action hover:text-action-disabled" />
            <LocateIcon className=" text-action hover:text-action-disabled" />
          </div>
          <button className="bg-action py-2 px-4 rounded-full text-white font-bold hover:bg-action-disabled">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
