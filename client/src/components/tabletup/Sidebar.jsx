import { sidebarLinks } from "../../utils/links";
import { Link } from "react-router-dom";
import testProfile from "../../assets/20220529_232847.jpg";

export default function Sidebar() {
  return (
    <div className="hidden sm:block space-y-4 py-4 px-2 max-h-screen border-r">
      {sidebarLinks.map((link, idx) => (
        <Link
          to={`/${link.to}`}
          key={idx}
          className={`flex items-center gap-4 hover:bg-slate-200 p-1 rounded-full ${link.to==="tweet" && "bg-action text-white font-semibold hover:bg-action"}`}
        >
          {<link.icon className="h-8 w-7" />}
          <p className="hidden 2xl:flex font-bold text-2xl ">{link.text}</p>
        </Link>
      ))}
      <img
        src={testProfile}
        alt="test-image"
        className="h-10 w-10 rounded-full cursor-pointer"
      />
    </div>
  );
}
