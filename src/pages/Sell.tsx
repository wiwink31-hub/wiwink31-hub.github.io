import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sell = () => {
  const features = [
    "Set up your shop in minutes",
    "List unlimited products",
    "Reach millions of shoppers",
    "Powerful shop management tools",
    "Secure payment processing",
    "Mobile-friendly storefront",
    "Marketing and promotion tools",
    "Seller support community",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Start Selling Your Crafts Today</h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of artisans who have turned their passion into a thriving business
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
              Get Started Free
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Succeed</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Create Your Shop</h3>
                <p className="text-muted-foreground">
                  Set up your shop profile and customize your storefront in minutes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">List Your Products</h3>
                <p className="text-muted-foreground">
                  Upload photos and descriptions of your handmade items
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Start Selling</h3>
                <p className="text-muted-foreground">
                  Reach customers and start making sales right away
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Free to Start</h3>
                <p className="text-4xl font-bold text-primary mb-6">$0<span className="text-xl text-muted-foreground">/month</span></p>
                <p className="text-muted-foreground mb-8">
                  No monthly fees or listing charges. We only take a small commission when you make a sale.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>5% transaction fee</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Payment processing included</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Cancel anytime</span>
                  </p>
                </div>
                <Button size="lg" className="w-full max-w-sm">
                  Open Your Shop
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Creative Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of makers and turn your passion into profit
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                Get Started Now
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sell;
