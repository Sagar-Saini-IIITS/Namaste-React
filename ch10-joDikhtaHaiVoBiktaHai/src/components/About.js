import {Link, Outlet} from 'react-router-dom';

const About = () => {
    return (
      <>
      <div>
        <h1>About Us Page</h1>
        <p>
          {" "}
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
      </div>
      <Link to="/about/profile" style={{color:'blue'}}>Profile</Link>
      <Outlet/>
      </>
    );
  };
  
  export default About;