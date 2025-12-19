import { FC } from 'react';

const CertificateBorder: FC = () => {
  return (
    <>
      {/* Outer decorative frame */}
      <div className="absolute inset-4 md:inset-6 lg:inset-8 border-2 border-certificate-gold/40 pointer-events-none" />
      
      {/* Inner decorative frame */}
      <div className="absolute inset-6 md:inset-8 lg:inset-10 border border-certificate-border/30 pointer-events-none" />
      
      {/* Decorative double line frame */}
      <div className="absolute inset-[26px] md:inset-[34px] lg:inset-[42px] pointer-events-none">
        <div className="absolute inset-0 border border-certificate-gold/25" />
        <div className="absolute inset-1 border border-certificate-gold/15" />
      </div>
      
      {/* Corner ornaments */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />
      
      {/* Edge decorations */}
      <EdgeDecoration position="top" />
      <EdgeDecoration position="bottom" />
    </>
  );
};

interface CornerOrnamentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const CornerOrnament: FC<CornerOrnamentProps> = ({ position }) => {
  const positionClasses = {
    'top-left': 'top-3 left-3 md:top-5 md:left-5',
    'top-right': 'top-3 right-3 md:top-5 md:right-5 rotate-90',
    'bottom-left': 'bottom-3 left-3 md:bottom-5 md:left-5 -rotate-90',
    'bottom-right': 'bottom-3 right-3 md:bottom-5 md:right-5 rotate-180',
  };

  return (
    <div className={`absolute w-10 h-10 md:w-14 md:h-14 pointer-events-none ${positionClasses[position]}`}>
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        {/* Corner flourish */}
        <path
          d="M5 55 L5 25 Q5 5 25 5 L55 5"
          stroke="hsl(42 60% 52%)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M10 55 L10 28 Q10 10 28 10 L55 10"
          stroke="hsl(42 50% 38%)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
        {/* Decorative diamond */}
        <path
          d="M5 5 L12 12 L5 19 L-2 12 Z"
          fill="hsl(42 60% 52%)"
          opacity="0.5"
          transform="translate(2, 2)"
        />
        {/* Small circles */}
        <circle cx="20" cy="5" r="2" fill="hsl(42 60% 52%)" opacity="0.4" />
        <circle cx="5" cy="20" r="2" fill="hsl(42 60% 52%)" opacity="0.4" />
      </svg>
    </div>
  );
};

interface EdgeDecorationProps {
  position: 'top' | 'bottom';
}

const EdgeDecoration: FC<EdgeDecorationProps> = ({ position }) => {
  const positionClasses = position === 'top' 
    ? 'top-4 md:top-6 left-1/2 -translate-x-1/2' 
    : 'bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 rotate-180';

  return (
    <div className={`absolute w-24 md:w-32 h-4 pointer-events-none ${positionClasses}`}>
      <svg viewBox="0 0 120 16" className="w-full h-full" fill="none">
        {/* Center ornament */}
        <path
          d="M60 8 L55 3 L60 -2 L65 3 Z"
          fill="hsl(42 60% 52%)"
          opacity="0.6"
          transform="translate(0, 5)"
        />
        {/* Decorative lines */}
        <path
          d="M10 8 Q30 8 45 8 M75 8 Q90 8 110 8"
          stroke="hsl(42 60% 52%)"
          strokeWidth="1"
          opacity="0.4"
        />
        <circle cx="20" cy="8" r="1.5" fill="hsl(42 60% 52%)" opacity="0.5" />
        <circle cx="100" cy="8" r="1.5" fill="hsl(42 60% 52%)" opacity="0.5" />
      </svg>
    </div>
  );
};

export default CertificateBorder;
