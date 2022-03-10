import {Link} from 'react-router-dom';
import image from '../assets/images/404.png';


function NotFound(){ 

    
    return (
        
        <div className="error404">
            <img  src={image} alt="404 error" />
        </div>


    )

}
    
        

export default NotFound;