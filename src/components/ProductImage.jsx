
const ProductImage = ({ item }) => {
    return (
        <picture className="product-image">
            <img src={item.imageUrl} alt="" />
        </picture>
    );
}
export default ProductImage;