"use client";

import { useSearchParams } from "next/navigation";
import Wizard from "@/components/checkout/Wizard";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-3xl rounded-2xl border border-white/20 bg-black/40 p-8 backdrop-blur-md">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        {product ? (
          <>
            <p className="mb-6 text-lg">
              🛒 You are buying: <b>{product}</b>
            </p>
            <Wizard />
          </>
        ) : (
          <p className="mb-4">⚠️ No product selected.</p>
        )}
      </div>
    </div>
  );
}
