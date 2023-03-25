import { useContext } from 'react';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { store } from '@/context/AppContext';
import styles from './navbar.module.css';

export default function NavBar() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { state } = useContext(store);
  const totalItems = state.cart.reduce((a, c) => a + c.quantity, 0);

  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/docs">Docs</Link>
        </li>
        <li>
          <Link href="/product">Products</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          <div>{totalItems}</div>
        </li>
        {!session && status !== 'authenticated' ? (
          <li>
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
          </li>
        ) : (
          <>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link
                href="/api/authK/signout"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                  router.push('/');
                }}
              >
                Logout
              </Link>
            </li>
          </>
        )}
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}
