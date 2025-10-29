import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";

import home1 from "@assets/stock_images/handmade_ceramic_pot_3540a2c9.jpg";
import home2 from "@assets/stock_images/handmade_ceramic_pot_0c479a95.jpg";
import jewelry1 from "@assets/stock_images/handmade_jewelry_nec_290070c8.jpg";
import jewelry2 from "@assets/stock_images/handmade_jewelry_nec_6235175f.jpg";
import art1 from "@assets/stock_images/handmade_art_paintin_75e7ea8e.jpg";
import art2 from "@assets/stock_images/handmade_art_paintin_c0650dff.jpg";
import clothing1 from "@assets/stock_images/handmade_knitted_clo_d5130e69.jpg";
import clothing2 from "@assets/stock_images/handmade_knitted_clo_e6fa65ae.jpg";

const Home = () => {
  const featuredProducts = [
    { id: 1, image: home1, title: "Handmade Ceramic Vase", price: 65.00, seller: "Clay & Co." },
    { id: 2, image: home2, title: "Artisan Pottery Bowl Set", price: 85.00, seller: "Pottery Studio" },
    { id: 6, image: jewelry1, title: "Handcrafted Pearl Necklace", price: 125.00, seller: "Gem Artisan" },
    { id: 7, image: jewelry2, title: "Sterling Silver Bracelet", price: 98.00, seller: "Silver & Stone" },
    { id: 11, image: art1, title: "Abstract Canvas Painting", price: 240.00, seller: "Modern Art Co." },
    { id: 12, image: art2, title: "Watercolor Landscape Print", price: 68.00, seller: "Nature Canvas" },
    { id: 16, image: clothing1, title: "Hand-Knitted Wool Scarf", price: 58.00, seller: "Cozy Knits" },
    { id: 17, image: clothing2, title: "Chunky Knit Sweater", price: 125.00, seller: "Yarn & Thread" },
  ];

  const categories = [
    { name: "Home & Living", count: 1200 },
    { name: "Jewelry", count: 850 },
    { name: "Art & Collectibles", count: 620 },
    { name: "Clothing", count: 940 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Discover Unique
              <span className="block text-primary mt-2">Handmade Treasures</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Support independent artists and find one-of-a-kind pieces crafted with love
            </p>
            <Link to="/shop">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                Start Shopping
              </Button>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to="/shop"
                  className="group p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 text-center"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Featured Items</h2>
              <Link to="/shop">
                <Button variant="outline">View All</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Start Selling Your Crafts</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of artisans who have found success selling their handmade goods
            </p>
            <Link to="/sell">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
                Open Your Shop
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
