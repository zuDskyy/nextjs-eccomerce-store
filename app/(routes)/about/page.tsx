"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button"
import { Award, Globe, Truck, Users } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">

      {/* Hero section */}
      <div className="text-center space-y-6">
        <Badge variant="outline" className="text-base px-4 py-1.5 rounded-2xl">
          About Us
        </Badge>
        <h1 className="text-5xl font-extrabold tracking-tight">
          Redefining Streetwear & Performance
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          At <span className="font-semibold">Nike Marketplace</span>, we are driven by innovation and inspired by athletes.
          Explore premium footwear and apparel crafted for performance, style, and impact.
        </p>
      </div>

      {/* Stats / Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">

        <div className="space-y-2">
          <Truck className="mx-auto w-12 h-12 text-primary" />
          <h2 className="text-2xl font-bold">Fast Delivery</h2>
          <p className="text-muted-foreground text-sm">
            Get your products quickly and reliably — worldwide shipping.
          </p>
        </div>

        <div className="space-y-2">
          <Award className="mx-auto w-12 h-12 text-primary" />
          <h2 className="text-2xl font-bold">Quality Guarantee</h2>
          <p className="text-muted-foreground text-sm">
            Only premium and original products with trusted certification.
          </p>
        </div>

        <div className="space-y-2">
          <Users className="mx-auto w-12 h-12 text-primary" />
          <h2 className="text-2xl font-bold">Global Community</h2>
          <p className="text-muted-foreground text-sm">
            Join millions of sneakerheads and athletes worldwide.
          </p>
        </div>

        <div className="space-y-2">
          <Globe className="mx-auto w-12 h-12 text-primary" />
          <h2 className="text-2xl font-bold">Sustainable Future</h2>
          <p className="text-muted-foreground text-sm">
            Committed to eco-friendly products and a greener tomorrow.
          </p>
        </div>

      </div>

      {/* Call to action */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">
          Ready to explore the collection?
        </h2>
        <Button size="lg" className="rounded-full px-8 py-6 text-lg">
          Shop Now
        </Button>
      </div>

    </div>
  )
}

export default AboutPage
