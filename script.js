window.addEventListener('scroll', function() {
  const section = document.querySelector('.section-video-desctop');
  const mainContainer = document.querySelector('.main-container--position');
  const targetElement = document.querySelector('.section-main_paragraph-big');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const targetElementOffsetTop = targetElement.offsetTop;
  const mainContainerOffsetTop = mainContainer.offsetTop;

  // Проверяем, когда .section-main_paragraph-big появляется на экране
  if (scrollPosition + windowHeight >= targetElementOffsetTop) {
      // Начало плавного движения .section-video-desctop с прокруткой
      let moveDistance = scrollPosition - section.offsetTop;
      if (moveDistance < 0) {
          moveDistance = 0; // Плавное движение начиная с исходной точки
      }

      // Двигаем section плавно с прокруткой
      section.style.transform = `translateY(${moveDistance * 0.3}px)`; // Применяем коэффициент для плавности

      // Двигаем main-container--position с прокруткой
      let moveMainContainer = scrollPosition - mainContainerOffsetTop;
      if (moveMainContainer < 0) {
          moveMainContainer = 0; // Начинаем движение с изначальной точки
      }
      mainContainer.style.transform = `translateY(${moveMainContainer * 0.9}px)`; // Плавное движение
  }
});



window.addEventListener('load', function() {
  // Wait for the page to fully load
  setTimeout(function() {
      // Remove the margins after 0.1s delay to make it noticeable
      const items = document.querySelectorAll('.section-header_list-itempr');
      items.forEach(item => {
          item.style.transition = 'margin-top 1s ease-out'; // Ensure transition happens smoothly
          item.style.marginTop = '0'; // Remove the margins
      });

      // After 1 second, hide the preloader
      setTimeout(function() {
          const preloader = document.querySelector('.section-prelouder');
          preloader.classList.add('hidden'); // Fade out preloader
      }, 1000); // 1 second delay before the preloader disappears
  }, 100); // Small delay before starting the margin transition
});
  