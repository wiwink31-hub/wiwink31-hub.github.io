import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">About Craftify</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting artisans with people who appreciate handmade quality
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Craftify was founded with a simple belief: that handmade goods carry a special kind of magic. 
                In a world of mass production, we wanted to create a space where artisans could share their 
                passion and shoppers could discover truly unique pieces.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're dedicated to supporting independent makers and small businesses. Every purchase on 
                Craftify helps an artisan continue doing what they love, while giving you access to 
                one-of-a-kind items you won't find anywhere else.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What Makes Us Different</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Every item is handmade with care and attention to detail
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Direct support for independent artists and small businesses
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Unique pieces you won't find in big-box stores
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Sustainable and eco-friendly practices encouraged
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a maker looking to share your craft or a shopper searching for something 
                special, we'd love to have you be part of the Craftify community. Together, we're keeping 
                the art of handmade alive.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
