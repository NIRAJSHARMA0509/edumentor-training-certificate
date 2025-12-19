import { FC } from 'react';

const CertificateBorder: FC = () => {
  return (
    <>
      {/* Outer decorative frame */}
      <div className="absolute inset-3 md:inset-4 border-2 border-certificate-gold/40 pointer-events-none" />
      
      {/* Inner decorative frame */}
      <div className="absolute inset-4 md:inset-5 border border-certificate-border/30 pointer-events-none" />
      
      {/* Decorative double line frame */}
      <div className="absolute inset-5 md:inset-6 pointer-events-none">
        <div className="absolute inset-0 border border-certificate-gold/25" />
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
    'top-left': 'top-2 left-2 md:top-3 md:left-3',
    'top-right': 'top-2 right-2 md:top-3 md:right-3 rotate-90',
    'bottom-left': 'bottom-2 left-2 md:bottom-3 md:left-3 -rotate-90',
    'bottom-right': 'bottom-2 right-2 md:bottom-3 md:right-3 rotate-180',
  };

  return (
    <div className={`absolute w-8 h-8 md:w-10 md:h-10 pointer-events-none ${positionClasses[position]}`}>
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
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
        <path
          d="M5 5 L12 12 L5 19 L-2 12 Z"
          fill="hsl(42 60% 52%)"
          opacity="0.5"
          transform="translate(2, 2)"
        />
      </svg>
    </div>
  );
};

interface EdgeDecorationProps {
  position: 'top' | 'bottom';
}

const EdgeDecoration: FC<EdgeDecorationProps> = ({ position }) => {
  const positionClasses = position === 'top' 
    ? 'top-2 md:top-3 left-1/2 -translate-x-1/2' 
    : 'bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 rotate-180';

  return (
    <div className={`absolute w-20 md:w-24 h-3 pointer-events-none ${positionClasses}`}>
      <svg viewBox="0 0 120 16" className="w-full h-full" fill="none">
        <path
          d="M60 8 L55 3 L60 -2 L65 3 Z"
          fill="hsl(42 60% 52%)"
          opacity="0.6"
          transform="translate(0, 5)"
        />
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
