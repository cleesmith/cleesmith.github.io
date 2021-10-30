<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Chris Smith">
  <meta name="description" content="Life and tarot.">
  <meta name="keywords" content="life, tarot">
  <title>Shy Girls</title>
<style>
* {
  box-sizing: border-box;
  transition: 0.3s;
}

//html, body {
//  height: 100%;
//  width: 100%;
//  overflow: hidden;
//}

.lalscene {
  perspective: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
//  background: url(lindas_shy_girls/lindas_copyright1.jpg);
//  background-size: 100% 100%;
//  background-position: center;
  background-repeat: no-repeat;
}
.lalscene:hover {
  transform: scale(1.5);
}
.lalscene:hover .lalside {
  opacity: 1;
}

.lalcube {
  transform-style: preserve-3d;
  position: relative;
  width: 300px;
  height: 300px;
  -webkit-animation: rotate 10s ease-in-out infinite;
          animation: rotate 10s ease-in-out infinite;
  transform-origin: center center;
}

.lalside {
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: #333;
  opacity: 0.95;
  background-size: cover;
  background-repeat: no-repeat;
}

.lalback {
  transform: translateZ(-150px) rotateX(180deg);
  background-image: url(lindas_shy_girls/6_shy_girl_with_brush.jpg);
}

.lalleft {
  transform: translateX(-150px) rotateY(90deg);
  background-image: url(lindas_shy_girls/2_shy_girl_with_orange.jpg);
}

.lalright {
  transform: translateX(150px) rotateY(90deg);
  background-image: url(lindas_shy_girls/3_shy_girl_with_love_letter.jpg);
}

.laltop {
  transform: translateY(-150px) rotateX(90deg);
  background-image: url(lindas_shy_girls/4_shy_girl_with_soup.jpg);
}

.lalbottom {
  transform: translateY(150px) rotateX(270deg);
  background-image: url(lindas_shy_girls/5_shy_girl_with_friend.jpg);
}

.lalfront {
  transform: translateZ(150px);
  background-image: url(lindas_shy_girls/1_shy_girl_with_book.jpg);
}

@-webkit-keyframes rotate {
  0% {
    transform: rotateX(0);
  }
  12.5% {
    transform: rotateY(90deg);
  }
  25% {
    transform: rotateY(270deg);
  }
  37.5% {
    transform: rotateY(270deg);
  }
  50% {
    transform: rotateY(360deg);
  }
  62.5% {
    transform: rotateX(90deg);
  }
  75% {
    transform: rotateX(180deg);
  }
  87.5% {
    transform: rotateX(270deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotateX(0);
  }
  12.5% {
    transform: rotateY(90deg);
  }
  25% {
    transform: rotateY(270deg);
  }
  37.5% {
    transform: rotateY(270deg);
  }
  50% {
    transform: rotateY(360deg);
  }
  62.5% {
    transform: rotateX(90deg);
  }
  75% {
    transform: rotateX(180deg);
  }
  87.5% {
    transform: rotateX(270deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}

</style>


</head>
<body>
<!-- content begin -->

<br /><br /><br /><br /><br /><br /><br />
<hr />
<div class="lalscene">
  <div class="lalcube">
    <div class="lalside lalback"></div>
    <div class="lalside lalleft"></div>
    <div class="lalside lalright"></div>
    <div class="lalside laltop"></div>
    <div class="lalside lalbottom"></div>
    <div class="lalside lalfront"></div>
  </div>
</div>
<hr />

  </body>
</html>
