import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import StoryBanner from './components/StoryBanner';
import Programs from './components/Programs';
import Eligibility from './components/Eligibility';
import Process from './components/Process';
import Exams from './components/Exams';
import MediaSection from './components/MediaSection';
import ResourcesSection from './components/ResourcesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-inst-pink/20">
      <Navbar />
      <main className="pt-[140px]">
        <Hero />
        <Overview />
        
        <StoryBanner 
          image="/story_achievement_new.png"
          title="Share Achievements"
          text="Discover new horizons of professional success. Our programs meticulously bridge the gap between abstract theory and exceptional real-world performance."
          reversed={true}
        />

        <Programs />
        <Eligibility />

        <StoryBanner 
          image="/story_guidance_new.png"
          title="Guided Journey"
          text="Experience a seamless transition into higher education. Empathy, structured support, and peer guidance form the core pillars of our seamless enrollment experience."
        />

        <Process />
        <Exams />

        <StoryBanner 
          image="/story_collaboration_new.png"
          title="Share Opportunities"
          text="Foster a transformative academic environment. Join a vibrant community committed to innovation, shared goals, and uncompromised academic rigor."
        />

        <MediaSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
