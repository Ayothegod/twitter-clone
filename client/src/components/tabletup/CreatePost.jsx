import { ImageIcon, LocateIcon, StickerIcon } from "lucide-react";
import testProfile from "../../assets/20220529_232847.jpg";
import { useState, useRef } from "react";
import useAutosizeTextArea from "../../lib/hooks/useAutoResizeTextsize";

export default function CreatePost() {
  const [value, setValue] = useState("");
  const textAreaRef = useRef(null);
  useAutosizeTextArea(textAreaRef.current, value);

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
          ref={textAreaRef}
          onChange={(e) => setValue(e.target.value)}
          rows={0}
          value={value}
          className="p-2 w-full resize-none outline-none"
          placeholder="What is happening?"
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-sm">
            <ImageIcon className=" text-action h-5 w-5 hover:text-action-disabled" />
            <StickerIcon className=" text-action h-5 w-5 hover:text-action-disabled" />
            <LocateIcon className=" text-action h-5 w-5 hover:text-action-disabled" />
          </div>
          <div className="flex items-center gap-2">
            <p className={`text-action font-semibold text-sm ${value.length>150 && "text-red-600"}`}>{value.length}<span className="">/150</span></p>
            <button className={`bg-action py-2 px-6 rounded-full text-white font-bold hover:bg-action-disabled ${value.length>150 && "bg-action-disabled cursor-not-allowed"}`}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
