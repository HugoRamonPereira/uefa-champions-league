import Headlines from "@/components/headlines/headlines";
import Highlights from "@/components/highlights/highlights";
import LatestNews from "@/components/latest-news/latest-news";
import Moments from "@/components/moments/moments";
import { PhaseTable } from "@/components/phase-table/phase-table";
import RecentMatches from "@/components/recent-matches/recent-matches";
import Sponsors from "@/components/sponsors/sponsors";
import HomeLayout from "@/layouts/home/home";

export default function Home() {
  return (
    <HomeLayout>
      <RecentMatches />
      <Headlines />
      <Moments />
      <LatestNews />
      <Highlights />
      <PhaseTable />
      <Sponsors />
    </HomeLayout>
  );
}
