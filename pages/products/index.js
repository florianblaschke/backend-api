import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const url = "/api/products";

export default function Products() {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error || isLoading) return <div></div>;
  return (
    <>
      {data.map((i) => (
        <div>
          <h2>{i.name}</h2>
          <p>{i.description}</p>
          <h2>{i.price}</h2>
          <h2>{i.category}</h2>
        </div>
      ))}
    </>
  );
}
