'use client'

import { type FC } from "react"
import { Customer } from "@/types/customer"

type Props = {
  customer: Customer
}

const CustomersCard: FC<Props> = ({ customer }) => {
  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <img
        src={customer.image}
        alt={customer.name}
        className="w-16 h-16 rounded-full mb-2"
      />
      <h2 className="text-xl font-semibold">{customer.name}</h2>
      <p className="text-gray-600">{customer.review}</p>
      <span className="text-yellow-500">{customer.rating} ⭐</span>

      {/* proof image */}
      {customer.proofImage && (
        <img
          src={customer.proofImage}
          alt="proof"
          className="mt-3 rounded-lg border w-full max-h-60 object-cover"
        />
      )}
    </div>
  )
}

export default CustomersCard
