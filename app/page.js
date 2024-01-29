import Link from 'next/link';
import Header from '@/components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href={"/about"}>About Us</Link>
      <p>
        <Link href="/blog/post-1">Blogs</Link>
      </p>
    </main>
  );
}
