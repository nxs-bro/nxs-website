import { Link } from "react-router-dom";
import Section, { SectionLabel, SectionTitle } from "@/components/Section";
import { ArrowRight, Target, TrendingUp, Users, Zap } from "lucide-react";
import cybkartLogo from "@/assets/brands/cybkart.png";
import tvsLogo from "@/assets/brands/tvs.png";
import yamahaLogo from "@/assets/brands/yamaha.webp";
import myathleteLogo from "@/assets/brands/myathlete.png";
import naturalNagasLogo from "@/assets/brands/natural-nagas.png";
import mysorePalaceLogo from "@/assets/brands/mysore-palace.png";
import totalcorefitLogo from "@/assets/brands/totalcorefit.png";
import nfdcLogo from "@/assets/brands/nfdc.png";

const values = [
  { icon: Target, title: "Strategy-First Approach", desc: "Not random posting. Every action is backed by data and a clear growth plan." },
  { icon: TrendingUp, title: "Real Growth, Not Vanity", desc: "We measure success by leads and revenue, not likes and followers." },
  { icon: Zap, title: "Creative + Performance Driven", desc: "We combine creativity with data-driven execution for real results." },
  { icon: Users, title: "Built for Personal Brands", desc: "Designed specifically for personal brands and modern businesses." },
];

const About = () => {
  return (
    <div className="pt-20">
      <Section>
        <SectionLabel>Who We Are</SectionLabel>
        <SectionTitle>We're not a typical <span className="text-primary">agency</span>.</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              NXS Media is a results-driven digital marketing agency helping individuals and brands build a strong, recognisable personal presence online.
            </p>
            <p>
              Most people are stuck posting content without direction — no strategy, no consistency, no results. At NXS Media, we turn your social media into a structured growth system that helps you stand out and scale.
            </p>
            <p>
              We combine strategy, creativity, and execution to turn your social media into a growth engine — not just a posting platform. Anyone can post content. Very few can build authority.
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-8 border border-border">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">By the Numbers</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { v: "200M+", l: "Views Generated" },
                { v: "1M+", l: "Followers Built" },
                { v: "50+", l: "Brands Scaled" },
                { v: "3+", l: "Years Experience" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-primary">{s.v}</div>
                  <div className="text-muted-foreground text-sm mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-secondary">
        <SectionLabel>Why Choose NXS Media</SectionLabel>
        <SectionTitle>Because growth without direction is just noise.</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {values.map((v) => (
            <div key={v.title} className="bg-background rounded-xl p-8 border border-border">
              <v.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trusted By */}
      <Section>
        <SectionLabel>Trusted By</SectionLabel>
        <SectionTitle>Brands & individuals who trust us</SectionTitle>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-14">
          {[
            { name: "TVS", logo: tvsLogo },
            { name: "Yamaha", logo: yamahaLogo },
            { name: "My Athlete", logo: myathleteLogo },
            { name: "Cybkart", logo: cybkartLogo },
            { name: "Natural Nagas", logo: naturalNagasLogo },
            { name: "Mysore Palace", logo: mysorePalaceLogo },
            { name: "Total Core Fit", logo: totalcorefitLogo },
            { name: "NFDC", logo: nfdcLogo },
          ].map((brand) => (
            <div key={brand.name} className="flex items-center justify-center h-16 w-36">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-secondary text-center">
        <SectionTitle className="mx-auto max-w-2xl">Let's build your brand.</SectionTitle>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
          Let's discuss how we can turn your social media into a growth engine.
        </p>
        <Link
          to="/contact"
          className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 mt-8"
        >
          Get in Touch <ArrowRight size={18} />
        </Link>
      </Section>
    </div>
  );
};

export default About;
