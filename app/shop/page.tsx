'use client'

import type { FC } from 'react'
import { products } from '@/data/products'

// ✅ ProductCard
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 w-[600px] max-w-full text-center">
      <img
        src={product.coverImage}
        alt={product.name}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h2 className="text-2xl font-bold text-white">{product.name}</h2>
      <p className="text-gray-300 mt-2">{product.description}</p>
      <p className="text-lg font-semibold text-teal-400 mt-4">${product.price}</p>
      <a
        href={product.shopLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-md bg-fm-aqua px-4 py-2 text-sm font-semibold text-black transition hover:bg-fm-aqua/80"
      >
        Buy Now
      </a>
    </div>
  )
}

const Shop: FC = () => {
  return (
    <section id="shop" className="flex flex-col items-center justify-center gap-10 mt-20">
      <h1 className="text-4xl font-bold text-white mb-10">Shop</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default Shop
