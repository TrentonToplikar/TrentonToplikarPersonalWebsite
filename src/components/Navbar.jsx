import "./styles/Navbar.css"

export const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="name-container">
                <a href="#main">
                Trenton Toplikar
                </a>
            </div>
            <nav className="nav-items">
                <ul className="nav">
                    <li id="about"><a href="#about-me" >About</a></li>
                    <li id="skill"><a href="#skills-href">Skills</a></li>
                    <li  id="portfolio"><a href="#portfolio-href">Portfolio</a></li>
                    <li id="contact"><a href="#contact-form" >Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar