import Services from "../components/Services";
import Articles from "@/components/Articles";
import AboutAndServices from "@/components/AboutAndServices";
import ArticlesList from "@/components/ArticlesList";
import PDFList from "@/components/PdfsList";
import HeroSection from "@/components/HeroSection";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutAndServices/>
      <ArticlesList/>
      <PDFList />
      {/* <AboutUs /> */}
      {/* <Services /> */}
      {/* Welcome to the homepage! */}
      {/* < Articles /> */}
    </div>
  );
}

export default HomePage;
