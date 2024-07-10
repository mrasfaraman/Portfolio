import React from 'react';
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import 'react-multi-carousel/lib/styles.css';

export const Tools = () => {
  const tools = [
    { name: 'React', iconClass: 'fa-brands fa-react' },
    { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
    { name: 'HTML', iconClass: 'fa-brands fa-html5' },
    { name: 'CSS', iconClass: 'fa-brands fa-css3-alt' },
    { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
    { name: 'Node.js', iconClass: 'fa-brands fa-node-js' },
    { name: 'Express.js', iconClass: 'fa-brands fa-js-square' },
    { name: 'GitHub', iconClass: 'fa-brands fa-github' },
    { name: 'Git', iconClass: 'fa-brands fa-git' },
    { name: 'MongoDB', iconClass: 'fa-brands fa-envira' },
    { name: 'MySQL', iconClass: 'fa-solid fa-database' },
    { name: 'TypeScript', iconClass: 'fa-brands fa-js' },
    { name: 'Next.js', iconClass: 'fa-brands fa-js-square' },
    { name: 'Tailwind CSS', iconClass: 'fa-solid fa-code' },
    { name: 'Material UI', iconClass: 'fa-brands fa-react' },
    { name: 'Python', iconClass: 'fa-brands fa-python' },
    { name: 'C++', iconClass: 'fa-solid fa-code' },
    { name: 'React Native', iconClass: 'fa-brands fa-react' }
  ];

  const styles = {
    toolSection: {
      paddingTop: '50px', // Adds space between sections
      paddingBottom: '50px'
      
    },
    toolContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      
    },
    
    toolItem: {
      border: '2px solid #000',
      borderRadius: '5px',
      padding: '20px',
      textAlign: 'center',
      transition: 'background-color 0.3s, color 0.3s',
      cursor: 'pointer',
      width: '150px', // Set a fixed width
      height: '150px', // Set a fixed height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff', // Set background color to white
      color: '#000', // Set text color to black
    },
    toolItemHover: {
      backgroundColor: '#000',
      color: '#fff',
    },
    toolItemIcon: {
      fontSize: '2em',
      marginBottom: '10px',
    },
  };

  return (
    <section className="tool" id="tools" style={styles.toolSection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h1 style={{paddingBottom: '50px'}}>Tools & Technologies</h1>
              <div style={styles.toolContainer}>
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    style={styles.toolItem}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = styles.toolItemHover.backgroundColor;
                      e.currentTarget.style.color = styles.toolItemHover.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = styles.toolItem.backgroundColor;
                      e.currentTarget.style.color = styles.toolItem.color;
                    }}
                  >
                    <i className={tool.iconClass} style={styles.toolItemIcon}></i>
                    <p>{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
