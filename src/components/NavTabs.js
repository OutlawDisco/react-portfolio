import React from 'react';
import Nav from 'react-bootstrap/Nav';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Nav className="flex-column">
      <Nav.Link
        eventKey="home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
      >
        About Me
      </Nav.Link>
      <Nav.Link
        eventKey="projects"
        onClick={() => handlePageChange('Projects')}
        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
      >
        Portfolio
      </Nav.Link>
      <Nav.Link
        eventKey="experience"
        onClick={() => handlePageChange('Experience')}
        className={
          currentPage === 'Experience' ? 'nav-link active' : 'nav-link'
        }
      >
        Resume
      </Nav.Link>
      <Nav.Link
        eventKey="contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >
        Contact
      </Nav.Link>
    </Nav>
  );
}

export default NavTabs;
