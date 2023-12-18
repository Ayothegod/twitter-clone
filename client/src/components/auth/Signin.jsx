import { useActionStore } from "../../lib/stores/actionStore";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signin() {
  const updateAuthVariant = useActionStore((state) => state.updateAuthVariant);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="mt-20 w-full sm:max-w-[20rem] md:max-w-[30rem] mx-auto">
      <p className="text-xl font-bold mb-4">Sign in to continue</p>
      <form
        action="post"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div>
          <input
            type="text"
            className="btn py-4 px-4 text-lg placeholder:text-lg"
            placeholder="Input username"
            {...register("username", {
              required: "Username is required.",
              maxLength: {
                value: 60,
                message: "your username should not be more than 60",
              },
              minLength: {
                value: 3,
                message: "your username must not be less than 3",
              },
            })}
          />
          {errors?.username && (
            <p className="text-red-600 font-semibold">
              {errors?.username.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            className="btn py-4 px-4 text-lg placeholder:text-lg"
            placeholder="Input password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "your password must not be less than 6",
              },
            })}
          />
          {errors?.password && (
            <p className="text-red-600 font-semibold">
              {errors?.password.message}
            </p>
          )}

          <p className="text-gray-600 mt-2">
            Forgotten password?{" "}
            <Link
              to="/"
              className="text-action font-bold cursor-pointer underline"
            >
              restore your password here.
            </Link>
          </p>
        </div>
      <button className="solid-btn w-full py-4 bg-action hover:bg-action-disabled mt-8">
        Sign up
      </button>
      </form>

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
