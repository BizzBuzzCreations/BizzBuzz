import { Star } from "lucide-react";

export default function Counter() {
  return (
    <div
      className="grid grid-cols-2 gap-x-6 gap-y-12 sm:flex sm:flex-wrap sm:items-center sm:justify-center mb-20 sm:gap-20 py-20 px-10 text-white"
      style={{
        background: "linear-gradient(to right, #0B60B0 0%, #40A2D8 100%)",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold mb-2">50+</p>
        <p className="text-xl font-bold">Projects Delivered</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold mb-2">10000+</p>
        <p className="text-xl font-bold">Leads Generated</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold mb-2 flex items-center gap-1">
          4.9
          <Star size={30} />
        </p>
        <p className="text-xl font-bold">Google Rating</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold mb-2">3+</p>
        <p className="text-xl font-bold">Years Experience</p>
      </div>
    </div>
  );
}
