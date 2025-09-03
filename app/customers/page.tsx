'use client'

import { type FC } from "react"
import TitleHeader from "@/components/common/title-header"
import { customers } from "@/data/customers"

const CustomersPage: FC = () => {
  return (
    <section className="mx-auto w-[90%] max-w-[1400px] py-8">
      <TitleHeader
        title="We build the trust of our customers"
        subtitle="Discover what they think of us."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
        {customers.map((c) => (
          <div key={c.id} className="p-4 border rounded-lg shadow bg-white">
            <img
              src={c.image}
              alt={c.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h2 className="text-xl font-semibold">{c.name}</h2>
            <p className="text-gray-600">{c.review}</p>
            <span className="text-yellow-500">{c.rating} ⭐</span>

            {/* proof image */}
            {c.proofImage && (
              <img
                src={c.proofImage}
                alt="proof"
                className="mt-3 rounded-lg border w-full max-h-60 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CustomersPage
