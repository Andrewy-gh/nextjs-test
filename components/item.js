import Image from 'next/image';
import Link from 'next/link';

export default function StoreItem({ item }) {
  return (
    <>
      <Link href={`store/${item._id}`}>
        <div>{item.name}</div>
        <Image
          priority
          src={item.image}
          alt={item.name}
          height={100}
          width={100}
        ></Image>
      </Link>
    </>
  );
}
