import Image from "next/image";
import Hero from "./components/Hero";
import { Services } from "./components/Servicos/Services";
import { NewProducts } from "./components/NewProducts/NewProducts";
import { Call2Action } from "./components/CallAction/Call2Action";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="pb-20 ">
         <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <NewProducts />
      </section>
      <section>
        <Call2Action/>
      </section>
    </main>
  );
}
