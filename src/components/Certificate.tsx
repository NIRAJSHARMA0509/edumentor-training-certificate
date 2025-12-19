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
      id="certificate"
      className="certificate-container relative bg-certificate-paper shadow-certificate overflow-hidden"
      style={{ 
        width: '842px',    // A4 landscape at 72dpi
        height: '595px',   // A4 landscape at 72dpi
      }}
    >
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      <CertificateBorder />
      
      <div className="absolute inset-0 p-8 flex flex-col">
        
        {/* Header */}
        <header className="flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="EduMentor" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-display text-xs font-bold tracking-[0.15em] uppercase text-certificate-ink">
                EduMentor
              </span>
              <span className="text-[10px] text-certificate-muted">
                Mentorship Training Programme
              </span>
            </div>
          </div>
          
          <div className="text-right text-[10px] text-certificate-muted leading-relaxed">
            <div>
              <span className="font-semibold text-certificate-ink">Certificate ID</span>: {data.certificateId}
            </div>
            <div>
              <span className="font-semibold text-certificate-ink">Issued</span>: {data.issuedDate}
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-16 min-h-0">
          
          <p className="font-display italic text-xs tracking-[0.06em] text-certificate-muted mb-1">
            In recognition of scholarly preparation and professional mentorship practice
          </p>
          
          <h1 className="font-display text-3xl font-bold text-certificate-ink text-shadow-elegant mb-1">
            Certificate of Completion
          </h1>
          
          <CertificateFlourish className="w-32 mb-2" />
          
          <p className="text-[10px] tracking-[0.12em] uppercase text-certificate-muted mb-1">
            This is to certify that
          </p>
          
          {/* Candidate name - centered */}
          <h2 className="font-display text-3xl font-bold text-certificate-ink">
            {data.candidateName}
          </h2>
          
          <div className="w-64 h-[2px] bg-gradient-to-r from-transparent via-certificate-gold to-transparent my-2" />
          
          <p className="font-body text-sm text-certificate-ink leading-relaxed max-w-lg">
            has successfully completed the{' '}
            <span className="font-semibold text-certificate-border">
              {data.programName || 'EduMentor Mentorship Training Programme'}
            </span>
            , demonstrating the academic grounding, ethical responsibility, and practical competence expected of an EduMentor-certified mentor.
          </p>
        </main>

        {/* Footer */}
        <footer className="flex items-end justify-between gap-4 shrink-0">
          {/* Left side - Seal above awarded date */}
          <div className="flex flex-col items-start">
            <CertificateSeal className="mb-1" />
            <div className="text-[10px] text-certificate-muted leading-relaxed">
              <div>
                <span className="font-semibold text-certificate-ink">Awarded</span>: {data.awardedDate}
              </div>
              <div>
                <span className="font-semibold text-certificate-ink">Issued By</span>: EduMentor
              </div>
            </div>
          </div>
          
          {/* Right side - Signature */}
          <div className="text-right min-w-[200px]">
            <div className="h-20 flex items-end justify-end mb-1">
              <img 
                src={signature} 
                alt="Signature" 
                className="h-full w-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className="w-full h-[1px] bg-certificate-ink/40 mb-1" />
            <div className="font-display text-xs font-bold text-certificate-ink">
              {data.signatoryName}
            </div>
            <div className="text-[10px] text-certificate-muted">
              {data.signatoryRole}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Certificate;
