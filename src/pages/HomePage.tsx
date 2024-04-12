import CardGrid from "@/components/CardGrid";
import CategoryGrid from "@/components/CategoryGrid";
import SkeletonCategoryGrid from "@/components/skeletons/SkeletonCategoryGrid";
import SkeletonProductGrid from "@/components/skeletons/SkeletonProductGrid";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <main className="home">
      <Suspense fallback={<SkeletonProductGrid />}>
        <CardGrid title={"Flash Sale"}/>
      </Suspense>
      <Suspense fallback={<SkeletonCategoryGrid />}>
      <CategoryGrid />
      </Suspense>
    </main>
  );
};
export default HomePage;
