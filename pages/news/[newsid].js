import { useRouter } from "next/router";

export default function NewsID() {
  const router = useRouter();
  return (
    <div>
      <h1> The news is regarding {router.query.newsid}</h1>
    </div>
  );
}
