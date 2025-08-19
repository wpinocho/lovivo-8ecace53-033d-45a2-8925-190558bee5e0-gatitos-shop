import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Kitten } from "@/pages/Index";

interface KittenCardProps {
  kitten: Kitten;
  onAddToCart: (kitten: Kitten) => void;
  isInCart: boolean;
}

export const KittenCard = ({ kitten, onAddToCart, isInCart }: KittenCardProps) => {
  console.log("KittenCard rendered for:", kitten.name, "isInCart:", isInCart);
  
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={kitten.image}
            alt={kitten.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4">
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full p-2 bg-white/80 hover:bg-white"
            >
              <Heart className="h-4 w-4 text-pink-500" />
            </Button>
          </div>
          <div className="absolute bottom-4 left-4">
            <Badge variant="secondary" className="bg-white/90">
              {kitten.age}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-800">{kitten.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </div>
        </div>
        
        <p className="text-pink-600 font-semibold mb-2">{kitten.breed}</p>
        <p className="text-gray-600 text-sm mb-4">{kitten.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {kitten.personality.map((trait, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {trait}
            </Badge>
          ))}
        </div>
        
        <div className="text-3xl font-bold text-green-600">
          ${kitten.price.toLocaleString()}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => onAddToCart(kitten)}
          disabled={isInCart}
          className={`w-full ${
            isInCart 
              ? "bg-gray-400 hover:bg-gray-400" 
              : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {isInCart ? "Ya en el carrito" : "Adoptar 🐾"}
        </Button>
      </CardFooter>
    </Card>
  );
};