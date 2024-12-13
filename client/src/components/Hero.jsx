import { Sparkles, ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="container px-4 md:px-6 h-full flex items-center">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 w-full">
          <div className="flex flex-col justify-center space-y-8 py-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[64px] xl:leading-[1.1] text-balance animate-fade-in-down">
                FIND CLOTHES THAT MATCH YOUR STYLE
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in-up">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
            </div>
            <div>
              <button className="flex items-center gap-2 bg-black text-white rounded-full px-8 h-12 text-lg hover:bg-gray-800 transition animate-fade-in-up">
                <ShoppingCart className="h-5 w-5" />
                Shop Now
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-8 animate-fade-in-up">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">200+</h3>
                <p>International Brands</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">2,000+</h3>
                <p>High-Quality Products</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">30,000+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center relative">
            <div className="absolute right-8 top-8 animate-bounce">
              <Sparkles className="h-12 w-12 text-yellow-400" />
            </div>
            <div className="absolute left-8 bottom-8 animate-bounce">
              <Sparkles className="h-12 w-12 text-yellow-400" />
            </div>
            <img
              alt="Fashion models wearing modern clothing"
              className="rounded-xl object-cover w-[400px] h-[500px] lg:w-[500px] lg:h-[600px]"
              src="/images/hero-img.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}