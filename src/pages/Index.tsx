import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, ImageIcon, Loader2 } from 'lucide-react';
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
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
  const [isDownloadingImage, setIsDownloadingImage] = useState(false);

  const getCertificateCanvas = async () => {
    const certificateElement = document.getElementById('certificate');
    if (!certificateElement) return null;

    return await html2canvas(certificateElement, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#faf8f2',
    });
  };

  const handleDownloadPDF = async () => {
    setIsDownloadingPDF(true);
    
    try {
      const canvas = await getCertificateCanvas();
      if (!canvas) return;

      const imgData = canvas.toDataURL('image/png');
      
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
      setIsDownloadingPDF(false);
    }
  };

  const handleDownloadImage = async () => {
    setIsDownloadingImage(true);
    
    try {
      const canvas = await getCertificateCanvas();
      if (!canvas) return;

      const link = document.createElement('a');
      link.download = `EduMentor-Certificate-${demoCertificateData.candidateName.replace(/\s+/g, '-')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsDownloadingImage(false);
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
        {/* Download buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleDownloadPDF}
            disabled={isDownloadingPDF || isDownloadingImage}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-wide"
            size="lg"
          >
            {isDownloadingPDF ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </>
            )}
          </Button>

          <Button
            onClick={handleDownloadImage}
            disabled={isDownloadingPDF || isDownloadingImage}
            variant="outline"
            className="font-display tracking-wide border-primary/30 hover:bg-primary/5"
            size="lg"
          >
            {isDownloadingImage ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <ImageIcon className="mr-2 h-4 w-4" />
                Download Image
              </>
            )}
          </Button>
        </div>

        {/* Certificate */}
        <div className="animate-fade-in">
          <Certificate data={demoCertificateData} />
        </div>
      </div>
    </>
  );
};

export default Index;
