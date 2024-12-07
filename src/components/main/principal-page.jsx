import React from "react";


function principalPage() {
    return (
        <div>
            <div>
                <img src="background.png" alt="background image" className=""/>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center font-space space-y-4 mb-40">
                    <h1 className="text-6xl text-gray-800 transform font-bold">
                        Hey! I'm Paul!
                    </h1>
                    <h2 className="text-gray-800 font-bold text-2xl pt-5">
                        Software Developer who loves to create amazing things.
                    </h2>

                    <div className="space-x-6 space-y-4">
                        <a href="https://github.com/paulfloresdevs">
                            <ion-icon size="large" name="logo-github" ></ion-icon>
                        </a>

                        <a href="https://www.linkedin.com/in/paulfloresdev/">
                            <ion-icon size="large" name="logo-linkedin"></ion-icon>
                        </a>
                        
                        <a href="https://instagram.com/paulfloresdev">
                            <ion-icon size="large" name="logo-instagram"></ion-icon>
                        </a>
                        
                        <a href="https://x.com/paulfloresdev">
                            <ion-icon size="large" name="logo-twitter"></ion-icon>  
                        </a>

                        <a href="https://www.tiktok.com/@paulfloresdev">
                            <ion-icon size="large" name="logo-tiktok"></ion-icon>
                        </a>                    
                    </div>

                </div>
            </div>
        </div>
    );
}

export default principalPage;