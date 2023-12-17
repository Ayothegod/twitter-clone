/* eslint-disable react/prop-types */
import testProfile from "../../assets/20220529_232847.jpg";

export default function Header({
  homepage,
  searchpage,
  notification,
  message
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
          {searchpage && <p>searchpage</p>}
          {notification && <p>Notification</p>}
          {message && (
            <div>
              <input type="text" className="bg-slate-200"/>
              
            </div>
          )}
        </div>
      </div>

      {/* desktop */}
    </div>
  );
}
