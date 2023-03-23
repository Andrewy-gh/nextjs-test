import Image from 'next/image';
import dbConnect from '../../lib/dbConnect';
import Item from '../../models/Item';
import StoreItem from '../../components/item';

export async function getServerSideProps() {
  await dbConnect();
  const items = await Item.find({}).lean();
  return {
    props: { items: JSON.parse(JSON.stringify(items)) },
  };
}

export default function Store({ items }) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Store</h1>
      <div className="flex justify-center flex-col align-middle">
        {items.map((item) => (
          <div key={item._id}>
            <StoreItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
