
// put a redirect to auth, so a not-signed in user can never come to this page
// font-sans bg-red-600 sm:bg-blue-600 md:bg-green-600 lg:bg-purple-600 xl:bg-slate-900 2xl:bg-pink-400

import Footer from "../components/mobile/Footer";
import Header from "../components/mobile/Header";
import Sidebar from "../components/tabletup/Sidebar";
import Body from "../components/tabletup/Body";
import Recommend from "../components/tabletup/Recommend";

export default function Home() {
  return (
    <main className="container mx-auto py-2 font-sans relative">
      <Header homepage={true}/>
      
      {/* sm upwards */}
      <div className="flex xl:body-xl 2xl:body-2xl">
        <Sidebar/>
        <Body/>
        <Recommend/>
      </div>

      <Footer/>
    </main>
  )
}
