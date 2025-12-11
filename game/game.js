const classicPreload = false;

var preloaded = [false, false, false]

// preload images

const preloaderImages = ['goldenfreddy.jpg',
   'ui/bar.png', 'ui/map.png', 'ui/noise.png',
   'power/1.png', 'power/2.png', 'power/3.png', 'power/4.png',
   'door/closed.png', 'door/open.png', 'door/light.png',
   'door/00.png', 'door/01.png', 'door/10.png', 'door/11.png',
   'door/20.png', 'door/21.png', 'door/30.png', 'door/31.png',
   'jumpscares/0.gif','jumpscares/1.gif','jumpscares/2.png','jumpscares/3.gif',
]

var preloaderImageElement = new Image();

var currentPreloadingImageCount = 0

preloaderImages.forEach(e => {
   console.log(`%cpreload%c %cimages%c [${currentPreloadingImageCount} / ${preloaderImages.length}]`,
      'background-color: teal; border-radius: 12px; padding: 0 6px;',
      '', 
      'background-color: teal; border-radius: 12px; padding: 0 6px;'
   )
   if (classicPreload) {
      preloaderImageElement.src = '/assets/'+e
   } else {
      fetch('/assets/'+e)
   }
   currentPreloadingImageCount += 1

   if (currentPreloadingImageCount == preloaderImages.length) {
      preloaded[0] = true
   }
});

// preload audio

const preloaderAudios = [
   'ambient/1.ogg', 'ambient/2.ogg',
   'bgm.mp3', 'camera-switch.ogg',
   'door-close-l.ogg', 'door-close-r.ogg',
   'door-open-l.ogg', 'door-open-r.ogg',
   'end.ogg', 'knock.ogg',
   'light-l.ogg', 'light-r.ogg',
   'movement.ogg', 'jumpscare/2.ogg', 'jumpscare/3.mp3',
   'stalker.mp3', 'static.ogg'
]

var preloaderAudioElement = new Audio();

var currentPreloadingAudioCount = 0

preloaderAudios.forEach(e => {
   console.log(`%cpreload%c %caudio%c [${currentPreloadingAudioCount} / ${preloaderAudios.length}]`,
      'background-color: teal; border-radius: 12px; padding: 0 6px;',
      '', 
      'background-color: teal; border-radius: 12px; padding: 0 6px;'
   )
   if (classicPreload) {
      preloaderAudioElement.src = '/assets/audio/'+e
   } else {
      fetch('/assets/audio/'+e)
   }
   currentPreloadingAudioCount += 1

   if (currentPreloadingAudioCount == preloaderAudios.length) {
      preloaded[1] = true
   }
});

// preload rooms

const preloaderRooms = [
   '0-0.webp','0-1.webp','0-2.webp','0-3.webp','0-8.webp','0-9.webp','0-10.webp','0-11.webp',
   '1-0.webp','1-1.webp','1-2.webp','1-3.webp','1-4.webp','1-5.webp','1-6.webp','1-7.webp',
   '2-0.webp','2-1.webp','2-2.webp','2-3.webp','2-4.webp','2-5.webp','2-6.webp','2-7.webp','2-8.webp','2-9.webp','2-10.webp','2-11.webp','2-12.webp','2-13.webp','2-14.webp','2-15.webp',
   '3-0.webp','3-8.webp',
   '4-0.webp','4-1.webp','4-2.webp','4-3.webp','4-8.webp','4-9.webp','4-10.webp','4-11.webp',
   '5-0.webp','5-1.webp','5-2.webp','5-3.webp','5-8.webp','5-9.webp','5-10.webp','5-11.webp',
   '6-0.webp','6-1.webp','6-2.webp','6-3.webp','6-4.webp','6-5.webp','6-6.webp','6-7.webp','6-8.webp','6-9.webp','6-10.webp','6-11.webp','6-12.webp','6-13.webp','6-14.webp','6-15.webp',
   '7-0.webp','7-1.webp','7-2.webp','7-3.webp','7-4.webp','7-5.webp','7-6.webp','7-7.webp','7-8.webp','7-9.webp','7-10.webp','7-11.webp','7-12.webp','7-13.webp','7-14.webp','7-15.webp',
   '8-0.webp','8-4.webp','8-8.webp','8-12.webp',
   '9-0.webp','9-1.webp','9-2.webp','9-3.webp','9-4.webp','9-5.webp','9-6.webp','9-7.webp','9-8.webp','9-9.webp','9-10.webp','9-11.webp','9-12.webp','9-13.webp','9-14.webp','9-15.webp',
   '10-0.webp','10-1.webp','10-2.webp','10-3.webp','10-4.webp','10-5.webp','10-6.webp','10-7.webp','10-8.webp','10-9.webp','10-10.webp','10-11.webp','10-12.webp','10-13.webp','10-14.webp','10-15.webp',
]

var preloaderRoomsElement = new Image();

var currentPreloadingRoomsCount = 0

preloaderRooms.forEach(e => {
   console.log(`%cpreload%c %crooms%c [${currentPreloadingRoomsCount} / ${preloaderRooms.length}]`,
      'background-color: teal; border-radius: 12px; padding: 0 6px;',
      '', 
      'background-color: teal; border-radius: 12px; padding: 0 6px;'
   )
   if (classicPreload) {
      preloaderRoomsElement.src = '/assets/rooms/'+e
   } else {
      fetch('/assets/rooms/'+e)
   //   .then(r => r.blob())
   //   .then(() => {
   //       currentPreloadingRoomsCount += 1
   //   });
   }
   currentPreloadingRoomsCount += 1

   if (currentPreloadingRoomsCount == preloaderRooms.length) {
      preloaded[2] = true
   }
})

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

const mobilecheck = (function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
})();

function loader() {
   if (preloaded.filter((e) => (e)).length == 3) {
      document.getElementById('loader').remove()
   } else {
      setTimeout(() => {
         loader()
      }, 500);
   }
}

loader()

var doors = {
   l: false,
   r: false
}

var lights = {
   l: false,
   r: false
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
   case '1':
      nightData.ai = [2,2,2,2]
      break
   case '2':
      nightData.ai = [2,2,2,2]
      break
   case '3':
      nightData.ai = [2,2,2,2]
      break
   default:
      nightData.ai = [20,20,20,20]
}

// pomysl: pita moze spierdolic gdy sie na niego za dlugo swieci bo sie boi słonca ten cwel

var ambientAudioVolume = 1;

var currentAudios = [];

var availableAudios = {}
var availableAudioId = 0

function addAudio(src) {
   availableAudios[availableAudioId] = new Audio(src)

   availableAudioId += 1

   return availableAudioId-1
}

function playAudioId(audioid) {
   console.log(availableAudios[audioid].src)
   playAudio(availableAudios[audioid].src)
}

// function stopAudioSrc(src) {
//    console.log(currentAudios)
//    console.log(Array.from(availableAudios))
//    Array.from(availableAudios).filter((e) => (e[1].src == src))[0].pause()
// }
const ctx = new AudioContext();

let source;
let gainNode = ctx.createGain();
gainNode.connect(ctx.destination);

function playAudio(src, type='ambient') {

   fetch(src)
     .then(r => r.arrayBuffer())
     .then(buf => ctx.decodeAudioData(buf))
     .then(decoded => {
      const src = ctx.createBufferSource();

      src.buffer = decoded;
      src.connect(gainNode);
      src.start(0);

      src.addEventListener('ended', () => {
         const index = currentAudios.indexOf(audio)
         currentAudios.splice(index, 1)
      })
     });

   // const audio = new Audio(src)
   // 
   // if (type = 'ambient') {
      // audio.volume = ambientAudioVolume
   // }
// 
   // currentAudios.push(audio)
// 
   // audio.addEventListener('ended', () => {
      // const index = currentAudios.indexOf(audio)
      // currentAudios.splice(index, 1)
   // })
// 
   // audio.play()
}

function changeVolume(volumeLvl, type='ambient') {
   gainNode.gain.level = volumeLvl
   // ambientAudioVolume = volumeLvl
// 
   // currentAudios.forEach(audio => {
      // audio.volume = volumeLvl;
   // });
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
      // TODO: REWRITE FOXY
      switch (currentAi) {
         case 3:
            if (
                  (
                  Math.max(lastCameraOpen, lastCameraClose)+foxyStun >= Date.now()
                  &&
                  !(['lhall', 'rhall'].includes(currentPositions[currentAi]))
                  )
               ||
               iscameraon
            
            ) {
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
            function doorKnock() {
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
            }

            function jumpscarefunc() {
               dead = true
               const jumpscare = document.getElementById('jumpscare')
               jumpscare.classList.remove('no')
               console.log('dead', currentAi.toString())

               switch (currentAi) {
                  case 0:
                     jumpscare.src = '/assets/jumpscares/0.gif'
                     playAudio('/assets/audio/bgm.mp3')
                     death()
                     break
                  case 1:
                     jumpscare.src = '/assets/jumpscares/1.gif'
                     setTimeout(() => {
                        playAudio('/assets/audio/jumpscare/3.mp3')
                        death()
                     }, 3000);
                     break
                  case 2:
                     jumpscare.src = '/assets/jumpscares/2.png'
                     playAudio('/assets/audio/jumpscare/2.ogg')
                     setTimeout(() => {
                        death()  
                     }, 10000);
                     
                     break
                  case 3:
                     jumpscare.src = '/assets/jumpscares/3.gif'
                     playAudio('/assets/audio/jumpscare/3.mp3')
                     death()
                     break
               }
            }

            if (nightData.rooms.office.current.length == 0) {
               switch (currentAiRoom.neighbours[0]) {
                  case 'lhall':
                     if (doors.l) {
                        doorKnock()
                     } else {
                        jumpscarefunc()
                     }
                     break
                  case 'rhall':
                     if (doors.r) {
                        doorKnock()
                     } else {
                        jumpscarefunc()
                     }
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
   ticktimeDbug.innerHTML =  (4500 - (hour * 200)) / (quickBots ? 10 : 1)

   checkForAmbient()

   setTimeout(() => {
      mvTick()
   }, (4500 - (hour * 200)) / (quickBots ? 10 : 1) )
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

var quickBots = false

var currentpowercountdown = 0;

function powerHandler() {
   if (won) {return}

   if (currentpowercountdown == 10) {
      currentpowercountdown = 0
      power = power - usage
   } else {
      currentpowercountdown += 1
   }

   var trueUsage = 1

   trueUsage += Object.values(doors).filter(e=>(e)).length
   trueUsage += Object.values(lights).filter(e=>(e)).length
   trueUsage += iscameraon ? 1 : 0

   if (Object.values(doors).filter(e=>(e)).length == 0 && Object.values(lights).filter(e=>(e)).length == 0 && !iscameraon) {
      if (trueUsage < usage) {
         doubleDoorUsage = false
         console.log('assuming double door usage')
         usage = trueUsage
      }
   }

   if (power < 0) {
      document.getElementsByClassName('camui')[0].style.display = 'none'
      document.getElementById('cambar').remove()

      document.getElementsByClassName('doors')[0].style.display = 'none'

      document.getElementsByClassName('bg')[0].style.filter = 'brightness(.5)'

      doors  = {'l': false, 'r': false}
      lights = {'l': false, 'r': false}

      quickBots = true

      nightData.ai = [20, 20, 20, 20]
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
var wezMiKurwaWylaczTenJebanyKrzykBoJaKurwaSieBoje = true;

const jadroAudio = addAudio('/assets/audio/stalker.mp3')

function skretJadra() {
   withTesticularTorsion = true

   document.getElementsByClassName('testicle')[0].classList.remove('no')

   if (mobilecheck) {
      document.getElementsByClassName('testiclemobile')[0].classList.remove('no')
   }

   if (!wezMiKurwaWylaczTenJebanyKrzykBoJaKurwaSieBoje) {
      (function scream() {
         if (!withTesticularTorsion) { 
            stopAudioSrc('/assets/audio/stalker.mp3')
            power -= 7
            return
         } 
         playAudioId(jadroAudio)
         setTimeout(() => { scream() }, 2000);
      })();
   }

   var inner = document.getElementsByClassName('inner')[0].style

   var offset = 0;
   var amount = 5;

   function refresh(offset) {
       inner.left = `${offset}px`

       console.log(offset)
       if (Math.abs(offset) < 6) {
           setTimeout(() => {
               console.log(offset)
               if (Math.abs(offset) < 6) {
                  document.getElementsByClassName('testicle')[0].classList.add('no')
                  withTesticularTorsion = false
                  if (mobilecheck) document.getElementsByClassName('testiclemobile')[0].classList.add('no')
               }
           }, 1000);
       }
   }

   refresh()

   document.getElementById('testicle-mv-left').addEventListener('click', ()=>{
      offset -= amount
      offset = Math.round(offset)
      refresh(offset)
   })

   document.getElementById('testicle-mv-right').addEventListener('click', ()=>{
      offset += amount
      offset = Math.round(offset)
      refresh(offset)
   })

   document.addEventListener('keydown', (e) => {
       if (e.key == 'a') {
           offset -= amount
       }

       if (e.key == 'd') {
           offset += amount
       }
       offset = Math.round(offset)
       console.log(offset)
       refresh(offset)
   });

   setTimeout(() => {
      (function a(){
           offset = (Math.random()- (.5-(offset/100)) )*100
           refresh(offset)
           setTimeout(() => {
               a()
           }, 2000);
       })(); 
   }, 0);
}

var width;
var limits;
var rotation;

function defineCameraRotations() {
   width = document.getElementsByClassName('gra')[0].offsetWidth

   limits = {
      l: 7,
      r: -(width/1.12) + 2,
   }

   rotation = (limits.l + limits.r) / 2
}

window.addEventListener('resize', () => { defineCameraRotations() })

defineCameraRotations()

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

var skipIntro = false;

if (skipIntro) {
   document.getElementById('realgra').style.display = ''
}


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
      if (Math.round(Math.random()*100) == 67 && !withTesticularTorsion) {
         skretJadra()
      }

      setTimeout(() => {
         a()
      }, 1500);
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

var lastDoorLClose = 0;
var lastDoorRClose = 0;
var lastDoorLOpen  = 0;
var lastDoorROpen  = 0;

var doubleDoorUsage = false;


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
            lastDoorLClose = Date.now()

            doorCloseL.play()
            doorOpenL.pause()
            doorOpenL.currentTime = 0
         } else {
            lastDoorLOpen = Date.now()

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
            lastDoorRClose = Date.now()

            doorCloseR.play()
            doorOpenR.pause()
            doorOpenR.currentTime = 0
         } else {
            lastDoorROpen = Date.now()

            doorOpenR.play()
            doorCloseR.pause()
            doorCloseR.currentTime = 0
         }

         doors.r ? usage += 1 : usage -= 1
   }

   document.getElementById('doorsdbug').innerText = `${doors.l}  ${doors.r}`
}

function checkDoor() {
   if (
      (( doors.l && lastDoorLClose+(Math.random()*30+9)*1000 < Date.now() )
      ||
      ( doors.r && lastDoorRClose+(Math.random()*30+9)*1000 < Date.now() ))
      && 
      !doubleDoorUsage
   ) {
      doubleDoorUsage = true
      usage += Object.values(doors).filter(e=>(e)).length
   }

   setTimeout(() => {
      checkDoor()
   }, 1000);
}

checkDoor()

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

const cameraNames = {
   0: 'Right Hall',
   1: 'Stage',
   2: 'Party Room 2',
   3: 'Pirate Cove',
   4: 'Party Room 1',
   5: 'Entrance',
   6: 'Saferoom',
   7: 'Main Hall',
   8: 'Left Hall',
   9: 'Dining',
   10: 'Dining',
}

function switchCamera(num) {
   if (won) return

   currentCamera = num
   num = num - 1
   document.getElementById('gamemapcurrentcameraname').innerText = cameraNames[num].toUpperCase()

   var roomsWithCameras = Object.entries(nightData.rooms).filter((e) => (e[1].hasCamera))
   
   // freddy = 1, bonnie = 2, pita = 4, zajaczkowska = 8
   var roomData = roomsWithCameras.at(num)
   var currentAnimatronics = roomData[1].current

   var sumOfAnim = 0

   currentAnimatronics.forEach(id => {
      sumOfAnim += Math.pow(2, id)
   });

   console.log(roomData[0], 'sum', sumOfAnim)

   if (!document.getElementsByClassName('cam')[0].src.endsWith(`/assets/rooms/${num}-${sumOfAnim}.webp`)) {
      if (iscameraon) { new Audio('/assets/audio/camera-switch.ogg').play() }
      document.getElementsByClassName('static')[0].classList.add('high')
      document.getElementsByClassName('cam')[0].src = `/assets/rooms/${num}-${sumOfAnim}.webp`

   }


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