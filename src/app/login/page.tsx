import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 mt-[30px] mb-[30px] pt-[70px]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
       
        {/* Heading */}
        <h1 className="text-2xl text-[#1d3557] font-semibold text-center mb-6">
          Login to Your Account
        </h1>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email address"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              required
            />
          </div>

          {/* Checkbox and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keep-me-signed-in"
                className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                defaultChecked
              />
              <label htmlFor="keep-me-signed-in" className="text-sm text-gray-700">
                Keep me logged in
              </label>
            </div>
            <Link href="#" className="text-sm text-[#BCBCBC] hover:text-blue-950">Forgot your password?</Link>
          </div>

          {/* Terms and Conditions */}
          <p className="text-center text-sm text-[#8D8D8D] mb-6">
            By logging in, you agree to our <span className="underline text-blue-950">Privacy Policy</span> and <span className="underline text-blue-950">Terms of Use</span>.
          </p>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-[#1d3557] text-white text-lg font-semibold rounded-md hover:bg-[#457b9d] focus:outline-none focus:ring-2 focus:ring-blue-950 transition-all duration-300"
          >
            Log In
          </button>
        </form>

        {/* Join Us Paragraph */}
        <div className="text-center mt-9 text-sm text-gray-700">
          <p>Not a member? <Link href='/signup'><span className="font-semibold text-[#1d3557] hover:underline">Join Us</span></Link>.</p>
        </div>
      </div>
    </div>
  );
}
