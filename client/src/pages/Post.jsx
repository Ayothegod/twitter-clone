import Recommend from "../components/tabletup/Recommend";
import Sidebar from "../components/tabletup/Sidebar";
import PostBody from "../components/ui/PostBody";

export default function Post() {
  return (
    <main className="container mx-auto py-2 font-sans relative">
      <div className="flex xl:body-xl 2xl:body-2xl">
        <Sidebar />
        <PostBody/>
        <Recommend />
      </div>
    </main>
  );
}


// solve that empty space on home header
// 