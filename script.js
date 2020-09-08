//當網頁載完時，隱藏 loader，執行標題動畫
const loader = document.querySelector('.loader');
const title = document.querySelector('.banner h2');
const subtitle = document.querySelector('.banner span');

window.addEventListener('load', function () {
  loader.style.display = 'none';
  title.style.transform = 'translateY(0)'
  title.style.opacity = 1;
  if (subtitle !== null) {
    subtitle.style.transform = 'translateY(0)'
    subtitle.style.opacity = 1;
  }
})

// header 選單動畫
const marker = document.querySelector('#marker');
const lis = document.querySelectorAll('.main-menu li');

function indicator(e) {
  marker.style.left = `${e.offsetLeft}px`;
  marker.style.width = `${e.offsetWidth}px`;
}

lis.forEach(li => {

  li.addEventListener('mouseenter', e => {
    if (!e.target.parentNode.classList.contains('sub-menu')) {
      indicator(e.target);
    } else {
      indicator(lis[1]);
    }
  });

  li.addEventListener('mouseleave', function (e) {
    if (!e.target.parentNode.classList.contains('sub-menu')) {
      marker.style.left = 0;
      marker.style.width = 0;
    } else {
      indicator(lis[1]);
    }
  })
});

//projects link disable
const disabled = document.querySelector('.disabled');

disabled.addEventListener('click', e => e.preventDefault());