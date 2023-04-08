import { products } from "@/data/products";
import { formatPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
    return (
      <main className="flex min-h-screen flex-row flex-wrap gap-10 p-24">
        {products.map((product) => (
            <Link href={`product/${product.id}`}>
                <div className="border flex flex-col gap-2 border-x-zinc-300 border-y-zinc-300 p-10">
                  <Image src={product.imageUrl} width={300} height={300} alt={product.name} />
                  <div>{product.name}</div>
                  <div className="text-lg">{formatPrice(product.price)}</div>
                </div>
            </Link>
        ))}
      </main>
    )
  }
  