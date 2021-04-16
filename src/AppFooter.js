// react
import React from 'react';
import { Component } from 'react';

// flickity
var Flickity = require('flickity');

class AppFooter extends Component {
    componentDidMount(){
        setTimeout(() => {
            const slideshowEl = document.querySelector('.js-slideshow');
            const tickerSpeed = 2;
            let flickity = null;
            let isPaused = false;

            // init ticker carousel
            flickity = new Flickity(slideshowEl, {
                autoPlay: false,
                prevNextButtons: false,
                pageDots: false,
                draggable: true,
                wrapAround: true,
                selectedAttraction: 0.015,
                friction: 0.25
            });
            flickity.x = 0;

            // util functions
            const update = () => {
                if (isPaused) return;
                if (flickity.slides) {
                    flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
                    flickity.selectedIndex = flickity.dragEndRestingSelect();
                    flickity.updateSelectedSlide();
                    flickity.settle(flickity.x);
                }
                window.requestAnimationFrame(update);
            };

            const pause = () => {
                isPaused = true;
            };

            const play = () => {
                if (isPaused) {
                    isPaused = false;
                    window.requestAnimationFrame(update);
                }
            };

            // listeners
            slideshowEl.addEventListener('mouseenter', pause, false);
            slideshowEl.addEventListener('focusin', pause, false);
            slideshowEl.addEventListener('mouseleave', play, false);
            slideshowEl.addEventListener('focusout', play, false);

            flickity.on('dragStart', () => {
                isPaused = true;
            });

            // start ticker carousel
            update();
        }, 6000);

    }

    render() {
        return (
            <footer>
                <div className="slideshow js-slideshow">
                    {
                        this.props.tickerTop100.map((asset, i) => (
                            <span key={i} className="ticker-slide">
                                <span>{ asset.symbol }</span>
                                <span>{ asset.price < 1 ? '$' + parseFloat(asset.price).toFixed(3) : '$' + parseFloat(asset.price).toFixed(2) }</span>
                            </span>
                        ))
                    }
                </div>
            </footer>
        );
    }
}
export default AppFooter;