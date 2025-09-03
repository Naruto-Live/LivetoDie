import boyPic from './assets/boy.jpeg'

function Card() {
    return(
        <div className="card">
            <img className="card-img" src={boyPic} alt="Profile Pic"></img>      
            <h2 className="card-title">Lucky Bhai</h2>
            <p className="card-text">Fuck you every one</p>        
        </div>
    );
}

export default Card