import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { HeroSec } from "./components/HeroSec";
import { LottiePlayer } from "./components/HeroSec/components";

export default function Home() {
  return (
    <main>
      <div>
        <Container>
          <div className="mt-32 sm:mt-48">
            <Hero />
          </div>
          <div className="mt-10 sm:mt-20">
            <HeroSec>
              <LottiePlayer />
            </HeroSec>
          </div>
        </Container>
      </div>
    </main>
  );
}
