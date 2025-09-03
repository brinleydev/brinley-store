'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What makes Brinley Developments unique?',
    answer: 'We provide premium quality scripts and servers inspired by top communities, optimized for performance.',
  },
  {
    question: 'Why should I trust Brinley Developments?',
    answer: 'Because we focus on reliability, updates, and customer support, ensuring your server runs smoothly.',
  },
  {
    question: 'Do you provide support after purchase?',
    answer: 'Yes, our support team is available to help you with installation and troubleshooting after purchase.',
  },
  {
    question: 'Do you offer updates or improvements?',
    answer: 'Absolutely! We frequently update our products to ensure compatibility and performance.',
  },
  {
    question: 'Can I get a refund if I’m not satisfied?',
    answer: 'Refunds are available only under specific conditions. Please check our Terms of Services for details.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="mx-auto mt-20 w-[90%] max-w-[900px] rounded-2xl border border-white/20 bg-black/40 p-8 text-white backdrop-blur-lg shadow-lg"
    >
      <div className="text-center mb-10">
        <span className="px-4 py-1 rounded-full bg-fm-aqua/20 text-fm-aqua font-medium text-sm">
          Important Info 📒
        </span>
        <h2 className="text-4xl font-bold text-pink-400 mt-4">FAQ</h2>
        <p className="text-gray-400 mt-2">
          Here are some of the most frequently asked questions about our store.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="bg-white/10 border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span>{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
