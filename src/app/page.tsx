import Link from "next/link";
import { Container } from "./components/Container";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main>
      <div>
        <Container>
          <div className="mt-10 lg:mt-24">
            <Hero />
          </div>
        </Container>
      </div>
    </main>
  );
}
