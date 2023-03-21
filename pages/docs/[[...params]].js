import { useRouter } from "next/router";

// example url: /docs/feature1/concept1
export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  // returns array, initially returns undefined bc pre-rendering
  console.log(params);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }
  return <h1>This is the Doc Page</h1>;
}
