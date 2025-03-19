import React from "react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src="/images/intellibyte-logo.png"
      alt="Intellibyte Software Solutions Logo"
      className={className}
      style={{ 
        objectFit: 'contain',
        maxWidth: '100%',
        maxHeight: '100%'
      }}
    />
  );
};

export default Logo;
