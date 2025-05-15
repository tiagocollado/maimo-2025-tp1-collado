import Hero from "@/app/components/Hero";
import RecentRecipes from "@/app/components/RecentRecipes";

const HomeContainer = () => {
  return (
    <div className="home_container">
      <Hero />
      <RecentRecipes />
    </div>
  );
};

export default HomeContainer;
