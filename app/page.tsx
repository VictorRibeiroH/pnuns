import { HoodieCard } from "@/components/hoodie-card"
import { AutoSliderBanner } from "@/components/auto-slider-banner"

export default function Home() {
  const hoodies = [
    {
      id: 1,
      name: "",
      image1: "/clothes/peca1/1.jpg",
      image2: "/clothes/peca2/2.jpg",
    },
    {
      id: 2,
      name: "",
      image1: "/clothes/peca2/1.jpg",
      image2: "/clothes/peca2/2.jpg",
    },
    {
      id: 3,
      name: "",
      image1: "/clothes/peca3/1.jpg",
      image2: "/clothes/peca3/2.jpg",
    },
    {
      id: 4,
      name: "",
      image1: "/clothes/peca4/1.jpg",
      image2: "/clothes/peca4/2.jpg",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />

      {/* Product Section */}
      <section id="product-section" className="w-full py-12 md:py-24 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Confira nosso trabalho</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hoodies.map((hoodie) => (
              <HoodieCard key={hoodie.id} {...hoodie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

