import Banner from "./components/Banner/index";
import Work from "./components/Work/index";
import Companies from "./components/Companies/index";
/* import Table from './components/Table/index'; */
/* import Features from './components/Features/index'; */
/* import Simple from './components/Simple/index'; */
import Trade from "./components/Trade/index";
import Faq from "./components/Faq/index";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main>
      <Banner />
      <Work />
      <Companies />
      <Trade />
      <Faq />
    </main>
  );
}

/* export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Work />
      <Table />
      <Features />
      <Simple />
      <Trade />
      <Faq />
    </main>
  )
}
*/
