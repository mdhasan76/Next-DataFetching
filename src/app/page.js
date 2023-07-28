import Products from "@/components/UI/Products";

const getProduct = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache",
    // next: {
    //   revalidate: 5,
    // },
  });
  const data = await res.json();
  return data;
};

const HomePage = async () => {
  const data = await getProduct();
  // console.log(data, "data");
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {data?.map((product, i) => (
          <Products product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
