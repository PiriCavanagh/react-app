import profile from '../components/profile.png';
import Dropdownmenu from './Dropdownmenu';

const level = 1;

const header = () => {
  return (
    <div>
        <div class="menu">
            <h1>Available Rooms</h1>
            <h2>Building - level {level}</h2>
            <div class="dropdown">
                <button class="dropbtn">
                    <img src={profile}></img>
                </button>
                <Dropdownmenu />
            </div>
        </div>
    </div>
  );
}

export default header

