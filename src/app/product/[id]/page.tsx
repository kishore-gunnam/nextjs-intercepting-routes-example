import Product from "@/components/Product";
import { IProduct, products } from "@/data/products";

export default function ProductPage(props: any) {
  const { params: { id: productId } } =props;

  const product: IProduct | undefined = products.find((product) => product.id === Number(productId));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {product && <Product {...product} />}
    </main>
  )
}
