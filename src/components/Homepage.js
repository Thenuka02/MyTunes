import React from "react";
import styles from './Homepage.module.css';

import bgImage from '../image/show.png';
import img1 from '../image/mockup1.png';
import img2 from '../image/mockup2.png';
import img3 from '../image/sky.png';
import img4 from '../image/cards.png';

const Homepage =()=>{
    return(
        <div className={styles.Main}>
            <div className={styles.Menubar}>
            <ul>
             <li><a class="active" href="#mytune">myTunes</a></li>
             <li><a href="#overview">Overview</a></li>
             <li><a href="#music">Music</a></li>
             <li><a href="#video">Video</a></li>
             <li><a href="#giftcards">Gift Cards</a></li>
            </ul>
            </div>

            <div>
                <div className={styles.Background}>
                <img src={bgImage} alt="Image for background" />
                </div>
                <div className={styles.TextA}>
                    <h1>myTunes</h1>
                    <h2>Your music, movies, and TV shows take center stage.</h2>
                    <p>myTunes is the best way to organize and enjoy the music, movies, and TV shows you already have — and shop for the ones you want. 
                        Enjoy all the entertainment myTunes has to offer on your Mac and PC.</p>
                </div>
            </div>


            <div className={styles.Section2}>
               <div>
                   <h2>Music</h2>
                   <h3>45 million songs. Zero ads.</h3>
                   <p>Stream over 45 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal myTunes library — no matter where it came from — lives right alongside the Orange Music catalog. 
                       Start your free three-month trial with no commitment, and cancel anytime.
                    </p>
                 <button className={styles.btn}>Start Your Trial Now</button>   
                 <p>Orange Music is available in myTunes, and for iOS and Android devices.</p>

               </div>
               <div>
                   <img src={img1} alt="music image"/>
               </div>
            </div>

            <div className={styles.Section3}>
                <div className={styles.TextB}>
                    <h2>The movie and TV collection you always wished for. Granted.</h2>
                    <p>With over 100,000 movies and TV shows to choose from, there’s always something great to watch on myTunes and if you watch on Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR. So get ready to enjoy episodes of your favorite TV shows or hit movies you’ve been waiting to see — anytime, anywhere. Just tap to play, 
                        or even download if you’re going somewhere you won’t have Wi-Fi.
                    </p>
                    <button className={styles.btn1}>Read More</button>
                </div>
                <div>
                <img src={img2} alt="image for myTunes" />
                </div>
                <div>
                <div className={styles.Background2}>
                    <img src={img3} alt="image for myTunes" />
                    <div  className={styles.TextC}>
                        <h2>A world of entertainment. Available wherever you are.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam nobis, nisi ut expedita, doloribus reprehenderit explicabo non velit repellat alias saepe inventore repellendus? Molestias suscipit eos tempora? Quae quaerat cumque in veritatis impedit dolorum sapiente recusandae minima quo aperiam quam, 
                            excepturi quasi totam ad quas? Ipsam laudantium soluta delectus!
                        </p>
                    </div>
                </div>
                </div>
                
                <div>
                    <div className={styles.Background3}>
                    <div className={styles.Background4} >
                    <img src={img4} alt="card Image"/>
                    </div> 
                    <div className={styles.Background5} >
                    <div  className={styles.TextD}>
                    <h2>Gift Cards</h2>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Neque expedita tempore quasi omnis a aut et totam illo fuga accusamus dolorum vero, ut harum consectetur. Minima molestias officiis culpa non sed dicta itaque. Et aliquam illo obcaecati molestias veritatis porro.   
                    </p> <br/>
                    <p>Already have an Orange MyTunes Music Gift Card?</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className={styles.footerA}> 
                    <div className={styles.boxA}>
                        <ul>
                            <li>Shop & Learn </li>
                            <li>Music</li>
                            <li>Movies </li>
                            <li>Shows </li>
                            <li>Apps </li>
                            <li>Gift Cards</li>
                        </ul>    
                        </div>
                        <div className={styles.boxA}>
                        <ul>
                            <li>Orange Store</li>
                            <li>Music</li>
                            <li>Movies </li>
                            <li>Shows </li>
                            <li>Apps </li>
                            <li>Gift Cards</li>
                        </ul>    
                        </div>
                        <div className={styles.boxA}>
                        <ul>
                            <li>Education & Business</li>
                            <li>Music</li>
                            <li>Movies </li>
                            <li>Shows </li>
                            <li>Apps </li>
                            <li>Gift Cards</li>
                        </ul>    
                        </div>
                        <div className={styles.boxA}>
                        <ul>
                            <li>About Orange</li>
                            <li>Music</li>
                            <li>Movies </li>
                            <li>Shows </li>
                            <li>Apps </li>
                            <li>Gift Cards</li>
                        </ul>    
                        </div>
                
                
                </div>

                <div className={styles.footer}>
                Copyright © 2019 Orange myTunes
                </div>
            </div>     
        </div>
    )

}

export default Homepage;