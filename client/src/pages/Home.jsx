
// put a redirect to auth, so a not-signed in user can never come to this page
// font-sans bg-red-600 sm:bg-blue-600 md:bg-green-600 lg:bg-purple-600 xl:bg-slate-900 2xl:bg-pink-400

import Header from "../components/ui/Header";

export default function Home() {
  return (
    <main className="container mx-auto px-2 py-2 font-sans">
      <Header homepage={true}/>
    </main>
  )
}
