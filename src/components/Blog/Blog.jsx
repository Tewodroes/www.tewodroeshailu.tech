import React from 'react';
import styled from 'styled-components';
import { BsDownload } from 'react-icons/bs';

const Blog = () => {
  const downloadPDF = () => {
    // Replace the URL with the URL of your PDF file
    window.open('blog.pdf');
  }

  return (
    <Container id="blog">
      <a href='blog.pdf' target='_blank'>
      <ImageContainer>
        <img src="https://res.cloudinary.com/dw4mmejgp/image/upload/v1679219745/ci-cd_jlo8aj.png" alt="CI/CD banner" height={450}/>
        <Overlay onClick={downloadPDF}>
          <BsDownload color='orange'/>
          <span>Download  PDF</span>
        </Overlay>
      </ImageContainer>
      </a>
      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;


  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  

  span {
    opacity: 1;
    font-size: 2rem;
    text-align: center;
    color: #08bb97;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Courier New', monospace;
  }
`;

export default Blog;
