
// preload images

console.log('preloading images')

const preloaderImages = ['goldenfreddy.jpg',
   'ui/bar.png', 'ui/map.png', 'ui/noise.png', 'rooms/placeholder.jpg', 'rooms/office.png',
   'power/1.png', 'power/2.png', 'power/3.png', 'power/4.png',
   'door/closed.png', 'door/open.png', 'door/light.png',
   'jumpscares/0.gif','jumpscares/1.gif','jumpscares/2.png','jumpscares/3.gif',
]

var preloaderImageElement = new Image();

preloaderImages.forEach(e => {
   preloaderImageElement.src = '/assets/'+e
});

// preload audio

console.log('preloading audio')

const preloaderAudios = [
   'ambient/1.ogg', 'ambient/2.ogg',
   'bgm.mp3', 'camera-switch.ogg',
   'door-close-l.ogg', 'door-close-r.ogg',
   'door-open-l.ogg', 'door-open-r.ogg',
   'end.ogg', 'knock.ogg',
   'light-l.ogg', 'light-r.ogg',
   'movement.ogg', 'jumpscare/2.ogg', 'jumpscare/3.ogg',
   'stalker.mp3', 'static.ogg'
]

var preloaderAudioElement = new Audio();

preloaderAudios.forEach(e => {
   preloaderAudioElement.src = '/assets/audio/'+e
});

var nightData = {
    'rooms' : {
        'office':   {'current': [] , 'startpositions': []        ,'denied': []           , 'neighbours': ['office'],                                               'hasCamera': false, },
        'rhall':    {'current': [] , 'startpositions': []        ,'denied': [2]          , 'neighbours': ['rhall', 'office', 'pr1'],                               'hasCamera': true, },
        'stage':    {'current': [] , 'startpositions': [0, 1, 2] ,'denied': [3]          , 'neighbours': ['stage', 'dining'],                                      'hasCamera': true, },
        'pr2':      {'current': [] , 'startpositions': []        ,'denied': []           , 'neighbours': ['pr2', 'dining'],                                        'hasCamera': true, },
        'pirate':   {'current': [] , 'startpositions': [3]       ,'denied': [0, 1, 2]    , 'neighbours': ['pirate', 'dining'],                                     'hasCamera': true, },
        'pr1':      {'current': [] , 'startpositions': []        ,'denied': [2]          , 'neighbours': ['pr1', 'dining', 'rhall'],                               'hasCamera': true, },
        'entrance': {'current': [] , 'startpositions': []        ,'denied': [2]          , 'neighbours': ['entrance', 'dining'],                                   'hasCamera': true, },
        'saferoom': {'current': [] , 'startpositions': []        ,'denied': []           , 'neighbours': ['saferoom', 'mainhall'],                                 'hasCamera': true, },
        'mainhall': {'current': [] , 'startpositions': []        ,'denied': []           , 'neighbours': ['mainhall', 'w', 'm', 'saferoom', 'lhall'],              'hasCamera': true, },
        'lhall':    {'current': [] , 'startpositions': []        ,'denied': [0, 1]       , 'neighbours': ['lhall', 'office', 'mainhall'],                          'hasCamera': true, },
        'dining2':  {'current': [] , 'startpositions': []        ,'denied': []           , 'neighbours': ['dining2', 'dining', 'entrance', 'pr2', 'pirate'],       'hasCamera': true, },
        'dining':   {'current': [] , 'startpositions': []        ,'denied': []           , 'neighbours': ['dining', 'dining2', 'mainhall', 'stage', 'pr1', 'pr2'], 'hasCamera': true, },
        'w':        {'current': [] , 'startpositions': []        ,'denied': [0, 1, 2]    , 'neighbours': ['w', 'mainhall'],                                        'hasCamera': false,},
        'm':        {'current': [] , 'startpositions': []        ,'denied': [3]          , 'neighbours': ['m', 'mainhall'],                                        'hasCamera': false,}
    },
    'ai': []  // freddy, bonnie, kaspian pita, zajaczkowska
}

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

const currentNight = getCookie('save')

switch (currentNight) {
   case 1:
      nightData.ai = [2,2,2,2]
      break
   case 2:
      nightData.ai = [2,2,2,2]
      break
   case 3:
      nightData.ai = [2,2,2,2]
      break
   default:
      nightData.ai = [20,20,20,20]
}

// pomysl: pita moze spierdolic gdy sie na niego za dlugo swieci bo sie boi słonca ten cwel

var ambientAudioVolume = 1;

var currentAudios = [];

function playAudio(src, type='ambient') {
   const audio = new Audio(src)
   
   if (type = 'ambient') {
      audio.volume = ambientAudioVolume
   }

   currentAudios.push(audio)

   audio.addEventListener('ended', () => {
      const index = currentAudios.indexOf(audio)
      currentAudios.splice(index, 1)
   })

   audio.play()
}

function changeVolume(volumeLvl, type='ambient') {
   ambientAudioVolume = volumeLvl

   currentAudios.forEach(audio => {
      audio.volume = volumeLvl;
   });
}



Object.entries(nightData.rooms).forEach(room => {
   room[1].startpositions.forEach(anims => {
      room[1].current.push(anims)
   })
});

var currentPositionsHistory = []


function checkForAmbient() {
   let currentPositions = []

   Object.entries(nightData.rooms).forEach(room => {
      room[1].current.forEach(anims => {
         currentPositions[anims] = room[0]
      })
   });

   if (currentPositionsHistory.length > 5) {
      currentPositionsHistory.shift()
   }

   currentPositionsHistory.push(currentPositions)

   // you stupid n

   var count = (JSON.stringify(nightData.ai) == "[20,20,20,20]") ? 3 : 5

   var nwordPositions = currentPositionsHistory

   if (nwordPositions.length > count) {
      for (let i = 0; i < (nwordPositions.length - count); i++) {
         nwordPositions.shift()
      }
   }

   if (nwordPositions.length == count) {
      var nwordPositions2 = [[],[],[]]

      nwordPositions.forEach(pset => {
         var currentAi = 0
         pset.forEach(pos => {
            if (currentAi == 3) {return}
            nwordPositions2[currentAi].push(pos)
            currentAi += 1
         });
      });

      if (nwordPositions2.some(row => row.every(v => v === row[0]))) {
         playAudio('/assets/audio/ambient/2.ogg')
      }
   }

   // come over here and kiss me on my hot mouth, im feeling romantical

   currentPositions = currentPositions.filter(
     (e) => (['m', 'w'].includes(e))
   );

   if (currentPositions.length >= 2) {
      playAudio('/assets/audio/ambient/1.ogg')
   }
}


var dead = false;
var won = false;

function mvTick() {
   if (dead || won) {
      return
   }
   console.log('mv')

   let currentPositions = []
   let startPositions = []

   Object.entries(nightData.rooms).forEach(room => {
      room[1].current.forEach(anims => {
         currentPositions[anims] = room[0]
      })
   });

   Object.entries(nightData.rooms).forEach(room => {
      room[1].startpositions.forEach(anims => {
         startPositions[anims] = room[0]
      })
   });

   let currentAi = 0

   nightData.ai.forEach(aiLevel => {
      switch (currentAi) {
         case 3:
            if (Math.max(lastCameraOpen, lastCameraClose)+foxyStun >= Date.now()) {
               return
            }
      }

      if (Math.floor(Math.random()*20) < aiLevel) {
         const currentAiRoom      = nightData.rooms[currentPositions[currentAi]]
         var availableLocations = []// = currentAiRoom.neighbours.filter(
         //   (room) => !(currentAi in nightData.rooms[room].denied)
         // );

         Array.from(currentAiRoom.neighbours).forEach(room => {
            var canGoThere = !(Array.from(nightData.rooms[room].denied).includes(currentAi))
            if (canGoThere) {
               availableLocations.push(room)
            }
         });

         let newlocation          = availableLocations[Math.floor(Math.random()*availableLocations.length)]

         let roomCurrent          = currentAiRoom.current
         const aiIndex            = roomCurrent.indexOf(currentAi)

         // console.log(`${currentAi} moved to ${newlocation}`)
         if (newlocation != currentAiRoom.neighbours[0]) {
            playAudio('/assets/audio/movement.ogg')
         }

         if (newlocation == 'office') {
            switch (currentAiRoom.neighbours[0]) {
               case 'lhall':
                  if (doors.l) {
                     playAudio('/assets/audio/knock.ogg')

                     const removePerKnock = currentNight*2+hour

                     power -= removePerKnock
                     setTimeout(() => {
                        power -= removePerKnock
                        setTimeout(() => {
                           power -= removePerKnock
                           setTimeout(() => {
                              power -= removePerKnock
                           }, 150);
                        }, 150);
                     }, 150);

                     newlocation = startPositions[currentAi]
                  } else {
                     dead = true
                     const jumpscare = document.getElementById('jumpscare')
                     jumpscare.classList.remove('no')
                     switch (currentAi.toString()) {
                        case '0':
                           jumpscare.src = '/assets/jumpscares/0.gif'
                           death()
                           break
                        case '1':
                           jumpscare.src = '/assets/jumpscares/1.gif'
                           death()
                           break
                        case '2':
                           jumpscare.src = '/assets/jumpscares/2.png'
                           playAudio('/assets/audio/jumpscare/2.ogg')

                           setTimeout(() => {
                              death()  
                           }, 10000);
                           
                           break
                        case '3':
                           jumpscare.src = '/assets/jumpscares/3.gif'
                           playAudio('/assets/audio/jumpscare/3.mp3')

                           death()
                     }
                  }
                  break
               case 'rhall':
                  if (doors.r) {
                     playAudio('/assets/audio/knock.ogg')

                     const removePerKnock = currentNight*2+hour

                     power -= removePerKnock
                     setTimeout(() => {
                        power -= removePerKnock
                        setTimeout(() => {
                           power -= removePerKnock
                           setTimeout(() => {
                              power -= removePerKnock
                           }, 150);
                        }, 150);
                     }, 150);
                     
                     newlocation = startPositions[currentAi]
                  } else {
                     dead = true
                     death()
                     // jumpscare
                     // window.location.href = '/menu'
                  }
            }
         }

         roomCurrent.splice(aiIndex, 1)

         nightData.rooms[newlocation].current.push(currentAi) 
      }
      currentAi += 1
   });


   switchCamera(currentCamera)


   const nightDatadbug = document.getElementById('nightdatadbug')
   nightDatadbug.innerHTML = ''

   Object.entries(nightData.rooms).forEach(e => {
      nightDatadbug.innerHTML += ("<br>"+JSON.stringify(e[0])+JSON.stringify(e[1])) 
   });

   const ticktimeDbug = document.getElementById('ticktimedbug')
   ticktimeDbug.innerHTML =  4500 - (hour * 200)

   checkForAmbient()

   setTimeout(() => {
      mvTick()
   }, 4500 - (hour * 200) );
}

const instantMvTick = false

setTimeout(() => {
   mvTick();
}, instantMvTick ? 0 : 10000);



function lighttick() {
   if (won) {return}

   const ldoor = document.getElementById('ldoor').querySelector('img')
   const rdoor = document.getElementById('rdoor').querySelector('img')

   const closed = '/assets/door/closed.png'
   const open = '/assets/door/open.png'

   if (lights.l) {
      var imageName = doors.l ? closed : '/assets/door/light.png'

      if (nightData.rooms.lhall.current.length != 0) {
         imageName = `/assets/door/${nightData.rooms.lhall.current[0]}${doors.l ? 1 : 0}.png`
      }

      ldoor.src = imageName
   } else {
      ldoor.src = doors.l ? closed : open
   }

   if (lights.r) {
      var imageName = doors.r ? closed : '/assets/door/light.png'

      if (nightData.rooms.rhall.current.length != 0) {
         imageName = `/assets/door/${nightData.rooms.rhall.current[0]}${doors.r ? 1 : 0}.png`
      }

      rdoor.src = imageName
   } else {
      rdoor.src = doors.r ? closed : open
   }

   setTimeout(() => {
      lighttick()
   }, 200);
}

setTimeout(() => {
   lighttick()
}, 500);


function death() {
   if (won) {return}

   if (iscameraon) {
      setTimeout(() => {
         document.getElementsByClassName('static')[0].classList.add('hide') 
         document.getElementsByClassName('camui')[0].style.display = 'none'
         document.getElementsByClassName('cam')[0].style.opacity = 0
         document.getElementsByClassName('cam')[0].style.zIndex = -2
         usage -= 1

         document.getElementsByClassName('deathcounter')[0].classList.remove('notyet')
         setTimeout(() => {
            window.location.href = '/menu'
         }, 10000);
      }, 3000);
   } else {
      document.getElementsByClassName('deathcounter')[0].classList.remove('notyet')
      setTimeout(() => {
         window.location.href = '/menu'
      }, 10000);
   }
   
}





var power = 1005;
var usage = 1;

var currentpowercountdown = 0;

function powerHandler() {
   if (won) {return}

   if (currentpowercountdown == 10) {
      currentpowercountdown = 0
      power = power - usage
   } else {
      currentpowercountdown += 1
   }

   if (power < -10000) {
      document.getElementsByClassName('static')[0].classList.remove('hide')

      document.getElementById('powerdbug').innerHTML = "<img src='/assets/goldenfreddy.jpg'>"
      document.getElementById('usagedbug').innerHTML = "<img src='/assets/goldenfreddy.jpg'>"

      document.getElementById('powerui').innerHTML = "-21312312312"
      document.getElementById('usageui').innerHTML = "-21312312312"


      setTimeout(() => {
         document.getElementById('newspaper').classList.add('animless')
         document.getElementById('newspaper').src = '/assets/goldenfreddy.jpg'
      }, 1700);

      document.getElementsByClassName('camui')[0].remove()
      // document.getElementsByClassName('ui')[0].remove()

      playAudio('/assets/audio/bgm.mp3')

      setTimeout(() => {
         window.location.href = '/menu'
      }, 21000);
      

      return

   }

   document.getElementById('powerdbug').innerHTML = power
   document.getElementById('usagedbug').innerHTML = usage

   document.getElementById('powerui').innerHTML = Math.round(power/10)

   var newusage = `<img src="/assets/power/${usage}.png" class="usagebar">`

   if (document.getElementById('usageui').innerHTML != newusage) {
      document.getElementById('usageui').innerHTML = newusage
   }

   setTimeout(() => {
      powerHandler()
   }, 100);
}

powerHandler();



var hour = -1;

function incrementhour() {
   hour += 1
   document.getElementById('hour').innerHTML = (hour == 0 ? 12 : hour)+" AM"


   if (hour == 6) {
      new Audio('/assets/audio/end.ogg').play()
      won = true
      document.cookie = `save=${parseInt(getCookie('save'))+1};path=/`
      document.getElementsByClassName('end')[0].classList.remove('no')
      setTimeout(() => {
         window.location.href = '/menu'
      }, 9000);
   }

   setTimeout(() => {
      incrementhour();
   }, 60000);
}

incrementhour();


var withTesticularTorsion = false;
var wezMiKurwaWylaczTenJebanyKrzykBoJaKurwaSieBoje = false;

function skretJadra() {

   withTesticularTorsion = true

   document.getElementsByClassName('testicle')[0].classList.remove('no')

   if (!wezMiKurwaWylaczTenJebanyKrzykBoJaKurwaSieBoje) {
      playAudio('/assets/audio/stalker.mp3')

      setTimeout(() => {
         playAudio('/assets/audio/stalker.mp3')

         setTimeout(() => {
            playAudio('/assets/audio/stalker.mp3')
         }, 2000);
      }, 2000);
   }

   setTimeout(() => {
      withTesticularTorsion = false
      document.getElementsByClassName('testicle')[0].classList.add('no')
   }, 6000+Math.random()*1000);
}


var width = document.getElementsByClassName('gra')[0].offsetWidth

var limits = {
   l: 7,
   r: -(width/1.12) + 2,
}

var rotation = (limits.l + limits.r) / 2

var iscameraon = false
var currentCamera = 2

var movingdir = 0  // 0 - no, 1- left, 2 - right


function cammove() {
   if (won) {return}

   if (iscameraon == true) {
      setTimeout(() => { cammove() }, 0);
      return
   }

   var width = document.getElementsByClassName('gra')[0].offsetWidth

   console.log(width)

   var rotation_speed = 0.0125*width

   if (withTesticularTorsion) {
      rotation_speed = rotation_speed / 2
   }

   switch (movingdir) {
      case 1:
         if (!((rotation + rotation_speed) >= limits.l)) {
            rotation += rotation_speed
         }
         break
      case 2:
         if (!((rotation - rotation_speed) < limits.r)) {
            rotation -= rotation_speed 
         }
   }

   document.getElementsByClassName('room')[0].style.left = `${rotation}px`

   document.getElementById("camrotationdbug").innerHTML = rotation

   setTimeout(() => {
      cammove()
   }, 0);
}

cammove()


// zajebane z chata, sorki ale kurwa na to nie wpadlem

const idsWithPassthrough = ['rightmov', 'leftmov']

idsWithPassthrough.forEach(e => {
   const element = document.getElementById(e)
   element.addEventListener('click', (e) => {
      console.log('passing click')
      e.stopImmediatePropagation()
      e.preventDefault()

      element.parentNode.style.display = 'none'
      const under = document.elementFromPoint(e.clientX, e.clientY);
      console.log(under)
      element.parentNode.style.display = ''

      if (under) {
         under.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: e.clientX,
            clientY: e.clientY,
         }));
      }
   });
});



document.getElementById('leftmov').addEventListener('mouseenter', function() {
   movingdir = 1
})

document.getElementById('leftmov').addEventListener('mouseleave', function() {
   movingdir = 0
})

document.getElementById('rightmov').addEventListener('mouseenter', function() {
   movingdir = 2
})

document.getElementById('rightmov').addEventListener('mouseleave', function() {
   movingdir = 0
})

let params = new URLSearchParams(document.location.search);
const firstgame = (params.get("f") == null)

console.log("firstgame? ", firstgame)

if (firstgame) {
   setTimeout(() => {
      document.getElementsByClassName('static')[0].classList.add('hide') 
   }, 500);
   setTimeout(() => {
      document.getElementsByClassName('flash')[0].classList.remove('off')
      document.getElementsByClassName('nightintro')[0].classList.remove('hide')
      setTimeout(() => {
         document.getElementsByClassName('flash')[0].classList.add('off')
      }, 50);
   }, 2000);
} else {
   document.getElementsByClassName('static')[0].classList.add('hide')
   document.getElementsByClassName('static')[0].style.display = 'none'

   setTimeout(() => {
      document.getElementsByClassName('static')[0].style.display = 'block'
   }, 1000);

   document.getElementById('newspaper').remove()
   document.getElementsByClassName('flash')[0].classList.remove('off')
   document.getElementsByClassName('nightintro')[0].classList.remove('hide')
   setTimeout(() => {
      document.getElementsByClassName('flash')[0].classList.add('off')
   }, 50);
}

var skipIntro = true;

if (skipIntro) {
   document.getElementById('realgra').style.display = ''
}


// nigga
// piotr jest gejem - fejkus
// 


setTimeout(() => {
   document.getElementsByClassName('flash')[0].classList.remove('off')
   document.getElementById('realgra').style.display = ''
   setTimeout(() => {
      document.getElementsByClassName('flash')[0].classList.add('off')
   }, 100);
}, 6000);

setTimeout(() => {
   (function a(){
      if (won) {return}
      if (Math.round(Math.random()*100) == 67) {
         skretJadra()
      }

      setTimeout(() => {
         a()
      }, 1000);
   })();
}, 15000);

function formattedNum(num) {
   if (num == 0) { return "???" }
   if (num == 1) { return num+"st" }
   if (num == 2) { return num+"nd" }
   if (num == 3) { return num+"rd" }
   return num+"th"
}

document.getElementById('intronightnum').innerHTML = formattedNum(currentNight)
document.getElementById('curnightui').innerHTML = currentNight

const doorOpenL = new Audio('/assets/audio/door-open-l.ogg')
const doorOpenR = new Audio('/assets/audio/door-open-r.ogg')

const doorCloseL = new Audio('/assets/audio/door-close-l.ogg')
const doorCloseR = new Audio('/assets/audio/door-close-r.ogg')

var doors = {
   l: false,
   r: false
}

function door(doorn) {

   if (won) {return}

   const ldoor = document.getElementById('ldoor').querySelector('img')
   const rdoor = document.getElementById('rdoor').querySelector('img')

   const closed = '/assets/door/closed.png'
   const open = '/assets/door/open.png'

   switch (doorn) {
      case 0:
         doors.l = !doors.l
         ldoor.src = doors.l ? closed : open

         if (doors.l) {
            doorCloseL.play()
            doorOpenL.pause()
            doorOpenL.currentTime = 0
         } else {
            doorOpenL.play()
            doorCloseL.pause()
            doorCloseL.currentTime = 0
         }

         doors.l ? usage += 1 : usage -= 1

         break
      case 1:
         doors.r = !doors.r
         rdoor.src = doors.r ? closed : open

         if (doors.r) {
            doorCloseR.play()
            doorOpenR.pause()
            doorOpenR.currentTime = 0
         } else {
            doorOpenR.play()
            doorCloseR.pause()
            doorCloseR.currentTime = 0
         }

         doors.r ? usage += 1 : usage -= 1
   }

   document.getElementById('doorsdbug').innerText = `${doors.l}  ${doors.r}`
}

var lights = {
   l: false,
   r: false
}

const lightAudioL = new Audio('/assets/audio/light-l.ogg')
const lightAudioR = new Audio('/assets/audio/light-r.ogg')

lightAudioL.loop=true
lightAudioR.loop=true

function light(doorn) {
   if (won) {return}

   const ldoor = document.getElementById('ldoor').querySelector('img')
   const rdoor = document.getElementById('rdoor').querySelector('img')

   switch (doorn) {
      case 0:
         lights.l = !lights.l
         lights.l ? ldoor.classList.add('light') : ldoor.classList.remove('light')

         if (lights.l) {
            if (lights.r) {
               lights.r = false
               usage -= 1
            }

            var imageName = doors.l ? '/assets/door/closed.png' : '/assets/door/light.png'

            lightAudioL.play()

            if (nightData.rooms.lhall.current.length != 0) {
               imageName = `/assets/door/${nightData.rooms.lhall.current[0]}${doors.l ? 1 : 0}.png`
            }
            
            ldoor.src = imageName
         } else {
            ldoor.src = `/assets/door/${doors.l ? 'closed' : 'open'}.png`
            lightAudioL.pause()
         }

         lights.l ? usage += 1 : usage -= 1

         break
      case 1:
         lights.r = !lights.r
         lights.r ? rdoor.classList.add('light') : rdoor.classList.remove('light')

         if (lights.r) {
            if (lights.l) {
               lights.l = false
               usage -= 1
            }

            var imageName = doors.r ? '/assets/door/closed.png' : '/assets/door/light.png'

            lightAudioR.play()

            if (nightData.rooms.rhall.current.length != 0) {
               imageName = `/assets/door/${nightData.rooms.rhall.current[0]}${doors.r ? 1 : 0}.png`
            }
            
            rdoor.src = imageName
         } else {
            rdoor.src = `/assets/door/${doors.r ? 'closed' : 'open'}.png`
            lightAudioR.pause()
         }

         lights.r ? usage += 1 : usage -= 1
   }

   document.getElementById('lightdbug').innerText = `${lights.l}  ${lights.r}`
}

function checklight(doorn) {
   if (won) {return}

   const ldoor = document.getElementById('ldoor').querySelector('img')
   const rdoor = document.getElementById('rdoor').querySelector('img')

   switch (doorn) {
      case 0:

         if (lights.l) {
            usage -= 1
         }
         
         lights.l = false
         ldoor.classList.remove('light')

         lightAudioL.pause()

         if (!doors.l) {
            ldoor.src = '/assets/door/open.png'
         } else {
            ldoor.src = '/assets/door/closed.png'
         }

         break
      case 1:
         if (lights.r) {
            usage -= 1
         }
         
         lights.r = false
         rdoor.classList.remove('light')

         lightAudioR.pause()

         if (!doors.r) {
            rdoor.src = '/assets/door/open.png'
         } else {
            rdoor.src = '/assets/door/closed.png'
         }
   }

   document.getElementById('lightdbug').innerText = `${lights.l}  ${lights.r}`
}


function switchCamera(num) {
   if (won) {return}
   var switchAudio = new Audio('/assets/audio/camera-switch.ogg')
   if (!iscameraon) { switchAudio.volume = 0}
   switchAudio.play()
   document.getElementsByClassName('static')[0].classList.add('high')
   currentCamera = num
   num = num - 1
   document.getElementById('gamemapcurrentcameraname').innerText = num

   var roomsWithCameras = Object.entries(nightData.rooms).filter((e) => (e[1].hasCamera))
   
   // freddy = 1, bonnie = 2, pita = 4, zajaczkowska = 8
   var roomData = roomsWithCameras.at(num)
   var currentAnimatronics = roomData[1].current

   var sumOfAnim = 0

   currentAnimatronics.forEach(id => {
      sumOfAnim += Math.pow(2, id)
   });

   console.log(roomData[0], 'sum', sumOfAnim)

   document.getElementsByClassName('cam')[0].src = `/assets/rooms/${num}-${sumOfAnim}.jpg`
   setTimeout(() => {
      document.getElementsByClassName('static')[0].classList.remove('high')
   }, 100);
}


const bar = document.getElementById('cambar')

var lastCameraOpen = 0;
var lastCameraClose = 0;

var foxyStun = (Math.random()*17+.8)*1000

bar.addEventListener('mouseenter', function(){
   if (won) {return}

   document.getElementsByClassName('static')[0].classList.add('notrans') 

   iscameraon = !iscameraon
   console.log('camera', iscameraon)
   if (iscameraon) {
      changeVolume(.1)

      lastCameraOpen = Date.now()
      foxyStun = (Math.random()*17+.8)*1000

      document.getElementsByClassName('cameracontrols')[0].style.display = 'none'
      document.getElementsByClassName('room')[0].style.display = 'none'

      document.getElementsByClassName('static')[0].querySelector('audio').play()
      document.getElementsByClassName('static')[0].classList.remove('hide') 
      document.getElementsByClassName('camui')[0].style.display = 'inherit'
      document.getElementsByClassName('cam')[0].style.opacity = 1
      document.getElementsByClassName('cam')[0].style.zIndex = 3
      usage += 1
   } else {
      changeVolume(1)

      lastCameraClose = Date.now()
      foxyStun = (Math.random()*17+.8)*1000

      document.getElementsByClassName('cameracontrols')[0].style.display = 'flex'
      document.getElementsByClassName('room')[0].style.display = 'inherit'

      document.getElementsByClassName('static')[0].querySelector('audio').pause()
      document.getElementsByClassName('static')[0].classList.add('hide') 
      document.getElementsByClassName('camui')[0].style.display = 'none'
      document.getElementsByClassName('cam')[0].style.opacity = 0
      document.getElementsByClassName('cam')[0].style.zIndex = -2
      usage -= 1
   }
   
   bar.style.opacity = 0
   document.getElementById('arecamsondbug').innerText = iscameraon ? "yes" : "no"
})

bar.addEventListener('mouseleave', function(){
   if (won) {return}

   setTimeout(() => {
      bar.style.opacity = 1
   }, 250);
})