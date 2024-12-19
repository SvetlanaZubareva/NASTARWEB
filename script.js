window.addEventListener('scroll', function() {
    const block = document.getElementById('scrollingBlock');
    const videoSection = document.querySelector('.section-video-desctop');
    const videoSectionTop = videoSection.offsetTop; // Расстояние до секции с видео
    const videoSectionHeight = videoSection.offsetHeight; // Высота секции с видео
  
    // Когда пользователь прокрутил страницу ниже секции с видео, меняем позицию блока
    if (window.scrollY > (videoSectionTop + videoSectionHeight)) {
      block.style.position = 'fixed';
      block.style.top = '0';
    } else {
      block.style.position = 'static';
    }
  });
  