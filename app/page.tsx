import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-red-500">
        AutoVibe 🚗
      </h1>

      <p className="mt-4 text-lg text-gray-300">
        Upgrade Your Drive.
      </p>

      <Link href="/products">
        <button className="mt-6 px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition">
          Explore Products
        </button>
      </Link>
    </main>
  );
}

