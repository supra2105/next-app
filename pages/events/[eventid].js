import { useRouter } from "next/router";

const EventDetails = () => {
  const router = useRouter();
  return (
    <div>
      Some Event Details Page
      <br />
      Event Id: {router.query.eventid}
    </div>
  );
};

export default EventDetails;
