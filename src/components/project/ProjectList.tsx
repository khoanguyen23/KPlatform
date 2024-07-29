import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: 1,
    title: "Notion Clone",
    date: "14 Jul 2024",
    description: "Local-First Notion Clone built with React Native Expo",
    imageUrl:
      "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D", // replace with actual image path
  },
  {
    id: 2,
    title: "React Navigation Form Sheet",
    date: "30 Jun 2024",
    description: "Learn about the new React Navigation v7",
    imageUrl:
      "https://images.unsplash.com/photo-1594948506928-2d4cad88d0af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "React Navigation Form Sheet",
    date: "30 Jun 2024",
    description: "Learn about the new React Navigation v7",
    imageUrl:
      "https://images.unsplash.com/photo-1594948506928-2d4cad88d0af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "React Navigation Form Sheet",
    date: "30 Jun 2024",
    description: "Learn about the new React Navigation v7",
    imageUrl:
      "https://images.unsplash.com/photo-1594948506928-2d4cad88d0af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "React Navigation Form Sheet",
    date: "30 Jun 2024",
    description: "Learn about the new React Navigation v7",
    imageUrl:
      "https://images.unsplash.com/photo-1594948506928-2d4cad88d0af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  // Add more projects as needed
];

const ProjectList = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </>
  );
};

export default ProjectList;
