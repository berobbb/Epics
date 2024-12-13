import { Link } from "react-router-dom";
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";

export default function Nav() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center gap-6 px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          SHOP.CO
        </Link>

     
        <div className="hidden md:flex">
          <ul className="flex items-center gap-6">
            <li className="relative group">
              <button className="flex items-center gap-1 h-9 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                Shop
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-md rounded-md">
                <div className="grid gap-3 p-4 w-[200px]">
                  <Link
                    to="/categories"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    All Categories
                  </Link>
                  <Link
                    to="/categories/men"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Men
                  </Link>
                  <Link
                    to="/categories/women"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Women
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/on-sale"
                className="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                On Sale
              </Link>
            </li>
            <li>
              <Link
                to="/new-arrivals"
                className="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                to="/brands"
                className="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Brands
              </Link>
            </li>
          </ul>
        </div>


        <div className="flex flex-1 items-center gap-2">
          <div className="flex items-center gap-2 rounded-md bg-gray-200 p-6 flex-1 max-w-xl mx-auto">
            <Search className="h-4 w-4 text-gray-500 " />
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full border-0 bg-transparent text-gray-700 placeholder-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="h-9 w-9 flex items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button
            className="h-9 w-9 flex items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="User account"
          >
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}