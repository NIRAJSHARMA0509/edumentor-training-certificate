import { FC } from 'react';

interface CertificateSealProps {
  className?: string;
}

const CertificateSeal: FC<CertificateSealProps> = ({ className = '' }) => {
  return (
    <div className={`w-20 h-20 ${className}`}>
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-certificate-gold via-certificate-gold-dark to-certificate-gold shadow-seal">
        
        <div 
          className="absolute inset-0 rounded-full opacity-30 animate-seal-shine"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
        />
        
        <div className="absolute inset-1.5 rounded-full border-2 border-amber-50/40">
          <div className="absolute inset-1 rounded-full border border-dashed border-amber-50/50 flex items-center justify-center">
            <div className="text-center px-1">
              <div className="font-display text-[7px] font-bold tracking-[0.08em] uppercase text-amber-50 leading-tight">
                Certified
              </div>
              <div className="font-display text-[7px] font-bold tracking-[0.08em] uppercase text-amber-50 leading-tight">
                Mentor
              </div>
              <div className="w-5 h-[1px] bg-amber-50/50 mx-auto my-0.5" />
              <div className="font-display text-[6px] font-semibold text-amber-50/90">
                EduMentor
              </div>
            </div>
          </div>
        </div>
        
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * 360;
          const radius = 44;
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
          return (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full bg-amber-50/30"
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
