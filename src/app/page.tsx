import { Container } from "./components/Container";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main>
      <div>
        <Container>
          <div className="mt-40 sm:mt-48">
            <Hero />
          </div>
        </Container>
      </div>
    </main>
  );
}
