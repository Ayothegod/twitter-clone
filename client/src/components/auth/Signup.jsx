import { useActionStore } from "../../lib/stores/actionStore";

export default function Signup() {
  const updateAuthVariant = useActionStore((state) => state.updateAuthVariant);
  
  const onSubmit = () => {};

  return (
    <main className="mt-20">
      <p className="text-xl font-bold mb-4">Sign up to Tweeter</p>
      <form action="post" onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          className="btn py-4 px-4 text-lg placeholder:text-lg"
          placeholder="Input username"
        />
        <input
          type="text"
          className="btn py-4 px-4 text-lg placeholder:text-lg"
          placeholder="Input fullname"
        />
        <input
          type="password"
          className="btn py-4 px-4 text-lg placeholder:text-lg"
          placeholder="Input password"
        />
      </form>

      <button className="solid-btn w-full py-4 bg-action hover:bg-action-disabled mt-8">
        Sign up
      </button>
      <p className="text-gray-600 mt-2">
        Already have an account?{" "}
        <span
          className="text-action font-bold cursor-pointer underline"
          onClick={updateAuthVariant}
        >
          Sign in
        </span>{" "}
      </p>
    </main>
  );
}
