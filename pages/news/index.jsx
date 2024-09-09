const News = ({ news }) => {
  return (
    <>
      <div>
        {news.map((n) => (
          <div key={n.id}> {n.title}</div>
        ))}
      </div>
    </>
  );
};

export default News;
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/news");
  const data = await res.json();
  return { props: { news: data } };
}
