import dbConnect from '@/lib/dbConnect';
import StoreItem from '../../components/item';
import Item from '@/models/Item';

export async function getStaticProps({ params }) {
  await dbConnect();
  const item = await Item.findOne({ _id: params.itemId }).lean();
  return {
    props: { item: JSON.parse(JSON.stringify(item)) },
  };
}

export async function getStaticPaths() {
  await dbConnect();
  const items = await Item.find({}).lean();
  const paths = items.map((item) => ({
    params: {
      itemId: item._id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default function ItemDetail({ item }) {
  return (
    <>
      <StoreItem item={item} />
    </>
  );
}
