import { Link } from "react-router-dom";
import Section, { SectionLabel, SectionTitle } from "@/components/Section";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    name: "Vinod Krishna",
    niche: "Personal Brand / Fitness",
    followers: "218K+",
    posts: "684",
    background: "Fitness content creator looking to build a strong personal brand and monetize his audience.",
    problem: "Inconsistent posting, no content strategy, low engagement despite quality content.",
    strategy: "Built a full content system — scripted hooks, structured video formats, consistent posting schedule, and authority positioning.",
    execution: "3 reels/day, strategic hashtags, community engagement, collaborations with fitness brands.",
    results: [
      "Grew from 20K to 218K+ followers",
      "684+ pieces of content produced",
      "Multiple brand deal partnerships",
      "Established as a top fitness creator in India",
    ],
  },
  {
    name: "IFBB PRO Prateek Talukdar",
    niche: "Fitness / IFBB Pro Athlete",
    followers: "122K+",
    posts: "1,485",
    background: "Professional IFBB Pro bodybuilder wanting to grow his online presence and attract sponsorships.",
    problem: "Great physique content but poor content strategy, no audience growth system, missing out on sponsorship opportunities.",
    strategy: "Positioned as a fitness authority, created educational + lifestyle content mix, built engagement loops.",
    execution: "Daily content across Instagram and YouTube, behind-the-scenes training content, supplement brand collaborations.",
    results: [
      "Scaled to 122K+ followers",
      "1,485+ posts published",
      "Secured major supplement brand deals",
      "Became a recognized name in Indian bodybuilding",
    ],
  },
  {
    name: "Khati Axomiya Vlog Dubai",
    niche: "YouTube / Lifestyle Vlogging",
    followers: "258K+",
    videos: "149",
    background: "Lifestyle vlogger based in Dubai creating Assamese-language content for a niche audience.",
    problem: "Struggling to grow beyond a small subscriber base, low view counts, no monetization strategy.",
    strategy: "Optimized titles, thumbnails, and content structure for YouTube algorithm. Created viral-worthy content hooks.",
    execution: "Consistent weekly uploads, SEO-optimized descriptions, community posts, strategic collaborations.",
    results: [
      "Grew to 258K+ subscribers",
      "149 videos published",
      "Strong monetization through AdSense",
      "Became the top Assamese vlogger in Dubai",
    ],
  },
];

const CaseStudies = () => {
  return (
    <div className="pt-20">
      <Section>
        <SectionLabel>Case Studies</SectionLabel>
        <SectionTitle>Real clients. Real numbers. <span className="text-primary">Real growth.</span></SectionTitle>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed">
          Every result here was built through our proven content growth system. No shortcuts, no vanity metrics — just real, compounding growth.
        </p>
      </Section>

      {caseStudies.map((cs, i) => (
        <Section key={cs.name} className={i % 2 === 0 ? "bg-secondary" : ""}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Header */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 border-b border-border">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">{cs.niche}</span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">{cs.name}</h3>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-primary" size={20} />
                <span className="font-display text-3xl font-bold text-primary">{cs.followers}</span>
                <span className="text-muted-foreground text-sm">followers</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">Background</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{cs.background}</p>

              <h4 className="font-display font-semibold text-foreground mb-3 mt-6">The Problem</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{cs.problem}</p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">Strategy</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{cs.strategy}</p>

              <h4 className="font-display font-semibold text-foreground mb-3 mt-6">Execution</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{cs.execution}</p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-4">Results</h4>
              <div className="space-y-3">
                {cs.results.map((r) => (
                  <div key={r} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="text-center">
        <SectionTitle className="mx-auto max-w-2xl">
          Want results like these?
        </SectionTitle>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
          Let's build your growth system and make you the next case study.
        </p>
        <Link
          to="/contact"
          className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 mt-8"
        >
          Book a Strategy Call <ArrowRight size={18} />
        </Link>
      </Section>
    </div>
  );
};

export default CaseStudies;
