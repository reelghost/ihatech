'use client';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projectsData";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ButtonContainer,
  ViewAllProjects
} from "./Projects.styled";


export default function ProjectsSlider() {
  return (
    <Container>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Some description about your projects</Desc>
        <CardContainer>
          {projects.map((project, idx) => (
            <div key={idx} style={{
              background: '#232428',
              borderRadius: 16,
              boxShadow: '0 4px 24px #1F2634',
              padding: 24,
              minWidth: 300,
              maxWidth: 380,
              flex: '1 1 320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: 8
            }}>
              <img
                src={project.img}
                alt={project.title}
                style={{borderRadius: 16, width: '100%', height: 180, objectFit: 'cover', marginBottom: 16, background: '#000', border: '1px solid #333'}}
                loading="lazy"
              />
              <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: 12, textAlign: 'center'}}>{project.title}</h3>
              <p style={{color: '#aaa', marginBottom: 16, fontFamily: 'monospace', whiteSpace:'pre-line', textAlign: 'center'}}>{project.description}</p>
              <div style={{marginBottom: 12}}>
                <span style={{fontWeight: 700, marginRight: 8}}>Tech Stack:</span>
                {project.techIcons.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={project.tech[i]}
                    style={{display: 'inline', width: 24, height: 24, margin: '0 2px', background: '#fff', borderRadius: 6, padding: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}
                    title={project.tech[i]}
                  />
                ))}
              </div>
              <div style={{borderTop: '1px solid #444', margin: '8px 0', width: '100%'}}></div>
              <div style={{display: 'flex', alignItems: 'center', gap: 8, marginTop: 8}}>
                <span style={{fontWeight: 500, marginRight: 8}}>Links:</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{background: '#222', color: '#a259ff', padding: 10, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.12)'}}
                  title="Visit Project"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </CardContainer>
        <ButtonContainer>
          <ViewAllProjects href="/projects">View All Projects</ViewAllProjects>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}
