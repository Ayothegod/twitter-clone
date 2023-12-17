import { Settings } from "lucide-react";
import CreatePost from "./CreatePost";

export default function Body() {
  return (
    <div className="min-h-screen w-full">
      <header className="p-4 border-b">
        <div className="hidden sm:flex items-center justify-between">
          <p className="font-bold text-xl"> Home</p>
          <Settings />
        </div>
        <div>
          <p className="text-center font-semibold">For you</p>
          {/* Incase i want to add a followings only view */}
        </div>
      </header>

      <CreatePost/>

    </div>
  );
}
