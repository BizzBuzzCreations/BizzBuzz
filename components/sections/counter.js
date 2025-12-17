import { Star } from "lucide-react";

export default function Counter() {
  return (
    <div
      className="flex flex-wrap items-center justify-center mb-20 gap-20 p-20 text-white"
      style={{
        background: "linear-gradient(to right, #434343 0%, black 100%);",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold mb-2">500+</p>
        <p className="text-xl font-bold">Projects Delivered</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold mb-2">30000+</p>
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
        <p className="text-4xl font-bold mb-2">7+</p>
        <p className="text-xl font-bold">Years Experience</p>
      </div>
    </div>
  );
}
