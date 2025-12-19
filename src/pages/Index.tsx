import { Helmet } from 'react-helmet-async';
import Certificate, { CertificateData } from '@/components/Certificate';

// Demo data - in production, this would come from your database
const demoCertificateData: CertificateData = {
  candidateName: "Aarav Mehta",
  certificateId: "EM-MTP-24019A",
  issuedDate: "19 December 2025",
  awardedDate: "19 December 2025",
  duration: "8 Weeks",
  signatoryName: "Emeritus Professor David Faulkner",
  signatoryRole: "Programme Director, EduMentor",
  programName: "EduMentor Mentorship Training Programme",
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EduMentor Certificate | Official Certification</title>
        <meta 
          name="description" 
          content="Official EduMentor Mentorship Training Programme certificate of completion." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[1100px] animate-fade-in">
          <Certificate data={demoCertificateData} />
        </div>
      </div>
    </>
  );
};

export default Index;
