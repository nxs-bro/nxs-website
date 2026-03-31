import { Link } from "react-router-dom";
import Section, { SectionLabel, SectionTitle } from "@/components/Section";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { ArrowRight, Target, Video, BarChart3, Zap, TrendingUp, Users, Eye, AlertTriangle, CheckCircle2, Quote } from "lucide-react";
import cybkartLogo from "@/assets/brands/cybkart.png";
import tvsLogo from "@/assets/brands/tvs.png";
import yamahaLogo from "@/assets/brands/yamaha.webp";
import myathleteLogo from "@/assets/brands/myathlete.png";
import naturalNagasLogo from "@/assets/brands/natural-nagas.png";
import mysorePalaceLogo from "@/assets/brands/mysore-palace.png";
import totalcorefitLogo from "@/assets/brands/totalcorefit.png";
import nfdcLogo from "@/assets/brands/nfdc.png";

const stats = [
  { value: "200M+", label: "Views Generated" },
  { value: "1M+", label: "Followers Built" },
  { value: "50+", label: "Brands Scaled" },
];

const painPoints = [
  { icon: AlertTriangle, text: "Posting content without direction — no strategy, no consistency" },
  { icon: Eye, text: "Getting views but no leads or sales." },
  { icon: Target, text: "Posting content but not seeing real results" },
];

const systemSteps = [
  { num: "01", title: "Content Production & Strategy", desc: "Clear roadmap for consistent growth. AI-powered content production, engaging video editing, and graphic design.", icon: Target },
  { num: "02", title: "Organic Growth", desc: "Helping business owners scale through high-performing organic content that attracts the right audience.", icon: Video },
  { num: "03", title: "Social Media Management", desc: "End-to-end handling of your social media and production so you focus on your business.", icon: BarChart3 },
];

const services = [
  {
    title: "Social Media Content Production & Strategy",
    desc: "A complete system — clear growth roadmap, AI-powered content production, engaging video editing, and graphic design. We position you as an expert and turn attention into leads.",
    outcomes: ["Authority positioning", "Content that attracts the right audience", "200M+ views generated across client accounts"],
  },
  {
    title: "Organic Growth & Scaling",
    desc: "Helping business owners scale through high-performing organic content. We create content that converts followers into clients and opportunities.",
    outcomes: ["Predictable content pipeline", "Real growth, not vanity metrics", "Lead generation from content"],
  },
  {
    title: "Full Social Media & Production Management",
    desc: "End-to-end social media and production management so you can focus on your business while we handle everything else.",
    outcomes: ["Zero content stress", "Consistent posting schedule", "Professional brand presence"],
  },
];

const caseStudies = [
  {
    name: "Vinod Krishna",
    niche: "Personal Brand / Fitness",
    result: "218K+ followers",
    desc: "Built a massive following through strategic content and positioning.",
    detail: "684 posts",
  },
  {
    name: "IFBB PRO Prateek Talukdar",
    niche: "Fitness / IFBB Pro",
    result: "122K+ followers",
    desc: "Scaled from niche athlete to recognized online authority.",
    detail: "1,485 posts",
  },
  {
    name: "Khati Axomiya Vlog",
    niche: "YouTube / Lifestyle",
    result: "258K+ subscribers",
    desc: "Grew YouTube presence with strategic content planning.",
    detail: "149 videos",
  },
  {
    name: "Glatian Alva",
    niche: "YouTube / Creator",
    result: "24.3K+ subscribers",
    desc: "Built a growing YouTube channel with consistent content strategy.",
    detail: "218 videos",
  },
];

const testimonials = [
  {
    name: "Vinod Krishna",
    role: "Fitness Creator",
    quote: "NXS Media transformed my social media presence. From inconsistent posting to a fully managed growth system — the results speak for themselves.",
  },
  {
    name: "Prateek Talukdar",
    role: "IFBB Pro Athlete",
    quote: "They understood my niche and built a content strategy that actually converts followers into clients. Highly recommend.",
  },
];

const whyUs = [
  { icon: Target, title: "Strategy-First Approach", desc: "Not random posting. Every piece of content is backed by a clear growth strategy." },
  { icon: TrendingUp, title: "Real Growth, Not Vanity", desc: "We focus on leads and revenue, not just likes and followers." },
  { icon: Zap, title: "Creative + Performance Driven", desc: "We combine creativity with data-driven execution for real results." },
  { icon: Users, title: "Built for Personal Brands", desc: "Designed specifically for personal brands and modern businesses." },
];

const trustedBrands = [
  { name: "TVS", logo: tvsLogo },
  { name: "Yamaha", logo: yamahaLogo },
  { name: "My Athlete", logo: myathleteLogo },
  { name: "Cybkart", logo: cybkartLogo },
  { name: "Natural Nagas", logo: naturalNagasLogo },
  { name: "Mysore Palace", logo: mysorePalaceLogo },
  { name: "Total Core Fit", logo: totalcorefitLogo },
];

const Index = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 bg-surface-sunken overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        <div className="absolute inset-0 z-[1] bg-background/5" />
        <div className="container-narrow px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <SectionLabel>Results-Driven Digital Marketing Agency</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
              We don't just grow pages.{" "}
              <span className="text-primary">We build brands.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              We turn your social media into a structured growth system that helps you stand out and scale. 200M+ views generated | 1M+ followers built.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold cta-glow inline-flex items-center justify-center gap-2"
              >
                Let's Build Your Brand <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-secondary transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Free Audit
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-24 pt-12 border-t border-white/[0.08] max-w-2xl">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-gap" />

      {/* PROBLEM */}
      <Section className="bg-surface-elevated">
        <SectionLabel>The Problem</SectionLabel>
        <SectionTitle>Sound familiar?</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {painPoints.map((p) => (
            <div key={p.text} className="glass-card p-8">
              <p.icon className="text-primary mb-5 transition-transform duration-300 group-hover:scale-110" size={28} />
              <p className="text-foreground text-lg font-medium leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />
      <div className="section-gap" />

      {/* SOLUTION */}
      <Section className="bg-background">
        <SectionLabel>The Solution</SectionLabel>
        <SectionTitle>We don't sell services. We install a <span className="text-primary">growth system</span>.</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {systemSteps.map((step) => (
            <div key={step.num} className="glass-card p-8 group">
              <span className="text-primary font-display text-sm font-bold">{step.num}</span>
              <step.icon className="text-muted-foreground mt-5 mb-4 group-hover:text-primary transition-colors duration-300" size={24} />
              <h3 className="font-display text-xl font-bold text-foreground mb-3 transition-colors duration-300">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-gap" />

      {/* SERVICES */}
      <Section className="bg-surface-elevated">
        <SectionTitle>What We Offer</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-8 flex flex-col group">
              <h3 className="font-display text-xl font-bold text-foreground mb-4 transition-colors duration-300">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{s.desc}</p>
              <div className="mt-auto space-y-3">
                {s.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{o}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="text-primary font-semibold inline-flex items-center gap-2 hover:underline transition-all duration-300">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <div className="section-divider" />
      <div className="section-gap" />

      {/* CASE STUDIES */}
      <Section className="bg-background">
        <SectionLabel>Results</SectionLabel>
        <SectionTitle>Real clients. Real growth.</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {caseStudies.map((cs) => (
            <Link
              to="/case-studies"
              key={cs.name}
              className="glass-card p-8 group block"
            >
              <span className="text-xs text-primary font-semibold uppercase tracking-wider">{cs.niche}</span>
              <h3 className="font-display text-xl font-bold text-foreground mt-3 mb-2 transition-colors duration-300">{cs.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{cs.desc}</p>
              <div className="font-display text-2xl font-bold text-primary">{cs.result}</div>
              <div className="text-xs text-muted-foreground mt-1">{cs.detail}</div>
            </Link>
          ))}
        </div>
      </Section>

      <div className="section-gap" />

      {/* TRUSTED BY */}
      <Section className="bg-surface-elevated text-center">
        <SectionLabel>Trusted By</SectionLabel>
        <SectionTitle className="mx-auto">Brands & individuals who trust us</SectionTitle>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-14">
          {trustedBrands.map((brand) => (
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

      {/* TESTIMONIALS */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 bg-light-section">
        <div className="container-narrow">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-light-section-foreground leading-tight">
            What our clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl p-10 border border-black/8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                style={{ backgroundColor: "hsl(0 0% 100%)" }}
              >
                <Quote className="text-primary mb-5" size={28} />
                <p className="text-light-section-foreground text-lg leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-display font-bold text-light-section-foreground">{t.name}</div>
                  <div className="text-light-section-muted text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Section className="bg-background">
        <SectionLabel>Why NXS Media</SectionLabel>
        <SectionTitle>Because growth without direction is just noise.</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {whyUs.map((w) => (
            <div key={w.title} className="glass-card p-8 group">
              <w.icon className="text-primary mb-5 transition-transform duration-300 group-hover:scale-110" size={28} />
              <h3 className="font-display text-lg font-bold text-foreground mb-3 transition-colors duration-300">{w.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />
      <div className="section-gap" />

      {/* FINAL CTA */}
      <Section className="bg-surface-elevated text-center">
        <SectionTitle className="mx-auto max-w-2xl">
          Let's <span className="text-primary">your social identity</span>.
        </SectionTitle>
        <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto">
          Stop guessing. Start growing. We combine strategy, creativity, and execution to turn your social media into a growth engine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="tel:+916001745159"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold cta-glow inline-flex items-center justify-center gap-2"
          >
            Book a Call <ArrowRight size={18} />
          </a>
          <a
            href="https://wa.me/916001745159?text=Hi%20NXS%20Media%2C%20I%27m%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/[0.08] text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-secondary transition-all duration-300 inline-flex items-center justify-center"
          >
            WhatsApp Us
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Index;
