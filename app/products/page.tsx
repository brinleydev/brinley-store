import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-12 text-white">
      {/* Banner Section */}
      <div className="mb-12 text-center">
        <div className="inline-block rounded-full bg-purple-900/40 px-4 py-1 text-sm font-semibold text-purple-300">
          ⭐ WE HAVE WON COUNTLESS AWARDS FOR OUR WORK
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          OUR PRODUCTS CATALOGUE
        </h1>
        <div className="mt-2 h-1 w-32 mx-auto rounded bg-pink-500"></div>
        <p className="mt-4 text-gray-300">
          Browse the complete library of <span className="text-pink-400">Brinley Shop</span>
        </p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <ProductCard
          title="QBCore NoPixel 4.0 Inspired Full Server"
          description="Complete RP server with optimized scripts."
          price="€100.90"
          oldPrice="€150.92"
          image="/images/fivem-server.png"
        />
      </div>
    </div>
  );
}
