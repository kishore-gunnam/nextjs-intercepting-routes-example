import Modal from "@/components/Modal";
import Product from "@/components/Product";
import { IProduct, products } from "@/data/products";

const ProductModal = (props: any) => {

  const { params: { id: productId } } =props;

  const product: IProduct | undefined = products.find((product) => product.id === Number(productId));
  return (
    <Modal>
      {product && <Product {...product} />}
    </Modal>
  )
}
export default ProductModal;


  