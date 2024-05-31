import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center p-10 bg-gray-100">
      <div className=" p-8 rounded-lg w-[800px] mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl  text-gray-900 mb-12">
          <span className="font-bold">Zynapse</span> -{" "}
          <span className="italic">it's coming</span>
        </h1>
        <div className="text-left mt-28 rounded-lg shadow-sm italic flex gap-x-10">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">
            What you think, you become.
            <span className="block mt-4 text-gray-600">
              What you feel, you attract.
            </span>
            <span className="block mt-4 text-gray-600">
              What you imagine, you create.
            </span>
            <span className="block mt-4 text-gray-600">
              What you store, you retrieve.
            </span>
          </p>
          <div className="opacity-[0.6]">
            <Image
              src={"brain-line-icon.svg"}
              alt="brain"
              width={200}
              height={200}
            />
          </div>
        </div>
        <Link href={"/dashboard"} className="">
          <button className=" mt-10 bg-black text-white p-2 rounded">
            Dashboard
          </button>
        </Link>
      </div>
    </main>
  );
}
