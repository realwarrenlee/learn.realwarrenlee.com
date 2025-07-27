import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Hero from './components/Hero';
import Learn from './components/Learn';
import Resource from './components/Resources';
import Social from './components/Social';
import ArchiveSection from './components/ArchiveSection';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';


const HomeRoute = () => {
  const navigate = useNavigate();
  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };
  return <Hero onNavigate={handleNavigate} />;
};

const createBackRoute = (Component: React.FC<{ onBack: () => void }>) => {
  return () => {
    const navigate = useNavigate();
    const handleBack = () => navigate('/');
    return <Component onBack={handleBack} />;
  };
};

const LearnRoute = createBackRoute(Learn);
const ResourceRoute = createBackRoute(Resource);
const SocialRoute = createBackRoute(Social);
const ArchiveRoute = createBackRoute(ArchiveSection);
const ContactRoute = createBackRoute(Contact);

function App() {
  return (
    <div className="min-h-screen w-full font-inter bg-gradient-radial from-pink-300 via-purple-300 to-blue-300 overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/learn/*" element={<LearnRoute />} />
        <Route path="/resource/*" element={<ResourceRoute />} />
        <Route path="/social/*" element={<SocialRoute />} />
        <Route path="/archive/*" element={<ArchiveRoute />} />
        <Route path="/contact/*" element={<ContactRoute />} />
      </Routes>
    </div>
  );
}

export default App;