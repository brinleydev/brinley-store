import { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "1",
    name: "FiveM Roleplay Server",
    type: "server",
    description: "Complete RP server with optimized scripts.",
    shopLink: "/checkout/1",
    coverImage: "/images/fivem-server.png", // ✅ هادي هي اللي تستعمل
    releaseDate: Date.now(),
    price: 50,
    tags: ["fivem", "roleplay", "server"]
  },
]