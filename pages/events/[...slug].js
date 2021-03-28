import { useRouter } from "next/router";

const FilteredEvents = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      Filtered events listing page
      <br />
      All events from:{" "}
      {router.query &&
        router.query.slug &&
        router.query.slug.map((item) => `${item}/`)}
    </div>
  );
};

export default FilteredEvents;
