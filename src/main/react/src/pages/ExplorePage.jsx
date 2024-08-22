import NavBar from "../components/common/NavBar";
import CommonFooter from "../components/common/CommonFooter";
import Header from "../components/explore/Header";
import ExploreGrid from "../components/explore/ExploreGrid";
import ExploreDropdown from "../components/explore/ExploreDropdown.jsx";

function ExplorePage() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <ExploreDropdown />
        <ExploreGrid />
      </main>
      <CommonFooter />
    </>
  );
}

export default ExplorePage;
