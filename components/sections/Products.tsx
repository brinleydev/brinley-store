'use client'

import type { FC } from 'react'
import Image from 'next/image'
import { products } from '@/data/products'

const Products: FC = () => {
  const product = products[0] // 👈 غير أول برودوي (حيت عندك واحد)

  return (
    <section className="mx-auto mt-20 flex w-[90%] max-w-[800px] justify-center">
      <div className="w-full rounded-3xl border border-white/20 bg-black/50 p-6 text-white backdrop-blur-lg shadow-lg">
        {/* Image */}
        <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl">
          <Image
            src={product.coverImage}  // ✅ صلحنا هنا
            alt={product.name}        // ✅ استعملنا name بدل title
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <p className="mt-2 text-gray-300">{product.description}</p>
          <p className="mt-4 text-xl font-extrabold text-fm-aqua">
            ${product.price}
          </p>
          <button className="mt-6 rounded-xl bg-fm-aqua px-6 py-3 text-lg font-semibold text-black transition hover:bg-fm-aqua/80">
            Fauture
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
