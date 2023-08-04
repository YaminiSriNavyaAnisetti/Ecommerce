import React from 'react'
import './Meesho.css'
import WomenEthnic from './WomenEthnic'
import { useState} from 'react';
import { Link } from 'react-router-dom';


function Meesho() {
  const [showWomenEthnic, setShowWomenEthnic] = useState(false);
  const toggleWomenEthnic = () => {
    setShowWomenEthnic((prevShowWomenEthnic) => !prevShowWomenEthnic);
  };


  return (

    <div id="body">
      <div id="fx">
        <div id="header">
        <div id="div1">
       
           <h1 id="meesho">MEESHO</h1>
      
         <input id="search" type="text" placeholder='🔍Try Saree, Kurti or Search by Product Code'/>
    
        <h4 id="dwd">📱Download App</h4>
        <hr id="vr"/>
        
        <h4 id="sup">Become supplier</h4>
        <hr id="vr"/>
        
        <h4 id="Pro">👤Profile</h4>
        <h4 id="Cart">🛒Cart</h4> 
       
        
        </div>
        <hr id="hr1"></hr>
        <div id="div2">
          {/* SubDivisions of women ethnic  */}
            <div className='we-wrapper'>
            <h4 className='we-trigger'>Women Ethnic </h4>
            <div className='we-content'>
              <div id="Ethnic">
                   <div>
                   <h4 Style="color:purple">All Women ethnic</h4>
                   <h5 onClick={toggleWomenEthnic} >View All</h5>
                  
             
                   
                   </div>
                   <div>
                   <h4 Style="color:purple">Sarees</h4>
              <h5>All Sarees</h5>
              <h5>Silk Sarees</h5>
              <h5>Cotton Silk Sarees</h5>
              <h5>Cotton Sarees</h5>
              <h5>Georgette Sarees</h5>
              <h5>chiffon Sarees</h5>
              <h5>Satin Sarees</h5>
              <h5>Embroidary Sarees</h5>
                    </div>
                    <div>
                    <h4 Style="color:purple">Kurtis</h4>
                    <h5>All Kurtis</h5>
                    <h5>Anarkali Kurtis</h5>
              <h5>Rayon Kurtis</h5>
              <h5>Cotton Kurtis</h5>
              <h5>Embroidered Kurtis</h5>
              
                    </div>
                    <div>
                    <h4 Style="color:purple">Kurta Sets</h4>
                    <h5> All Kurta Sets</h5>
                    </div>
                    <div>
                    <h4 Style="color:purple">Suits and Dress Materials</h4>
                    <h5>All Suits and Dress Materials</h5>
                    <h5>Cotton Suits</h5>
              <h5>Embroidered suits</h5>
              <h5>Chanderi Suits</h5>
                    </div>
                    <div>
                    <h4 Style="color:purple">Other Ethnics</h4>
                    <h5>Blouses</h5>
                    <h5>Dupattas</h5>
              <h5>Lehanga</h5>
              <h5>Gown</h5>
              <h5>Ethnic BottomWear</h5>
                    </div>
              </div>
            </div>
            </div>
            {/* Subdivisons of women western */}
            <div className='ww-wrapper'>
            <h4 className='ww-trigger'>Women Western </h4>
            <div className='ww-content'>
              <div id="Ethnic">
                   <div>
                   <h4 Style="color:purple">Topwear</h4>
              <h5>Tops</h5>
             <h5>Dresses</h5>
              <h5>Sweaters</h5>
              <h5>Jumpsuits</h5>
                   </div>
                   <div>
                   <h4 Style="color:purple">BottomWear</h4>
                   <h5>Jeans</h5>
                   <h5>Jeggings</h5>
                   <h5 >Palazzos</h5>
                   <h5>Shorts</h5>
                   <h5>Skirts</h5>
             
                    </div>
                    <div>
                    <h4 Style="color:purple">InnerWear</h4>
                    <h5>Bra</h5>
                    <h5>Briefs</h5>              
                    </div>
                    <div>
                    <h4 Style="color:purple">Sleepwear</h4>
                    <h5> Night Suits</h5>
                    <h5> Babydolls</h5>
                    </div>
                 </div>
           </div>
           </div>
          {/* SubDivisions of men   */}
               <div className='m-wrapper'>
            <h4 className='m-trigger'>mens</h4>
            <div className='m-content'>
              <div id="Ethnic">
                   <div>
                   <h4 Style="color:purple">Top wear</h4>
              <h5>All top wear </h5>
              <h5>Tshirts </h5>
              <h5>shirts </h5>
                   </div>
                   <div>
                   <h4 Style="color:purple">BottomWear</h4>
              <h5>Track Pants</h5>
              <h5>Jeans</h5>
              <h5>Trousers</h5>
             
                    </div>
                    <div>
                    <h4 Style="color:purple">Men Accessories</h4>
                    <h5>All Men Accessories</h5>
                    <h5>Watches</h5>
              <h5>Belts</h5>
              <h5>Wallets</h5>
              <h5>Jewellery</h5>
              <h5>Sun glasses</h5>
              <h5>Bags</h5>
              </div>
                    <div>
                    <h4 Style="color:purple">Men FootWear</h4>
                    <h5> Casual Shoes</h5>
                    <h5> Sports Shoes</h5>
                    <h5> Sandles</h5>
                    <h5> Formal Shoes</h5>
                    </div>
                    <div>
                    <h4 Style="color:purple">Ethnic wear</h4>
                    <h5>Men kurtas</h5>
                    <h5>Ethnic Jackets</h5>
              
                    </div>
                    <div>
                    <h4 Style="color:purple">Inner & Sleepwear</h4>
                    <h5>All inner&Sleepwear</h5>
                    <h5>Vests</h5>
             
                    </div>
              </div>
            </div>
            </div>
              {/* Subdivisons of Kids */}
              <div className='K-wrapper'>
            <h4 className='K-trigger'>Kids</h4>
            <div className='K-content'>
              <div id="Ethnic">
                   <div>
                   <h4 Style="color:purple">Boys & Girls 2+ years</h4>
              
              <h5>Dresses</h5>
              
                   </div>
                   <div>
                   <h4 Style="color:purple">infant 0-2 years</h4>
                   <h5>Rompers</h5>
                   </div>
                    <div>
                    <h4 Style="color:purple">Toys & Accessories</h4>
                    <h5>Soft Toys</h5>
                    <h5>Footwear</h5> 
                    <h5>Stationery</h5>
                    <h5>Watches</h5>    
                    <h5>Bags & BackPacks</h5>           
                    </div>
                    <div>
                    <h4 Style="color:purple">BabyCare</h4>
                    <h5> aLL baby care</h5>
                   
                    </div>    
              </div>
           </div>
            </div>
              {/* SubDivisions of Home & Kitchen  */}
            <div className='hk-wrapper'>
            <h4 className='hk-trigger'>Home & Kitchen </h4>
            <div className='hk-content'>
              <div id="Ethnic">
                   <div>
                   <h4 Style="color:purple">Home Furnishing</h4>
              <h5>BedSheets </h5>
              <h5>DoorMats</h5>
              <h5>Curtains & sheers </h5>
              <h5>cushion & cushion covers </h5>
              <h5>Mattress Protectors</h5>
                   </div>
                   <div>
                   <h4 Style="color:purple">Home Decor</h4>
              <h5>All Home Decor</h5>
              <h5>Stickers</h5>
              <h5>Clocks</h5>
              <h5>ShowPieces</h5>
              </div>
                    <div>
                    <h4 Style="color:purple">Kitchen & Dinning</h4>
                    <h5>Kitchen Storage</h5>
                    <h5>Cookware &  Bakeware</h5>
             </div>  
              </div>
              </div>
          </div>
            {/* SubDivisions of Beauty and Health  */}
           <div className='bh-wrapper'>
            <h4 className='bh-trigger'>Beauty & Health </h4>
            <div className='bh-content'>
              <div id="Ethnic">
                   <div>
                   <h4 Style="color:purple">Make up</h4>
              <h5>Face </h5>
              <h5>Eyes </h5>
              <h5>Lips </h5>
              <h5>Nails </h5>
                   </div>
                   <div>
                   <h4 Style="color:purple">Wellness</h4>
              <h5>Sanitizers</h5>
              <h5>Oral Care</h5>
              <h5>Feminine Hygiene</h5>
              </div>
                    <div>
                    <h4 Style="color:purple">Skincare</h4>
                    <h5>Deodorants</h5>
                    
                    </div>
                   
              </div>
            </div>
            </div> 
            {/* SubDivisions of Jewellery & Accessories  */}
            <div className='ja-wrapper'>
            <h4 className='ja-trigger'>Jewellery & Accessories </h4>
            <div className='ja-content'>
              <div id="Ethnic">
                   <div>
                   <h4 Style="color:purple">Jewellery</h4>
              <h5>Jewellery Set </h5>
              <h5>Earrings </h5>
              <h5>Mangalsutras</h5>
              <h5>Studs</h5>
              <h5>Bangles</h5>
              <h5>Necklaces</h5>
              <h5>Rings</h5>
              <h5>Anklets</h5>
                   </div>
                   <div>
                   <h4 Style="color:purple">Women Accessory</h4>
              <h5>Bags</h5>
              <h5>Watches</h5>
              <h5>Hair Accessories</h5>
              <h5>Sunglasses</h5>
              <h5>Socks</h5>
             
                  </div>
              </div>
            </div>
            </div>
             {/* SubDivisions of Bags & Footware  */}
             <div className='bf-wrapper'>
            <h4 className='bf-trigger'>Bags & Footware </h4>
            <div className='bf-content'>
              <div id="Ethnic">
                   <div>
                   <h4 Style="color:purple">Women Bags</h4>
              <h5>All Women Bags </h5>
              <h5>Handbags </h5>
              <h5>Clutches</h5>
              <h5>Slingbags</h5>
                   </div>
                   <div>
                   <h4 Style="color:purple">Men Bags</h4>
              <h5>All Men Bags</h5>
              <h5>Men Wallets</h5>
              
                    </div>
                    <div>
                    <h4 Style="color:purple">Men Footware</h4>
                    <h5>Sports shoes</h5>
                    <h5>Casual shoes</h5>
              <h5>Formal shoes</h5>
              <h5>Sandals</h5>
              </div>
                    <div>
                    <h4 Style="color:purple">Women FootWear</h4>
                    <h5> Flats</h5>
                    <h5> Bellies</h5>
                    <h5>Juttis</h5>
                    
                    </div>
              </div>
            </div>
            </div>
             {/* SubDivisions of Electronics  */}
             <div className='e-wrapper'>
            <h4 className='e-trigger'>Electronics </h4>
            <div className='e-content'>
              <div id="Ethnic">
                   <div>
                   <h4 Style="color:purple">Mobile & Accessories</h4>
              <h5>All Mobile & Accessories </h5>
              <h5>Smartwatches </h5>
              <h5>Mobile Holders</h5>
              <h5>Mobile cases and covers</h5>
                   </div>
                   <div>
                   <h4 Style="color:purple">Appliances</h4>
              <h5>All Appliances</h5>
              <h5>Grooming</h5>
              <h5>Home Appliances</h5>
             
                    </div>
                   
                    
                    
              </div>
             
              </div>

            </div>

            
           </div>
           
        <hr id="hr1"></hr>
        </div>
        {showWomenEthnic && <WomenEthnic/>}
        </div>
        
        <div id="content">
        <div id="download_page">
          <div id="text_content">
            <div id="dwd_text">Lowest Prices  <br />Best Quality Shopping</div>
            <div id="fd">
                 <img id="del_img" src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg" />
                 <h3 id="del">Free <br />Delivery </h3>
                 <hr id="hr2"></hr>
                 <img id="del_img" src="https://images.meesho.com/images/pow/cod_jamun.svg" />
                 <h3 id="del">Cash on <br /> Delivery </h3>
                 <hr id="hr2"></hr>
                 <img id="del_img" src="https://images.meesho.com/images/pow/easyReturns_jamun.svg" />
                 <h3 id="del">Easy <br /> returns</h3>
            </div>
            <div id="dwn_app">
          <img  id="dwn_img" src="https://images.meesho.com/images/pow/playstoreSmallIcon.png"/> 
          <button Style="background-color:purple; color:white;margin-top:10px;margin-left:10px;border:purple" onClick={()=>{window.location.href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=189ab23afec10a8-0edf05c26c1465-26031c51-100200-189ab23afed1730"}}>Download the Meesho App</button>
            </div>
             
          
        </div>
          <div id="dwn_img_div">
          <img id="download_img" src="https://images.meesho.com/images/marketing/1687149525469_512.webp"></img>
          </div>
          
        </div>
        
        <h2>Top Categories to choose from</h2>
        <div id="clothes">
            <div id="women">       
            <img id="wimg" src="https://images.meesho.com/images/marketing/1678691686252_400.webp"/>
            </div>
            <div id="men">
                <h1 id="t1">Be fashion forward</h1>
                <div id="kid">
                 <div id="mens">
                  <img id="mim" src="https://images.meesho.com/images/marketing/1678691699680_300.webp" />
                 </div>
                 <div id="kids">
                   <img id="kim" src="https://images.meesho.com/images/marketing/1678691712594_300.webp" />
                 </div>
               </div>  
            </div>
         </div>

         <div id="essentials">
              
                 <div id="first"> 
                   <h1 id="t2">Essentials<br /><button id="bt1">View All</button></h1>
                 </div>
                 <div id="second"> 
        
                      <div id="image">
                          <img id ="hd" src="https://images.meesho.com/images/marketing/1678691846068_200.webp" />
          
                          <img id ="ka" src="https://images.meesho.com/images/marketing/1678691832099_200.webp" />
                          <img id ="hc" src="https://images.meesho.com/images/marketing/1678691796046_200.webp" />  
                      </div>
                 <div id="image_name">
                    <img id="Homedecor" src="https://images.meesho.com/images/marketing/1678691858580_150.webp" />
                    <img id="KitApp" src="https://images.meesho.com/images/marketing/1678691818629_150.webp" />
                    <img id="Health" src="https://images.meesho.com/images/marketing/1678691781261_150.webp" />  
                 </div>
               </div> 
           </div>

           <div id="newstyles">
                  <div id="styles"> 
                   <h1 id="t3">New styles<br /><button id="bt2">View All</button></h1>
                 </div>
                 <div id="styles2"> 
        
                      <div id="pic">
                          <img id ="Acc" src="https://images.meesho.com/images/marketing/1678691960553_200.webp" />
          
                          <img id ="Fw" src="https://images.meesho.com/images/marketing/1678691936892_200.webp" />
                          <img id ="Elc" src="https://images.meesho.com/images/marketing/1678691925419_200.webp" />  
                      </div>
               <div id="pic_name">
                    <img id="Access" src="https://images.meesho.com/images/marketing/1678691971903_150.webp" />
                    <img id="Foot" src="https://images.meesho.com/images/marketing/1678691948963_150.webp" />
                    <img id="Elec" src="https://images.meesho.com/images/marketing/1678691914513_150.webp" />  
                 </div>
               </div>  
           </div>

            
             <div id="right_content">
                <div id="row1">
                   <div id="img1">
                   <img src="https://images.meesho.com/images/products/295357690/ub7be_400.webp" />
                   <h3 id="name">Charvi Refined Kurtis</h3>
                  <p id="cost"><b>₹193</b> onwards</p>
                  <p id="delivery">Free Delivery </p>
                  <p id="rating" Style="color : blue;"> 3.5☆ </p>
                  </div>
                  <div id="img1">
                  <img src="https://images.meesho.com/images/products/281370972/roeub_400.webp" />
                  <h3 id="name">Classic Decorative Plates</h3>
                  <p id="cost"><b>₹456</b> onwards</p>
                  <p id="delivery">Free Delivery </p>
                  <p id="rating"  Style="background-color:green; color : white;">4☆</p>
                  </div>
                  <div id="img1">
                  <img src="https://images.meesho.com/images/products/292225474/zmnld_400.webp" />
                  <h3 id="name">Unique Earrings & Studs</h3>
                  
                  <p id="cost"><b>₹125</b> onwards</p>
                  <p id="delivery">Delivery ₹75</p>
                  <p id="rating"  Style="background-color:orange; color : white;">3.7☆</p>
                  </div>
                  <div id="img1">
                  <img src="https://images.meesho.com/images/products/279699705/0uvyv_400.webp" /> 
                  <h3 id="name">Adrika fabulous Kurtis</h3>
                  <p id="cost"><b>₹125</b> onwards</p>
                  <p id="delivery">Delivery ₹75</p>
                  <p id="rating"  Style="background-color:green; color : white;">4☆</p>
                    </div>
                    
                </div>
                <div id="row1">
                   <div id="img1">
                   <img src="https://images.meesho.com/images/products/188957572/ydxyk_400.webp" />
                   <h3 id="name">Charvi Refined Kurtis</h3>
                  <p id="cost"><b>₹193</b> onwards</p>
                  <p id="delivery">Free Delivery </p>
                  <p id="rating" Style="background-color:orange;color : blue;"> 3.5☆ </p>
                  </div>
                  <div id="img1">
                  <img src="https://images.meesho.com/images/products/98050022/09zeg_400.webp" />
                  <h3 id="name">Vivi Y90 Covers</h3>
                  <p id="cost"><b>₹167</b> onwards</p>
                  <p id="delivery">Free Delivery </p>
                  <p id="rating"  Style="background-color:green; color : white;" >4.2☆</p>
                  </div>
                  <div id="img1">
                  <img src="https://images.meesho.com/images/products/283143941/qu9uo_400.webp" />
                  <h3 id="name">Twingling Fancy Jewellery</h3>
                  
                  <p id="cost"><b>₹99</b> onwards</p>
                  <p id="delivery">Delivery ₹68 <del>₹70</del> </p>
                  <p id="rating"  Style="background-color:red; color : white;">2.5☆</p>
                  </div>
                  <div id="img1">
                  <img src="https://images.meesho.com/images/products/239849972/bznlg_400.webp" /> 
                  <h3 id="name">OPPO F15 Covers</h3>
                  <p id="cost"><b>₹203</b> onwards</p>
                  <p id="delivery">Free Delivery </p>
                  <p id="rating"  Style="background-color:green; color : white;">4☆</p>
                    </div>
                    
                </div>
               
          </div>
          
        </div> 
      
    </div>
    
  )

}


export default Meesho