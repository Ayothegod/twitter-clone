/* eslint-disable react/prop-types */
import testProfile from "../../assets/20220529_232847.jpg";
import { Settings, Settings2 } from "lucide-react";

export default function Header({
  homepage,
  searchpage,
  notification,
  message,
}) {
  return (
    <div className="border-b pb-2 mx-2">
      {/* mobile */}
      <div className="flex items-center gap-4">
        <img
          src={testProfile}
          alt="test-image"
          className="h-10 w-10 rounded-full"
        />
        <div className="w-full">
          {homepage && (
            <div className=" flex items-center justify-center">
              <p className=" font-bold text-2xl">Tweeter.</p>
            </div>
          )}
          {searchpage && (
            <div className="flex items-center justify-between gap-4">
              <input
                type="text"
                placeholder="Search Tweeter"
                className="btn"
              />
              <Settings />
            </div>
          )}
          {notification && (
            <div className="flex items-center justify-between gap-4">
              <p className="font-bold text-2xl">Notifications</p>
              <Settings />
            </div>
          )}
          {message && (
            <div className="flex items-center justify-between gap-4">
              <input
                type="text"
                placeholder="Search Direct Messages"
                className="btn"
              />
              <Settings />
            </div>
          )}
        </div>
      </div>

      {/* desktop */}
    </div>
  );
}
