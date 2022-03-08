import {Link} from 'react-router-dom';
import image from '../assets/images/404.png';


function NotFound(){ 

    
    return (
        <div>

        <h2> No encontramos lo que buscas :c</h2>
        


        
        <div className="logo">
            <img  src={image} alt="404 error"/>
        </div>
        

    </div>

    )

}
    
        

export default NotFound;