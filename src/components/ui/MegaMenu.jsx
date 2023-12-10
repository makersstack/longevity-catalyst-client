// import React, { useState } from 'react';
// import { projectApi } from '../../api';

// const MegaMenu = ({ isOpen, onClose, searchTerm, handleSearch }) => {
//   const [projects, setProjects] = useState([]);
//   const [projectLimit, setProjectLimit] = useState(2);
//   const 
//   useEffect(() => {
//     // Simulating fetching projects from an API
//     const fetchProjects = async () => {
//       try {
//         // setIsLoading(true);
//         const paginationOptions = {
//           limit: projectLimit,
//         };
//         const response = await projectApi.getAllProjects(filters, paginationOptions);
//         setProjects(response.data.data.data); 
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     if (isOpen) {
//       fetchProjects();
//     }
//   }, [isOpen]);

//   const filteredProjects = projects.filter((project) =>
//     project.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const setSearchProjectLink = () => {
//     console.log('Test Data');
//   }
//   return (
//     <div className='meghamenu_header'>
//        <ul>
//         {filteredProjects.map((project) => (
//           <li key={project.id}>{project.name}</li>

//         ))}
//       </ul>
//       <div onClick={setSearchProjectLink}>
          
//       </div>
//     </div>
//   );
// };

// export default MegaMenu;
