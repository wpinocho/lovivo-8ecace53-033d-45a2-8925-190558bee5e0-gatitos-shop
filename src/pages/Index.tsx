import { useState } from "react";
import { Header } from "@/components/Header";
import { KittenCard } from "@/components/KittenCard";
import { Cart } from "@/components/Cart";
import { useToast } from "@/hooks/use-toast";

export interface Kitten {
  id: number;
  name: string;
  breed: string;
  age: string;
  price: number;
  image: string;
  description: string;
  personality: string[];
}

export interface CartItem extends Kitten {
  quantity: number;
}

const kittens: Kitten[] = [
  {
    id: 1,
    name: "Luna",
    breed: "Persa",
    age: "3 meses",
    price: 800,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
    description: "Una gatita persa muy cariñosa y juguetona",
    personality: ["Cariñosa", "Juguetona", "Tranquila"]
  },
  {
    id: 2,
    name: "Simba",
    breed: "Maine Coon",
    age: "4 meses",
    price: 1200,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop",
    description: "Un gatito Maine Coon grande y peludo, perfecto para familias",
    personality: ["Amigable", "Inteligente", "Activo"]
  },
  {
    id: 3,
    name: "Mimi",
    breed: "Siamés",
    age: "2 meses",
    price: 600,
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400&h=300&fit=crop",
    description: "Una gatita siamesa muy vocal y sociable",
    personality: ["Vocal", "Sociable", "Curiosa"]
  },
  {
    id: 4,
    name: "Oreo",
    breed: "Británico de Pelo Corto",
    age: "5 meses",
    price: 900,
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop",
    description: "Un gatito británico con hermosos colores blanco y negro",
    personality: ["Relajado", "Independiente", "Dulce"]
  },
  {
    id: 5,
    name: "Nala",
    breed: "Bengalí",
    age: "3 meses",
    price: 1500,
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=300&fit=crop",
    description: "Una gatita bengalí con hermosos patrones salvajes",
    personality: ["Energética", "Aventurera", "Leal"]
  },
  {
    id: 6,
    name: "Whiskers",
    breed: "Ragdoll",
    age: "4 meses",
    price: 1100,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
    description: "Un gatito Ragdoll súper relajado y cariñoso",
    personality: ["Relajado", "Cariñoso", "Dócil"]
  }
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (kitten: Kitten) => {
    console.log("Adding kitten to cart:", kitten.name);
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === kitten.id);
      
      if (existingItem) {
        toast({
          title: "¡Ya tienes este gatito!",
          description: `${kitten.name} ya está en tu carrito de adopción.`,
          variant: "destructive"
        });
        return prevItems;
      }
      
      toast({
        title: "¡Gatito agregado!",
        description: `${kitten.name} ha sido agregado a tu carrito de adopción.`,
      });
      
      return [...prevItems, { ...kitten, quantity: 1 }];
    });
  };

  const removeFromCart = (kittenId: number) => {
    console.log("Removing kitten from cart:", kittenId);
    
    const removedKitten = cartItems.find(item => item.id === kittenId);
    
    setCartItems(prevItems => prevItems.filter(item => item.id !== kittenId));
    
    if (removedKitten) {
      toast({
        title: "Gatito removido",
        description: `${removedKitten.name} ha sido removido de tu carrito.`,
      });
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            🐱 Tienda de Gatitos 🐱
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra tu compañero felino perfecto. Todos nuestros gatitos están listos para ser adoptados y llenar tu hogar de amor y alegría.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kittens.map((kitten) => (
            <KittenCard
              key={kitten.id}
              kitten={kitten}
              onAddToCart={addToCart}
              isInCart={cartItems.some(item => item.id === kitten.id)}
            />
          ))}
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Index;