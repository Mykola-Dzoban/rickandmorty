import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <section className="container mx-auto">
        {isPageLoading ? (
          <span className="loading loading-spinner text-info"></span>
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};
export default HomeLayout;
