import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          OUR PRODUCTS CATALOGUE
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          Browse the complete library of Brinley Developpments System's
        </p>
      </div>

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
