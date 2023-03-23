import { useRouter } from 'next/router';
import dbConnect from '@/lib/dbConnect';
import StoreItem from '../../components/item';
import Item from '@/models/Item';

export async function getServerSideProps({ params }) {
  await dbConnect();
  const item = await Item.findOne({ _id: params.itemId }).lean();

  // returns constant 404 page
  if (!item) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for page for /store/${params.itemId}`);
  return {
    props: { item: JSON.parse(JSON.stringify(item)) },
  };
}

// export async function getStaticPaths() {
//   await dbConnect();
//   const items = await Item.find({}).lean();
//   const paths = items.map((item) => ({
//     params: {
//       itemId: item._id.toString(),
//     },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// }

export default function ItemDetail({ item }) {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <>
      <StoreItem item={item} />
    </>
  );
}
