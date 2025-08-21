import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderComponents } from "./components/header/index.header";
import { BannerComponents } from "./components/banner/index.banner";

export const App = () => {
  return (
    <>
      <HeaderComponents />
      <main>
        <BannerComponents />
      </main>
    </>
  );
};
