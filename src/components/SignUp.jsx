import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-yellow-200 via-orange-100 to-yellow-300">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Welcome Section */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-extrabold text-brown-900">
            Join Hot Hot Cold Coffee 2!
          </h1>
          <p className="py-6 text-brown-800">
            Create an account to manage your coffee inventory and keep track of
            all your favorite brews. Start your journey with us today!
          </p>
        </div>

        {/* Sign-Up Form */}
        <div className="card w-full max-w-sm shadow-lg shadow-yellow-500/50 bg-white text-gray-800 rounded-lg">
          <form onSubmit={handleSignUp} className="card-body">
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-brown-700">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div>

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
            </div>

            {/* Confirm Password Input */}
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-brown-700">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div> */}

            {/* Sign-Up Button */}
            <div className="form-control mt-6">
              <button className="btn w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold border-none transition-all">
                Sign Up
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm mt-4 text-brown-700">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-yellow-700 font-medium link-hover underline"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
