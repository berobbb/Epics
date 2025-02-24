import { Sparkles, ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <div 
      className="relative h-screen w-full bg-cover bg-no-repeat bg-center  mt-12 " 
      style={{
        backgroundImage: "url('/images/hero_img.png')",
        backgroundSize: 'cover'
      }}
    >
      <div className="w-full px-0 md:px-0 relative z-10 h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="text-white space-y-8 py-12">
            <div className="space-y-6 text-black">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[64px] xl:leading-[1.1] text-balance animate-fade-in-down">
                FIND CLOTHES THAT MATCH YOUR STYLE
              </h1>
              <p className="max-w-[600px] text-black md:text-xl animate-fade-in-up">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
            </div>
            <div>
              <button className="flex items-center gap-2 bg-white text-black rounded-full px-8 h-12 text-lg hover:bg-gray-100 transition animate-fade-in-up">
                <ShoppingCart className="h-5 w-5" />
                Shop Now
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-8 animate-fade-in-up text-black">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">200+</h3>
                <p className="text-black">International Brands</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">2,000+</h3>
                <p className="text-black">High-Quality Products</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">30,000+</h3>
                <p className="text-black">Happy Customers</p>
              </div>
            </div>
          </div>
         
          <div className="hidden lg:block"></div>
        </div>
        
        <div className="absolute right-8 top-8 animate-bounce">
          <Sparkles className="h-12 w-12 text-yellow-400" />
        </div>
        <div className="absolute left-8 bottom-8 animate-bounce">
          <Sparkles className="h-12 w-12 text-yellow-400" />
        </div>
      </div>
    </div>
  );
}