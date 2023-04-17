import item from "./item.png"
import './App.css';
import Profile from './profile/Profile';
import PropTypes from'prop-types';

function App() {
  return (
    <div className="App " style={{backgroundColor:'#D65076'}}>
      <Profile fullName="Mohamed Abbes" bio="27 years experience on earth" profession="Web developer">
        <img style={{display:"flex",width:'200px',marginLeft:'auto',marginRight:'auto',border:'4px solid DarkMagenta',borderRadius:'50%'}} src={item} alt="img"/>
      </Profile>
    </div>
  );
}


Profile.defaultProps={
  fullName:"Mohamed Abbes",
  bio:"",
  profession:"web developer",
}

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default App;
