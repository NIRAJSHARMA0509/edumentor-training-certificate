import { FC } from 'react';

interface CertificateSealProps {
  className?: string;
}

const CertificateSeal: FC<CertificateSealProps> = ({ className = '' }) => {
  return (
    <div className={`w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 ${className}`}>
      {/* Outer ring with embossed effect */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-certificate-gold via-certificate-gold-dark to-certificate-gold shadow-seal">
        
        {/* Animated shine effect */}
        <div 
          className="absolute inset-0 rounded-full opacity-30 animate-seal-shine"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
        />
        
        {/* Middle ring */}
        <div className="absolute inset-2 md:inset-3 rounded-full border-2 border-amber-50/40">
          
          {/* Inner circle with dashed border */}
          <div className="absolute inset-1 md:inset-2 rounded-full border border-dashed border-amber-50/50 flex items-center justify-center">
            
            {/* Content */}
            <div className="text-center px-2">
              {/* Laurel wreath top */}
              <svg viewBox="0 0 40 20" className="w-8 md:w-10 h-4 md:h-5 mx-auto mb-0.5 md:mb-1 opacity-80">
                <path
                  d="M20 18 Q10 15 5 8 Q8 10 12 8 Q15 12 20 14 Q25 12 28 8 Q32 10 35 8 Q30 15 20 18"
                  fill="none"
                  stroke="#fffbeb"
                  strokeWidth="1"
                />
              </svg>
              
              <div className="font-display text-[8px] md:text-[10px] font-bold tracking-[0.1em] uppercase text-amber-50 leading-tight">
                Certified
              </div>
              <div className="font-display text-[8px] md:text-[10px] font-bold tracking-[0.1em] uppercase text-amber-50 leading-tight">
                Mentor
              </div>
              
              {/* Divider */}
              <div className="w-6 md:w-8 h-[1px] bg-amber-50/50 mx-auto my-0.5 md:my-1" />
              
              <div className="font-display text-[7px] md:text-[9px] font-semibold text-amber-50/90">
                EduMentor
              </div>
              
              {/* Laurel wreath bottom */}
              <svg viewBox="0 0 40 20" className="w-8 md:w-10 h-4 md:h-5 mx-auto mt-0.5 md:mt-1 opacity-80 rotate-180">
                <path
                  d="M20 18 Q10 15 5 8 Q8 10 12 8 Q15 12 20 14 Q25 12 28 8 Q32 10 35 8 Q30 15 20 18"
                  fill="none"
                  stroke="#fffbeb"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Decorative dots around the seal */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * 360;
          const radius = 46;
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
          return (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-amber-50/30"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CertificateSeal;
