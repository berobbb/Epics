import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="bg-black text-white px-6 py-8 md:py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-bold max-w-[400px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-md w-full sm:w-64 text-black"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md whitespace-nowrap hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-50 px-6 py-12">
        <div className="container mx-auto">
          {/* Logo and Description */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12">
            <div className="">
              <h2 className="text-xl font-bold mb-4">SHOP.CO</h2>
              <p className="text-gray-600 max-w-sm">
                We have clothes that suit your style and that you're proud to wear. From women to men.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Career</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">HELP</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Customer Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Delivery Details</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">FAQ</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Account</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Manage Deliveries</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Orders</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Payments</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              Shop.co © 2000-2023. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
