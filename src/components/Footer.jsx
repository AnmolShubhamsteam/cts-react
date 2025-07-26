import { Wifi } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"

export function Footer() {
  return (
    <AnimatedSection>
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">CTS 2025</h3>
            </div>
            <p className="text-green-200 mb-6">Candela Technology Summit - Advancing Wireless Innovation</p>
            <p className="text-green-300 text-sm">© 2025 CTS Event — Powered by Candela Technologies</p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  )
}
