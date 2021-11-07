const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'><h1>IRFAN</h1></div>
      <div className='nav-links'>
        <ul>
          <li>
            <a href='#home'>HOME</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#service'>SERVICE</a>
          </li>
          <li>
            <a href='#portfolio'>PORTFOLIO</a>
          </li>
          <li>
            <a href='#blog'>BLOG</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
