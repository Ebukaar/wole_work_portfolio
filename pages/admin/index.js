import withAuth from "@/hoc/withAuth";
import UploadArticle from './UploadArticle';
import ArticlesList from '../../components/ArticlesList';
import UploadPDF from "./UploadPdfs";
import PDFList from "@/components/PdfsList";

function Admin() {
    return (
      // <div className="min-h-screen flex items-center justify-center">
      <div >
        {/* <h1 className="text-2xl font-bold">Welcome to Admin Panel</h1> */}
        <UploadArticle />
      <ArticlesList isAdmin={true}/>
      <UploadPDF />
      <PDFList isAdmin={true}/>
      </div>
    );
  }
  
export default withAuth(Admin);
  