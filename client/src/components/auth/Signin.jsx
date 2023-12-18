import { useActionStore } from "../../lib/stores/actionStore";
import { Link } from "react-router-dom";

export default function Signin() {
  const updateAuthVariant = useActionStore((state) => state.updateAuthVariant);

  const onSubmit = () => {};

  return (
    <main className="mt-20">
      <p className="text-xl font-bold mb-4">Sign in to continue</p>
      <form action="post" onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          className="btn py-4 px-4 text-lg placeholder:text-lg"
          placeholder="Input fullname"
        />
        <div>
          <input
            type="password"
            className="btn py-4 px-4 text-lg placeholder:text-lg"
            placeholder="Input password"
          />
          <p className="text-gray-600 mt-2">Forgotten password? <Link to="/" className="text-action font-bold cursor-pointer underline">restore your password here.</Link></p>
        </div>
      </form>

      <button className="solid-btn w-full py-4 bg-action hover:bg-action-disabled mt-8">
        Sign up
      </button>
      <p className="text-gray-600 mt-2">
        Don&apos;t have an account?{" "}
        <span
          className="text-action font-bold cursor-pointer underline"
          onClick={updateAuthVariant}
        >
          Sign up
        </span>{" "}
      </p>
    </main>
  );
}
