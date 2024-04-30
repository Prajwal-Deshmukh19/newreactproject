import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './yt.css';

export function ReelsVideo(){
    const [reels,setReels]=useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        axios.get('http://127.0.0.1:5000/get-reels')
            .then(response => {
                setReels(response.data);
            })
            .catch(error => {
                console.error('Error fetching user videos:', error);
            });
    }, [])

    return(
        <div id="reelvh" className="bg-dark text-white h-auto">
            <h3 id="shorts">Shorts</h3><br />
           <Link to='/dashboard'><button className="btn btn-danger">Home</button></Link>
           
           <main>
            
                {
                    reels.map(reel =>
                    <div>
                         
                       <div  className="ms-1 d-flex flex-column">
                       <p className='fw-bold text-white text-center'>{reel.Title}</p>
                        <iframe src={reel.Url} width='350' height='620' id="reelcenter"></iframe>
                       </div>
                       <div>
                       
                       </div>
                       
                    </div>
                    
                    
                    )
                }
            </main>
        </div>
    )
}