import { useRef, useState } from "react";
import "../App.css";
import logo from "../imgs/logo.png";
import { Link } from 'react-scroll';

function NavBar() {
	const navRef = useRef();
	const [navMenu, setNavMenu] = useState(true);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
		setNavMenu(!navMenu);
	};
	const handleSetActive = (to) => {
		const sections = document.querySelectorAll("nav p");
		sections.forEach((section) => {
			if (section.id === to+"Link") {

				section.classList.add("active");
			} else {
				section.classList.remove("active");
			}
		});
	};


	return (
		<header className="container">
			<div className="logo">
				<img src={logo} alt="Logo" />
			</div>
			<nav ref={navRef}>
				
				<p id="homeLink"><Link  className="homeLink" to="home" spy={true} smooth={true} offset={-50} duration={500}   onSetActive={handleSetActive} >Home</Link></p>
				<p id="introLink"><Link  className="introLink" to="intro" spy={true} smooth={true} offset={-50} duration={500}  onSetActive={handleSetActive}>My intro</Link></p>
				<p id="servicesLink"><Link  className="servicesLink" to="services" spy={true} smooth={true} offset={-50} duration={500}  onSetActive={handleSetActive}>Services</Link></p>
				<p  id="portfolioLink"><Link  className="portfolioLink" to="portfolio" spy={true} smooth={true} offset={-50} duration={500}  onSetActive={handleSetActive}>Portfolio</Link></p>
				<p id="testimonialsLink"><Link  className="testimonialLink" to="testimonials" spy={true} smooth={true} offset={-50} duration={500}  onSetActive={handleSetActive}>Testimonial</Link></p>
				<p id="blogLink"><Link  className="blogLink" to="blog" spy={true} smooth={true} offset={-50} duration={500}  onSetActive={handleSetActive}>Blog</Link></p>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<ion-icon name="close-outline"></ion-icon>
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				{navMenu ? <ion-icon name="menu-outline"></ion-icon> : <ion-icon name="close-outline"></ion-icon>}
			</button>
		</header>
	);
}

export default NavBar;
