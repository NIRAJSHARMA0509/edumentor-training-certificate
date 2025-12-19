import { FC } from 'react';

interface CertificateSealProps {
  className?: string;
}

const CertificateSeal: FC<CertificateSealProps> = ({ className = '' }) => {
  return (
    <div className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 ${className}`}>
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
        <div className="absolute inset-1.5 md:inset-2 rounded-full border-2 border-amber-50/40">
          
          {/* Inner circle with dashed border */}
          <div className="absolute inset-1 md:inset-1.5 rounded-full border border-dashed border-amber-50/50 flex items-center justify-center">
            
            {/* Content */}
            <div className="text-center px-1">
              <div className="font-display text-[7px] md:text-[8px] font-bold tracking-[0.08em] uppercase text-amber-50 leading-tight">
                Certified
              </div>
              <div className="font-display text-[7px] md:text-[8px] font-bold tracking-[0.08em] uppercase text-amber-50 leading-tight">
                Mentor
              </div>
              
              {/* Divider */}
              <div className="w-5 md:w-6 h-[1px] bg-amber-50/50 mx-auto my-0.5" />
              
              <div className="font-display text-[6px] md:text-[7px] font-semibold text-amber-50/90">
                EduMentor
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative dots around the seal */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * 360;
          const radius = 45;
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
          return (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-amber-50/30"
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
