import Header from './components/Header';
import FeaturesSection from './components/FeaturesSection';
import FAQSection from './components/FAQSection';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';
import AgeCalculator from './components/AgeCalculator';
import "./index.css";
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header/>
      <AgeCalculator />
      <FeaturesSection />
      <FAQSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default App;
