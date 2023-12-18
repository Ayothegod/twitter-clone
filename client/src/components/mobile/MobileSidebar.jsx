import { useActionStore } from "../../lib/stores/actionStore";
import testProfile from "../../assets/20220529_232847.jpg";
import {
  MoreVertical,
  Settings,
  HelpCircle,
  Sun,
  MoveDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { mobileSidebarLinks } from "../../utils/links";

export default function MobileSidebar() {
  const updateOpenSidebar = useActionStore((state) => state.updateOpenSidebar);
  const user = useActionStore((state) => state.user);
  const isSettingsDropdown = useActionStore(
    (state) => state.isSettingsDropdown
  );
  const updateIsSettingsDropdown = useActionStore(
    (state) => state.updateIsSettingsDropdown
  );

  return (
    <div className="fixed z-50 left-0 top-0 h-screen bg-white border-r-2 w-[90vw] sm:hidden ">
      <div className="flex flex-col gap-2 border-b py-4 m-4 sticky TOP-0">
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
          <p className="font-semibold text-xl">{user?.name}</p>
          <p className="text-sm font-medium text-slate-600">
            @{user?.username}
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

      {/* icons stuff overflow-y-scroll max-h-[400px]*/}
      <div className="m-4 py-4 space-y-2 border-b">
        {mobileSidebarLinks.map((link, idx) => (
          <Link
            to={`/${link.to}`}
            key={idx}
            className={`flex items-center gap-8 hover:bg-slate-200 p-1 rounded-full`}
          >
            {<link.icon />}
            <p className="font-bold text-2xl">{link.text}</p>
          </Link>
        ))}
      </div>

      {/* setting and support */}
      <div className="m-4 py-4 space-y-2">
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold text-lg"> Settings and Support</p>
          <MoveDown onClick={updateIsSettingsDropdown} className="cursor-pointer"/>
        </div>

        {isSettingsDropdown && (
          <div className="space-y-2 ">
            <Link to="/" className={`flex items-center gap-8 hover:bg-slate-200 p-1 rounded-full`}>
                <Settings/>
                <p className="font-bold text-2xl"> Settings and Privacy</p>
            </Link>
            <Link to="/" className={`flex items-center gap-8 hover:bg-slate-200 p-1 rounded-full`}>
                <HelpCircle/>
                <p className="font-bold text-2xl">Help Center</p>
            </Link>
          </div>
        )}
      </div>

      {/* fixed theme button */}
      <div className="absolute bottom-0 w-full p-3 border-t">
        <Sun className="hover:text-slate-600" />
      </div>
    </div>
  );
}
