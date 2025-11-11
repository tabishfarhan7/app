import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success('Added to cart!', {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Link to={`/product/${product.id}`}>
        <Card className="h-full flex flex-col overflow-hidden hover-lift border-border/50 glass-card">
          <div className="relative aspect-square overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.trending && (
              <Badge className="absolute top-3 right-3 bg-primary">
                Trending
              </Badge>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                <Badge variant="destructive">Out of Stock</Badge>
              </div>
            )}
          </div>

          <CardContent className="flex-1 flex flex-col p-4">
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({product.reviews})
              </span>
            </div>

            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {product.name}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {product.description}
            </p>

            <div className="mt-auto">
              <p className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-primary hover:bg-primary/90"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProductCard;