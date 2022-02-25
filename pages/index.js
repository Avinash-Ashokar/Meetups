import MeetupList from "../components/meetups/MeetupList";

export default function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: "1",
      title: "First",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2017/12/12122453873_1f3e1a30f0_k.jpg",
      address: "Area 51",
      description: "The first Meetup",
    },
    {
      id: "2",
      title: "Second",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2017/12/12122453873_1f3e1a30f0_k.jpg",
      address: "Area 51",
      description: "The first Meetup",
    },
    {
      id: "3",
      title: "First",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2017/12/12122453873_1f3e1a30f0_k.jpg",
      address: "Area 51",
      description: "The first Meetup",
    },
    {
      id: "4",
      title: "First",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2017/12/12122453873_1f3e1a30f0_k.jpg",
      address: "Area 51",
      description: "The first Meetup",
    },
    {
      id: "5",
      title: "First",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2017/12/12122453873_1f3e1a30f0_k.jpg",
      address: "Area 51",
      description: "The first Meetup",
    },
    {
      id: "6",
      title: "First",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2017/12/12122453873_1f3e1a30f0_k.jpg",
      address: "Area 51",
      description: "The first Meetup",
    },
  ];
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
