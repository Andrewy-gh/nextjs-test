import useSWR from 'swr';

const fetcher = (url) =>
  fetch(url, { method: 'GET' })
    .then((res) => res.json())
    .then((json) => json.data);

export default function Dashboard() {
  const { data, error } = useSWR('/api/users/fakeId', fetcher);
  console.log({ data, error });

  if (error) return 'An error has occured';
  if (!data) return 'Loading';

  return (
    <div>
      <h2>{data.firstName}</h2>
      <h2>{data.lastName}</h2>
      <h2>{data.email}</h2>
    </div>
  );
}
