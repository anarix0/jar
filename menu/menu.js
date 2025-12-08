Array.from(document.getElementsByClassName("arrow")).forEach(e => {
    e.parentNode.addEventListener("mouseover",  function() { e.innerText = ">> "; })
    e.parentNode.addEventListener("mouseleave", function() { e.innerText = ""  ;  })
});

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// (function bgm(src) {
  // 
  // document.querySelector('audio').play();
// 
// })();

function resetcookies(){
  document.cookie = 'save=1;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/'
  console.log('reset cookies')
  window.location.reload()
}

function setnight(){
  document.cookie = `save=${document.getElementById('nightnum').value};path=/`
  window.location.reload()
}

document.getElementById('savecookie').innerText = "save" + getCookie('save')

if (getCookie('save') !== '') {
  document.getElementById('continue').classList.remove('hidden')
}

function newgame() {
  document.cookie = 'save=1;path=/'
  document.getElementById('newspaper').classList.remove('hidden')
  setTimeout(() => {
    window.location.href = '/game'
  }, 3500);
}

function continuegame() {
  document.getElementsByClassName('flash')[0].classList.remove('off')
  window.location.href = '/game?f=0'
}

function extras() {
  document.getElementsByClassName('flash')[0].classList.remove('off')
  window.location.href = '/extras'
}


setTimeout(() => {
  const spans = Array.from(document.getElementById('warningtext').querySelectorAll('span'))
  for (let i = 0; i < 15; i++) {
    const random = Math.floor(Math.random() * spans.length);

    setTimeout(() => {
      const pre = spans[random].innerText
      spans[random].innerText = 'piotr'
      setTimeout(() => {
        spans[random].innerText = pre
      }, Math.random()*1500);
    }, Math.random()*1500); 
  }
}, 1500);


function glitch() {
  const piotr = document.getElementById('piotrimg')

  var szansa = Math.round(Math.random()*20)

  if (szansa == 1) {
    piotr.src = '/assets/menu/kirk.jpg'
  } else if (szansa == 2) {
    piotr.src = '/assets/menu/smile.png'
  } else if (szansa == 3) {
    piotr.src = '/assets/menu/czarnuch.webp'
  } else {
    piotr.src = '/assets/menu/normal.jpg'
  }

  setTimeout(() => {
    glitch()
  }, 200);

}

glitch()