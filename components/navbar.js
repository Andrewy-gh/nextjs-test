import Link from 'next/link';
export default function NavBar() {
  return (
    <nav>
      <div className="flex gap-1">
        <Link href="/">Home</Link>
        <Link href="/store">Store</Link>
        <Link href="/users">Users</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/product">Products</Link>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
