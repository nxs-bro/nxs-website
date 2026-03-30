import { Link } from "react-router-dom";
import Section, { SectionLabel, SectionTitle } from "@/components/Section";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { ArrowRight, Target, Video, BarChart3, Zap, TrendingUp, Users, Eye, AlertTriangle, CheckCircle2, Quote } from "lucide-react";

const stats = [
  { value: "200M+", label: "Views Generated" },
  { value: "1M+", label: "Followers Built" },
  { value: "50+", label: "Brands Scaled" },
];

const painPoints = [
  { icon: AlertTriangle, text: "Posting consistently but getting zero results" },
  { icon: Eye, text: "Getting views but no leads or revenue" },
  { icon: Target, text: "No clear content strategy or direction" },
];

const systemSteps = [
  { num: "01", title: "Strategy", desc: "We audit your brand and build a custom growth roadmap.", icon: Target },
  { num: "02", title: "Content Production", desc: "AI-powered content creation with engaging video editing.", icon: Video },
  { num: "03", title: "Distribution", desc: "Multi-platform distribution for maximum reach.", icon: BarChart3 },
  { num: "04", title: "Conversion", desc: "Turn attention into leads and paying clients.", icon: Zap },
];

const services = [
  {
    title: "Content Growth System",
    desc: "A complete system that turns your social media into a lead generation machine. Strategy, content, distribution — all handled.",
    outcomes: ["Predictable content pipeline", "Authority positioning", "Lead generation from content"],
  },
  {
    title: "Paid Ads & Scaling",
    desc: "High-performing ad campaigns that scale your best content and drive qualified leads directly to your business.",
    outcomes: ["Lower cost per lead", "Scalable ad systems", "Data-driven optimization"],
  },
  {
    title: "Full Content Management",
    desc: "End-to-end content management so you can focus on your business while we handle everything else.",
    outcomes: ["Zero content stress", "Consistent posting schedule", "Professional brand presence"],
  },
];

const caseStudies = [
  {
    name: "Vinod Krishna",
    niche: "Personal Brand / Fitness",
    result: "218K+ followers",
    desc: "Built a massive following through strategic content and positioning.",
  },
  {
    name: "IFBB PRO Prateek Talukdar",
    niche: "Fitness / IFBB Pro",
    result: "122K+ followers",
    desc: "Scaled from niche athlete to recognized online authority.",
  },
  {
    name: "Khati Axomiya Vlog",
    niche: "YouTube / Lifestyle",
    result: "258K+ subscribers",
    desc: "Grew YouTube presence with strategic content planning.",
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
  { icon: Target, title: "Strategy-First Approach", desc: "Every piece of content is backed by a clear growth strategy." },
  { icon: TrendingUp, title: "Real Growth, Not Vanity", desc: "We focus on leads and revenue, not just likes and followers." },
  { icon: Users, title: "Built for Founders", desc: "Designed specifically for personal brands and modern businesses." },
];

const Index = () => {
  return (
    <div>
      {/* HERO — deepest black */}
      <section className="min-h-screen flex items-center pt-20 bg-surface-sunken">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <SectionLabel>Content Growth Agency</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
              We turn content into a{" "}
              <span className="text-primary">predictable growth system</span>{" "}
              for founders & personal brands.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              200M+ views generated | 1M+ followers built across client accounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book a Strategy Call <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-secondary transition-colors inline-flex items-center justify-center"
              >
                Get Free Audit
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-24 pt-12 border-t border-border max-w-2xl">
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

      {/* PROBLEM — elevated surface (lighter) */}
      <Section className="bg-surface-elevated">
        <SectionLabel>The Problem</SectionLabel>
        <SectionTitle>Sound familiar?</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {painPoints.map((p) => (
            <div key={p.text} className="bg-background rounded-xl p-8 border border-border shadow-lg shadow-black/20">
              <p.icon className="text-primary mb-5" size={28} />
              <p className="text-foreground text-lg font-medium leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />
      <div className="section-gap" />

      {/* SOLUTION — base background (darker) */}
      <Section className="bg-background">
        <SectionLabel>The Solution</SectionLabel>
        <SectionTitle>We don't sell services. We install a <span className="text-primary">growth system</span>.</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {systemSteps.map((step) => (
            <div key={step.num} className="bg-card rounded-xl p-8 border border-border group hover:border-primary/50 transition-colors shadow-lg shadow-black/20">
              <span className="text-primary font-display text-sm font-bold">{step.num}</span>
              <step.icon className="text-muted-foreground mt-5 mb-4 group-hover:text-primary transition-colors" size={24} />
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-gap" />

      {/* SERVICES — elevated surface (lighter) */}
      <Section className="bg-surface-elevated">
        <SectionLabel>What We Offer</SectionLabel>
        <SectionTitle>Three ways to grow with NXS Media</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-8 border border-border flex flex-col shadow-lg shadow-black/20">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{s.title}</h3>
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
          <Link to="/services" className="text-primary font-semibold inline-flex items-center gap-2 hover:underline">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <div className="section-divider" />
      <div className="section-gap" />

      {/* CASE STUDIES — base background (darker) */}
      <Section className="bg-background">
        <SectionLabel>Results</SectionLabel>
        <SectionTitle>Real clients. Real growth.</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {caseStudies.map((cs) => (
            <Link
              to="/case-studies"
              key={cs.name}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors group shadow-lg shadow-black/20"
            >
              <span className="text-xs text-primary font-semibold uppercase tracking-wider">{cs.niche}</span>
              <h3 className="font-display text-xl font-bold text-foreground mt-3 mb-3">{cs.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{cs.desc}</p>
              <div className="font-display text-2xl font-bold text-primary">{cs.result}</div>
            </Link>
          ))}
        </div>
      </Section>

      <div className="section-gap" />

      {/* PROOF — elevated surface (lighter) */}
      <Section className="bg-surface-elevated text-center">
        <SectionLabel>Proof</SectionLabel>
        <SectionTitle className="mx-auto">Numbers don't lie.</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14 max-w-3xl mx-auto">
          {[
            { v: "200M+", l: "Views Generated" },
            { v: "1M+", l: "Followers Built" },
            { v: "50+", l: "Brands Scaled" },
            { v: "3+", l: "Years Experience" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl sm:text-5xl font-bold text-primary">{s.v}</div>
              <div className="text-muted-foreground text-sm mt-3">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS — LIGHT SECTION for contrast break */}
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
                className="rounded-xl p-10 border border-black/8 shadow-sm"
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


      {/* WHY CHOOSE US — base background (darker) */}
      <Section className="bg-background">
        <SectionLabel>Why NXS Media</SectionLabel>
        <SectionTitle>Why founders choose us</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-card rounded-xl p-8 border border-border shadow-lg shadow-black/20">
              <w.icon className="text-primary mb-5" size={28} />
              <h3 className="font-display text-lg font-bold text-foreground mb-3">{w.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />
      <div className="section-gap" />

      {/* FINAL CTA — elevated surface */}
      <Section className="bg-surface-elevated text-center">
        <SectionTitle className="mx-auto max-w-2xl">
          Let's build your <span className="text-primary">growth system</span>.
        </SectionTitle>
        <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto">
          Stop guessing. Start growing. Book a free strategy call today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            Book a Call <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/916001745159?text=Hi%20NXS%20Media%2C%20I%27m%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-background transition-colors inline-flex items-center justify-center"
          >
            WhatsApp Us
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Index;
