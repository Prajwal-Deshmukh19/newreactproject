import './yt.css';
import { Link } from 'react-router-dom';
export function YtHome(){
    return(
        <div>
           <header>
            <div><img src="yt-logo.jpg" alt="" /></div>
            <div>UserName</div>
            <div className="input-group"><input type="text" placeholder="Search" className="form-control" /><button className=" btn btn-danger bi bi-search"></button></div>
            <div className='icons'>
                <Link to='/login'><button className="btn btn-primary me-2">Login</button></Link>
                <Link to='/register'> <button className='btn btn-success'>Register</button></Link>
                <Link to='/admin'><button className='btn btn-warning ms-2'>Admin</button></Link>
                <span className='icon bi bi-person-fill'></span>
                <Link><span className='icon bi bi-list' data-bs-toggle="offcanvas" data-bs-target="#canvas"></span></Link>
            </div>
        </header>
       <div id='bgg'>
       <section id='bg-shade'>
           <div className='offcanvas offcanvas-end bg-dark text-light' id='canvas'>
            <div className='offcanvas-header'>
              <h2 className='text-center fw-bold'>Settings</h2>
              <button className='btn btn-close bg-danger' data-bs-dismiss="offcanvas"></button>
            </div>
            <div className='offcanvas-body'>
             <div className='profiledata'>
                <span>General</span>
                <span>Account</span>
                <span>Data saving</span>
                <span>Autoplay</span>
                <span>Downloads</span>
                <span>Watch on TV</span>
                <span>Manage all history</span>
                <span>Privacy</span>
                <span>Captions</span>
                <span>Accessibility</span>
                <span>About</span>

             </div>
            </div>
           </div>
        </section>
       </div>
        </div>
    )
}