'use client'

import { type FC } from 'react'
import Image from 'next/image'
import { customers } from '@/data/customers'

const Customers: FC = () => {
  return (
    <section className="mx-auto my-20 w-[90%] max-w-[1400px]">
      <h2 className="mb-10 text-center text-3xl font-bold text-fm-aqua">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {customers.map((c) => (
          <div
            key={c.id}
            className="rounded-xl border border-fm-aqua/20 bg-fm-dark/40 p-6 shadow-md backdrop-blur-lg"
          >
            <div className="flex items-center gap-4">
              <Image
                src={c.image}
                alt={c.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="text-yellow-400">{'⭐'.repeat(c.rating)}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">{c.review}</p>

            {c.proofImage && (
              <Image
                src={c.proofImage}
                alt="Proof"
                width={300}
                height={200}
                className="mt-4 rounded-lg border border-fm-aqua/20"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Customers
