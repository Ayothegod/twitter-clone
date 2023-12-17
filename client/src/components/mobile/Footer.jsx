import { Link, useLocation } from "react-router-dom";
import { footerLinks } from "../../utils/links";

export default function Footer() {
  const location = useLocation();
  const urlPathname = location.pathname.slice(1);

  return (
    <div className=" fixed bottom-0 w-full px-2 sm:hidden">
      <div className="border-t flex justify-between px-4 py-3">
        {footerLinks.map((link, idx) => (
          <Link
            to={`/${link.to}`}
            key={idx}
            className={`text-slate-400 font-bold ${
              urlPathname === link.to && "text-slate-900"
            }`}
          >
            {<link.icon />}
          </Link>
        ))}
      </div>
    </div>
  );
}
