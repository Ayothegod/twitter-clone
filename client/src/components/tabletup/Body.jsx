import { Settings } from "lucide-react";

export default function Body() {
  return (
    <div className=" min-h-screen w-full">
      <header className="p-2 border-b">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl"> Home</p>
          <Settings/>
        </div>
        <p className="text-center font-semibold">For you</p>
      </header>
    </div>
  )
}
