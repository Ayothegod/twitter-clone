import Footer from "../components/mobile/Footer";
import Header from "../components/mobile/Header";

export default function Search() {
  return (
    <main className="container mx-auto py-2 font-sans relative">
    <Header searchpage={true}/>
    <Footer/>
  </main>
  )
}
