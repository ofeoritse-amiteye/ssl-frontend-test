import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen fixed bg-[#f2f7f5]">
      <div className="absolute -bottom-32 left-[-60px] w-[400px] h-[400px] bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full opacity-60 hidden lg:block" />

      {/* Main Container */}
      <div className="relative flex flex-col md:flex-row w-full max-w-7xl h-auto md:h-[90vh] bg-white rounded-lg overflow-hidden shadow-lg z-50">
        
        {/* Left container */}
        <div className="relative w-full md:w-1/2 bg-[#06a67ee2] bg-opacity-0 text-white p-10 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 text-center">Welcome Back!</h2>
          <p className="text-center text-xl mb-12 w-[80%] md:w-[70%]">To keep connected with us please login with your personal info</p>
          <button className="w-[50%] py-4 border border-white rounded-full hover:bg-white hover:text-black transition">
            SIGN IN
          </button>

          {/*Shapes */}
          <div className="absolute top-16 right-40 w-16 h-16 bg-[#FFFFFF33] rotate-45 opacity-80" />
          <div className="absolute top-40 -right-14 w-28 h-28 bg-[#FFFFFF33] rounded-full opacity-80" />
          <div
            className="absolute top-64 right-6 w-36 h-28 bg-[#FFFFFF33] opacity-80 rotate-[-25deg]"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          />
          <div
            className="absolute bottom-24 right-40 w-20 h-6 bg-[#FFFFFF33] opacity-80 rotate-[45deg]"
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          />
        </div>

        {/* Right container */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center z-20">
          <h2 className=" text-4xl lg:text-5xl font-bold text-[#06a67ee2] mb-10 text-center">Create Account</h2>

          {/* Social icons*/}
          <div className="flex space-x-4 mb-16">
            <div className="w-10 h-8 rounded-full flex items-center justify-center">
              <Image src={"/images/twitter.svg"} alt="twitter" height={50} width={50} />
            </div>
            <div className="w-10 h-8 rounded-full flex items-center justify-center">
              <Image src={"/images/facebook.svg"} alt="facebook" height={50} width={50} />
            </div>
            <div className="w-10 h-8 rounded-full flex items-center justify-center">
              <Image src={"/images/linkedin.svg"} alt="linkedin" height={50} width={50} />
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-12">or use your email for registration</p>

          {/* Input Fields */}
          <form className="w-full space-y-4 flex flex-col items-center">
            <div className="relative w-[85%] md:w-[80%]">
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-12 pr-4 py-4 bg-[#F4F8F5] focus:outline-1"
              />
              <Image
                src="/images/user.svg"
                width={50}
                height={50}
                alt="User"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-10 rounded-full"
              />
            </div>
            <div className="relative w-[85%] md:w-[80%]">
              <input
                type="text"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-4 bg-[#F4F8F5] focus:outline-1"
              />
              <Image
                src="/images/mail.svg"
                width={50}
                height={50}
                alt="Email"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-10 rounded-full"
              />
            </div>
            <div className="relative w-[85%] md:w-[80%]">
              <input
                type="text"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 bg-[#F4F8F5] focus:outline-1"
              />
              <Image
                src="/images/lock.svg"
                width={50}
                height={50}
                alt="Lock"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-10 rounded-full"
              />
            </div>
            <button
              type="submit"
              className="w-[50%] py-4 bg-[#38B593] text-white rounded-full hover:bg-[#38B593] transition"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      <div
          className="absolute top-[-70px] right-[-200px] w-[600px] h-[600px] bg-red-400 z-10 -rotate-12 hidden lg:block"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
    </div>
  );
}
