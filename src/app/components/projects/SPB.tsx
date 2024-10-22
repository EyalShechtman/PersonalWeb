import React from "react";

const SammamishPickleball: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      width: "100%",
      height: "100%",
      overflowY: "auto", // Ensures vertical scrolling if content exceeds the height
      padding: "20px",
      boxSizing: "border-box",
      maxHeight: "100%", // Constrain height to the popup's available space
    },
    pickleballPage: {
      fontFamily: "'Arial', sans-serif",
      color: "#333",
      maxWidth: "1000px", // Limit the width of the content within the popup
      margin: "0 auto",
      padding: "20px",
    },
    banner: {
      position: "relative",
      width: "100%",
      height: "200px",
      overflow: "hidden",
      borderRadius: "10px",
      marginBottom: "20px",
    },
    bannerImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(70%)",
    },
    bannerText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      textAlign: "center",
    },
    bannerTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "10px",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
    },
    bannerSubtitle: {
      fontSize: "18px",
      textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
    },
    descriptionSection: {
      marginTop: "20px",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      overflow: "auto", // Enable scrolling for long content
    },
    textContent: {
      lineHeight: "1.6",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    paragraph: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "10px",
    },
    imageGallery: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
      marginTop: "30px",
    },
    galleryImage: {
      width: "100px",
      height: "100px",
      borderRadius: "10px",
      objectFit: "cover",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.pickleballPage}>
        {/* Banner Section */}
        <div style={styles.banner}>
          <img
            src="/pickleball-court.jpg" // Make sure this image is in the public folder
            alt="Pickleball Court"
            style={styles.bannerImage}
          />
          <div style={styles.bannerText}>
            <h1 style={styles.bannerTitle}>Sammamish Pickleball Project</h1>
            <p style={styles.bannerSubtitle}>
              Connecting Pickleball enthusiasts in Sammamish
            </p>
          </div>
        </div>

        {/* Project Description Section */}
        <section style={styles.descriptionSection}>
          <div style={styles.textContent}>
            <h2 style={styles.heading}>About the Project</h2>
            <p style={styles.paragraph}>
              The Sammamish Pickleball project was developed to make it easier
              for pickleball players in the city to organize games, track
              attendance, and connect with one another.
            </p>
            <p style={styles.paragraph}>
              With over 50 daily users and 150 downloads, the app is quickly
              becoming a staple in the local community. Built using Swift and
              Firebase, the app offers a seamless user experience and is set to
              expand globally.
            </p>
          </div>

          {/* Optional Image Gallery */}
          <div style={styles.imageGallery}>
            <img
            src="../../public/SPBApp.png"
              alt="Pickleball action"
              style={styles.galleryImage}
            />
            <img
              src="/pickleball2.jpg"
              alt="Players on the court"
              style={styles.galleryImage}
            />
            <img
              src="/pickleball3.jpg"
              alt="Pickleball equipment"
              style={styles.galleryImage}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SammamishPickleball;
