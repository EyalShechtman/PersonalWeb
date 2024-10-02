import React from 'react';

interface ExcitementBoxProps {
  icon: string;
  text: string;
}

const ExcitementBox: React.FC<ExcitementBoxProps> = ({ icon, text }) => (
  <div className="flex items-center p-2 bg-white rounded-lg shadow hover:scale-105 transition-transform">
    <span className="mr-2 text-2xl">{icon}</span>
    <span>{text}</span>
  </div>
);

interface InterestBoxProps {
  image: string;
  title: string;
  description: string;
}

const InterestBox: React.FC<InterestBoxProps> = ({ image, title, description }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
    <img src={`/api/placeholder/400/300`} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

interface ContactBoxProps {
  icon: React.ReactNode;
  text: string;
}

const InterestsAndContactSections: React.FC = () => {
  const excitementData: ExcitementBoxProps[] = [
    { icon: "🤖", text: "Claude 3.5 Opus" },
    { icon: "🧠", text: "GPT 5" },
    { icon: "🏡", text: "Move into a new house" },
    { icon: "🤝", text: "Meet people at work" },
    { icon: "👀", text: "See how AI progress unfolds" },
    { icon: "⚖️", text: "Find out what new AI jobs exist" },
    { icon: "🎓", text: "AI providing equal access to highest level education" },
    { icon: "⛳", text: "Become a scratch golfer" },
    { icon: "🚀", text: "Start a company" }
  ];

  const interestsData: InterestBoxProps[] = [
    { image: "golf.jpg", title: "Golf", description: "Only sport I don't get embarrassed in" },
    { image: "videogames.jpg", title: "Video Games", description: "Make millions of coins in ultimate team game modes" },
    { image: "boardgames.jpg", title: "Board Games", description: "Strategy is the best" },
    { image: "placeholder.jpg", title: "Placeholder", description: "Description for the fourth interest" }
  ];

  return (
    <>
      <section id="interests" className="bg-[#f4f1e0] py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What I'm Excited For</h2>
          <div className="grid grid-cols-3 gap-3 mb-12">
            {excitementData.map((item, index) => (
              <ExcitementBox key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center">Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interestsData.map((item, index) => (
              <InterestBox key={index} image={item.image} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InterestsAndContactSections;