
export default function Recommend() {
  return (
    <div className="hidden xl:block p-4">
      
      {/* search */}
      <div>
        <input type="text" placeholder="Search" className="btn py-2 placeholder:text-base"/>
      </div>

      <div className="p-4">
        <p className="text-2xl font-bold">Subscribe to tweeter Premium</p>
        <p>Subscribe to be the first to enjoy our new features as we release them.</p>
        <button className="solid-btn">Subscribe</button>
      </div>
    </div>
  )
}
