import Container from '@/components/cards/Container'
import React from 'react'
import ContainerStyles from "../../../components/cards/Container/container.module.scss";
import getAllProjects from '@/lib/projects';
import ProjectCard from '@/components/cards/Project';

const Projects = () => {
  const projects = getAllProjects();
  return (
    <Container id={'projects'} className={'projects'}>
    <div className={ContainerStyles.title}>
        <h2>
            {'<Projects/>'}
        </h2>
        <hr/>
    </div>
    <div>
        {
            projects.map(project => (
                <ProjectCard key={project.id} project={project}/>
            ))
        }
    </div>
</Container>
  )
}

export default Projects
