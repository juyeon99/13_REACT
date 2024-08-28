import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function Navigatebar() {
    const activeStyle = {
        backgroundColor: 'lightsalmon',
        color: 'white'
    }

    return (
        <div>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined}>HOME</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => isActive ? activeStyle : undefined}>소개</NavLink></li>
                <li><NavLink to="/menu" style={({isActive}) => isActive ? activeStyle : undefined}>메뉴목록</NavLink></li>
            </ul>
        </div>

        // <Navbar expand="lg" className="bg-body-tertiary">
        //     <Container>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined}>HOME</NavLink>
        //                 <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : undefined}>소개</NavLink>
        //                 <NavLink to="/menu" style={({isActive}) => isActive ? activeStyle : undefined}>메뉴목록</NavLink>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
}

export default Navigatebar;