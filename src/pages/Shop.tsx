import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    { id: 1, image: product1, title: "Handmade Ceramic Bowl", price: 45.00, seller: "Clay & Co.", category: "home" },
    { id: 2, image: product2, title: "Macrame Wall Hanging", price: 68.00, seller: "Knotty Designs", category: "home" },
    { id: 3, image: product3, title: "Wooden Cutting Board", price: 52.00, seller: "Timber Crafts", category: "home" },
    { id: 4, image: product4, title: "Knitted Wool Blanket", price: 89.00, seller: "Cozy Knits", category: "clothing" },
    { id: 5, image: product5, title: "Artisan Candle Set", price: 34.00, seller: "Glow Studio", category: "home" },
    { id: 6, image: product6, title: "Botanical Art Print", price: 28.00, seller: "Nature Press", category: "art" },
    { id: 7, image: product1, title: "Pottery Mug Collection", price: 38.00, seller: "Clay & Co.", category: "home" },
    { id: 8, image: product2, title: "Handwoven Basket", price: 55.00, seller: "Knotty Designs", category: "home" },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Shop All Items</h1>
            <p className="text-muted-foreground">Discover unique handmade pieces from talented artisans</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="w-full md:w-64 shrink-0">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Filters</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="home">Home & Living</SelectItem>
                        <SelectItem value="jewelry">Jewelry</SelectItem>
                        <SelectItem value="art">Art & Collectibles</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Price Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any price</SelectItem>
                        <SelectItem value="under25">Under $25</SelectItem>
                        <SelectItem value="25to50">$25 to $50</SelectItem>
                        <SelectItem value="50to100">$50 to $100</SelectItem>
                        <SelectItem value="over100">Over $100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="outline" className="w-full">Reset Filters</Button>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  {filteredProducts.length} items
                </p>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
