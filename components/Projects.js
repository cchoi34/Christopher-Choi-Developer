import React from 'react';
import {Link} from 'react-router-dom';


class Projects extends React.Component {
    render() {
        return (
            <div className="projects display-flex flex-wrap" id="projects">
                <Link to="/TrainerTD">
                    <img data-aos="fade-right" src="source\images\Apple-Watch.jpg"></img>
                </Link>

                <Link to="/YouNav">
                    <img data-aos="slide-right" src="source\images\Airpod-Pro.jpg"></img>      
                </Link>

                <Link to="/MatchMaker">
                    <img data-aos="slide-left" src="source\images\Airpod-Pro-Name.jpg"></img>       
                </Link>

                <Link to="/TeamAppleStore">
                    <img data-aos="fade-right" src="source\images\iphone-10.png"></img>         
                </Link>


                    <img data-aos="fade-left" src="source\images\Iphone-Name.jpg"></img>
                    <video loop id="iphone11" onScroll={this.getScrollPosition}>
                        <source src="source\videos\Iphone-11.mp4" type="video/mp4" />
                    </video>
                    <img data-aos="fade-right" src="source\images\iPhone11-Black.jpg"></img>
                </div>
        )
    }
}

function playVideo() {
    const video = document.getElementById("iphone11");
    video.play();
}

function getScrollPosition() {
    let scrollPositionY = window.scrollY;
    if (scrollPositionY >= 2800) {
        playVideo();
    }
}


window.addEventListener("scroll", getScrollPosition);

export default Projects;