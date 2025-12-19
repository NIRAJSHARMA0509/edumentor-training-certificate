import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Certificate, { CertificateData } from '@/components/Certificate';
import { Button } from '@/components/ui/button';

// Demo data - in production, this would come from your database
const demoCertificateData: CertificateData = {
  candidateName: "Aarav Mehta",
  certificateId: "EM-MTP-24019A",
  issuedDate: "19 December 2025",
  awardedDate: "19 December 2025",
  signatoryName: "Emeritus Professor David Faulkner",
  signatoryRole: "Programme Director, EduMentor",
  programName: "EduMentor Mentorship Training Programme",
};

const Index = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    const certificateElement = document.getElementById('certificate');
    if (!certificateElement) return;

    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(certificateElement, {
        scale: 3, // Higher quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#faf8f2',
      });

      const imgData = canvas.toDataURL('image/png');
      
      // A4 landscape dimensions in mm
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`EduMentor-Certificate-${demoCertificateData.candidateName.replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>EduMentor Certificate | Official Certification</title>
        <meta 
          name="description" 
          content="Official EduMentor Mentorship Training Programme certificate of completion." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 gap-6">
        {/* Download button */}
        <Button
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-wide"
          size="lg"
        >
          {isDownloading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating PDF...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download Certificate as PDF
            </>
          )}
        </Button>

        {/* Certificate */}
        <div ref={certificateRef} className="animate-fade-in">
          <Certificate data={demoCertificateData} />
        </div>
      </div>
    </>
  );
};

export default Index;
