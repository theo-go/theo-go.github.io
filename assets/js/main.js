!function(i){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)",xxsmall:"(max-width: 360px)"}),i(function(){var e=i(window),s=i("body"),a=i("#wrapper");s.addClass("is-loading"),e.on("load",function(){window.setTimeout(function(){s.removeClass("is-loading")},100)}),i("form").placeholder(),skel.on("+medium -medium",function(){i.prioritize(".important\\28 medium\\29",skel.breakpoint("medium").active)}),"ie"==skel.vars.browser&&function(){var s;e.on("resize.flexbox-fix",function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;function(){var a=i(".fullscreen");clearTimeout(s),s=setTimeout(function(){a.prop("scrollHeight")>e.height()?a.css("height","auto"):a.css("height","100vh")},250)}).triggerHandler("resize.flexbox-fix")}(),skel.canUse("object-fit")||i(".banner .image, .spotlight .image").each(function(){var e=i(this),s=e.children("img"),a=e.parent().attr("class").match(/image-position-([a-z]+)/);switch(e.css("background-image",'url("'+s.attr("src")+'")').css("background-repeat","no-repeat").css("background-size","cover"),a.length>1?a[1]:""){case"left":e.css("background-position","left");break;case"right":e.css("background-position","right");break;default:case"center":e.css("background-position","center")}s.css("opacity","0")}),a.children().scrollex({top:"30vh",bottom:"30vh",initialize:function(){i(this).addClass("is-inactive")},terminate:function(){i(this).removeClass("is-inactive")},enter:function(){i(this).removeClass("is-inactive")},leave:function(){var e=i(this);e.hasClass("onscroll-bidirectional")&&e.addClass("is-inactive")}}),i(".items").scrollex({top:"30vh",bottom:"30vh",delay:0,initialize:function(){i(this).addClass("is-inactive")},terminate:function(){i(this).removeClass("is-inactive")},enter:function(){i(this).removeClass("is-inactive")},leave:function(){var e=i(this);e.hasClass("onscroll-bidirectional")&&e.addClass("is-inactive")}}).children().wrapInner('<div class="inner"></div>'),i(".gallery").wrapInner('<div class="inner"></div>').prepend(skel.vars.mobile?"":'<div class="forward"></div><div class="backward"></div>').scrollex({top:"30vh",bottom:"30vh",delay:0,initialize:function(){i(this).addClass("is-inactive")},terminate:function(){i(this).removeClass("is-inactive")},enter:function(){i(this).removeClass("is-inactive")},leave:function(){var e=i(this);e.hasClass("onscroll-bidirectional")&&e.addClass("is-inactive")}}).children(".inner").css("overflow-y",skel.vars.mobile?"visible":"hidden").css("overflow-x",skel.vars.mobile?"scroll":"hidden").scrollLeft(0),i(".gallery").on("wheel",".inner",function(e){var s=i(this),a=10*e.originalEvent.deltaX;a>0?a=Math.min(25,a):a<0&&(a=Math.max(-25,a)),s.scrollLeft(s.scrollLeft()+a)}).on("mouseenter",".forward, .backward",function(e){var s=i(this),a=s.siblings(".inner"),t=s.hasClass("forward")?1:-1;clearInterval(this._gallery_moveIntervalId),this._gallery_moveIntervalId=setInterval(function(){a.scrollLeft(a.scrollLeft()+5*t)},10)}).on("mouseleave",".forward, .backward",function(i){clearInterval(this._gallery_moveIntervalId)}),i(".gallery.lightbox").on("click","a",function(e){var s=i(this),a=s.parents(".gallery").children(".modal"),t=a.find("img"),n=s.attr("href");n.match(/\.(jpg|gif|png|mp4)$/)&&(e.preventDefault(),e.stopPropagation(),a[0]._locked||(a[0]._locked=!0,t.attr("src",n),a.addClass("visible"),a.focus(),setTimeout(function(){a[0]._locked=!1},600)))}).on("click",".modal",function(e){var a=i(this),t=a.find("img");a[0]._locked||a.hasClass("visible")&&(a[0]._locked=!0,a.removeClass("loaded"),setTimeout(function(){a.removeClass("visible"),setTimeout(function(){t.attr("src",""),a[0]._locked=!1,s.focus()},475)},125))}).on("keypress",".modal",function(e){var s=i(this);27==e.keyCode&&s.trigger("click")}).prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>').find("img").on("load",function(e){var s=i(this).parents(".modal");setTimeout(function(){s.hasClass("visible")&&s.addClass("loaded")},275)})})}(jQuery);