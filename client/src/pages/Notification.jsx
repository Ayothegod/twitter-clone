import Footer from "../components/mobile/Footer";
import Header from "../components/mobile/Header";
export default function Notification() {
  return (
    <main className="container mx-auto py-2 font-sans relative">
      <Header notification={true}/>
      <Footer/>
    </main>
  )
}
