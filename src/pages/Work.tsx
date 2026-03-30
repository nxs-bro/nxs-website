import { useState } from "react";
import Section, { SectionLabel, SectionTitle } from "@/components/Section";
import { Play, X } from "lucide-react";

const categories = ["All", "Reels", "Ads", "Branding"] as const;
type Category = (typeof categories)[number];

interface WorkItem {
  title: string;
  niche: string;
  result: string;
  category: Exclude<Category, "All">;
  videoId: string;
}

const workItems: WorkItem[] = [
  { title: "Fitness Transformation Reel", niche: "Fitness", result: "2.5M+ views", category: "Reels", videoId: "dQw4w9WgXcQ" },
  { title: "Brand Launch Ad", niche: "E-commerce", result: "500K+ reach", category: "Ads", videoId: "dQw4w9WgXcQ" },
  { title: "Personal Brand Identity", niche: "Coaching", result: "3x engagement", category: "Branding", videoId: "dQw4w9WgXcQ" },
  { title: "Viral Hook Reel", niche: "Lifestyle", result: "1.8M+ views", category: "Reels", videoId: "dQw4w9WgXcQ" },
  { title: "Product Showcase Ad", niche: "Tech", result: "10K+ leads", category: "Ads", videoId: "dQw4w9WgXcQ" },
  { title: "Podcast Clip Series", niche: "Business", result: "800K+ views", category: "Reels", videoId: "dQw4w9WgXcQ" },
  { title: "Athlete Brand Kit", niche: "Sports", result: "Full rebrand", category: "Branding", videoId: "dQw4w9WgXcQ" },
  { title: "Lead Gen Campaign", niche: "SaaS", result: "200+ signups", category: "Ads", videoId: "dQw4w9WgXcQ" },
  { title: "Motivational Series", niche: "Fitness", result: "5M+ views", category: "Reels", videoId: "dQw4w9WgXcQ" },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? workItems : workItems.filter((w) => w.category === activeCategory);

  return (
    <div className="pt-20">
      <Section>
        <SectionLabel>Our Work</SectionLabel>
        <SectionTitle>Content that <span className="text-primary">performs</span>.</SectionTitle>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed">
          A showcase of high-performing content we've produced for our clients.
        </p>

        {/* Category filter */}
        <div className="flex gap-3 mt-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filtered.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveVideo(item.videoId)}
              className="group bg-secondary rounded-xl border border-border overflow-hidden text-left hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video bg-muted relative flex items-center justify-center">
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center group-hover:bg-background/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">{item.niche}</span>
                <h3 className="font-display font-bold text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.result}</p>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[60] bg-background/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
            >
              <X size={28} />
            </button>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
