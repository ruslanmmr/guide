window.$ = window.jQuery = require('jquery');
import device from 'current-device';
import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import slick from "slick-carousel";
import Parallax from 'parallax-js';

$(document).ready(function() {
  parallax.init();
  images.init();
  
})
$(window).resize(function () {
  
})


const $window = {
  width: function() {
    return Math.max(window.innerWidth, document.documentElement.clientWidth);
  }
}
const $page = document.querySelector('.page-wrapper');

let parallax = {
  scene: $('.scene'),
  init: function() {
    this.scene.each(function() {
      let parallaxInstance = new Parallax(this);
    })
  }
}
let animatedElements = {
  init: function() {
    $(document).on('mouseenter mouseleave touchstart touchend mousedown mouseup', '.js-animated', function(event) {
      let $target = $(this);
  
      if(event.type=='touchstart' && !$('html').hasClass('desktop')) {
        $target.addClass('touch');
      } else if(event.type=='mouseenter' && $('html').hasClass('desktop')) {
        $target.addClass('hover');
      } else if(event.type=='mousedown' && $('html').hasClass('desktop')) {
        $target.addClass('focus');
      } else if(event.type=='mouseup' && $('html').hasClass('desktop')) {
        $target.removeClass('focus');
      } else {
        $target.removeClass('touch');
        $target.removeClass('hover');
        $target.removeClass('focus');
      }
    })
  }
}
let images = {
  el: $('.lazy'),
  init: function() {
    if(images.el.length>0) {
      images.el.Lazy({
        effectTime: 0,
        threshold: 500,
        imageBase: false,
        defaultImage: false,
        afterLoad: function(element) {
          images.resize($(element));
        }
      });
    }
    $(window).resize(function () {
      images.resize(images.el);
    })
  },
  resize: function(element) {
    if(images.el.length>0) {
      element.each(function() {
        let $this = $(this),
            box = $this.parent();
        if(!box.hasClass('cover-box_size-auto')) {
          let boxH = box.height(),
              boxW = box.width();
          setTimeout(function() {
            let imgH = $this.height(),
                imgW = $this.width();
            if ((boxW / boxH) >= (imgW / imgH)) {
              $this.addClass('ww').removeClass('wh');
            } else {
              $this.addClass('wh').removeClass('ww');
            }
            $this.addClass('visible');
          }, 300)
        } else {
          $this.addClass('visible');
        }
      })
    }
  }
}