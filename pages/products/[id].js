import { useRouter } from "next/router";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const url = `/api/products/${id}`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error || isLoading) return <div></div>;
  return (
    <>
      <div>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <h2>{data.price}</h2>
        <h2>{data.category}</h2>
      </div>
    </>
  );
}
