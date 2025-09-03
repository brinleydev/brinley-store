export type Product = {
  id: string
  name: string
  type: string
  description: string
  shopLink: string
  coverImage: string
  releaseDate: number
  price: number
  tags?: string[]
  showcaseImage?: string
  additionalDetails?: string
}