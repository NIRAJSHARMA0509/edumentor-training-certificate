import { FC } from 'react';

interface CertificateFlourishProps {
  className?: string;
}

const CertificateFlourish: FC<CertificateFlourishProps> = ({ className = '' }) => {
  return (
    <div className={`${className}`}>
      <svg viewBox="0 0 200 24" className="w-full h-auto" fill="none">
        {/* Left flourish */}
        <path
          d="M0 12 Q20 12 35 8 Q50 4 65 8 Q80 12 90 12"
          stroke="hsl(42 60% 52%)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M15 12 Q30 16 45 12 Q55 8 70 12 Q80 16 90 12"
          stroke="hsl(42 50% 38%)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
        
        {/* Center diamond */}
        <path
          d="M100 4 L108 12 L100 20 L92 12 Z"
          fill="hsl(42 60% 52%)"
          opacity="0.6"
        />
        <path
          d="M100 7 L105 12 L100 17 L95 12 Z"
          fill="hsl(42 50% 38%)"
          opacity="0.8"
        />
        
        {/* Right flourish */}
        <path
          d="M200 12 Q180 12 165 8 Q150 4 135 8 Q120 12 110 12"
          stroke="hsl(42 60% 52%)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M185 12 Q170 16 155 12 Q145 8 130 12 Q120 16 110 12"
          stroke="hsl(42 50% 38%)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
        
        {/* Small decorative circles */}
        <circle cx="40" cy="12" r="2" fill="hsl(42 60% 52%)" opacity="0.5" />
        <circle cx="160" cy="12" r="2" fill="hsl(42 60% 52%)" opacity="0.5" />
        <circle cx="70" cy="10" r="1.5" fill="hsl(42 50% 38%)" opacity="0.4" />
        <circle cx="130" cy="10" r="1.5" fill="hsl(42 50% 38%)" opacity="0.4" />
      </svg>
    </div>
  );
};

export default CertificateFlourish;
