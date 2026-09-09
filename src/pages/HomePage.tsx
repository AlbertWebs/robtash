import { Engage } from "../components/Engage";
import { Geography } from "../components/Geography";
import { Hero } from "../components/Hero";
import { Impact } from "../components/Impact";
import { Insights } from "../components/Insights";
import { Themes } from "../components/Themes";

export function HomePage() {
  return (
    <>
      <Hero />
      <Themes />
      <Impact />
      <Insights />
      <Geography />
      <Engage />
    </>
  );
}
