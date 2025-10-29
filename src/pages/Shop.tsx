import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import home1 from "@assets/stock_images/handmade_ceramic_pot_3540a2c9.jpg";
import home2 from "@assets/stock_images/handmade_ceramic_pot_0c479a95.jpg";
import home3 from "@assets/stock_images/handmade_ceramic_pot_c17c2371.jpg";
import home4 from "@assets/stock_images/handmade_ceramic_pot_84788735.jpg";
import home5 from "@assets/stock_images/handmade_ceramic_pot_51fb79eb.jpg";

import jewelry1 from "@assets/stock_images/handmade_jewelry_nec_290070c8.jpg";
import jewelry2 from "@assets/stock_images/handmade_jewelry_nec_6235175f.jpg";
import jewelry3 from "@assets/stock_images/handmade_jewelry_nec_cea2284e.jpg";
import jewelry4 from "@assets/stock_images/handmade_jewelry_nec_ea29a118.jpg";
import jewelry5 from "@assets/stock_images/handmade_jewelry_nec_6c0aebc1.jpg";

import art1 from "@assets/stock_images/handmade_art_paintin_75e7ea8e.jpg";
import art2 from "@assets/stock_images/handmade_art_paintin_c0650dff.jpg";
import art3 from "@assets/stock_images/handmade_art_paintin_23ea4eb4.jpg";
import art4 from "@assets/stock_images/handmade_art_paintin_79462805.jpg";
import art5 from "@assets/stock_images/handmade_art_paintin_bee5f745.jpg";

import clothing1 from "@assets/stock_images/handmade_knitted_clo_d5130e69.jpg";
import clothing2 from "@assets/stock_images/handmade_knitted_clo_e6fa65ae.jpg";
import clothing3 from "@assets/stock_images/handmade_knitted_clo_9d67f961.jpg";
import clothing4 from "@assets/stock_images/handmade_knitted_clo_b2480ea7.jpg";
import clothing5 from "@assets/stock_images/handmade_knitted_clo_098c08e7.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    { id: 1, image: home1, title: "Handmade Ceramic Vase", price: 65.00, seller: "Clay & Co.", category: "home" },
    { id: 2, image: home2, title: "Artisan Pottery Bowl Set", price: 85.00, seller: "Pottery Studio", category: "home" },
    { id: 3, image: home3, title: "Rustic Ceramic Planter", price: 48.00, seller: "Terra Crafts", category: "home" },
    { id: 4, image: home4, title: "Hand-Thrown Stoneware Mug", price: 32.00, seller: "Clay & Co.", category: "home" },
    { id: 5, image: home5, title: "Decorative Ceramic Pot", price: 55.00, seller: "Pottery Studio", category: "home" },
    
    { id: 6, image: jewelry1, title: "Handcrafted Pearl Necklace", price: 125.00, seller: "Gem Artisan", category: "jewelry" },
    { id: 7, image: jewelry2, title: "Sterling Silver Bracelet", price: 98.00, seller: "Silver & Stone", category: "jewelry" },
    { id: 8, image: jewelry3, title: "Artisan Beaded Earrings", price: 45.00, seller: "Bead Haven", category: "jewelry" },
    { id: 9, image: jewelry4, title: "Gold-Plated Ring Set", price: 110.00, seller: "Gem Artisan", category: "jewelry" },
    { id: 10, image: jewelry5, title: "Vintage Style Pendant", price: 78.00, seller: "Silver & Stone", category: "jewelry" },
    
    { id: 11, image: art1, title: "Abstract Canvas Painting", price: 240.00, seller: "Modern Art Co.", category: "art" },
    { id: 12, image: art2, title: "Watercolor Landscape Print", price: 68.00, seller: "Nature Canvas", category: "art" },
    { id: 13, image: art3, title: "Contemporary Art Piece", price: 195.00, seller: "Artistic Vision", category: "art" },
    { id: 14, image: art4, title: "Botanical Illustration Set", price: 85.00, seller: "Nature Canvas", category: "art" },
    { id: 15, image: art5, title: "Modern Abstract Print", price: 155.00, seller: "Modern Art Co.", category: "art" },
    
    { id: 16, image: clothing1, title: "Hand-Knitted Wool Scarf", price: 58.00, seller: "Cozy Knits", category: "clothing" },
    { id: 17, image: clothing2, title: "Chunky Knit Sweater", price: 125.00, seller: "Yarn & Thread", category: "clothing" },
    { id: 18, image: clothing3, title: "Artisan Knitted Beanie", price: 42.00, seller: "Cozy Knits", category: "clothing" },
    { id: 19, image: clothing4, title: "Handmade Crochet Shawl", price: 95.00, seller: "Fiber Arts", category: "clothing" },
    { id: 20, image: clothing5, title: "Wool Blend Cardigan", price: 135.00, seller: "Yarn & Thread", category: "clothing" },
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
