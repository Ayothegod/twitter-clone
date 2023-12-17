/* eslint-disable react/prop-types */
import testProfile from "../../assets/20220529_232847.jpg"

export default function Header({first, homepage, searchpage, notification, message}) {
    console.log(first);
  return (
    <div>
        
        {/* mobile */}
        <div>
            <img src={testProfile} alt="test-image" className="h-10 w-10 rounded-full" />
            <div>
                {homepage && <p>Logo</p>}
                {searchpage && <p>searchpage</p>}
                {notification && <p>Notification</p>}
                {message && <p>Message</p>}
            </div>
        </div>
    </div>
  )
}
