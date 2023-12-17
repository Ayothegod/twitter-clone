import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
export default function Message() {
  return (
    <main className="container mx-auto py-2 font-sans relative">
      <Header message={true}/>
      <Footer/>
    </main>
  )
}
