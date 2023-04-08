import { IProduct } from '@/data/products';
import { formatPrice } from '@/utils';
import Image from 'next/image';

export interface ProductProps extends IProduct {

}

const Product = (props: ProductProps) => {
    return (
        <div className="border flex flex-row gap-4 w-full p-10">
            <Image src={props.imageUrl} width={300} height={300} alt={props.name} />
            <div className='flex flex-col'>
                <div className='text-lg'>{props.name}</div>
                <div className="text-3xl">{formatPrice(props.price)}</div>
            </div>
      </div>
    )
}

export default Product;
