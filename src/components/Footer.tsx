import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-narrow section-padding !py-12 sm:!py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              NXS <span className="text-primary">MEDIA</span>
            </h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              We turn content into a predictable growth system for founders & personal brands.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Services", "Case Studies", "Work", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:nxs.media.service@gmail.com" className="hover:text-primary transition-colors">
                nxs.media.service@gmail.com
              </a>
              <a href="tel:+916001745159" className="hover:text-primary transition-colors">
                +91 6001745159
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NXS Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
