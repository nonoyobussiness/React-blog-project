import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 style={{fontSize:'32px'}}>The Dojo Blog</h1>
            <div className="links">
                <Link to="/" style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'15px',
                    padding:'10px'
                }}>Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'15px',
                    padding:'10px'
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;