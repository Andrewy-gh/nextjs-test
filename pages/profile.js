import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session, status } = useSession();

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {!session && <h1>You are not Authorized</h1>}
      {session && status === 'authenticated' && <h1>Profile</h1>}
    </>
  );
}
