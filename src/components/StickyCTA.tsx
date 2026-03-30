import { MessageCircle } from "lucide-react";

const StickyCTA = () => {
  return (
    <a
      href="https://wa.me/916001745159?text=Hi%20NXS%20Media%2C%20I%27m%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg shadow-primary/30 hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default StickyCTA;
