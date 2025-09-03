import { Customer } from '@/types/customer'

export const customers: Customer[] = [
  {
    id: '1',
    name: 'John Doe',
    image: '/images/customers/john.png',
    rating: 5,
    review: 'Amazing quality, I really love this server!',
    featured: true,
    createdAt: Date.now(),
    proofImage: '/images/customers/proof1.png',
  },
  {
    id: '2',
    name: 'Sarah Smith',
    image: '/images/customers/sarah.png',
    rating: 4,
    review: 'Very good support and fast delivery.',
    featured: false,
    createdAt: Date.now(),
    proofImage: '/images/customers/proof2.png',
  },
]
