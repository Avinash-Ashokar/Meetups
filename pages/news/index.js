import Link from "next/link";

export default function News() {
  return (
    <div>
      <h1> This is the news root page!!!</h1>
      <ul>
        <li>
          <Link href="news/apple">Apple</Link>
        </li>
        <li>
          <Link href="news/samsung">Samsung</Link>
        </li>
        <li>
          <Link href="news/google">Google</Link>
        </li>
        <li>
          <Link href="news/blackberry">Blackberry</Link>
        </li>
        <li>
          <Link href="news/alienware">Alienware</Link>
        </li>
      </ul>
    </div>
  );
}
