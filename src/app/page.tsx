import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Tabs from "@/components/tabs";
import Card from "@/components/cards/article-card";
import JobCard from "@/components/cards/job-card";
import LocationTab from "@/components/location-tab";
import FloatingPen from "@/components/floating-pen";

export default function Home() {
  const data = [
    {
      type: "article",
      img: true,
      title: undefined,
      src: "/assets/img1.jpg",
      usericon: "/assets/hero.jpg",
      username: "Margret Smith",
      alt: "",
      emoji: undefined,
      tag: undefined,
      linkname: undefined,
      link: undefined,
    },
    {
      type: "article",
      img: true,
      title: undefined,
      src: "/assets/img1.jpg",
      usericon: "/assets/hero.jpg",
      username: "Jonathan",
      alt: "",
      emoji: undefined,
      tag: undefined,
      linkname: undefined,
      link: undefined,
    },
    {
      type: "article",
      img: true,
      title: undefined,
      src: "/assets/img1.jpg",
      usericon: "/assets/hero.jpg",
      username: "Houston Williams",
      alt: "",
      emoji: undefined,
      tag: undefined,
      linkname: undefined,
      link: undefined,
    },
    {
      type: "meetup",
      img: true,
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      src: "/assets/img1.jpg",
      usericon: "/assets/hero.jpg",
      username: "John Pork",
      alt: "",
      emoji: "📅",
      tag: "Meetup",
      linkname: "Visit website",
      link: undefined,
      company: "Innovaccer Analytics Private Ltd.",
    },
    {
      type: "job",
      img: false,
      title: undefined,
      src: "/assets/img1.jpg",
      usericon: "/assets/hero.jpg",
      username: "Emanuel Frank",
      alt: "",
      emoji: "💼",
      tag: "Job",
      linkname: undefined,
      link: undefined,
      company: "Infosys Ltd.",
    },
  ];
  return (
    <main className="">
      <Navbar />
      <Hero />

      <div className="flex justify-center px-5 relative">
        <div className="w-full max-w-6xl">
          <Tabs />
          <div className="flex justify-center pb-10">
            <div className="flex max-w-6xl w-full gap-5">
              <div className="w-full md:w-2/3 gap-5 flex flex-col">
                {data.map((val, i) => {
                  if (val.type === "article") return <Card key={i} {...val} />;
                  else return <JobCard key={i} {...val} />;
                })}
              </div>
              <div className="hidden md:block md:w-1/3">
                <LocationTab />
              </div>
            </div>
          </div>
        </div>
        <FloatingPen />
      </div>
    </main>
  );
}
