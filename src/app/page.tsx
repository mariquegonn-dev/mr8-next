import { Hero } from "./components/Hero";
import { HeroSec } from "./components/HeroSec";
import { LottiePlayer } from "./components/LottiePlayer";
import { CardsConfig } from "./config";
import group from "@/../../public/assets/lottie/group.json";
import boy from "@/../../public/assets/lottie/boy.json";
import { CardMobile, MainCard } from "./components/Cards";
import { Depoimentos } from "./components/Depoimentos";
import { DepoimentosConfig } from "./config/Depoimentos";
import { DepoimentosCard } from "./components/Depoimentos/DepoimentosCard";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { FooterConfig } from "./config/Footer";

export default function Home() {
  return (
    <main>
      <section className="bg-primaryBlue pb-10 lg:pb-20">
        <Hero>
          <LottiePlayer src={group} />
        </Hero>

        <MainCard cards={CardsConfig}>
          <CardMobile cards={CardsConfig} />
        </MainCard>
      </section>

      <section>
        <HeroSec>
          <LottiePlayer src={boy} />
        </HeroSec>
      </section>

      <section>
        <Depoimentos>
          <DepoimentosCard items={DepoimentosConfig} />
        </Depoimentos>
      </section>

      <section className="mt-10 bg-primaryBlue sm:mt-20">
        <Faq />
      </section>

      <section>
        <Footer items={FooterConfig} />
      </section>
    </main>
  );
}
