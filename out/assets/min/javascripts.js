function getH2s(){h2s=$("#content h2"),h2positions=[];for(var e=0;e<h2s.length;e++)h2positions[e]=$(h2s[e]).position().top;h2poslen=h2positions.length}function toggleTOH(e){$("#tocHolder").is(":visible")?($(e).removeClass("active"),$("#tocHolder").hide(),$("#toh_btn").fadeOut(90),$(".documentationContainer").css({width:"720px"}),$("#toh_btn").fadeIn(90),setTimeout(function(){updateTOHButtonPosition($(window).scrollTop())},150)):($("#toh_btn").fadeOut(90),$(".documentationContainer").css({width:"520px"}),$("#toh_btn").fadeIn(90),$(e).addClass("active"),setTimeout(function(){container=$(".container"),updateTOHPos(container),$("#tocHolder").show(),updateTOHButtonPosition($(window).scrollTop())},150))}function updateTOHButtonPosition(e){e>scrollPosUpdateTOH?$("#toh_btn").css({position:"fixed",top:"19px",left:$("#content").outerWidth()+$("#content").offset().left-36+"px",right:""}):$("#toh_btn").css({position:"absolute",top:"10px",left:"",right:"12px"})}function updateTOHPos(e){$("#tocHolder > ol.tocContainer").css({left:$(e).outerWidth()+$(e).offset().left-$("#tocHolder > ol.tocContainer").outerWidth()+75})}$(document).ready(function(){$("iframe#header_iframe").attr("src","https://c9.io/site/onlyheader/?simulate=menu-item-documentation"),$("iframe#footer_iframe").attr("src","https://c9.io/site/onlyfooter/")}),function(e,t,n,r,i,s,o){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,s=t.createElement(n),o=t.getElementsByTagName(n)[0],s.async=1,s.src=r,o.parentNode.insertBefore(s,o)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-58752400-1","auto"),ga("send","pageview"),$(window).resize(function(){$("#wrapper").css("min-height",$(window).height()-$("#header_iframe").height()-$("#footer_iframe").height())});var navBarIsFixed=!1,h2s,h2positions=[],h2poslen=0,scrollPosUpdateTOH=138;$(document).ready(function(){$(window).resize();var e=document.location.pathname.substring(document.location.pathname.lastIndexOf("/")+1);e===""&&(e="index.html"),$("#st-search-input[title]").keydown(function(e){if(e.keyCode==13){var t=$(this).val();if(t){$(this).val(""),$(this).blur();var n="https://www.google.com/search?q="+encodeURIComponent("site:docs.c9.io "+t);window.open(n)}return!1}});var t=$("#nav").find('a[href="'+e+'"]');t.length&&($selListItem=t.closest("li"),$selListItem.addClass("selected"),$selListItem.closest("li.nav-section").addClass("expanded"),$selListItem.closest("li.nav-section").children("ul").show(),$selListItem.closest("li.nav-section").parent().closest("li.nav-section").addClass("expanded"),$selListItem.closest("li.nav-section").parent().closest("ul").show()),$("a.heading_anchor").children("i").addClass("icon-hand-right"),$("h2, h3, h4, h5, h6").hover(function(){$(this).find("i").css({opacity:"1"}),$(this).find("a").css({"margin-left":"-30px"})},function(){$(this).find("i").css({opacity:"0"}),$(this).find("a").css({"margin-left":"-35px"})}),$("#macTab a").click(function(e){e.preventDefault(),$(this).tab("show")}),$("#winTab a").click(function(e){e.preventDefault(),$(this).tab("show")}),$("#nav li.nav-section .nav-section-header").click(function(){var e=$(this).closest("li.nav-section");e.hasClass("expanded")?e.children("ul").slideUp(100,"swing",function(){e.closest("li").removeClass("expanded")}):(e.closest("li").addClass("expanded"),e.children("ul").slideDown(100,"swing",function(){}))}),$(".scroll-pane").scroll(function(e){return e.preventDefault(),!1}),updateTOHButtonPosition($(window).scrollTop()),$(window).resize(function(){getH2s(),updateTOHButtonPosition($(window).scrollTop()),container=$(".container"),updateTOHPos(container)}),getH2s();var n=0;$(window).scroll(function(e){var t=$(window).scrollTop();$($(".tocContainer.level_1").children()).removeClass("highlight");for(var n=0;n<h2poslen;n++){if(t+$(window).height()==$(document).height()){$($(".tocContainer.level_1").children()[h2poslen-2]).removeClass("highlight"),$($(".tocContainer.level_1").children()[h2poslen-1]).addClass("highlight");break}if(t>h2positions[n]-50){if(h2positions[n+1]&&t<h2positions[n+1]){$($(".tocContainer.level_1").children()[n]).addClass("highlight");break}n===h2poslen-1&&$($(".tocContainer.level_1").children()[n]).addClass("highlight")}}container=$(".container"),updateTOHPos(container),t>scrollPosUpdateTOH?$("#tocHolder > ol.tocContainer").css({position:"fixed",top:"20px"}):$("#tocHolder > ol.tocContainer").css({position:"absolute",top:"163px"}),updateTOHButtonPosition(t);if($("#side-nav").length==0)return;if(e.target.nodeName=="DIV")return;var r=$("#header").outerHeight(),i=$("#nav-x").outerHeight(),s=$("#searchResults").is(":visible")?$("#searchResults").outerHeight():0,o=r+i+s,u=t>o;if(navBarIsFixed&&u)return;if(navBarIsFixed!=u){if(u){var a=$("#doc-nav").width();$("#doc-nav").addClass("fixed").css({width:a+"px"}).prependTo("#body-content"),$("#doc-nav a.totop").css({display:"block",width:$("#nav").innerWidth()+"px"})}else $("#doc-nav").removeClass("fixed").css({width:"auto",margin:""}).prependTo("#side-nav"),$("#doc-nav a.totop").hide();navBarIsFixed=u}});var r=$("#side-nav"),i=parseInt(r.innerWidth());$("#doc-nav  #nav").css("width",i-4+"px")}),!function(e){e(function(){"use strict";e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active a").last()[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}},e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e(function(){e("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})})}(window.jQuery)