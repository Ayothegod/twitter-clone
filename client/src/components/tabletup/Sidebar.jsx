import { sidebarLinks } from "../../utils/links";
import { Link } from "react-router-dom";
import testProfile from "../../assets/20220529_232847.jpg";

//  ${urlPathname === link.to && "text-slate-900"}
export default function Sidebar() {
  return (
    <div className="hidden sm:block space-y-8 py-4 px-2 overflow-y-scroll max-h-screen">
      {sidebarLinks.map((link, idx) => (
        <Link
          to={`/${link.to}`}
          key={idx}
          className={`flex items-center gap-4`}
        >
          {<link.icon className="h-8 w-7" />}
          <p className="hidden xl:block font-bold text-2xl ">{link.text}</p>
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
