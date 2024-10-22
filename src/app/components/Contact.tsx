import React from "react";
// import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons from react-icons
import '../styles.css'

const Contact: React.FC = () => {
  interface ContactBoxProps {
    icon: React.ReactNode;
    text: string;
    link: string;
  }

  // ContactBox component definition
  const ContactBox: React.FC<ContactBoxProps> = ({ icon, text, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="text-primary">{icon}</div>
      <span className="text-gray-800">{text}</span>
    </a>
  );

  return (
    <section id="contact" className="bg-[#f4f1e0] py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="flex justify-center space-x-4">
          <ContactBox
          
            icon={<p>✉️</p>}
            text="eyal.shechtman@gmail.com"
            link="mailto:eyal.shechtman@gmail.com"
          />
          <ContactBox
            icon={<p className="linkedin"></p>}
            text="LinkedIn"
            link="https://www.linkedin.com/in/eyal-shechtman"
          />
          <ContactBox
            icon={<p className="github2">✉️</p>}
            text="X (Twitter)"
            link="https://github.com/EyalShechtman"
          />
        </div>
        <p className="text-center mt-8 max-w-2xl mx-auto">
          I'm always excited to discuss new opportunities, collaborate on
          projects, or just chat about using language models. Whether you
          have a specific project in mind or simply want to connect, don't
          hesitate to reach out!
        </p>
      </div>
    </section>
  );
};

export default Contact;
