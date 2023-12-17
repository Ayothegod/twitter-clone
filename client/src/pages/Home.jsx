
// put a redirect to auth, so a not-signed in user can never come to this page
// font-sans bg-red-600 sm:bg-blue-600 md:bg-green-600 lg:bg-purple-600 xl:bg-slate-900 2xl:bg-pink-400

import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

export default function Home() {
  return (
    <main className="container mx-auto py-2 font-sans relative">
      <Header homepage={true}/>
      
      <Footer/>
    </main>
  )
}
