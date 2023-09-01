import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { HeroSec } from "./components/HeroSec";
import { LottiePlayer } from "./components/HeroSec/components";
import group from "@/../../public/assets/lottie/group.json";
import boy from "@/../../public/assets/lottie/boy.json";
import { CardMobile, MainCard } from "./components/Cards";
import { CardsConfig } from "./config";

export default function Home() {
  return (
    <main>
      <div className="bg-primaryBlue pb-10">
        <Container>
          <div className="pt-32 sm:pt-48">
            <Hero>
              <LottiePlayer src={group} />
            </Hero>
          </div>
          {/* <div className="mt-10 sm:mt-20">
            <HeroSec>
              <LottiePlayer src={boy} />
            </HeroSec>
          </div> */}
          <div className="sm:mt-12 lg:mt-48">
            <MainCard cards={CardsConfig}>
              <CardMobile cards={CardsConfig} />
            </MainCard>
          </div>
        </Container>
      </div>
    </main>
  );
}
