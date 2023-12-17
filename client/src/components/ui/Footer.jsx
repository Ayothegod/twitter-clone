import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const urlPathname = location.pathname.slice(1);
  const links = [
    { to: "home", icon: "Home" },
    { to: "search", icon: "Search" },
    { to: "notification", icon: "Notification" },
    { to: "message", icon: "Message" },
  ];

  return (
    <div className=" fixed bottom-0 w-full px-2 sm:hidden">
      <div className="border-t border-black flex justify-between  py-2">
        {links.map((link, idx) => (
          <Link
            to={`/${link.to}`}
            key={idx}
            className={`text-slate-400 font-semibold ${
                urlPathname === link.to && "text-slate-900"
              }`}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
