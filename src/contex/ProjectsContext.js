// ProjectsContext.js
import React, { createContext, useEffect, useState } from 'react';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects when the component mounts
    const fetchProjects = async () => {
      try {
        // Fetch projects here and set them in state
        // Example: const projectsData = await fetch('/api/projects');
        // setProjects(projectsData);
      } catch (error) {
        // Handle errors
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
