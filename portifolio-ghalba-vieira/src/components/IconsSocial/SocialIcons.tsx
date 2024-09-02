import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function SocialIcons() {
  return (
    <div className="flex space-x-4 my-3 text-slate-300">
      <a href="https://facebook.com" aria-label="Facebook">
        <FaFacebook size={24} />
      </a>
      <a href="https://instagram.com" aria-label="Instagram">
        <FaInstagram size={24} />
      </a>
      <a href="https://linkedin.com" aria-label="LinkedIn">
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}
