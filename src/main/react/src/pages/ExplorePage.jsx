import NavBar from "../components/common/NavBar";
import CommonFooter from "../components/common/CommonFooter";
import Header from "../components/explore/Header";
import ExploreGrid from "../components/explore/ExploreGrid";

function ExplorePage() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <ExploreGrid />
      </main>
      <CommonFooter />
    </>
  );
}

export default ExplorePage;
