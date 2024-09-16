import Gaming from "@/components/Gaming/gaming";
import Headlines from "@/components/headlines/headlines";
import Highlights from "@/components/highlights/highlights";
import LatestNews from "@/components/latest-news/latest-news";
import { PhaseTable } from "@/components/phase-table/phase-table";
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
      <PhaseTable />
      <Sponsors />
    </HomeLayout>
  );
}
