"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  image: string;
}

export default function ProductCard({
  title,
  description,
  price,
  oldPrice,
  image,
}: ProductCardProps) {
  const router = useRouter();

  const handleBuy = () => {
    router.push(`/checkout?product=${encodeURIComponent(title)}`);
  };

  return (
    <div className="rounded-2xl border border-white/20 bg-black/40 p-6 text-white shadow-lg backdrop-blur-md transition hover:translate-y-[-2px] hover:bg-black/50">
      <div className="relative mb-4 h-64 w-full overflow-hidden rounded-xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mb-3 text-sm text-gray-300">{description}</p>

      <p className="mb-4 text-sm text-green-400">In Stock</p>

      <div className="mb-6 flex items-center gap-2">
        <span className="text-lg font-bold">{price}</span>
        {oldPrice && (
          <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
        )}
      </div>

<button
  onClick={handleBuy}
  style={{
    backgroundColor: "#06b6d4", // cyan-500
    color: "white",
    borderRadius: "9999px",
    padding: "0.5rem 1.5rem",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    margin: "0 auto", // هادي كتوسط الزر
  }}
>
  Buy Now <ShoppingCart size={18} />
</button>
    </div>
  );
}
