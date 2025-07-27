import React from 'react';
// 1. ROUTER IMPORTS (Unchanged)
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Users, Heart } from 'lucide-react';

// --- (All type definitions, Card, Columns, and allSocialData remain unchanged) ---
// TYPE DEFINITIONS
type CardData = {
  title: string;
  href: string;
};

type Section = {
  title: string;
  cards: CardData[];
};

type SocialModuleData = {
  description: string;
  sections: Section[];
};

// A reusable Card component for links (Unchanged)
const Card = ({ title, href }: CardData) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-all duration-200 button-shadow hover:button-shadow-hover hover:scale-105 h-full"
  >
    <h4 className="text-white font-medium">{title}</h4>
  </a>
);

// A reusable Columns component for a responsive grid layout (Unchanged)
const Columns = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {children}
  </div>
);

// Data for the Social page, organized by module title (Unchanged)
const allSocialData: { [key: string]: SocialModuleData } = {
  Forum: {
    description: "\"Community is a place where connections are made, and ideas are born.\"",
    sections: [
      {
        title: "Forums",
        cards: [
          { title: "Reddit", href: "https://www.reddit.com/" },
          { title: "Hacker News", href: "https://news.ycombinator.com/" },
          { title: "Product Hunt Forums", href: "https://www.producthunt.com/forums" },
          { title: "LessWrong", href: "https://www.lesswrong.com/" },
          { title: "Alignment Forum", href: "https://www.alignmentforum.org/" },
          { title: "Effective Altruism", href: "https://forum.effectivealtruism.org/" },
        ],
      },
    ],
  },
  "Social Media": {
    description: "\"We are the sum of our connections, a network of shared moments and ideas.\"",
    sections: [
      {
        title: "Social Media",
        cards: [
          { title: "Twitter", href: "https://x.com/" },
          { title: "YouTube", href: "https://www.youtube.com/" },
          { title: "Instagram", href: "https://www.instagram.com/" },
          { title: "TikTok", href: "https://www.tiktok.com/" },
        ],
      },
    ],
  },
  Dating: {
    description: "\"In the arithmetic of love, one plus one equals everything, and two minus one equals nothing.\" - Mignon McLaughlin",
    sections: [
      {
        title: "Dating",
        cards: [
          { title: "Tinder", href: "https://tinder.com/" },
          { title: "Hinge", href: "https://hinge.co/" },
          { title: "Bumble", href: "https://bumble.com/" },
          { title: "OkCupid", href: "https://www.okcupid.com/" },
          { title: "Coffee Meets Bagel", href: "https://coffeemeetsbagel.com/" },
          { title: "Match.com", href: "https://www.match.com/" },
        ],
      },
    ],
  },
};

// --- DATA MODIFICATION ---
// Define the module list with slugs here, so both components can access it.
const socialModules: SocialModule[] = [
    { 
      title: 'Forum', 
      slug: 'forum', // Custom slug
      description: '"Community is a place where connections are made, and ideas are born."', 
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      icon: MessageSquare,
      status: 'Community'
    },
    { 
      title: 'Social Media', 
      slug: 'platform', // Custom slug
      description: '"We are the sum of our connections, a network of shared moments and ideas."', 
      gradient: 'from-sky-400 via-cyan-400 to-teal-500',
      icon: Users,
      status: 'Global'
    },
    { 
      title: 'Dating', 
      slug: 'dating', // Custom slug
      description: '"In the arithmetic of love, one plus one equals everything." - Mignon McLaughlin', 
      gradient: 'from-rose-500 via-red-500 to-orange-500',
      icon: Heart,
      status: 'Connect'
    },
];


// --- COMPONENT MODIFICATIONS ---

const SocialDetail = () => {
  const navigate = useNavigate();
  // 1. Get the slug from the URL parameter
  const { moduleSlug } = useParams<{ moduleSlug: string }>();

  // 2. Find the module by its slug to get the original title
  const moduleInfo = socialModules.find(m => m.slug === moduleSlug);
  const moduleName = moduleInfo?.title;
  const socialData = moduleName ? allSocialData[moduleName] : null;

  const handleBack = () => navigate('/social');

  if (!socialData || !moduleName) {
    return (
      <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 text-white">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors duration-200 group button-shadow hover:button-shadow-hover bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 border border-white/10"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
        <p>Content not found for module: {moduleSlug}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 text-white">
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors duration-200 group button-shadow hover:button-shadow-hover bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 border border-white/10"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        <span>Back</span>
      </button>

      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          {/* 3. Display the original title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">{moduleName}</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
        </div>

        <p className="text-white/80 text-lg italic">{socialData.description}</p>

        <div className="space-y-12">
          {socialData.sections.map((section) => (
            <section key={section.title}>
              <h3 className="text-2xl font-semibold mb-6">{section.title}</h3>
              <Columns>
                {section.cards.map((item) => <Card key={item.title} {...item} />)}
              </Columns>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const ModuleList = ({ onBack }: { onBack: () => void }) => {
  const navigate = useNavigate();

  // socialModules is now defined globally in this file

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 text-white">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors duration-200 group button-shadow hover:button-shadow-hover bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 border border-white/10"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        <span>Back</span>
      </button>

      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Social</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {socialModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <div
                key={module.title}
                // 4. Navigate using the custom slug
                onClick={() => navigate(module.slug)}
                className="group bg-white/10 rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm card-shadow hover:card-shadow-hover cursor-pointer"
              >
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center`}>
                      <IconComponent size={18} className="text-white md:w-5 md:h-5" />
                    </div>
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs text-white/80 border border-white/20">
                      {module.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{module.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed italic">{module.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- ROUTER SETUP ---
interface SocialProps {
  onBack: () => void;
}

// 5. Update the type definition to include the slug property
type SocialModule = {
  title: string;
  slug: string; // Add slug here
  description: string;
  gradient: string;
  icon: React.ElementType;
  status: string;
};

const Social: React.FC<SocialProps> = ({ onBack }) => {
  return (
    <Routes>
      <Route index element={<ModuleList onBack={onBack} />} />
      {/* 6. Use a more semantic parameter name */}
      <Route path=":moduleSlug" element={<SocialDetail />} />
    </Routes>
  );
};

export default Social;