import { Link } from "react-router-dom";
import Section, { SectionLabel, SectionTitle } from "@/components/Section";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Social Media Content Production & Strategy",
    subtitle: "For founders who want to be positioned as experts",
    desc: "Clear roadmap for consistent growth. AI-powered content production, engaging video editing, and graphic design — all designed to position you as an authority and turn attention into leads and opportunities.",
    features: [
      "Custom growth strategy & content roadmap",
      "AI-powered content ideation & scripting",
      "Professional video editing & post-production",
      "Graphic design for social media",
      "Authority positioning & expert branding",
      "Content that attracts the right audience",
    ],
    outcomes: ["Positioned as industry authority", "Content pipeline that generates leads", "200M+ views generated across client accounts"],
  },
  {
    title: "Organic Growth & Scaling",
    subtitle: "For business owners ready to scale organically",
    desc: "Helping business owners scale through high-performing organic content. We create content that converts followers into clients and drives real business results — no paid ads required.",
    features: [
      "High-performing organic content strategy",
      "Multi-platform distribution (IG, YT, LinkedIn, X)",
      "Audience research & targeting",
      "Engagement loops & community building",
      "Weekly performance analytics & optimization",
      "Direct access to your growth strategist",
    ],
    outcomes: ["Predictable organic growth", "Real leads, not vanity metrics", "Scalable content system"],
  },
  {
    title: "Full Social Media & Production Management",
    subtitle: "For busy founders who want it all handled",
    desc: "End-to-end social media and production management — we handle everything so you can focus entirely on running your business.",
    features: [
      "Everything in Content Production & Strategy",
      "Full social media management",
      "Community management & engagement",
      "Content calendar planning & approval",
      "Brand voice development",
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
        <SectionTitle>We don't just grow pages.<br />We <span className="text-primary">build brands</span>.</SectionTitle>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed">
          Anyone can post content. Very few can build authority. We combine strategy, creativity, and execution to turn your social media into a growth engine.
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
