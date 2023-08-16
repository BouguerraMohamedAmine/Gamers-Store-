import React , {useState , useEffect} from 'react'
import BrowseDetails from './BrowseDetails';
import axios from "axios"



const Browse = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/product')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
   <>
   
   <div className="container">
   <div className="row">
     <div className="col-lg-12">
       <div className="page-content">

         <div className="row">
           <div className="col-lg-8">
             <div className="">
               <div className="heading-section">
               </div>
               <div className="owl-features owl-carousel">
                 {data.map((element,i)=>{
                 return <BrowseDetails element={element} key={i}/>
                 })}




               </div>
             </div>
           </div>
         </div>

         <div className="start-stream">
           <div className="col-lg-12">
             <div className="heading-section">
               <h4><em>How To Start Your</em> Live Stream</h4>
             </div>
             <div className="row">
               <div className="col-lg-4">
                 <div className="item">
                   <div className="icon">
                     <img src="client\src\assets\images\stream-01.jpg" alt="" style={{ 
  maxWidth: '60px',
  borderRadius: '50%'
}} />
                   </div>
                   <h4>Go To Your Profile</h4>
                   <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                 </div>
               </div>
               <div className="col-lg-4">
                 <div className="item">
                   <div className="icon">
                     <img src="assets/images/service-02.jpg" alt="" style={{ 
  maxWidth: '60px',
  borderRadius: '50%'
}} />
                   </div>
                   <h4>Live Stream Button</h4>
                   <p>If you wish to support us, you can make a <a href="https://paypal.me/templatemo" target="_blank">small contribution via PayPal</a> to info [at] templatemo.com</p>
                 </div>
               </div>
               <div className="col-lg-4">
                 <div className="item">
                   <div className="icon">
                     <img src="assets/images/service-03.jpg" alt="" style={{ 
  maxWidth: '60px',
  borderRadius: '50%'
}} />
                   </div>
                   <h4>You Are Live</h4>
                   <p>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</p>
                 </div>
               </div>
               <div className="col-lg-12">
                 <div className="main-button">
                   <a href="profile.html">Go To Profile</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="live-stream">
           <div className="col-lg-12">
             <div className="heading-section">
               <h4><em>Most Popular</em> Live Stream</h4>
             </div>
           </div>
           <div className="row">
             <div className="col-lg-3 col-sm-6">
               <div className="item">
                 <div className="thumb">
                   <img src="https://imgs.search.brave.com/QM7Iylb9kv1GntW8-xlBu8O5RKGKisd4szcLR23VbCQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcm9k/LmFzc2V0cy5lYXJs/eWdhbWVjZG4uY29t/L2ltYWdlcy9BbGlu/aXR5LU9ubHlGYW5z/LmpwZz90cmFuc2Zv/cm09YXJ0aWNsZV93/ZWJw" alt="" />
                   <div className="hover-effect">
                     <div className="content">
                       <div className="live">
                         <a href="#">Live</a>
                       </div>
                       <ul>
                         <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                         <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a></li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div className="down-content">
                   <div className="avatar">
                     <img src="client\src\assets\images\man.png" alt="" style={{ 
  maxWidth: '46px',
  borderRadius: '50%',
  float: 'left'
}} />
                   </div>
                   <span><i className="fa fa-check"></i> KenganC</span>
                   <h4>Just Talking With Fans</h4>
                 </div> 
               </div>
             </div>
             <div className="col-lg-3 col-sm-6">
               <div className="item">
                 <div className="thumb">
                   <img src="https://imgs.search.brave.com/yrvQEPqWiGBTb8k_WyDcu5L9EzEaFN8QQDUYM4QNPyI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mdWxj/cnVtZXNwb3J0cy5n/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMi9TaHJvdWQt/MTAyNHg2ODMtMS5q/cGc" alt="" />
                   <div className="hover-effect">
                     <div className="content">
                       <div className="live">
                         <a href="#">Live</a>
                       </div>
                       <ul>
                         <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                         <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a></li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div className="down-content">
                   <div className="avatar">
                     <img src="assets/images/avatar-02.jpg" alt="" style={{ 
  maxWidth: '46px',
  borderRadius: '50%',
  float: 'left'
}} />
                   </div>
                   <span><i className="fa fa-check"></i> Shroud</span>
                   <h4>CS-GO 36 Hours Live Stream</h4>
                 </div> 
               </div>
             </div>
             <div className="col-lg-3 col-sm-6">
               <div className="item">
                 <div className="thumb">
                   <img src="https://imgs.search.brave.com/Y5cpe6gGyyICC2r9hQlAFVvVCUiffG8K7_IoEmKUmNo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV4ZXJ0by5jb20v/Y2RuLWNnaS9pbWFn/ZS93aWR0aD0zODQw/LHF1YWxpdHk9NzUs/Zm9ybWF0PWF1dG8v/aHR0cHM6Ly9lZGl0/b3JzLmRleGVydG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA3LzI3L2V6/Z2lmLTMtOWM4NTMz/OTkxNi5qcGc" alt="" />
                   <div className="hover-effect">
                     <div className="content">
                       <div className="live">
                         <a href="#">Live</a>
                       </div>
                       <ul>
                         <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                         <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a></li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div className="down-content">
                   <div className="avatar">
                     <img src="assets/images/avatar-03.jpg" alt="" style={{ 
  maxWidth: '46px',
  borderRadius: '50%',
  float: 'left'
}} />
                   </div>
                   <span><i className="fa fa-check"></i>Dr.disrespect</span>
                   <h4>fortnite'</h4>
                 </div> 
               </div>
             </div>
             <div className="col-lg-3 col-sm-6">
               <div className="item">
                 <div className="thumb">
                   <img src="https://imgs.search.brave.com/7jNoGmYlNJCJbEYXgdVuYnwWNL1yKJywYxha5-E0Fko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL0d0/TWw0Z09iNGVWOWdy/WllrX0JKeFgzd0Ny/SUJzdk1JdUVRUHFJ/X19TVmd2amNES3JB/N0lrVUItVF8tQ0RK/TmxuTl8tYV9HU1Bn/PXMyNDAtYy1rLWMw/eDAwZmZmZmZmLW5v/LXJq" alt="" />
                   <div className="hover-effect">
                     <div className="content">
                       <div className="live">
                         <a href="#">Live</a>
                       </div>
                       <ul>
                         <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                         <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a></li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div className="down-content">
                   <div className="avatar">
                     <img src="assets/images/avatar-04.jpg" alt="" style={{ 
  maxWidth: '46px',
  borderRadius: '50%',
  float: 'left'
}} />
                   </div>
                   <span><i className="fa fa-check"></i> maherco</span>
                   <h4>Live Streaming Till Morning</h4>
                 </div> 
               </div>
             </div>
             <div className="col-lg-12">
               <div className="main-button">
                 <a href="streams.html">Discover All Streams</a>
               </div>
             </div>
           </div>
         </div>

       </div>
     </div>
   </div>
 </div>
 
   
   
   
   </>
  )
}

export default Browse;
