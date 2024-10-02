'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import './styles.css';
import InterestsAndContactSections from './components/InterestsAndContactSections';
import GithubRequest from './components/Request';
import Contact from './components/Contact';


export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDay, setCurrentDay] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // Your birthdate (replace with your actual birthdate)
  const birthDate = new Date('2004-09-12');
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent click from propagating to the parent
    setExpandedProject(null); // Collapse the expanded project
  };

  useEffect(() => {
    // Function to update time and day every second
    const updateTimeAndDay = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const dayString = now.toLocaleDateString(undefined, {
        weekday: 'long', // 'Monday', 'Tuesday', etc.
      });
      const currentDate = Date.now();

      setCurrentTime(timeString);
      setCurrentDay(dayString);

      // Calculate the age
      const ageDiffMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDiffMs); // Convert difference to a Date object
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    };

    // Update time and day every second
    const intervalId = setInterval(updateTimeAndDay, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [birthDate]);


  const projectData = [
    { id: 1, title: "Sammamish PickleBall", description: "Developed and launched a Pickleball attendance app for the city of Sammamish, which has successfully attracted over 50 daily users and accumulated more than 150 total downloads. With plans to globalize the app, I utilized a Swift and Firebase stack to create a seamless user experience. The positive reception highlights its potential for broader engagement within the Pickleball community.", photo: './public/SPB.webp', github: 'https://github.com/EyalShechtman/SammamishPickleBall-App'},
    { id: 2, title: "US Congress API", description: "Identifying the absence of an available API for congressional voting information, I took the initiative to develop a comprehensive RESTful API using Flask. To ensure scalability and reliability, I deployed the API through AWS and Docker, optimizing it for robust performance. This custom-built API was specifically tailored to meet the needs of a project that analyzed and mapped the voting records of the 117th Congress concerning their stances on Israel. By creating specialized endpoints, the API enabled efficient data retrieval and facilitated detailed insights into how each member of Congress voted on key issues related to Israel, thereby providing a clear and informative visualization of legislative positions based on their voting behavior. Link for Project: https://github.com/EyalShechtman/Congress_Israel_Bills", photo: './public/SPB.webp', github: 'https://github.com/EyalShechtman/CongressAPI'},
    { id: 3, title: "DubMatch", description: "Developed a full-stack website using React for the frontend and Firebase for the backend with the objective of simplifying the roommate search process for University of Washington (UW) students. The platform offers comprehensive features, ranging from user authorization to advanced filtering options, allowing users to find prospective roommates with more precise and concrete criteria than typical roommate websites. By implementing detailed filters, the website ensures that students can match based on specific preferences and needs, enhancing the compatibility and overall roommate experience. Additionally, the site is tailored specifically for the UW campus, incorporating campus-specific information and resources to better serve the student community. This targeted approach not only facilitates easier and more effective roommate matching but also fosters a more connected and supportive living environment for UW students.", photo: './public/SPB.webp', github: 'https://github.com/EyalShechtman/UW-Roomate-App-React-'},
    { id: 4, title: "Nike Virtual Try-On Extension", description: "Currently developing an AI-powered virtual fitting Chrome extension designed to enhance the online shopping experience on the Nike website. This React-based extension features a personalized virtual fitting tool that utilizes Selenium to scrape product data and interact with Alibaba’s fitting model. Additionally, using a pre-built head swapping model, using PyTorch and OpenCV, I enabled face personalization by blending user images onto the virtual mannequins. This ongoing project aims to provide users with a highly personalized and interactive shopping experience by integrating advanced AI technologies into a user-friendly browser extension.", photo: './public/SPB.webp', github: 'https://github.com/EyalShechtman/VirtualFittingExtension'},
    { id: 5, title: "Research", description: "I developed and published a Chrome extension designed to contextualize news headlines, enhancing user understanding through advanced text analysis. Utilizing the OpenAI API for text summarization and SpaCy for keyword extraction, the extension provides concise summaries and highlights key terms from news articles in real time. The backend is hosted on AWS EC2, where I deployed a REST API endpoint to efficiently handle requests from the extension. The user interface, crafted with JavaScript, HTML, and CSS, ensures seamless and interactive user experiences directly within the browser. Additionally, I authored a paper detailing this project, which is on track for publication as the first author by December 2024 at NCUR-2025.", photo: './public/SPB.webp', github: 'https://github.com/EyalShechtman'},
  ];
  
  return (
    
    <div>


      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,447;1,447&display=swap"/>


      <div className="animation-container">
        <img className="person-animation" src="./public/person1.png" alt="Person Hitting" />
        <img className="person-animation2" src="./public/person1 copy.png" alt="Person Hitting" />
      </div>

      <div className="goal-container">
        <div className='pickleball-field  '></div>
        <div className="goal">
        <div className="goal-left"></div>
        <div className="goal-right"></div>
        <div className="goal-top"></div>
      </div>


    </div>
      <div className='ball'></div>
      <h1 style={styles.name}>Eyal Shechtman</h1>

      <p style={styles.time}>{currentDay}, {currentTime}</p>
      <p style={styles.time}>Age: {age}</p>

      <Navbar />

      <div className='movingElement'></div>

      {/* About Section */}
      <section id="about" style={sectionStyles}>
        <div style={styles.contentWrapper}>
          <div style={styles.textContainer}>
            <h1 className="subtitle" style={styles.header}>Who is Eyal?</h1>
            <p style={styles.paragraph}>
              A junior at the University of Washington studying Informatics and Economics. He loves learning, developing, and coding.
            </p>
            <p style={styles.paragraph}>
              He has a passion for startups and bringing ideas into fruition. From Web Dev to ML, Eyal is interested in a variety of topics and has taken relevant courses to enhance his skills.
            </p>
            <p style={styles.paragraph}>
              Previously interned at HireHyped where he built an interviewing chatbot with text to speech and speech to text capabilities. 
              He currently acts as a research assistant under Professor Spencer Williams, working on his first paper about a tool he developed
              to fight misinformation of news titles online!

            </p>

            {/* Optional Currently section */}
            <div style={styles.currentlyBox}>
              <span style={styles.currentlyLabel}>Currently</span>
              <p>Working on various tech projects like his favorite Pickleball App!</p>
            </div>
          </div>

          <div style={styles.imageWrapper}>
            <img className="soccer" src="./public/SoccerPhoto.JPG" alt="Eyal Doing what he loves best" style={styles.image} />
            <p style={styles.caption}>Playing footy!</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={sectionStyles2}>
        <h1 className="projects-header" style={styles.projectsHeader}>Projects</h1>
        <div style={styles.projectsGrid}>
          {projectData.map((project) => (
            <div
              key={project.id}
              className={`project-circle ${project.id === expandedProject ? 'expanded' : ''}` }
              style={expandedProject === project.id ? styles.expandedProjectCircle : styles.projectCircle}
              onClick={() => setExpandedProject(project.id)}
            >
              <div style={styles.projectContent}>
                {expandedProject === project.id ? (
                <>
                  <div style={styles.titleContainer}>
                    <h1 style={styles.header}>{project.title}</h1>
                    {/* GitHub icon linked to project GitHub repository */}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.githubLink}>
                      <img className='github'
                        src="./public/github.png" // Use your GitHub icon image path
                        alt="GitHub"
                        style={styles.githubIcon}
                      />
                    </a>
                  </div>
                  <p style={styles.paragraph}>{project.description}</p>
                  <img className={`projectpicture-${project.id}`} src={project.photo} alt={project.title} style={styles.expandedImage} />
                  <button style={styles.closeButton} onClick={handleClose}>
                    &times;
                  </button>
                </>
              ) : (
                  <>
                    <img className = {`project-${project.id}`} src={project.photo} alt={project.title} style={styles.projectImage} />
                    <p>{project.title}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Interest Section */}
      <section id="interest" style={sectionStyles2}>
        <InterestsAndContactSections />
      </section>

      {/* Contact Section */}
      <section id="contact" style={sectionStyles2}>
        <Contact/>
      </section>
    </div>
  );
}

// Use React.CSSProperties to type the styles object
const styles: { [key: string]: React.CSSProperties } = {
  name: {
    marginTop: '-100px',
    fontSize: '60px',
    textAlign: 'center',  // Center the name
    marginBottom: '20px',
    color: '#333',
    textDecoration: 'underline',  // Underline text
  },
  time: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#555',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '50px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  textContainer: {
    flex: '1',
    paddingRight: '20px',
  },
  header: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'left',
    color: '#333',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '15px',
  },
  currentlyBox: {
    border: '1px solid #e0e0e0',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    marginTop: '20px',
  },
  currentlyLabel: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#999',
  },
  imageWrapper: {
    flex: '0 0 300px',
    marginLeft: '50px',
    textAlign: 'center',
  },
  image: {
    marginTop: '100px',
    marginLeft: '40px',
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  caption: {
    fontSize: '16px',
    color: '#888',
    marginTop: '5px',
    marginLeft: '70px'
  },
  projectsHeader: {
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '40px',
  },
  projectsGrid: {
    display: 'grid',                   // Use CSS grid for the 2x2 layout
    gridTemplateColumns: 'repeat(3, 1fr)', // 2 columns
    gap: '75px',                       // Spacing between grid items
    justifyItems: 'center',            // Center grid items horizontally
    alignItems: 'center',              // Center grid items vertically
    maxWidth: '1200px',
    margin: '0 auto',
  },
  projectCircle: {
    width: '250px',
    height: '250px',
    borderRadius: '10%',
    display: 'flex',
    flexDirection: 'column',  // Stack image and title vertically
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.4s ease',  // Transition applied to the 'transform' property
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  },
    expandedProjectCircle: {
    width: '80%',
    height: '80%',
    borderRadius: '10px',              // Change circle to a square
    backgroundColor: '#F5F5F5',           // Background for the expanded project
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    transition: 'all 0.4s ease',       // Smooth transition for expansion
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    padding: '40px'
  },
  projectContent: {
    textAlign: 'left',
    color: '#333',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',                // Ensures the image fits inside the circle
    borderRadius: '15%',
  },
  expandedImage: {
    width: '50%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '3%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  projectTitle: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#333',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '30px',
    color: '#333',
    cursor: 'pointer',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',     // Align the title and GitHub icon vertically
    gap: '10px',              // Space between the title and icon
  },
  githubIcon: {
    width: '30px',            // Adjust the size of the GitHub icon
    height: '30px',
    cursor: 'pointer',        // Pointer cursor for the clickable icon
  },
  githubLink: {
    textDecoration: 'none',   // Remove any text underline or link styles
    display: 'flex',          // Ensure the icon behaves like a button
    alignItems: 'center',
  },
};
// For section styling, use the same type declaration
const sectionStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',   // Stack items vertically
  justifyContent: 'center',  // Center content horizontally
  alignItems: 'left',      // Center content vertically
  height: '100vh',           // Full height of the viewport
  padding: '50px 0',
  backgroundColor: '#f4f1e0',
  textAlign: 'left',       // Centers text inside the section
};


const sectionStyles2: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',   // Stack items vertically
  justifyContent: 'center',  // Center content horizontally
  alignItems: 'left',      // Center content vertically
  height: '73vh',           // Full height of the viewport
  padding: '50px 0',
  backgroundColor: '#f4f1e0',
  textAlign: 'left',       // Centers text inside the section
};
