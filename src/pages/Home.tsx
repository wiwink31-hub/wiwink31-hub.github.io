import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const Home = () => {
  const featuredProducts = [
    { id: 1, image: product1, title: "Handmade Ceramic Bowl", price: 45.00, seller: "Clay & Co." },
    { id: 2, image: product2, title: "Macrame Wall Hanging", price: 68.00, seller: "Knotty Designs" },
    { id: 3, image: product3, title: "Wooden Cutting Board", price: 52.00, seller: "Timber Crafts" },
    { id: 4, image: product4, title: "Knitted Wool Blanket", price: 89.00, seller: "Cozy Knits" },
    { id: 5, image: product5, title: "Artisan Candle Set", price: 34.00, seller: "Glow Studio" },
    { id: 6, image: product6, title: "Botanical Art Print", price: 28.00, seller: "Nature Press" },
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
