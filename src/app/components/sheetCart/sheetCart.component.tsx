import { IProductModel } from "@/domain/models/product.model";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet";
import { formatToBRL } from "@/shared/utils/formatToBrL.utils";

interface SheetCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SheetCart({ isOpen, onClose }: SheetCartProps) {
  const [cart, setCart] = useState<IProductModel[]>([]);

 useEffect(() => {
    if (isOpen) {
      const cartJson = localStorage.getItem("cart");
      if (cartJson) {
        setCart(JSON.parse(cartJson));
      }
    }
  }, [isOpen]);

  const updateCart = (newCart: IProductModel[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeProduct = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    updateCart(updatedCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  const getTotalPrice = (): number => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Seu Carrinho</SheetTitle>
          <SheetDescription>Veja os produtos adicionados</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {cart.length > 0 ? (
            cart.map((product) => (
              <Card key={product.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Preço: R$ {formatToBRL(product.price)}</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeProduct(product.id)}
                  >
                    Remover
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-muted-foreground">Seu carrinho está vazio.</p>
          )}
        </div>
        <div className="p-4 border-t">
          <p className="text-lg font-bold">Total: R$ {getTotalPrice().toFixed(2)}</p>
        </div>
        <SheetFooter>
          <Button variant="destructive" onClick={clearCart}>
            Limpar Carrinho
          </Button>
          <Button>Finalizar Compra</Button>
          <SheetClose asChild>
            <Button variant="outline">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}