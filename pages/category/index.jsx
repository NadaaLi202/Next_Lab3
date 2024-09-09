import { useRouter } from "next/router";
const Category = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/products");
  };
  return (
    <>
      <h1>category</h1>
      <button className="btn btn-danger" onClick={handleClick}>
        go to products
      </button>
    </>
  );
};

export default Category;
