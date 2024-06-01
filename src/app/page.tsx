import Headlines from "@/components/headlines/headlines";
import Highlights from "@/components/highlights/highlights";
import LatestNews from "@/components/latest-news/latest-news";
import RecentMatches from "@/components/recent-matches/recent-matches";
import Sponsors from "@/components/sponsors/sponsors";
import HomeLayout from "@/layouts/home/home";

export default function Home() {
  return (
    <HomeLayout>
      <RecentMatches />
      <Headlines />
      <LatestNews />
      <Highlights />
      <Sponsors />
    </HomeLayout>
  );
}
