import React from 'react';
// 1. ROUTER IMPORTS (Unchanged)
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Brain, Palette, Server, Code, BarChart3, Rocket, DollarSign, FileText } from 'lucide-react';

// --- (All type definitions, Card, Columns, and allResourcesPageData remain unchanged) ---
// TYPE DEFINITIONS
type CardData = {
  title: string;
  href: string;
};

type Section = {
  title: string;
  cards: CardData[];
};

type ResourceModuleData = {
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

// Data for the Resources page, organized by module title (Unchanged)
const allResourcesPageData: { [key: string]: ResourceModuleData } = {
  "Large Language Models": {
    description: "\"Language is the operating system of human culture. Now, AI is learning to speak it.\"",
    sections: [
      {
        title: "US Labs",
        cards: [
          { title: "ChatGPT by OpenAI", href: "https://chatgpt.com/" },
          { title: "Claude by Anthropic", href: "https://claude.ai/" },
          { title: "Gemini by Google", href: "https://gemini.google.com/" },
          { title: "Grok by xAI", href: "https://grok.com/" },
          { title: "Llama by Meta", href: "https://www.meta.ai/" },
          { title: "Copilot by Microsoft", href: "https://copilot.microsoft.com/" },
        ],
      },
      {
        title: "China Labs",
        cards: [
          { title: "DeepSeek by DeepSeek", href: "https://chat.deepseek.com/" },
          { title: "Kimi by Moonshot AI", href: "https://kimi.ai/" },
          { title: "Qwen by Alibaba", href: "https://chat.qwenlm.ai/" },
          { title: "ChatGLM by Zhipu AI", href: "https://chat.z.ai/" },
          { title: "MiniMax by MiniMax", href: "https://chat.minimax.io/" },
          { title: "Hunyuan by Tencent", href: "https://hunyuan.tencent.com/" },
          { title: "Yiyan by Baidu", href: "https://yiyan.baidu.com/" },
          { title: "Douban by ByteDance", href: "https://www.doubao.com/" },
          { title: "StepFun by StepFun", href: "https://stepfun.ai/" },
        ],
      },
      {
        title: "France Labs",
        cards: [{ title: "Le Chat by Mistral AI", href: "https://chat.mistral.ai/" }],
      },
      {
        title: "Local",
        cards: [{ title: "Ollama", href: "https://ollama.com/" }],
      },
    ],
  },
  "Multimodal AI": {
    description: "\"To see is to believe. To see, hear, and read is to understand.\"",
    sections: [
      {
        title: "Image",
        cards: [
          { title: "Midjourney", href: "https://www.midjourney.com/" },
          { title: "Imagen", href: "https://deepmind.google/models/imagen/" },
          { title: "DALL-E", href: "https://openai.com/index/dall-e-3/" },
          { title: "Stable Diffusion", href: "https://stablediffusionweb.com/" },
        ],
      },
      {
        title: "Video",
        cards: [
          { title: "Midjourney", href: "https://www.midjourney.com/" },
          { title: "Veo", href: "https://deepmind.google/models/veo/" },
          { title: "Sora", href: "https://sora.chatgpt.com/" },
          { title: "Runway", href: "https://app.runwayml.com/" },
          { title: "Stable Video", href: "https://stability.ai/stable-video" },
          { title: "Kling", href: "https://app.klingai.com/" },
          { title: "Pika", href: "https://pika.art/" },
          { title: "Hailuo", href: "https://hailuoai.video/" },
          { title: "Wan", href: "https://wan.video/" },
          { title: "Hunyuan", href: "https://hunyuanvideoai.com/" },
          { title: "Dreamina", href: "https://dreamina.capcut.com/" },
        ],
      },
      {
        title: "Voice",
        cards: [
          { title: "Sesame AI", href: "https://app.sesame.com/" },
          { title: "ElevenLabs", href: "https://elevenlabs.io/" },
        ],
      },
      {
        title: "Music",
        cards: [
          { title: "Suno", href: "https://suno.com/" },
          { title: "Udio", href: "https://www.udio.com/" },
        ],
      },
    ],
  },
  "AI Infrastructure": {
    description: "\"During the gold rush, it's a good time to be in the pick and shovel business.\"",
    sections: [
      {
        title: "Model Hosting",
        cards: [
          { title: "OpenRouter", href: "https://openrouter.ai/chat" },
          { title: "Together", href: "https://chat.together.ai/" },
          { title: "Fireworks", href: "https://app.fireworks.ai/" },
        ],
      },
      {
        title: "Compute",
        cards: [
          { title: "Groq", href: "https://chat.groq.com/" },
          { title: "Lambda", href: "https://lambda.chat/" },
        ],
      },
    ],
  },
  "Vibe Coding": {
    description: "\"The future of coding is a conversation. You describe what you want, and the machine builds it with you.\"",
    sections: [
      {
        title: "Vibe",
        cards: [{ title: "Vibe Coding", href: "https://www.thewayofcode.com/" }],
      },
      {
        title: "Tools",
        cards: [
          { title: "v0 by Vercel", href: "https://v0.dev/" },
          { title: "Figma Make", href: "https://www.figma.com/make/" },
          { title: "Lovable", href: "https://lovable.dev/" },
          { title: "Bolt", href: "https://bolt.new/" },
          { title: "Firebase Studio", href: "https://studio.firebase.google.com/" },
          { title: "GitHub Spark", href: "https://github.com/features/spark" },
        ],
      },
      {
        title: "IDE",
        cards: [
          { title: "Cursor", href: "https://cursor.com/" },
          { title: "Windsurf", href: "https://windsurf.com/" },
          { title: "Trae", href: "https://www.trae.ai/" },
          { title: "Kiro", href: "https://kiro.dev/" },
        ],
      },
    ],
  },
  Benchmarks: {
    description: "\"What gets measured gets managed.\" - Peter Drucker",
    sections: [
      {
        title: "Benchmarks",
        cards: [
          { title: "Artificial Analysis", href: "https://artificialanalysis.ai/" },
          { title: "Openrouter", href: "https://openrouter.ai/rankings" },
          { title: "LM Arena", href: "https://lmarena.ai/leaderboard" },
        ],
      },
    ],
  },
  Startup: {
    description: "\"Make something people want.\" - Paul Graham",
    sections: [
      {
        title: "Startup",
        cards: [
          { title: "Y Combinator", href: "https://www.ycombinator.com/" },
          { title: "Startup School", href: "https://www.startupschool.org/" },
          { title: "Startup Playbook", href: "https://playbook.samaltman.com/" },
          { title: "Startup Class", href: "http://startupclass.samaltman.com/" },
          { title: "Sam Altman Advice", href: "https://blog.samaltman.com/startup-advice" },
          { title: "Paul Graham Advice", href: "https://www.paulgraham.com/start.html" },
          { title: "Pmarchive", href: "https://pmarchive.com/" },
          { title: "Startup Archive", href: "https://www.startuparchive.org/" },
          { title: "The Founders' Tribune", href: "https://www.founderstribune.org/" },
          { title: "Internal Tech Emails", href: "https://www.techemails.com/" },
          { title: "Signature Block", href: "https://www.signatureblock.co/" },
          { title: "Crucible Moments", href: "https://www.cruciblemoments.com/" },
          { title: "Crunchbase", href: "https://www.crunchbase.com/" },
          { title: "Startup SG", href: "https://www.startupsg.gov.sg/" },
        ],
      },
      {
        title: "Ship",
        cards: [
          { title: "Product Hunt", href: "https://www.producthunt.com/" },
          { title: "Beta List", href: "https://betalist.com/" },
        ],
      },
    ],
  },
  "Venture Capital": {
    description: "\"Software is eating the world.\" - Marc Andreessen",
    sections: [
      {
        title: "VC",
        cards: [
          { title: "Sequoia Capital", href: "https://www.sequoiacap.com/" },
          { title: "Andreessen Horowitz", href: "https://a16z.com/" },
          { title: "Hong Shan Capital", href: "https://www.hsgcap.com/" },
          { title: "Peak XV Partners", href: "https://www.peakxv.com/" },
          { title: "Founders Fund", href: "https://foundersfund.com/" },
          { title: "Benchmark", href: "https://www.benchmark.com/" },
          { title: "General Catalyst", href: "https://www.generalcatalyst.com/" },
          { title: "Menlo Ventures", href: "https://menlovc.com/" },
          { title: "Lightspeed Venture Partners", href: "https://lsvp.com/" },
          { title: "Kleiner Perkins", href: "https://www.kleinerperkins.com/" },
          { title: "Khosla Ventures", href: "https://www.khoslaventures.com/" },
          { title: "SV Angel", href: "https://svangel.com/" },
          { title: "First Round Capital", href: "https://www.firstround.com/" },
          { title: "VC Tier List", href: "https://vctierlist.com/" },
        ],
      },
    ],
  },
  "Shareholder Letters": {
    description: "\"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.\" - Warren Buffett",
    sections: [
      {
        title: "Letters",
        cards: [
          { title: "Berkshire Hathaway", href: "https://brkshr.com/letters/" },
          { title: "Amazon", href: "https://www.amazonshareholderletters.com/" },
        ],
      },
    ],
  },
};

// --- DATA MODIFICATION ---
// Define the module list with slugs here, so both components can access it.
const resourceModules: ResourceModule[] = [
  {
    title: 'Large Language Models',
    slug: 'llm', // Custom slug
    description: '"Language is the operating system of human culture. Now, AI is learning to speak it."',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    icon: Brain,
    status: 'Models'
  },
  {
    title: 'Multimodal AI',
    slug: 'multimodal', // Custom slug
    description: '"To see is to believe. To see, hear, and read is to understand."',
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    icon: Palette,
    status: 'Creative'
  },
  {
    title: 'AI Infrastructure',
    slug: 'infra', // Custom slug
    description: '"During the gold rush, it\'s a good time to be in the pick and shovel business."',
    gradient: 'from-gray-500 via-slate-500 to-zinc-500',
    icon: Server,
    status: 'Infra'
  },
  {
    title: 'Vibe Coding',
    slug: 'vibe', // Custom slug
    description: '"The future of coding is a conversation. You describe what you want, and the machine builds it with you."',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    icon: Code,
    status: 'Tools'
  },
  {
    title: 'Benchmarks',
    slug: 'benchmarks', // Custom slug
    description: '"What gets measured gets managed." - Peter Drucker',
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    icon: BarChart3,
    status: 'Data'
  },
  {
    title: 'Startup',
    slug: 'startup', // Custom slug
    description: '"Make something people want." - Paul Graham',
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    icon: Rocket,
    status: 'Business'
  },
  {
    title: 'Venture Capital',
    slug: 'vc', // Custom slug
    description: '"Software is eating the world." - Marc Andreessen',
    gradient: 'from-lime-500 via-green-500 to-emerald-500',
    icon: DollarSign,
    status: 'Finance'
  },
  {
    title: 'Shareholder Letters',
    slug: 'letters', // Custom slug
    description: '"It takes 20 years to build a reputation and five minutes to ruin it." - Warren Buffett',
    gradient: 'from-stone-500 via-neutral-500 to-gray-500',
    icon: FileText,
    status: 'Wisdom'
  },
];


// --- COMPONENT MODIFICATIONS ---

const ResourceDetail = () => {
  const navigate = useNavigate();
  // 1. Use the slug from the URL
  const { resourceSlug } = useParams<{ resourceSlug: string }>();

  // 2. Find the module by its slug to get its original title
  const moduleInfo = resourceModules.find(m => m.slug === resourceSlug);
  const resourceName = moduleInfo?.title;
  const resourceData = resourceName ? allResourcesPageData[resourceName] : null;

  const handleBack = () => navigate('/resource');

  if (!resourceData || !resourceName) {
    return (
      <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 text-white">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors duration-200 group button-shadow hover:button-shadow-hover bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 border border-white/10"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
        <p>Content not found for this module: {resourceSlug}</p>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">{resourceName}</h2>
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

  // resourceModules is now defined globally in this file

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Resources</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {resourceModules.map((module) => {
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
interface ResourcesProps {
  onBack: () => void;
}

// 5. Update the type definition to include the slug property
type ResourceModule = {
  title: string;
  slug: string; // Add slug here
  description: string;
  gradient: string;
  icon: React.ElementType;
  status: string;
};

const Resources: React.FC<ResourcesProps> = ({ onBack }) => {
  return (
    <Routes>
      <Route index element={<ModuleList onBack={onBack} />} />
      {/* 6. Use a more semantic parameter name for the slug */}
      <Route path=":resourceSlug" element={<ResourceDetail />} />
    </Routes>
  );
};

export default Resources;
