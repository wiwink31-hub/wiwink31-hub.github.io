import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  seller: string;
}

const ProductCard = ({ id, image, title, price, seller }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm hover:bg-card"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{seller}</p>
        <p className="text-lg font-bold text-primary">${price.toFixed(2)}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
