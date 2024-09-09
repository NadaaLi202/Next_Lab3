import { useRouter } from "next/router";

const Productid = () => {
  const router = useRouter();
  const { productid } = router.query;
  console.log(productid);
  return (
    <>
      <h1>Product number : {productid}</h1>
    </>
  );
};

export default Productid;
