import TheHero from "../components/hero";
import Products from "../components/products";
import Steps from "../components/steps";

export default function HomePage() {
  return (
    <section>
      <TheHero />
      <Steps />
      <Products />
    </section>
  );
}
