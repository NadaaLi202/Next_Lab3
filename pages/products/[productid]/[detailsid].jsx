import { useRouter } from "next/router";
const Detailsid = () => {
  const router = useRouter();
  const { productid, detailsid, ...otherParams } = router.query;
  if (Object.keys(otherParams).length > 0) {
    return <h3>Not enough information</h3>;
  }

  if (!productid || !detailsid) {
    return <h3>Not enough information</h3>;
  }
  return (
    <>
      <h1>
        {" "}
        detailsid : {productid} , details : {detailsid}
      </h1>
    </>
  );
};

export default Detailsid;
