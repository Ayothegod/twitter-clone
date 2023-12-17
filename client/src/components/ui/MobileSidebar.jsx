import { useActionStore } from "../../lib/stores/actionStore";
import testProfile from "../../assets/20220529_232847.jpg";
import {
  MoreVertical,
  UserRound,
  Twitter,
  Bookmark,
  CreditCard,
  Settings,
  HelpCircle,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileSidebar() {
  const links = [
    { to: "profile", icon: UserRound, text: "Profile" },
    { to: "premium", icon: Twitter, text:"Premium" },
    { to: "bookmark", icon: Bookmark, text: "Bookmark" },
    { to: "monetization", icon: CreditCard, text: "Monetization" },
    { to: "profile", icon: UserRound, text: "Profile" },
    { to: "premium", icon: Twitter, text:"Premium" },
    { to: "bookmark", icon: Bookmark, text: "Bookmark" },
    { to: "monetization", icon: CreditCard, text: "Monetization" },
    { to: "profile", icon: UserRound, text: "Profile" },
    { to: "premium", icon: Twitter, text:"Premium" },
    { to: "bookmark", icon: Bookmark, text: "Bookmark" },
    { to: "monetization", icon: CreditCard, text: "Monetization" },
  ];
  const updateOpenSidebar = useActionStore((state) => state.updateOpenSidebar);
  const user = useActionStore((state) => state.user);
  return (
    <div className="fixed z-50 left-0 top-0 h-screen bg-white border-r-2 p-4 w-[90vw] sm:hidden ">
      <div className="flex flex-col gap-2 border-b py-4">
        <div className="flex items-center justify-between">
          <img
            src={testProfile}
            alt="test-image"
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={updateOpenSidebar}
          />
          <MoreVertical />
        </div>
        <div>
          {/* Name of user available*/}
          <p className="font-semibold text-xl">{user?.name || "undefined"}</p>
          <p className="text-sm font-medium text-slate-600">
            @{user?.username || "Ayo"}
          </p>
        </div>
        <div className="flex justify-between ">
          {/* followers count*/}
          <p className="font-semibold">
            <span className="text-sm font-medium">100</span> followers
          </p>
          <p className="font-semibold">
            <span className="text-sm font-medium">258</span> following
          </p>
        </div>
      </div>

      {/* icons stuff */}
      <div className="py-4 space-y-2 border-b overflow-y-scroll max-h-[400px]">
        {links.map((link, idx) => (
            <Link
            to={`/${link.to}`}
            key={idx}
            className={`flex items-center gap-8 `}
            >
            {<link.icon />}
            <p className="font-bold text-2xl">{link.text}</p>
          </Link>
        ))}
      </div>

      {/* fixed theme button */}
      <div className="fixed bottom-0 bg-black w-[calc(90vw-32px)]">
        Hello
      </div>
    </div>
  );
}
