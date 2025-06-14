import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";
import { IProductModel } from "@/domain/models/product.model";
import { Button } from "../ui/button";
import { formatToBRL } from "@/shared/utils/formatToBrL.utils";

interface IProductModalProps {
  product: IProductModel;
  isOpen: boolean;
  onClose: () => void;
   onProductAdd: (product: IProductModel) => void;
}

export function ProductModal({ product, isOpen, onClose, onProductAdd} : IProductModalProps) {

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    onProductAdd(product)
    onClose();
  };

  return(
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-lg lg:max-h-[100vh]">
          <DialogHeader className="flex flex-wrap gap-2">
           <div>
              <DialogTitle className="mb-4 text-start">{product.name}</DialogTitle>
              <img className="h-60 w-60 rounded" src={product.image} alt={product.name} />
           </div>
            <DialogDescription className="text-start">{product.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">R$ {formatToBRL(product.price)}</div>
          <div className="mt-6 text-right">
            <Button onClick={handleAddToCart}>Comprar</Button>
          </div>
        </DialogContent>
  </Dialog>
  )
}