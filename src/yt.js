import './yt/yt.css';
import { BrowserRouter,Route,Routes, } from "react-router-dom";
import { YtHome } from "./yt/home";
import { UserLogin } from './yt/login';
import { RegisterUser } from './yt/register';
import { AdminLogin } from './yt/admin';
import { DashBoard } from './yt/dashboard';
import { LoadVideos } from './yt/load-videos';
import { AdminDashboard } from './yt/admin-dashboard';
import { AddVideo } from './yt/add-video';
import { EditVideos } from './yt/edit-videos';
import { DeleteVideo } from './yt/delete';
import { ReelsVideo } from './yt/reels';
import { CollectionVideos } from './yt/cv';


export function YouTubeProject(){
    return(
    <div id="bg">
    <BrowserRouter>
    <Routes>
        
        <Route path="/" element={<YtHome />}  />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/admindb' element={<AdminDashboard />} />
        <Route path='/addvideo' element={<AddVideo />} />
        <Route path='/editvideo/:id' element={<EditVideos />}/>
        <Route path='/delete-video/:id 'element={<DeleteVideo />} />
        <Route path='/reels' element={<ReelsVideo />} />
        <Route  path='/cv' element={<CollectionVideos />}/>
        
       
    </Routes>
    </BrowserRouter>
    </div>
    )
}