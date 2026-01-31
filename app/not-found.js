import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        background:
          "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
      }}
      className="h-screen flex flex-col justify-center items-center"
    >
      <Image src="/404.gif" width={500} height={500} />
      <h2 className="text-3xl font-bold text-black mb-2">Page Not Found!</h2>
      <p className="mb-5">Don't worry, return to the home page.</p>
      <Link href="/" className="inline-block">
        <button className="relative cursor-pointer border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg overflow-hidden group">
          <span className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
          <span className="relative z-10 group-hover:text-white">Return Home</span>
        </button>
      </Link>
    </div>
  );
}
