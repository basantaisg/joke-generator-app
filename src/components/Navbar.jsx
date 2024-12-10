const NavBar = () => {
  return (
    <div>
      <div className='nav'>
        <div className='logo'>
          <h2>JokesGen</h2>
        </div>
        <div className='navItems'>
          <a href='/' target='_parent'>
            Jokes
          </a>
          <a href='https://github.com/basantaisg' target='_blank'>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
