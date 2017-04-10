function launchFullscreen(element) {
      if(element.requestFullscreen) {
            element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
      }
}
// 启动全屏!
launchFullScreen(document.documentElement); // 整个网页
