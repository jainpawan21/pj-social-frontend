import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap'; 
import { NavLink } from 'react-router-dom';


class NavBar extends Component{
    state = {
        isNavOpen : false,

    };

  toggleNav = () => {
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }
  render() {
      return(
          <React.Fragment>
              
              <Navbar className="navbar-light shadow" style={{backgroundColor: "#ffffff"}} expand="sm">
              <div className="container">
                  
                  <NavbarBrand className="mr-auto" href="/">
                     PJ-SOCIAL
                  </NavbarBrand>
                  <NavbarToggler onClick={this.toggleNav} className="mr-2" />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                       <Nav className="ml-auto" navbar>

                           <NavItem>
                               <NavLink className="nav-link" to="/">
                                   <span className="fa fa-home fa-lg"></span> Feed
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink className="nav-link" to="/papers">
                                   <span className="fa fa-info fa-lg"></span> Profile
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink className="nav-link" to="/timetable">
                                   <span className="fa fa-list fa-lg"></span> People
                               </NavLink>
                           </NavItem>
                           
                       </Nav>
                       {/* <Nav className='ml-auto' navbar>
                           <NavItem>
                               <Button outline onClick={this.toggleModal}>
                                  <span className="fa fa-sign-in fa-lg"></span> Login
                               </Button>
                           </NavItem>
                       </Nav> */}
                  </Collapse>
              </div>
              </Navbar>
              {/* <hr style={{position: 'relative', marginTop: '0'}}/> */}
          </React.Fragment>
      );
  }
}
export default NavBar;