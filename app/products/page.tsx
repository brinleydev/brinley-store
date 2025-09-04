import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-12 text-white">
      {/* Banner small above title */}
      <div className="mb-6 flex justify-center">
        <span className="rounded-full bg-pink-600/20 px-4 py-1 text-sm font-semibold text-pink-400">
          ⭐ WE HAVE WON COUNTLESS AWARDS FOR OUR WORK
        </span>
      </div>

      {/* Main Title */}
      <h1 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-white">
        OUR PRODUCTS CATALOGUE
        <span className="block mt-2 text-lg font-medium text-pink-400">
          Browse the complete library of Brinley Shop
        </span>
      </h1>

      {/* Products Grid */}
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
