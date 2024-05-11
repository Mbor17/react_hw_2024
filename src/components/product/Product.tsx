import React, {FC} from 'react';


interface IProps{
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[]
}
type ITypeProps=IProps & {children?:React.ReactNode};
const Product:FC<ITypeProps> = () => {
    return (
        <div>

        </div>
    );
};

export default Product;