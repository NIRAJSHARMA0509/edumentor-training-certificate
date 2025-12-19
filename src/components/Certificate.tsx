import { FC } from 'react';
import logo from '@/assets/edumentor-logo.png';
import signature from '@/assets/david-signature.jpg';
import CertificateSeal from './CertificateSeal';
import CertificateBorder from './CertificateBorder';
import CertificateFlourish from './CertificateFlourish';

export interface CertificateData {
  candidateName: string;
  certificateId: string;
  issuedDate: string;
  awardedDate: string;
  duration: string;
  signatoryName: string;
  signatoryRole: string;
  programName?: string;
}

interface CertificateProps {
  data: CertificateData;
}

const Certificate: FC<CertificateProps> = ({ data }) => {
  return (
    <div 
      className="certificate-container relative w-full max-w-[1122px] bg-certificate-paper shadow-certificate overflow-hidden"
      style={{ aspectRatio: '297 / 210' }} // A4 landscape
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      {/* Decorative border */}
      <CertificateBorder />
      
      {/* Inner content area */}
      <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col">
        
        {/* Header */}
        <header className="flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="EduMentor" 
              className="h-10 md:h-12 lg:h-14 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-display text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-certificate-ink">
                EduMentor
              </span>
              <span className="text-[9px] md:text-[10px] text-certificate-muted">
                Mentorship Training Programme
              </span>
            </div>
          </div>
          
          <div className="text-right text-[9px] md:text-[10px] text-certificate-muted leading-relaxed">
            <div>
              <span className="font-semibold text-certificate-ink">Certificate ID</span>: {data.certificateId}
            </div>
            <div>
              <span className="font-semibold text-certificate-ink">Issued</span>: {data.issuedDate}
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-16 lg:px-24 min-h-0">
          
          {/* Kicker text */}
          <p className="font-display italic text-[10px] md:text-xs tracking-[0.06em] text-certificate-muted mb-1 md:mb-2">
            In recognition of scholarly preparation and professional mentorship practice
          </p>
          
          {/* Title */}
          <h1 className="font-display text-xl md:text-3xl lg:text-4xl font-bold text-certificate-ink text-shadow-elegant mb-1 md:mb-2">
            Certificate of Completion
          </h1>
          
          <CertificateFlourish className="w-24 md:w-36 mb-2 md:mb-3" />
          
          {/* Certification text */}
          <p className="text-[9px] md:text-[10px] tracking-[0.12em] uppercase text-certificate-muted mb-1 md:mb-2">
            This is to certify that
          </p>
          
          {/* Candidate name with seal beside it */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <h2 className="font-display text-xl md:text-3xl lg:text-4xl font-bold text-certificate-ink">
              {data.candidateName}
            </h2>
            <CertificateSeal className="shrink-0" />
          </div>
          
          {/* Decorative line under name */}
          <div className="w-40 md:w-64 lg:w-80 h-[2px] bg-gradient-to-r from-transparent via-certificate-gold to-transparent my-2 md:my-3" />
          
          {/* Program description */}
          <p className="font-body text-xs md:text-sm text-certificate-ink leading-relaxed max-w-xl">
            has successfully completed the{' '}
            <span className="font-semibold text-certificate-border">
              {data.programName || 'EduMentor Mentorship Training Programme'}
            </span>
            , demonstrating the academic grounding, ethical responsibility, and practical competence expected of an EduMentor-certified mentor.
          </p>
        </main>

        {/* Footer */}
        <footer className="flex items-end justify-between gap-4 shrink-0">
          <div className="text-[9px] md:text-[10px] text-certificate-muted leading-relaxed">
            <div>
              <span className="font-semibold text-certificate-ink">Duration</span>: {data.duration}
            </div>
            <div>
              <span className="font-semibold text-certificate-ink">Awarded</span>: {data.awardedDate}
            </div>
            <div>
              <span className="font-semibold text-certificate-ink">Issued By</span>: EduMentor
            </div>
          </div>
          
          <div className="text-right min-w-[160px] md:min-w-[220px]">
            {/* Signature image with transparent background effect */}
            <div className="h-10 md:h-12 flex items-end justify-end mb-1">
              <img 
                src={signature} 
                alt="Signature" 
                className="h-full w-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className="w-full h-[1px] bg-certificate-ink/40 mb-1" />
            <div className="font-display text-[10px] md:text-xs font-bold text-certificate-ink">
              {data.signatoryName}
            </div>
            <div className="text-[9px] md:text-[10px] text-certificate-muted">
              {data.signatoryRole}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Certificate;
