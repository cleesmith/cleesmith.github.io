var fadecounter102670438027 = 0;
var cyclecounter102670438027 = 0;
var imagecounter102670438027 = 0;
var fadeinterval102670438027 = 6000;
var t102670438027;
var nextimagetoload102670438027 = new Image();
var nextmouseoverimagetoload102670438027 = new Image();
var mouseoverimage102670438027 = new Image();
var mouseoutimage102670438027 = new Image();
var mouseoverflag102670438027 = 0;
var width102670438027 = 400;
var height102670438027 = 400;
var link102670438027;
// 10 artworks:
var imagearray102670438027 = new Array(10);
var imagemouseoverarray102670438027 = new Array(10);
var linkarray102670438027 = new Array(10);
image10267043802737172832 = new Image();
imagemouseover10267043802737172832 = new Image();
image10267043802737172832.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/wabi-sabi-slip-the-trap/b1/Wabi+Sabi/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normal.jpg';
imagemouseover10267043802737172832.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/wabi-sabi-slip-the-trap/b1/Wabi+Sabi/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normalmouseover.jpg';
imagearray102670438027[0] = image10267043802737172832;
imagemouseoverarray102670438027[0] = imagemouseover10267043802737172832;
linkarray102670438027[0] = 'https://slip-the-trap.pixels.com/featured/wabi-sabi-slip-the-trap.html';
image10267043802737172795 = new Image();
imagemouseover10267043802737172795 = new Image();
image10267043802737172795.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/turtle-snail-slip-the-trap/b1/Turtle+Snail/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normal.jpg';
imagemouseover10267043802737172795.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/turtle-snail-slip-the-trap/b1/Turtle+Snail/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normalmouseover.jpg';
imagearray102670438027[1] = image10267043802737172795;
imagemouseoverarray102670438027[1] = imagemouseover10267043802737172795;
linkarray102670438027[1] = 'https://slip-the-trap.pixels.com/featured/turtle-snail-slip-the-trap.html';
image10267043802737172762 = new Image();
imagemouseover10267043802737172762 = new Image();
image10267043802737172762.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/unaware-slip-the-trap/b1/Unaware/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normal.jpg';
imagemouseover10267043802737172762.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/unaware-slip-the-trap/b1/Unaware/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normalmouseover.jpg';
imagearray102670438027[2] = image10267043802737172762;
imagemouseoverarray102670438027[2] = imagemouseover10267043802737172762;
linkarray102670438027[2] = 'https://slip-the-trap.pixels.com/featured/unaware-slip-the-trap.html';
image10267043802737087233 = new Image();
imagemouseover10267043802737087233 = new Image();
image10267043802737087233.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/dont-look-back-slip-the-trap/b1/Dont+Look+Back/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normal.jpg';
imagemouseover10267043802737087233.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/dont-look-back-slip-the-trap/b1/Dont+Look+Back/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normalmouseover.jpg';
imagearray102670438027[3] = image10267043802737087233;
imagemouseoverarray102670438027[3] = imagemouseover10267043802737087233;
linkarray102670438027[3] = 'https://slip-the-trap.pixels.com/featured/dont-look-back-slip-the-trap.html';
image10267043802737011926 = new Image();
imagemouseover10267043802737011926 = new Image();
image10267043802737011926.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/fractured-slip-the-trap/b1/Fractured/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normal.jpg';
imagemouseover10267043802737011926.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/fractured-slip-the-trap/b1/Fractured/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normalmouseover.jpg';
imagearray102670438027[4] = image10267043802737011926;
imagemouseoverarray102670438027[4] = imagemouseover10267043802737011926;
linkarray102670438027[4] = 'https://slip-the-trap.pixels.com/featured/fractured-slip-the-trap.html';
image10267043802736760106 = new Image();
imagemouseover10267043802736760106 = new Image();
image10267043802736760106.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/pennyful-thoughts-slip-the-trap/b1/Pennyful+Thoughts/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normal.jpg';
imagemouseover10267043802736760106.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/pennyful-thoughts-slip-the-trap/b1/Pennyful+Thoughts/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normalmouseover.jpg';
imagearray102670438027[5] = image10267043802736760106;
imagemouseoverarray102670438027[5] = imagemouseover10267043802736760106;
linkarray102670438027[5] = 'https://slip-the-trap.pixels.com/featured/pennyful-thoughts-slip-the-trap.html';
image10267043802736701505 = new Image();
imagemouseover10267043802736701505 = new Image();
image10267043802736701505.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/1-chi-slip-the-trap/b1/chi/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normal.jpg';
imagemouseover10267043802736701505.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/1-chi-slip-the-trap/b1/chi/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normalmouseover.jpg';
imagearray102670438027[6] = image10267043802736701505;
imagemouseoverarray102670438027[6] = imagemouseover10267043802736701505;
linkarray102670438027[6] = 'https://slip-the-trap.pixels.com/featured/1-chi-slip-the-trap.html';
image10267043802736657745 = new Image();
imagemouseover10267043802736657745 = new Image();
image10267043802736657745.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/not-in-the-now-slip-the-trap/b1/Not+in+the+Now/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normal.jpg';
imagemouseover10267043802736657745.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/not-in-the-now-slip-the-trap/b1/Not+in+the+Now/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normalmouseover.jpg';
imagearray102670438027[7] = image10267043802736657745;
imagemouseoverarray102670438027[7] = imagemouseover10267043802736657745;
linkarray102670438027[7] = 'https://slip-the-trap.pixels.com/featured/not-in-the-now-slip-the-trap.html';
image10267043802736495573 = new Image();
imagemouseover10267043802736495573 = new Image();
image10267043802736495573.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/remembrance-slip-the-trap/b1/Remembrance/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normal.jpg';
imagemouseover10267043802736495573.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/remembrance-slip-the-trap/b1/Remembrance/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normalmouseover.jpg';
imagearray102670438027[8] = image10267043802736495573;
imagemouseoverarray102670438027[8] = imagemouseover10267043802736495573;
linkarray102670438027[8] = 'https://slip-the-trap.pixels.com/featured/remembrance-slip-the-trap.html';
image10267043802736465210 = new Image();
imagemouseover10267043802736465210 = new Image();
image10267043802736465210.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/butterfly-slip-the-trap/b1/Butterfly/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normal.jpg';
imagemouseover10267043802736465210.src = 'https://fineartamerica.com/images-slideshow/images/artworkimages/medium/3/butterfly-slip-the-trap/b1/Butterfly/b2/Slip+The+Trap/b3/400px/b4/400px/b5/normalmouseover.jpg';
imagearray102670438027[9] = image10267043802736465210;
imagemouseoverarray102670438027[9] = imagemouseover10267043802736465210;
linkarray102670438027[9] = 'https://slip-the-trap.pixels.com/featured/butterfly-slip-the-trap.html';

function previousimage102670438027() {
    clearTimeout(t102670438027);
    imagecounter102670438027 = imagecounter102670438027 - 1;
    if (imagecounter102670438027 < 0) {
        imagecounter102670438027 = imagearray102670438027.length - 1;
    }
    var object = document.getElementById('faaslideshowimage[102670438027]');
    if (mouseoverflag102670438027 == 0) {
        object.src = imagearray102670438027[imagecounter102670438027].src;
    } else {
        object.src = imagemouseoverarray102670438027[imagecounter102670438027].src;
    }
    object.style.filter = "alpha(opacity = 100)";
    object.style.opacity = 1;
    regularupdate102670438027();
    t102670438027 = setTimeout('fadeout102670438027()', fadeinterval102670438027);
}

function nextimage102670438027() {
    if (!document.getElementById('faaslideshowimage[102670438027]')) {
        clearTimeout(t102670438027);
        t102670438027 = setTimeout('nextimage102670438027()', 500);
        return;
    } else {
        document.getElementById('faaslideshowimage[102670438027]').setAttribute('onMouseOver', 'javascript: mouseover102670438027();');
        document.getElementById('faaslideshowimage[102670438027]').setAttribute('onMouseOut', 'javascript: mouseout102670438027();');
        document.getElementById('faaslideshowimage[102670438027]').setAttribute('onClick', 'javascript: mouseclick102670438027(event);');
    }
    clearTimeout(t102670438027);
    imagecounter102670438027 = imagecounter102670438027 + 1;
    if (imagecounter102670438027 > imagearray102670438027.length - 1) {
        imagecounter102670438027 = 0;
    }
    var object = document.getElementById('faaslideshowimage[102670438027]');
    if (mouseoverflag102670438027 == 0) {
        object.src = imagearray102670438027[imagecounter102670438027].src;
    } else {
        object.src = imagemouseoverarray102670438027[imagecounter102670438027].src;
    }
    object.style.filter = "alpha(opacity = 100)";
    object.style.opacity = 1;
    regularupdate102670438027();
    t102670438027 = setTimeout('fadeout102670438027()', fadeinterval102670438027);
}

function nextfade102670438027() {
    clearTimeout(t102670438027);
    imagecounter102670438027 = imagecounter102670438027 + 1;
    if (imagecounter102670438027 > imagearray102670438027.length - 1) {
        imagecounter102670438027 = 0;
    }
    var object = document.getElementById('faaslideshowimage[102670438027]');
    if (mouseoverflag102670438027 == 0) {
        object.src = imagearray102670438027[imagecounter102670438027].src;
    } else {
        object.src = imagemouseoverarray102670438027[imagecounter102670438027].src;
    }
    regularupdate102670438027();
    t102670438027 = setTimeout("fadein102670438027()", 100);
}

function fadeout102670438027() {
    fadecounter102670438027 = 100;
    fadeoutprogress102670438027();
}

function fadeoutprogress102670438027() {
    var object = document.getElementById('faaslideshowimage[102670438027]');
    object.style.filter = "alpha(opacity = " + fadecounter102670438027 * 1 + ")";
    object.style.opacity = fadecounter102670438027 * 0.01;
    fadecounter102670438027 -= 2;
    if (fadecounter102670438027 > 0) {
        t102670438027 = setTimeout("fadeoutprogress102670438027()", 10);
    } else {
        nextfade102670438027();
    }
}

function fadein102670438027() {
    fadecounter102670438027 = 0;
    fadeinprogress102670438027();
}

function fadeinprogress102670438027() {
    object = document.getElementById('faaslideshowimage[102670438027]');
    object.style.filter = "alpha(opacity = " + fadecounter102670438027 * 1 + ")";
    object.style.opacity = fadecounter102670438027 * 0.01;
    fadecounter102670438027 += 4;
    if (fadecounter102670438027 < 100) {
        t102670438027 = setTimeout("fadeinprogress102670438027()", 10);
    } else {
        t102670438027 = setTimeout("fadeout102670438027()", fadeinterval102670438027);
    }
}

function mouseover102670438027() {
    mouseoverflag102670438027 = 1;
    document.getElementById('faaslideshowimage[102670438027]').src = mouseoverimage102670438027.src;
}

function mouseout102670438027() {
    mouseoverflag102670438027 = 0;
    document.getElementById('faaslideshowimage[102670438027]').src = mouseoutimage102670438027.src;
}

function mouseclick102670438027(event) {
    var currentleft = 0;
    var currenttop = 0;
    var object = document.getElementById('faaslideshowimage[102670438027]');
    if (object.offsetParent) {
        do {
            currentleft += object.offsetLeft;
            currenttop += object.offsetTop;
        } while (object = object.offsetParent);
    }
/*
//alert(currentleft + ', ' + currenttop);
//var pos_x = event.offsetX?(event.offsetX):event.pageX-document.getElementById('faaslideshowimage[102670438027]').offsetLeft;
//var pos_y = event.offsetY?(event.offsetY):event.pageY-document.getElementById('faaslideshowimage[102670438027]').offsetTop;
var pos_x = event.offsetX?(event.offsetX):event.pageX-currentleft;
var pos_y = event.offsetY?(event.offsetY):event.pageY-currenttop;
//alert(pos_x + ', ' + pos_y);
if(pos_x < 35) { previousimage102670438027(); return; }
if(pos_x > width102670438027 - 35) { nextimage102670438027(); return; } document.location = link102670438027; }
function regularupdate102670438027() { mouseoutimage102670438027.src = imagearray102670438027[imagecounter102670438027].src; mouseoverimage102670438027.src =imagemouseoverarray102670438027[imagecounter102670438027].src; link102670438027 = linkarray102670438027[imagecounter102670438027];
  if(document.getElementById('faaslideshowlink[102670438027]')) { document.getElementById('faaslideshowlink[102670438027]').href = linkarray102670438027[imagecounter102670438027]; } var localcounter = imagecounter102670438027 + 1; if(localcounter > imagearray102670438027.length - 1) { localcounter = 0; } nextimagetoload102670438027.src = imagearray102670438027[localcounter].src; nextmouseoverimagetoload102670438027.src = imagemouseoverarray102670438027[localcounter].src; } nextimage102670438027();
*/
