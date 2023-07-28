import ProductDetails from "@/components/UI/ProductDetails";

const ProductDetailsPage = async (props) => {
  const res = await fetch(
    `http://localhost:5000/watches/${props?.params.productId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default ProductDetailsPage;
