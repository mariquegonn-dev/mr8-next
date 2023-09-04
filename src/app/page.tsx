import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { HeroSec } from "./components/HeroSec";
import { LottiePlayer } from "./components/HeroSec/components";
import group from "@/../../public/assets/lottie/group.json";
import boy from "@/../../public/assets/lottie/boy.json";
import { CardMobile, MainCard } from "./components/Cards";
import { CardsConfig } from "./config";
import { Depoimentos } from "./components/Depoimentos";
import { DepoimentosConfig } from "./config/Depoimentos";
import { DepoimentosCard } from "./components/Depoimentos/DepoimentosCard/DepoimentosCard";
import { Faq } from "./components/Faq";

export default function Home() {
  return (
    <main>
      <div className="bg-primaryBlue pb-10 lg:pb-20">
        <Container>
          <div className="pt-32 sm:pt-48">
            <Hero>
              <LottiePlayer src={group} />
            </Hero>
          </div>
          <div className="z-10 sm:mt-12 lg:mt-48">
            <MainCard cards={CardsConfig}>
              <CardMobile cards={CardsConfig} />
            </MainCard>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="mt-10 sm:mt-20">
            <HeroSec>
              <LottiePlayer src={boy} />
            </HeroSec>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="mt-12 sm:mt-28">
            <Depoimentos>
              <DepoimentosCard items={DepoimentosConfig} />
            </Depoimentos>
          </div>
        </Container>
      </div>

      <div className="mt-12 bg-primaryBlue p-10 sm:mt-28">
        <Container>
          <div>
            <Faq />
          </div>
        </Container>
      </div>
    </main>
  );
}
