import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The Page Cannot be Found</p>
            <Link to='/'>Redirect to Hompage</Link>
        </div>
     );
}
 
export default NotFound;