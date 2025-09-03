'use client'

import type { FC } from 'react'
import FAQ from '@/components/FAQ'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

const Home: FC = () => {
  return (
    <>
      {/* ✅ Hero / Logo Section */}
      <div className="mx-auto mt-20 flex w-[90%] max-w-[1400px] justify-between lg:mt-40">
        <section className="mx-auto flex max-w-[600px] flex-col gap-4 text-center lg:mx-0 lg:text-left">
          <h1 className="text-[35px]/[45px] font-bold italic md:text-[50px]/[60px] text-white">
            Welcome to <span className="text-fm-aqua">Brinley SSHOP</span>
          </h1>
          <h6 className="font-medium text-fm-aqua md:text-lg">
            Premium FiveM Scripts & Full Servers – Ready to Launch 🚀
          </h6>

          {/* 🚀 Shop Now Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <Link
              href="/products"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full 
             bg-fm-aqua text-black font-semibold shadow-lg
             hover:bg-fm-aqua/80 transition-all duration-300"
            >
              Shop Now <ShoppingCart size={18} />
            </Link>
          </div>
        </section>
        <Image
          src="/home-logo.svg"
          alt="Brinley Development Outlined Logo"
          width={350}
          height={0}
          className="mx-auto hidden lg:block"
          draggable={false}
        />
      </div>

      {/* ✅ About us Section */}
      <div className="mt-16 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg w-[90%] max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">About us</h2>
        <p className="text-gray-300 mb-6">
          At <span className="text-pink-500 font-semibold">Brinley SSHOP</span>, we deliver
          high-quality scripts and maps inspired by top servers.
          <span className="text-purple-400"> As the #1 in the market</span>, we focus on
          innovation, precision, and performance to elevate your gaming experience.
          <span className="text-pink-500 font-semibold"> Join us and build something
          extraordinary!</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-white">+200</p>
            <p className="text-gray-400">Products Sold</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">+150</p>
            <p className="text-gray-400">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white flex items-center justify-center gap-2">
              ⭐ 4.95
            </p>
            <p className="text-gray-400">Feedback Rating</p>
          </div>
        </div>
      </div>

      {/* ✅ Our Socials Section */}
      <section
        id="socials"
        className="mx-auto mt-20 w-[90%] max-w-[900px] rounded-2xl border border-white/20 bg-black/40 p-8 text-center text-white backdrop-blur-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-fm-aqua mb-6">Our Socials</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://discord.gg/yourdiscord"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-fm-aqua text-black font-semibold hover:bg-fm-aqua/80 transition"
          >
            Discord
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-fm-aqua text-black font-semibold hover:bg-fm-aqua/80 transition"
          >
            Twitter
          </a>
          <a
            href="https://youtube.com/yourchannel"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-fm-aqua text-black font-semibold hover:bg-fm-aqua/80 transition"
          >
            YouTube
          </a>
        </div>
      </section>

      {/* ✅ Terms of Services Section */}
      <section
        id="terms"
        className="mx-auto mt-20 w-[90%] max-w-[900px] rounded-2xl border border-white/20 bg-black/40 p-8 text-white backdrop-blur-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Terms of Services</h2>
        <p className="text-gray-300 leading-relaxed">
          By using our services, you agree to comply with all applicable rules and regulations.
          Mods and digital products purchased are for personal use only and may not be resold or
          redistributed. Refunds are only available under specific conditions. For more information,
          please contact our support team.
        </p>
      </section>

      {/* ✅ FAQ Section */}
      <FAQ />
    </>
  )
}

export default Home
