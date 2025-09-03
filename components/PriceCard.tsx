"use client"

import { FC } from "react"
import { ArrowRight } from "lucide-react"

interface PriceCardProps {
  price: number
  oldPrice?: number
  inStock?: boolean
}

const PriceCard: FC<PriceCardProps> = ({ price, oldPrice, inStock = true }) => {
  return (
    <div className="p-4 rounded-xl bg-black/40 border border-white/10 shadow-lg w-fit">
      {/* ✅ Stock status */}
      <p className="text-sm text-gray-400 mb-1">
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      {/* ✅ Price */}
      <div className="flex items-center gap-3">
        <p className="text-lg font-bold text-pink-400">
          €{price.toFixed(2)}
        </p>
        {oldPrice && (
          <p className="text-gray-400 line-through">
            €{oldPrice.toFixed(2)}
          </p>
        )}
      </div>

      {/* ✅ Action button */}
      <button
        className="mt-3 flex items-center gap-2 px-4 py-2 rounded-full border border-pink-400 
        text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300"
      >
        <span className="font-medium">Buy Now</span>
        <ArrowRight size={18} />
      </button>
    </div>
  )
}

export default PriceCard
