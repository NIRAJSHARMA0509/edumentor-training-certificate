import { FC } from 'react';
import logo from '@/assets/edumentor-logo.png';
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
    <div className="certificate-container relative w-full max-w-[1100px] aspect-[11/8.5] bg-certificate-paper shadow-certificate overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      {/* Decorative border */}
      <CertificateBorder />
      
      {/* Inner content area */}
      <div className="relative h-full p-8 md:p-12 lg:p-16 flex flex-col">
        
        {/* Header */}
        <header className="flex items-start justify-between gap-4 mb-6 md:mb-8">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="EduMentor" 
              className="h-12 md:h-16 lg:h-20 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-display text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-certificate-ink">
                EduMentor
              </span>
              <span className="text-[10px] md:text-xs text-certificate-muted mt-1">
                Mentorship Training Programme
              </span>
            </div>
          </div>
          
          <div className="text-right text-[10px] md:text-xs text-certificate-muted leading-relaxed">
            <div>
              <span className="font-semibold text-certificate-ink">Certificate ID</span>: {data.certificateId}
            </div>
            <div>
              <span className="font-semibold text-certificate-ink">Issued</span>: {data.issuedDate}
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-20">
          
          {/* Kicker text */}
          <p className="font-display italic text-xs md:text-sm tracking-[0.08em] text-certificate-muted mb-3 md:mb-4">
            In recognition of scholarly preparation and professional mentorship practice
          </p>
          
          {/* Title */}
          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-certificate-ink text-shadow-elegant mb-2 md:mb-4">
            Certificate of Completion
          </h1>
          
          <CertificateFlourish className="w-32 md:w-48 mb-4 md:mb-6" />
          
          {/* Certification text */}
          <p className="text-[10px] md:text-xs tracking-[0.12em] uppercase text-certificate-muted mb-2 md:mb-4">
            This is to certify that
          </p>
          
          {/* Candidate name */}
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-certificate-ink mb-2">
            {data.candidateName}
          </h2>
          
          {/* Decorative line under name */}
          <div className="w-48 md:w-72 lg:w-96 h-[2px] bg-gradient-to-r from-transparent via-certificate-gold to-transparent mb-4 md:mb-6" />
          
          {/* Program description */}
          <p className="font-body text-sm md:text-base lg:text-lg text-certificate-ink leading-relaxed mb-3 md:mb-4 max-w-2xl">
            has successfully completed the{' '}
            <span className="font-semibold text-certificate-border">
              {data.programName || 'EduMentor Mentorship Training Programme'}
            </span>
            , having demonstrated the academic grounding, ethical responsibility, and practical competence expected of an EduMentor-certified mentor.
          </p>
          
          {/* Citation */}
          <p className="font-body text-xs md:text-sm text-certificate-muted leading-relaxed max-w-xl italic">
            This certification acknowledges completion of a structured course of mentorship formation focused on evidence-informed advising, student-centred practice, and rigorous standards of integrity. The recipient has been trained to guide decision-making with{' '}
            <span className="font-semibold text-certificate-ink not-italic">
              discipline, empathy, and sound judgement
            </span>
            —consistent with EduMentor's expectations of excellence.
          </p>
        </main>

        {/* Seal - positioned absolutely */}
        <CertificateSeal className="absolute right-8 md:right-12 lg:right-20 bottom-24 md:bottom-32 lg:bottom-40" />

        {/* Footer */}
        <footer className="flex items-end justify-between gap-4 mt-4 md:mt-8">
          <div className="text-[10px] md:text-xs text-certificate-muted leading-loose">
            <div>
              <span className="font-semibold text-certificate-ink">Programme Duration</span>: {data.duration}
            </div>
            <div>
              <span className="font-semibold text-certificate-ink">Awarded On</span>: {data.awardedDate}
            </div>
            <div>
              <span className="font-semibold text-certificate-ink">Issued By</span>: EduMentor
            </div>
          </div>
          
          <div className="text-right min-w-[180px] md:min-w-[240px]">
            <div className="w-full h-[1px] bg-certificate-ink/40 mb-2" />
            <div className="font-display text-xs md:text-sm font-bold text-certificate-ink">
              {data.signatoryName}
            </div>
            <div className="text-[10px] md:text-xs text-certificate-muted">
              {data.signatoryRole}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Certificate;
