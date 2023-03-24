import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './navbar.module.css';

export default function NavBar() {
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <nav>
      <div className="flex gap-1">
        <Link href="/">Home</Link>
        <Link href="/store">Store</Link>
        <Link href="/users">Users</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/product">Products</Link>
        {!session && status !== 'authenticated' ? (
          <Link
            href="/api/auth/signin"
            className={
              status === 'loading' ? `${styles.loading}` : `${styles.loaded}`
            }
            onClick={(e) => {
              e.preventDefault();
              signIn('github');
            }}
          >
            Login
          </Link>
        ) : (
          <>
            <Link href="/profile">Profile</Link>
            <Link
              href="/api/auth/signout"
              onClick={(e) => {
                e.preventDefault();
                signOut();
                router.push('/');
              }}
            >
              Logout
            </Link>
          </>
        )}
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
