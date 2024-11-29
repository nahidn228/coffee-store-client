import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result);

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`http://localhost:5000/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("sign in info update in DB", data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-yellow-200 via-orange-100 to-yellow-300">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Illustration Section */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-bold text-brown-900">
            Welcome to Hot Hot Cold Coffee 2!
          </h1>
          <p className="py-6 text-brown-800">
            Fuel your day with your favorite coffee. Sign in to manage your
            coffee inventory, or explore more about your coffee collection!
          </p>
        </div>

        {/* Sign-In Form */}
        <div className="card w-full max-w-sm shadow-2xl bg-white text-gray-800 rounded-lg">
          <form onSubmit={handleSignIn} className="card-body">
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-brown-700">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-brown-700">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
              <label className="label">
                <Link
                  href="#"
                  className="label-text-alt link link-hover text-yellow-600"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            {/* Sign-In Button */}
            <div className="form-control mt-6">
              <button className="btn w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold border-none transition-all">
                Sign In
              </button>
            </div>

            {/* Sign-Up Link */}
            <p className="text-center text-sm mt-4 text-brown-700">
              New to Hot Hot Cold Coffee ?{" "}
              <Link
                href="/signup"
                className="text-yellow-700 font-medium link-hover underline"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
