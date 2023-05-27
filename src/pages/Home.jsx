import { Footer } from "../components/footer/Footer";
import { Section01 } from "../components/homepage/section01/Section01";
import { Section02 } from "../components/homepage/section02/Section02";
import { Section03 } from "../components/homepage/section03/Section03";
import { Section04 } from "../components/homepage/section04/Section04";
import { Section05 } from "../components/homepage/section05/Section05";
import { Section06 } from "../components/homepage/section06/Section06";
import { Section07 } from "../components/homepage/section07/Section07";
import { Section08 } from "../components/homepage/section08/Section08";
import { Section09 } from "../components/homepage/section09/Section09";
import { Navbar } from "../components/navbar/Navbar";
import { TopNotification } from "../components/navbar/TopNotification";

export const Home = () => {
  return (
    <>
      <nav>
        <TopNotification />
        <Navbar />
      </nav>
      <section>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <Section08 />
        <Section09 />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
