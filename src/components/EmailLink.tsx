import React from 'react';

interface EmailLinkProps {
  className?: string;
}

// Obfuscated email component to protect from scrapers
const EmailLink: React.FC<EmailLinkProps> = ({ className = '' }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const user = 'liferecoverysv';
    const domain = 'gmail';
    const tld = 'com';
    window.location.href = `mailto:${user}@${domain}.${tld}`;
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className={className}
      aria-label="Send email to Life Recovery"
    >
      Contact via Email
    </a>
  );
};

export default EmailLink;
