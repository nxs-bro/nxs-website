import { Link } from "react-router-dom";
import Section, { SectionLabel, SectionTitle } from "@/components/Section";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Content Growth System",
    subtitle: "For founders who want a predictable content engine",
    desc: "We build a full content system — from strategy to production to distribution — that generates leads and builds authority on autopilot.",
    features: [
      "Custom growth strategy & content roadmap",
      "AI-powered content ideation & scripting",
      "Professional video editing & graphic design",
      "Multi-platform distribution (IG, YT, LinkedIn, X)",
      "Weekly performance analytics & optimization",
      "Direct access to your growth strategist",
    ],
    outcomes: ["Predictable lead flow from content", "Positioned as industry authority", "Consistent growth month over month"],
  },
  {
    title: "Paid Ads & Scaling",
    subtitle: "For brands ready to scale what's already working",
    desc: "We take your best-performing organic content and amplify it with targeted paid campaigns that drive qualified leads at scale.",
    features: [
      "Ad creative strategy & production",
      "Campaign setup & management (Meta, YouTube, Google)",
      "Audience research & targeting",
      "Landing page optimization",
      "A/B testing & creative iteration",
      "Monthly reporting & scaling recommendations",
    ],
    outcomes: ["Lower cost per acquisition", "Scalable paid growth system", "Higher ROI on ad spend"],
  },
  {
    title: "Full Content Management",
    subtitle: "For busy founders who want it all handled",
    desc: "End-to-end social media management — we handle everything so you can focus entirely on running your business.",
    features: [
      "Everything in Content Growth System",
      "Community management & engagement",
      "Content calendar planning & approval",
      "Brand voice development",
      "Crisis management & reputation monitoring",
      "Monthly strategy reviews & pivots",
    ],
    outcomes: ["Zero content stress", "Professional brand presence 24/7", "More time for business growth"],
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section>
        <SectionLabel>Our Services</SectionLabel>
        <SectionTitle>We don't just post content.<br />We build <span className="text-primary">growth systems</span>.</SectionTitle>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed">
          Three proven packages designed to turn your social media into a client acquisition machine.
        </p>
      </Section>

      {/* Services */}
      {services.map((s, i) => (
        <Section key={s.title} className={i % 2 === 0 ? "bg-secondary" : ""}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">{s.subtitle}</span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{s.desc}</p>
              <h4 className="font-display font-semibold text-foreground mb-4">What's Included</h4>
              <div className="space-y-3">
                {s.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-6">Expected Outcomes</h4>
              <div className="space-y-4">
                {s.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground font-medium">{o}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 mt-8"
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="text-center bg-secondary">
        <SectionTitle className="mx-auto max-w-2xl">
          Not sure which package is right for you?
        </SectionTitle>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
          Book a free strategy call and we'll recommend the best path forward.
        </p>
        <Link
          to="/contact"
          className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 mt-8"
        >
          Book a Free Call <ArrowRight size={18} />
        </Link>
      </Section>
    </div>
  );
};

export default Services;
