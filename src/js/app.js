window.$ = window.jQuery = require('jquery');

import device from 'current-device';
import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
window.Lazy = require('jquery-lazy');
import slick from "slick-carousel";

var module,countdown=function(v){function A(a,b){var c=a.getTime();a.setMonth(a.getMonth()+b);return Math.round((a.getTime()-c)/864E5)}function w(a){var b=a.getTime(),c=new Date(b);c.setMonth(a.getMonth()+1);return Math.round((c.getTime()-b)/864E5)}function x(a,b){b=b instanceof Date||null!==b&&isFinite(b)?new Date(+b):new Date;if(!a)return b;var c=+a.value||0;if(c)return b.setTime(b.getTime()+c),b;(c=+a.milliseconds||0)&&b.setMilliseconds(b.getMilliseconds()+c);(c=+a.seconds||0)&&b.setSeconds(b.getSeconds()+
  c);(c=+a.minutes||0)&&b.setMinutes(b.getMinutes()+c);(c=+a.hours||0)&&b.setHours(b.getHours()+c);(c=+a.weeks||0)&&(c*=7);(c+=+a.days||0)&&b.setDate(b.getDate()+c);(c=+a.months||0)&&b.setMonth(b.getMonth()+c);(c=+a.millennia||0)&&(c*=10);(c+=+a.centuries||0)&&(c*=10);(c+=+a.decades||0)&&(c*=10);(c+=+a.years||0)&&b.setFullYear(b.getFullYear()+c);return b}function D(a,b){return y(a)+(1===a?p[b]:q[b])}function n(){}function k(a,b,c,e,l,d){0<=a[c]&&(b+=a[c],delete a[c]);b/=l;if(1>=b+1)return 0;if(0<=a[e]){a[e]=
  +(a[e]+b).toFixed(d);switch(e){case "seconds":if(60!==a.seconds||isNaN(a.minutes))break;a.minutes++;a.seconds=0;case "minutes":if(60!==a.minutes||isNaN(a.hours))break;a.hours++;a.minutes=0;case "hours":if(24!==a.hours||isNaN(a.days))break;a.days++;a.hours=0;case "days":if(7!==a.days||isNaN(a.weeks))break;a.weeks++;a.days=0;case "weeks":if(a.weeks!==w(a.refMonth)/7||isNaN(a.months))break;a.months++;a.weeks=0;case "months":if(12!==a.months||isNaN(a.years))break;a.years++;a.months=0;case "years":if(10!==
  a.years||isNaN(a.decades))break;a.decades++;a.years=0;case "decades":if(10!==a.decades||isNaN(a.centuries))break;a.centuries++;a.decades=0;case "centuries":if(10!==a.centuries||isNaN(a.millennia))break;a.millennia++;a.centuries=0}return 0}return b}function B(a,b,c,e,l,d){var f=new Date;a.start=b=b||f;a.end=c=c||f;a.units=e;a.value=c.getTime()-b.getTime();0>a.value&&(f=c,c=b,b=f);a.refMonth=new Date(b.getFullYear(),b.getMonth(),15,12,0,0);try{a.millennia=0;a.centuries=0;a.decades=0;a.years=c.getFullYear()-
  b.getFullYear();a.months=c.getMonth()-b.getMonth();a.weeks=0;a.days=c.getDate()-b.getDate();a.hours=c.getHours()-b.getHours();a.minutes=c.getMinutes()-b.getMinutes();a.seconds=c.getSeconds()-b.getSeconds();a.milliseconds=c.getMilliseconds()-b.getMilliseconds();var g;0>a.milliseconds?(g=s(-a.milliseconds/1E3),a.seconds-=g,a.milliseconds+=1E3*g):1E3<=a.milliseconds&&(a.seconds+=m(a.milliseconds/1E3),a.milliseconds%=1E3);0>a.seconds?(g=s(-a.seconds/60),a.minutes-=g,a.seconds+=60*g):60<=a.seconds&&(a.minutes+=
  m(a.seconds/60),a.seconds%=60);0>a.minutes?(g=s(-a.minutes/60),a.hours-=g,a.minutes+=60*g):60<=a.minutes&&(a.hours+=m(a.minutes/60),a.minutes%=60);0>a.hours?(g=s(-a.hours/24),a.days-=g,a.hours+=24*g):24<=a.hours&&(a.days+=m(a.hours/24),a.hours%=24);for(;0>a.days;)a.months--,a.days+=A(a.refMonth,1);7<=a.days&&(a.weeks+=m(a.days/7),a.days%=7);0>a.months?(g=s(-a.months/12),a.years-=g,a.months+=12*g):12<=a.months&&(a.years+=m(a.months/12),a.months%=12);10<=a.years&&(a.decades+=m(a.years/10),a.years%=
  10,10<=a.decades&&(a.centuries+=m(a.decades/10),a.decades%=10,10<=a.centuries&&(a.millennia+=m(a.centuries/10),a.centuries%=10)));b=0;!(e&1024)||b>=l?(a.centuries+=10*a.millennia,delete a.millennia):a.millennia&&b++;!(e&512)||b>=l?(a.decades+=10*a.centuries,delete a.centuries):a.centuries&&b++;!(e&256)||b>=l?(a.years+=10*a.decades,delete a.decades):a.decades&&b++;!(e&128)||b>=l?(a.months+=12*a.years,delete a.years):a.years&&b++;!(e&64)||b>=l?(a.months&&(a.days+=A(a.refMonth,a.months)),delete a.months,
  7<=a.days&&(a.weeks+=m(a.days/7),a.days%=7)):a.months&&b++;!(e&32)||b>=l?(a.days+=7*a.weeks,delete a.weeks):a.weeks&&b++;!(e&16)||b>=l?(a.hours+=24*a.days,delete a.days):a.days&&b++;!(e&8)||b>=l?(a.minutes+=60*a.hours,delete a.hours):a.hours&&b++;!(e&4)||b>=l?(a.seconds+=60*a.minutes,delete a.minutes):a.minutes&&b++;!(e&2)||b>=l?(a.milliseconds+=1E3*a.seconds,delete a.seconds):a.seconds&&b++;if(!(e&1)||b>=l){var h=k(a,0,"milliseconds","seconds",1E3,d);if(h&&(h=k(a,h,"seconds","minutes",60,d))&&(h=
  k(a,h,"minutes","hours",60,d))&&(h=k(a,h,"hours","days",24,d))&&(h=k(a,h,"days","weeks",7,d))&&(h=k(a,h,"weeks","months",w(a.refMonth)/7,d))){e=h;var n,p=a.refMonth,q=p.getTime(),r=new Date(q);r.setFullYear(p.getFullYear()+1);n=Math.round((r.getTime()-q)/864E5);if(h=k(a,e,"months","years",n/w(a.refMonth),d))if(h=k(a,h,"years","decades",10,d))if(h=k(a,h,"decades","centuries",10,d))if(h=k(a,h,"centuries","millennia",10,d))throw Error("Fractional unit overflow");}}}finally{delete a.refMonth}return a}
  function d(a,b,c,e,d){var f;c=+c||222;e=0<e?e:NaN;d=0<d?20>d?Math.round(d):20:0;var k=null;"function"===typeof a?(f=a,a=null):a instanceof Date||(null!==a&&isFinite(a)?a=new Date(+a):("object"===typeof k&&(k=a),a=null));var g=null;"function"===typeof b?(f=b,b=null):b instanceof Date||(null!==b&&isFinite(b)?b=new Date(+b):("object"===typeof b&&(g=b),b=null));k&&(a=x(k,b));g&&(b=x(g,a));if(!a&&!b)return new n;if(!f)return B(new n,a,b,c,e,d);var k=c&1?1E3/30:c&2?1E3:c&4?6E4:c&8?36E5:c&16?864E5:6048E5,
  h,g=function(){f(B(new n,a,b,c,e,d),h)};g();return h=setInterval(g,k)}var s=Math.ceil,m=Math.floor,p,q,r,t,u,f,y,z;n.prototype.toString=function(a){var b=z(this),c=b.length;if(!c)return a?""+a:u;if(1===c)return b[0];a=r+b.pop();return b.join(t)+a};n.prototype.toHTML=function(a,b){a=a||"span";var c=z(this),e=c.length;if(!e)return(b=b||u)?"\x3c"+a+"\x3e"+b+"\x3c/"+a+"\x3e":b;for(var d=0;d<e;d++)c[d]="\x3c"+a+"\x3e"+c[d]+"\x3c/"+a+"\x3e";if(1===e)return c[0];e=r+c.pop();return c.join(t)+e};n.prototype.addTo=
  function(a){return x(this,a)};z=function(a){var b=[],c=a.millennia;c&&b.push(f(c,10));(c=a.centuries)&&b.push(f(c,9));(c=a.decades)&&b.push(f(c,8));(c=a.years)&&b.push(f(c,7));(c=a.months)&&b.push(f(c,6));(c=a.weeks)&&b.push(f(c,5));(c=a.days)&&b.push(f(c,4));(c=a.hours)&&b.push(f(c,3));(c=a.minutes)&&b.push(f(c,2));(c=a.seconds)&&b.push(f(c,1));(c=a.milliseconds)&&b.push(f(c,0));return b};d.MILLISECONDS=1;d.SECONDS=2;d.MINUTES=4;d.HOURS=8;d.DAYS=16;d.WEEKS=32;d.MONTHS=64;d.YEARS=128;d.DECADES=256;
  d.CENTURIES=512;d.MILLENNIA=1024;d.DEFAULTS=222;d.ALL=2047;var E=d.setFormat=function(a){if(a){if("singular"in a||"plural"in a){var b=a.singular||[];b.split&&(b=b.split("|"));var c=a.plural||[];c.split&&(c=c.split("|"));for(var d=0;10>=d;d++)p[d]=b[d]||p[d],q[d]=c[d]||q[d]}"string"===typeof a.last&&(r=a.last);"string"===typeof a.delim&&(t=a.delim);"string"===typeof a.empty&&(u=a.empty);"function"===typeof a.formatNumber&&(y=a.formatNumber);"function"===typeof a.formatter&&(f=a.formatter)}},C=d.resetFormat=
  function(){p=" millisecond; second; minute; hour; day; week; month; year; decade; century; millennium".split(";");q=" milliseconds; seconds; minutes; hours; days; weeks; months; years; decades; centuries; millennia".split(";");r=" and ";t=", ";u="";y=function(a){return a};f=D};d.setLabels=function(a,b,c,d,f,k,m){E({singular:a,plural:b,last:c,delim:d,empty:f,formatNumber:k,formatter:m})};d.resetLabels=C;C();v&&v.exports?v.exports=d:"function"===typeof window.define&&"undefined"!==typeof window.define.amd&&
  window.define("countdown",[],function(){return d});return d}(module);



$(document).ready(function() {
  images.init();
  animatedElements.init();
  popup.init();
  time.init();
  $slider.init();

  $('.js-scrollTo').on('click',function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
})

window.addEventListener('load',function(){
  animate.start();
  animate.init();
}, false);


const $window = {
  width: function() {
    return Math.max(window.innerWidth, document.documentElement.clientWidth);
  }
}
const $page = document.querySelector('.page-wrapper');

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
let time = {
  $days: $('.discount-timer .days span'),
  $hours: $('.discount-timer .hours span'),
  $minutes: $('.discount-timer .minutes span'),
  init: function() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth();
    this.day = new Date().getDate();

    this.count = countdown(new Date(time.year,time.month,time.day+3),function(timer) {
      time.$days.text('0'+timer.days)
      if(timer.hours<10) {
        time.$hours.text('0'+timer.hours)
      } else {
        time.$hours.text(timer.hours)
      }
      if(timer.minutes<10) {
        time.$minutes.text('0'+timer.minutes)
      } else {
        time.$minutes.text(timer.minutes)
      }
      $('.discount-timer__top span').addClass('active');
      setTimeout(function() {
        $('.discount-timer__top span').removeClass('active');
      },200)

    }).toString();
  }
}
let $slider = {
  element: $('.slider-el'),
  item: $('.slider-el__slide'),
  init: function() {
    this.length = this.item.length;
    $slider.element.on('init beforeChange afterChange', function(currentSlide){
      images.init();
      console.log(currentSlide)
    });
    $slider.element.on('afterChange', function(currentSlide){
      images.init();
      let index = $(this).find('.slick-current').index();
      $('.slider__item-title').fadeOut(300);
      $('.slider__item-title').eq(index).fadeIn(300);
    });
    $slider.element.slick({
      rows: 0,
      slidesToShow:1,
      infinite:false,
      arrows: true,
      speed:500,
      touchThreshold:10,
      autoplay:true,
      autoplaySpeed:5000,
      nextArrow: $('.sliderNext'),
      prevArrow: $('.sliderPrev'),
    });
  }
}

let animate = {
  section: $('.js-animate-section'),
  init: function() {
    this.scroll = $(window).scrollTop() + $(window).height();
    this.checkToAnimate();

    $(window).scroll(function () {
      animate.scroll = $(this).scrollTop() + $(this).height();
      animate.checkToAnimate();
    });

  },
  checkToAnimate: function() {
    animate.section.each(function() {
      let pos = $(this).offset().top;
      if(animate.scroll>pos && !$(this).hasClass('animated')) {
        $(this).addClass('animated');
        if($(this).is('.presentation')) {
          let anim = gsap.timeline()
            .to($('.presentation'), {duration:0,autoAlpha:1})
            .fromTo($('.presentation-board__bg'), {xPercent:-100,autoAlpha:0}, {duration:1.5,xPercent:0,autoAlpha:1,ease:'power2.out'})
            .fromTo($('.presentation-board__image'), {autoAlpha:0}, {duration:1.1,autoAlpha:1,ease:'power2.inOut',stagger:{amount:0.4}}, '-=1.5')
            .fromTo($('.presentation-board__image'), {yPercent:100}, {duration:1.1,yPercent:0,ease:'power2.out',stagger:{amount:0.4}}, '-=1.5')
            .fromTo($('.presentation__item'), {autoAlpha:0}, {duration:0.75,autoAlpha:1,ease:'power2.inOut',stagger:{amount:0.25}}, '-=1.5')
            .fromTo($('.presentation__item'), {y:70,rotation:6}, {duration:0.75,y:0,rotation:0,ease:'power2.out',stagger:{amount:0.25}}, '-=1.5')
        } 
        else if($(this).is('.why')) {
          let images = $(this).find('.img'),
              title = $(this).find('.why__title'),
              text = $(this).find('.why__text');
              
          let anim = gsap.timeline()
            .to($(this), {duration:0,autoAlpha:1})
            .fromTo(title, {autoAlpha:0}, {duration:1,autoAlpha:1,ease:'power2.inOut'}, '+=0.5')
            .fromTo(title, {yPercent:50}, {duration:1,yPercent:0,ease:'power2.out'}, '-=1')
            .fromTo(text, {autoAlpha:0}, {duration:1,autoAlpha:1,ease:'power2.inOut'}, '-=0.75')
            .fromTo(text, {x:50}, {duration:1,x:0,ease:'power2.out'}, '-=1')
            .fromTo(images, {autoAlpha:0}, {duration:0.75,autoAlpha:1,ease:'power2.inOut',stagger:{amount:0.25}}, '-=1')
            .fromTo(images, {y:100}, {duration:0.75,y:0,ease:'power2.out',stagger:{amount:0.25}}, '-=1')
        }
        else if($(this).is('.b-section')) {
          let anim = gsap.timeline()
            .to($(this), {duration:0,autoAlpha:1})
            .fromTo($('.b-section__item'), {autoAlpha:0}, {duration:0.75,autoAlpha:1,ease:'power2.inOut',stagger:{amount:0.25}})
            .fromTo($('.b-section__item'), {y:70}, {duration:0.75,y:0,ease:'power2.out',stagger:{amount:0.25}}, '-=1')
            .fromTo($('.b-section__decor:first-child .b-section__bg'), {autoAlpha:0}, {duration:0.75,autoAlpha:1,ease:'power2.inOut',stagger:{amount:0.25}}, '-=0.75')
            .fromTo($('.b-section__decor:first-child .b-section__bg'), {x:30,scale:0.95}, {duration:0.75,x:0,scale:1,ease:'power2.out',stagger:{amount:0.25}}, '-=1')
            .fromTo($('.b-section__decor:nth-child(2) .b-section__bg'), {autoAlpha:0}, {duration:0.75,autoAlpha:1,ease:'power2.inOut',stagger:{amount:0.25}}, '-=1')
            .fromTo($('.b-section__decor:nth-child(2) .b-section__bg'), {x:-30,scale:0.95}, {duration:0.75,x:0,scale:1,ease:'power2.out',stagger:{amount:0.25}}, '-=1')
        }
        else if($(this).is('.slider')) {
          let title = $('.slider__title'),
              slider = $('.slider__content');
          let anim = gsap.timeline()
            .to($(this), {duration:0,autoAlpha:1})
            .fromTo(title, {autoAlpha:0}, {duration:1,autoAlpha:1,ease:'power2.inOut'}, '+=0.5')
            .fromTo(title, {yPercent:50}, {duration:1,yPercent:0,ease:'power2.out'}, '-=1')
            .fromTo(slider, {autoAlpha:0}, {duration:1,autoAlpha:1,ease:'power2.inOut'}, '-=0.75')
            .fromTo(slider, {y:50}, {duration:1,y:0,ease:'power2.out'}, '-=1')
        }
      }
    })
  },
  start: function() {
    let anim = gsap.timeline()
      .to($('.page-wrapper'), {duration:0.5,autoAlpha:1,ease:'power2.inOut'})
      //items fade
      .fromTo($('.home__item'), {autoAlpha:0}, {duration:0.75,autoAlpha:1,ease:'power2.inOut',stagger:{amount:0.25}})
      .fromTo($('.home__item'), {y:70,rotation:6}, {duration:0.75,y:0,rotation:0,ease:'power2.out',stagger:{amount:0.25}}, '-=1')
      .fromTo($('.home__img-cover'), {xPercent:-100}, {duration:1,xPercent:0,ease:'power2.inOut'}, '-=0.5')
      .fromTo($('.home__img-cover .cover-box'), {xPercent:50,scale:1.5}, {duration:1,xPercent:0,scale:1,ease:'power2.inOut'}, '-=1')
      .fromTo($('.header'), {yPercent:-100,autoAlpha:0}, {duration:1,yPercent:0,autoAlpha:1,ease:'power2.inOut'}, '-=0.75')
      .fromTo($('.home__line'), {xPercent:-100,autoAlpha:0}, {duration:1,xPercent:0,autoAlpha:1,ease:'power2.inOut'}, '-=0.75')
  }
}

let popup = {
  $element: $('.popup'),
  $trigger: $('.js-popup'),
  $close: $('.popup-close'),
  init: function() {
    this.$trigger.on('click', function() {
      popup.$new = $($(this).attr('href'));
      popup.open();
    })
    this.$close.on('click', function() {
      popup.close();
    })
    $(document).on('touchstart click', '.popup', function(event) {
      if($(event.target).closest('.popup-item').length==0) {
        popup.close();
      }
    })
  },
  open: function() {
    popup.anim = gsap.timeline()
      .to(popup.$new, {duration:0.5, autoAlpha:1, ease:'power2.inOut'})
      .fromTo(popup.$new.find('.popup-item'), {y:70,rotation:6,scale:0.8}, {duration:0.5,y:0,rotation:0,scale:1,ease:'power2.out'},'-=0.5')
  },
  close: function() {
    popup.anim.reverse();
  }
}
//console.log(Lazy)