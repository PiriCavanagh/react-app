import profile from '../components/profile1.png'
const Occupantstable = ({occupants}) => {
    return (
        <div className='occupantstable'>
            <div className="titlediv">Current Occupants :<span>{occupants}</span></div>
            <div className="table">
                <div className="namediv1">
                    <div><img src={profile} className="profileimg" alt="profile"/></div>
                    <div className='nameandrolediv'><h2>George Smith</h2><h3>General Surgeon</h3></div>
                </div>
                <div className="namediv2">
                    <div><img src={profile} className="profileimg" alt="profile"/></div>
                    <div className='nameandrolediv'><h2>Sarah Brown</h2><h3>Supervisor</h3></div>
                </div>
                <div className="namediv3">
                    <div><img src={profile} className="profileimg" alt="profile"/></div>
                    <div className='nameandrolediv'><h2>Phillip Bowman</h2><h3>Nurse</h3></div>
                </div>
                <div className="namediv4">
                    <div><img src={profile} className="profileimg" alt="profile"/></div>
                    <div className='nameandrolediv'><h2>Ella Collier</h2><h3>Nurse</h3></div>
                </div>
                <div className="namediv5"><img src={profile} className="profileimg" alt="profile"/><div className='nameandrolediv'><h2>Guest 1</h2></div></div>
                <div className="namediv6"><img src={profile} className="profileimg" alt="profile"/><div className='nameandrolediv'><h2>Guest 2</h2></div></div>
            </div>
        </div>
    );
  }
  
  export default Occupantstable
  