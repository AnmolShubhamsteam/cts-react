"use client"

import { Wifi } from "lucide-react"

export function Header({ onBackToHome }) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBackToHome}>
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">CTS 2025</h1>
              <p className="text-sm text-green-600">Candela Technology Summit</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#speakers" className="text-green-700 hover:text-green-800 font-medium transition-colors">
              Speakers
            </a>
            <a href="#sessions" className="text-green-700 hover:text-green-800 font-medium transition-colors">
              Sessions
            </a>
            <a href="#venue" className="text-green-700 hover:text-green-800 font-medium transition-colors">
              Venue
            </a>
            <a href="#contact" className="text-green-700 hover:text-green-800 font-medium transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
