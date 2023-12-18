// put a redirect, so a signed in user can never return to this page
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import { useActionStore } from "../lib/stores/actionStore";

export default function Auth() {
  const authVariant = useActionStore((state) => state.authVariant);

  return (
    <main className="container mx-auto py-2 px-4 font-sans relative">
      <p className="font-bold text-3xl">Tweeter</p>
               
      {
        authVariant ? <Signup/>  : <Signin/> 
      }
    </main>
  );
}
