import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Code2, Database, Brain, Globe, Shield, Cpu, Zap } from 'lucide-react';

type CardData = {
  title: string;
  href: string;
  description?: string;
};

type Section = {
  title: string;
  cards: CardData[];
};

type ModuleResources = {
  description: string;
  sections: Section[];
};

const Card = ({ title, href, description }: CardData) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-all duration-200 button-shadow hover:button-shadow-hover hover:scale-105 h-full"
  >
    <h4 className="text-white font-medium">{title}</h4>
    {description && <p className="text-white/60 text-sm mt-1">{description}</p>}
  </a>
);

const Columns = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {children}
  </div>
);

// --- DATA DEFINITIONS ---
// No changes here
const allResources: { [key:string]: ModuleResources } = {
  Python: {
    description: "\"Python is the 'most powerful language you can still read'.\" - Paul Dubois",
    sections: [
      {
        title: "Python",
        cards: [
          { title: "Python Tutorial", href: "https://docs.python.org/3/tutorial/index.html" },
          { title: "Python Library", href: "https://docs.python.org/3/library/index.html" },
          { title: "Python Cheatsheet", href: "https://www.pythoncheatsheet.org/" },
          { title: "Python Tutor", href: "https://pythontutor.com/" },
          { title: "Automate the Boring Stuff", href: "https://automatetheboringstuff.com/" },
        ]
      },
      {
        title: "Course",
        cards: [{ title: "CS50 Python", href: "https://cs50.harvard.edu/python/" }]
      }
    ]
  },
  C: {
    description: "\"C is quirky, flawed, and an enormous success.\" - Dennis Ritchie",
    sections: [
      {
        title: "C",
        cards: [
          { title: "The C Programming Language - 2nd Edition", href: "https://seriouscomputerist.atariverse.com/media/pdf/book/C%20Programming%20Language%20-%202nd%20Edition%20(OCR).pdf" },
          { title: "C Standard Library", href: "https://en.wikipedia.org/wiki/C_standard_library" },
        ]
      },
      {
        title: "Course",
        cards: [{ title: "CS50", href: "https://cs50.harvard.edu/x/" }]
      }
    ]
  },
  Algorithm: {
    description: "\"An algorithm must be seen to be believed.\" - Donald Knuth",
    sections: [
      {
        title: "Algorithm",
        cards: [
          { title: "Developer Roadmaps", href: "https://roadmap.sh/" },
          { title: "Tech Dev Guide", href: "https://techdevguide.withgoogle.com/" },
          { title: "LeetCode", href: "https://leetcode.com/explore/learn/" },
          { title: "NeetCode", href: "https://neetcode.io/" },
          { title: "HackerRank", href: "https://www.hackerrank.com/dashboard" },
          { title: "HackerEarth", href: "https://www.hackerearth.com/" },
          { title: "Stack Overflow", href: "https://stackoverflow.com/" },
        ]
      },
      {
        title: "Courses",
        cards: [{ title: "MIT Introduction to Algorithms", href: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/" }]
      }
    ]
  },
  "Artificial Intelligence": {
    description: "\"The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.\" - Edsger W. Dijkstra",
    sections: [
      {
        title: "Tutorials",
        cards: [
          { title: "Google Machine Learning", href: "https://developers.google.com/machine-learning" },
          { title: "Kaggle Learn", href: "https://www.kaggle.com/learn" },
          { title: "HuggingFace Learn", href: "https://huggingface.co/learn" },
          { title: "PyTorch Tutorial", href: "https://pytorch.org/tutorials" },
          { title: "TensorFlow Tutorial", href: "https://www.tensorflow.org/tutorials" },
          { title: "Weights & Biases Tutorial", href: "https://docs.wandb.ai/tutorials/" },
          { title: "Cohere LLM University", href: "https://cohere.com/llmu" },
          { title: "OpenAI Spinning Up", href: "https://spinningup.openai.com/" },
          { title: "OpenAI Academy", href: "https://academy.openai.com/" },
          { title: "Anthropic Courses", href: "https://anthropic.skilljar.com/" },
        ]
      },
      {
        title: "Courses",
        cards: [
          { title: "Andrej Karpathy Course", href: "https://github.com/karpathy/nn-zero-to-hero" },
          { title: "David Silver Course", href: "https://davidstarsilver.wordpress.com/teaching/" },
          { title: "Deep Learning AI Course", href: "https://www.deeplearning.ai/courses/" },
          { title: "Fast AI Course", href: "https://course.fast.ai/" },
          { title: "MIT Linear Algebra", href: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" },
          { title: "MIT Multivariable Calculus", href: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/" },
          { title: "Khan Academy Linear Algebra", href: "https://www.khanacademy.org/math/linear-algebra" },
          { title: "Khan Academy Multivariable Calculus", href: "https://www.khanacademy.org/math/multivariable-calculus" },
          { title: "Harvard CS50AI", href: "https://cs50.harvard.edu/ai/" },
          { title: "Stanford Machine Learning", href: "https://cs229.stanford.edu/" },
          { title: "Stanford Probabilistic Graphical Models", href: "https://ermongroup.github.io/cs228/" },
          { title: "MIT Deep Learning", href: "https://introtodeeplearning.com/" },
          { title: "Stanford Deep Learning", href: "https://cs230.stanford.edu/" },
          { title: "Stanford Computer Vision", href: "https://cs231n.stanford.edu/" },
          { title: "Stanford Natural Language Processing", href: "https://cs224n.stanford.edu/" },
          { title: "UC Berkeley Deep Reinforcement Learning", href: "https://rail.eecs.berkeley.edu/deeprlcourse/" },
          { title: "Stanford Transformers United", href: "https://web.stanford.edu/class/cs25/" },
          { title: "Stanford Large Language Models", href: "https://stanford-cs324.github.io/" },
          { title: "Stanford Building a LLM", href: "https://stanford-cs336.github.io/" },
        ]
      },
      {
        title: "Books",
        cards: [
          { title: "Deep Learning", href: "https://www.deeplearningbook.org/" },
          { title: "Neural Networks", href: "http://neuralnetworksanddeeplearning.com/" },
        ]
      },
      {
        title: "Visuals",
        cards: [
          { title: "3Blue1Brown", href: "https://www.3blue1brown.com/topics/neural-networks" },
          { title: "Welch Labs", href: "https://www.welchlabs.com/" },
        ]
      },
    ]
  },
  Web: {
    description: "\"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.\" - Tim Berners-Lee",
    sections: [
      {
        title: "Web",
        cards: [
          { title: "Google Web Dev", href: "https://web.dev/learn/" },
          { title: "The Odin Project", href: "https://www.theodinproject.com/" },
        ]
      },
      { title: "Course", cards: [{ title: "CS50 Web", href: "https://cs50.harvard.edu/web/" }] },
      {
        title: "Library",
        cards: [
          { title: "React", href: "https://react.dev/learn" },
          { title: "NextJS", href: "https://nextjs.org/learn" },
          { title: "Flutter", href: "https://flutter.dev/learn" },
          { title: "React Native", href: "https://reactnative.dev/" },
        ]
      }
    ]
  },
  Cyber: {
    description: "\"There are two types of companies: those that have been hacked, and those that don't know they have been hacked yet.\" - John Chambers",
    sections: [
      {
        title: "Cyber",
        cards: [
          { title: "Try Hack Me", href: "https://tryhackme.com/" },
          { title: "Hack The Box", href: "https://www.hackthebox.com/" },
        ]
      },
      { title: "Course", cards: [{ title: "CS50 Cybersecurity", href: "https://cs50.harvard.edu/cybersecurity/" }] }
    ]
  },
  Hardware: {
    description: "\"People who are really serious about software should make their own hardware.\" - Alan Kay",
    sections: [
        { title: "CPU", cards: [
            { title: "CPU Land", href: "https://cpu.land/" },
            { title: "Some Assembly Required", href: "https://github.com/hackclub/some-assembly-required" },
        ]},
        { title: "Course", cards: [{ title: "CS50T", href: "https://cs50.harvard.edu/technology/" }]},
    ]
  }
};

const learningModules: LearningModule[] = [
  {
    title: 'Python',
    slug: 'python',
    description: 'Versatile, readable programming language perfect for beginners and experts alike.',
    status: 'Featured',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    icon: Code2
  },
  {
    title: 'C',
    slug: 'c',
    description: 'Low-level systems programming language that forms the foundation of computing.',
    status: 'Pending',
    gradient: 'from-slate-600 via-slate-500 to-slate-400',
    icon: Database
  },
  {
    title: 'Algorithm',
    slug: 'algo',
    description: 'Problem-solving techniques and data structures for efficient computation.',
    status: 'Pending',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    icon: Zap
  },
  {
    title: 'Artificial Intelligence',
    slug: 'ai',
    description: 'Machine learning, neural networks, and the future of intelligent systems.',
    status: 'Featured',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    icon: Brain
  },
  {
    title: 'Web',
    slug: 'web',
    description: 'Frontend and backend development for creating modern web applications.',
    status: 'Pending',
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    icon: Globe
  },
  {
    title: 'Cyber',
    slug: 'cyber',
    description: 'Cybersecurity fundamentals, ethical hacking, and digital defense strategies.',
    status: 'Pending',
    gradient: 'from-red-600 via-orange-600 to-yellow-500',
    icon: Shield
  },
  {
    title: 'Hardware',
    slug: 'hardware',
    description: 'Computer architecture, circuits, and the physical layer of computing.',
    status: 'Pending',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    icon: Cpu
  },
];

const ModuleDetail = () => {
  const navigate = useNavigate();
  const { moduleSlug } = useParams<{ moduleSlug: string }>();
  const moduleInfo = learningModules.find(m => m.slug === moduleSlug);
  const moduleName = moduleInfo?.title;
  const resourceData = moduleName ? allResources[moduleName] : null;

  const handleBack = () => navigate('/learn');

  if (!resourceData || !moduleName) {
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
    )
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">{moduleName}</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
        </div>

        <p className="text-white/80 text-lg italic">{resourceData.description}</p>

        <div className="space-y-12">
            {resourceData.sections.map((section) => (
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Learn</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {learningModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <div
                key={module.title}
                // Navigate using the module's slug
                onClick={() => navigate(module.slug)}
                className="group bg-white/10 rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm card-shadow hover:card-shadow-hover cursor-pointer"
              >
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center shadow-lg`}>
                      <IconComponent size={18} className="text-white md:w-5 md:h-5" />
                    </div>
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs text-white/80 border border-white/20">
                      {module.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{module.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{module.description}</p>
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


interface LearnProps {
  onBack: () => void;
}

type LearningModule = {
  title: string;
  slug: string;
  description: string;
  status: 'Completed' | 'Pending' | 'Featured';
  gradient: string;
  icon: React.ElementType;
};

const Learn: React.FC<LearnProps> = ({ onBack }) => {
  return (
    <Routes>
      <Route index element={<ModuleList onBack={onBack} />} />
      <Route path=":moduleSlug" element={<ModuleDetail />} />
    </Routes>
  );
};

export default Learn;