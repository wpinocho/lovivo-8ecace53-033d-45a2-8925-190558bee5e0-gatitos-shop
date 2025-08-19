import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CartItem } from "@/pages/Index";
import { useToast } from "@/hooks/use-toast";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (kittenId: number) => void;
  totalPrice: number;
}

export const Cart = ({ isOpen, onClose, items, onRemoveItem, totalPrice }: CartProps) => {
  const { toast } = useToast();
  
  console.log("Cart rendered with items:", items.length, "total:", totalPrice);

  const handleCheckout = () => {
    console.log("Processing checkout for items:", items);
    
    toast({
      title: "¡Adopción en proceso! 🎉",
      description: `Procesando la adopción de ${items.length} gatito${items.length > 1 ? 's' : ''}. Te contactaremos pronto.`,
    });
    
    // Aquí podrías integrar con un sistema de pago real
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-2xl font-bold flex items-center">
            <ShoppingBag className="mr-2 h-6 w-6" />
            Carrito de Adopción
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        
        <CardContent className="overflow-y-auto max-h-[60vh]">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🐱</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500">
                ¡Agrega algunos gatitos adorables para adoptar!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 border rounded-lg bg-gray-50"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.breed}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {item.age}
                      </Badge>
                      {item.personality.slice(0, 2).map((trait, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      ${item.price.toLocaleString()}
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                      className="mt-2"
                    >
                      Remover
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        
        {items.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-2xl font-bold text-green-600">
                ${totalPrice.toLocaleString()}
              </span>
            </div>
            
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Seguir viendo
              </Button>
              <Button
                onClick={handleCheckout}
                className="flex-1 bg-pink-500 hover:bg-pink-600"
              >
                Proceder con adopción 🐾
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};