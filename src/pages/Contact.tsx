import { useState } from "react";
import Section, { SectionLabel, SectionTitle } from "@/components/Section";
import { Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    businessType: "",
    revenue: "",
    challenge: "",
    budget: "",
    email: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.challenge.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }

    setSending(true);

    try {
      await new Promise((r) => setTimeout(r, 1000));
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", businessType: "", revenue: "", challenge: "", budget: "", email: "" });
    } catch {
      toast({ title: "Something went wrong", description: "Please try WhatsApp instead.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-20">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionLabel>Contact Us</SectionLabel>
            <SectionTitle>Let's build your <span className="text-primary">growth system</span>.</SectionTitle>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              Fill out the form and we'll get back to you within 24 hours with a custom growth plan.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Email</h4>
                <a href="mailto:nxs.media.service@gmail.com" className="text-primary hover:underline">
                  nxs.media.service@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Phone</h4>
                <a href="tel:+916001745159" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  +91 6001745159
                </a>
              </div>
              <a
                href="https://wa.me/916001745159?text=Hi%20NXS%20Media%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-6 py-3 text-foreground text-sm font-semibold inline-flex items-center gap-2"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-background/50 border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-300"
                required
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full bg-background/50 border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-300"
                required
                maxLength={255}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Business Type</label>
              <select
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                className="w-full bg-background/50 border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-300"
              >
                <option value="">Select...</option>
                <option value="personal-brand">Personal Brand</option>
                <option value="ecommerce">E-commerce</option>
                <option value="saas">SaaS</option>
                <option value="coaching">Coaching / Consulting</option>
                <option value="agency">Agency</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Monthly Revenue Range</label>
              <select
                name="revenue"
                value={form.revenue}
                onChange={handleChange}
                className="w-full bg-background/50 border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-300"
              >
                <option value="">Select...</option>
                <option value="0-10k">₹0 – ₹10K</option>
                <option value="10k-50k">₹10K – ₹50K</option>
                <option value="50k-2l">₹50K – ₹2L</option>
                <option value="2l-10l">₹2L – ₹10L</option>
                <option value="10l+">₹10L+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Main Challenge *</label>
              <textarea
                name="challenge"
                value={form.challenge}
                onChange={handleChange}
                placeholder="What's your biggest challenge with content / growth right now?"
                rows={4}
                className="w-full bg-background/50 border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-colors duration-300"
                required
                maxLength={1000}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Budget Range</label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full bg-background/50 border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-300"
              >
                <option value="">Select...</option>
                <option value="under-10k">Under ₹10K/month</option>
                <option value="10k-25k">₹10K – ₹25K/month</option>
                <option value="25k-50k">₹25K – ₹50K/month</option>
                <option value="50k+">₹50K+/month</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold cta-glow inline-flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {sending ? "Sending..." : <>Send Inquiry <Send size={16} /></>}
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
