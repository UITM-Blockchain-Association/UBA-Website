import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "/src/assets/css/socialsLinks.css";

const socialLinks = [
  {
    name: "TWITTER",
    class: "twitter",
    qr: "/qr-twitter.png",
    link: "https://x.com/ubachain/",
  },
  {
    name: "INSTAGRAM",
    class: "instagram",
    qr: "/qr-instagram.png",
    link: "https://www.instagram.com/uitmblockchainassociation/",
  },
  {
    name: "LINKEDIN",
    class: "linkedin",
    qr: "/qr-linkedin.png",
    link: "https://www.linkedin.com/company/uitm-blockchain-association/",
  },
  {
    name: "DISCORD",
    class: "discord",
    qr: "/qr-discord.png",
    link: "https://discord.gg/9WwHK9KWR5",
  },
];

const SocialLinks = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="socials-container">
      <h2 className="socials-title">Keep up to date with us</h2>
      <img
        src="/ubalogo3dstaticimage.png"
        alt="Logo"
        className="socials-logo"
      />

      <div className="socials-links">
        {socialLinks.map((social, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Social Button as a link */}
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-button ${social.class}`}
            >
              {social.name}{" "}
              <span>
                <ArrowUpRight size={24} />
              </span>
            </a>

            {/* Tooltip with QR Code */}
            {hovered === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="qr-tooltip"
              >
                <img
                  src={social.qr}
                  alt={`${social.name} QR`}
                  className="qr-image"
                />
                <div className="tooltipTip"></div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
