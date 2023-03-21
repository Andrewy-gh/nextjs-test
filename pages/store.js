import Image from 'next/image';
import dbConnect from '../lib/dbConnect';
import Item from '../models/Item';

export async function getStaticProps() {
  await dbConnect();
  const items = await Item.find({}).lean();
  return {
    props: { items: JSON.parse(JSON.stringify(items)) },
  };
}

export default function Store({ items }) {
  console.log('from static props', items);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {items.map((item) => (
        <div key={item._id} className="flex justify-center flex-col align-top">
          <div>{item.name}</div>
          <Image
            src={item.image}
            alt={item.name}
            height={100}
            width={100}
          ></Image>
        </div>
      ))}
    </div>
  );
}
