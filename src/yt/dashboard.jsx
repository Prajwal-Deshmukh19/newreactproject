import { useEffect, useState } from 'react'
import { Cookies, useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

import './yt.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function DashBoard() {

    const [cookies, setcookie, removecookie] = useCookies('userid');
    const [videos, setVideos] = useState([]);
    
    let navigate = useNavigate();

    // function UserVideos() {
    //     axios.get('http://127.0.0.1:5000/user-videos')
    //         .then(response => {
    //             setVideos(response.data);
    //         })
    // }
    function UserVideos() {
        axios.get('http://127.0.0.1:5000/get-videos')
            .then(response => {
                setVideos(response.data);
            })
            .catch(error => {
                console.error('Error fetching user videos:', error);
            });
    }




    
    useEffect(() => {
        if (cookies.userid == undefined) {
            navigate('/');
        } else { 
            UserVideos();
            
        }
    }, [])

    function handlesignout() {
        removecookie('userid');
        navigate('/')
    }


    return (
        <div className='bg-dark text-white h-auto'>
            <header id='dshhead'>
                <div className="bi bi-list"> <span><img src="yt-logo.jpg" alt="" /></span></div>
                <div><h3>{cookies.userid}</h3></div>
                <div className="input-group"><input type="text" placeholder="Search" className="form-control" /><button className=" btn btn-danger bi bi-search"></button></div>
                <div id='signoutbtn'><button className='btn btn-danger' onClick={handlesignout}>Signout</button></div>
            </header>
            <section id='userdispflexwrap'>
                <div id='sideicon'>
                    <Link className='mb-5'><span className='bi bi-house' id='house'></span></Link>
                    <Link to='/reels' className='mb-5'><span className='bi bi-camera-reels'></span></Link>
                    <Link to='/cv' className='mb-5'><span className='bi bi-collection-play'></span></Link>
                    <Link><span className='bi bi-clock-history'></span></Link>
                </div>
                <div className='text-white d-flex flex-wrap '>
                {
                        videos.map(video =>
                            <div>
                            <p className="text-white text-center fw-bold">{video.Title}</p>
                            <iframe src={video.Url} width="300" height="200" className="ms-5"></iframe>
                            <p className='ms-5'>{video.Views} views - {video.Uploaded}</p>


                            </div>
                        )
                    }
                </div>
            </section>
           
        </div>
    )
}