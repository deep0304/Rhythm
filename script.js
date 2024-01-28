let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');
let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;
// document.addEventListener('DOMContentLoaded', function () {
//     const strokes = document.querySelectorAll('.stroke');

//     strokes.forEach(function (stroke) {
//       stroke.style.height = `${Math.random() * 100}%`;
//     });
//   });
const music_list = [
    {
        img : 'images/1000010028.jpg',
        name : 'Chalta Raha',
        artist : 'The Kid LAROI, Aman Lal',
        music : 'music/chalta Raha.mp3'
    },
    {
        img : 'images/1000010029.jpg',
        name : 'Guitar',
        artist : 'Wid Cards',
        music : 'music/Guitar.mp3'
    },
    {
        img : 'images/1000010030.jpg',
        name : 'piano',
        artist : 'Alan Walker',
        music : 'music/piano.mp3'
    },
    {
        img : 'images/1000009872.jpg',
        name : 'WHERE ABOUTS',
        artist : 'arman singh',
        music : 'music/WHERE ABOUTS - Nawab  Jesan (DJJOhAL.Com).mp3'
    },
    {
        img : 'images/1000009873.jpg',
        name : '52 Bars',
        artist : 'Karan Aujla',
        music : 'music/52 Bars.mp3'
    },
    {
        img : 'images/1000009874.jpg',
        name : 'Aaja ve Mahiya X Bohemia',
        artist : 'Afternight Vibes',
        music : 'music/Aaja Ve Mahiya X Bohemia (Mega RapMix) _Afternightvibe _ _A3AID _ Imran Khan X Bohemia(MP3_160K).mp3'
    },
    {
        img : 'images/1000009875.jpg',
        name : 'Admiring-you',
        artist : 'Karan Aujla,(preston Pablo)',
        music : 'music/Admiring-you.mp3'
    },
    {
        img : 'images/1000009876.jpg',
        Name : 'Adore',
        artist : 'Amrinder Gill',
        music : 'music/Adore.mp3'
    },
    {
        img : 'images/1000009877.jpg',
        name : 'Akhbaar',
        artist : 'Harmeet Aulakh',
        music : 'music/Akhbaar.mp3'
    },
    {
        img : 'images/1000009879.jpg',
        name : 'Angles',
        artist : 'HRJXT',
        music : 'music/Angels.mp3'
    },
    {
        img : 'images/1000009880.jpg',
        name : 'ATTRACTION - SUKHA',
        artist : 'Sukha',
        music : 'music/ATTRACTION - SUKHA _ PRODGK(MP3_320K).mp3'
    },
   /* {
        img : 'images/1000009881.jpg',
        name : 'Bachke Backhe',
        artist : 'Karan Aujla',
        music : 'music/Bachke BAchke(feet Yarah).mp3'
    },
      {
        img : 'images/1000009884.jpg',
        name : 'Baller',
        artist : 'Shubh',
        music : 'music/Baller.mp3'
    }, */
    {
        img : 'images/1000009882.jpg',
        name : 'Back of car',
        artist : 'Prem Dhillon',
        music : 'music/Back of car.mp3'
    },
    {
        img : 'images/1000009883.jpg',
        name : 'Badberry',
        artist : 'Prem Dhillon',
        music : 'music/Badberry.mp3'
    },
  
    {
        img : 'images/1000009885.jpg',
        name : 'Bapu',
        artist : 'Sidhu musa wala',
        music : 'music/Bapu (Full Song ) Sidhu Moose wala _ New Punjabi Song 2020 _ Bebe Bapu Song_(MP3_160K)_1.mp3'
    },
    {
        img : 'images/1000009886.jpg',
        name : 'Bewafa Coka - (Raag)',
        artist : 'Jordan Sandhu',
        music : 'music/Bewafa Coka - (Raag.Fm).mp3'
    },
    {
        img : 'images/1000009887.jpg',
        name : 'Black Pink ',
        artist : 'Shree brar',
        music : 'music/Black Pink - Shree brar.mp3'
    },
    {
        img : 'images/1000009888.jpg',
        name : 'Blackberry Sap',
        artist : 'Black Sons',
        music : 'music/Blackberry Sap.mp3'
    }, 
    
    {
        img : 'images/1000009889.jpg',
        name : 'Boo Thang',
        artist : 'Jordhan Sandhu',
        music : 'music/Boo Thang.mp3'
    }, 
    {
        img : 'images/1000009890.jpg',
        name : 'California Love',
        artist : 'Cheema Y',
        music : 'music/California Love.mp3'
    }, 
    
    {
        img : 'images/1000009891.jpg',
        name : 'Chances',
        artist : 'AP Dhillon',
        music : 'music/Chances.mp3'
    },
     {
        img : 'images/1000009892.jpg',
        name : 'cheques',
        artist : 'Shubh',
        music : 'music/Cheques.mp3'
    }, 
    {
        img : 'images/1000009893.jpg',
        name : 'confess',
        artist : 'Amninder Bugga',
        music : 'music/Confess.mp3'
    },
     {
        img : 'images/1000009894.jpg',
        name : 'Deewana',
        artist : 'Gurshabad',
        music : 'music/Deewana.mp3'
    },
     {
        img : 'images/1000009895.jpg',
        name : 'Desi Hood',
        artist : 'Sabi Bhinder',
        music : 'music/Desi Hood.mp3'
    },
    {
        img : 'images/1000009896.jpg',
        name : 'Dil Mangeya',
        artist : 'Amantej Hundal',
        music : 'music/Dil Mangeya.mp3'
    }, 
      {
        img : 'images/1000009897.jpg',
        name : 'Distance Love Song',
        artist : 'Zehr Vibe',
        music : 'music/Distance Love Song.mp3'
    },  
     {
        img : 'images/1000009898.jpg',
        name : 'Do or Die',
        artist : 'Jassa Dhillon',
        music : 'music/Do or Die.mp3'
    }, 

      {
        img : 'images/1000009899.jpg',
        name : 'Do You Remember',
        artist : 'Jordhan Shandu',
        music : 'music/Do You Remember - (amlijatt.in).mp3'
    },  
     {
        img : 'images/1000009900.jpg',
        name : 'Elevated',
        artist : 'Shubh',
        music : 'music/Elevated.mp3'
    }, 
      {
        img : 'images/1000009901.jpg',
        name : 'Enna Khush Rakhunga',
        artist : 'Jordhan Sindhu',
        music : 'music/Enna Khush Rakhunga - Sucha Yaar (DjPunjab.Com).mp3'
    }, 
      {
        img : 'images/1000009902.jpg',
        name : 'Faizal',
        artist : 'Varinder Brar',
        music : 'music/Faizal.mp3'
    },
    {
        img : 'images/1000009903.jpg',
        name : 'Free Flow',
        artist : 'Zehr Vibe',
        music : 'music/Free Flow.mp3'
    },
    {
        img : 'images/1000009904.jpg',
        name : 'Fully-Loaded-Tegi-pannu',
        artist : 'Tegi Pannu',
        music : 'music/Fully-Loaded-Tegi-Pannu.mp3'
    }, 
      {
        img : 'images/1000009905.jpg',
        name : 'Gallan Dilaan Diyaan-kaka',
        artist : 'kaka',
        music : 'music/Gallaan Dilaan Diyaan - Kaka (DJJOhAL.Com).mp3'
    },
    {
        img : 'images/1000009906.jpg',
        name : 'Gol Chowk - HUstinder Gurlez Akthar',
        artist : 'Hustinder & Gurlex Akhtar',
        music : 'music/Gol Chowk - Hustinder  Gurlez Akhtar (DJJOhAL.Com).mp3'
    },
    {
        img : 'images/1000009907.jpg',
        name : 'Gulab',
        artist : 'GUlzaal',
        music : 'music/Gulab.mp3'
    },
    {
        img : 'images/1000009908.jpg',
        name : 'Haal',
        artist : 'Harnoor',
        music : 'music/Haal.mp3'
    },
    {
        img : 'images/1000009909.jpg',
        name : 'Humnava Mere',
        artist : 'Jubin Nautiyal',
        music : 'music/Humnava Mere - Jubin Nautiyal.mp3'
    }, 
     {
        img : 'images/1000009910.jpg',
        name : 'IKK Number',
        artist : 'Gurnam Bhullar',
        music : 'music/Ikk Number (RiskyJatt.Com).mp3'
    }, 
     {
        img : 'images/1000009911.jpg',
        name : 'Into-You',
        artist : 'Tegi-pannu',
        music : 'music/Into You.mp3'
    },
      {
        img : 'images/1000009912.jpg',
        name : 'Introvert-Girl',
        artist : 'Snappy',
        music : 'music/Introvert-Girl.mp3'
    }, 
     {
        img : 'images/1000009913.jpg',
        name : 'Jaan Jatti Di',
        artist : 'Jordhan Sandhu',
        music : 'music/Jaan Jatti Di.mp3'
    },
      {
        img : 'images/1000009914.jpg',
        name : 'jail',
        artist : 'Navaan Sandhu',
        music : 'music/Jail.mp3'
    },  {
        img : 'images/1000009915.jpg',
        name : 'jatt Breed',
        artist : 'Navaan Sandhu',
        music : 'music/Jatt Breed.mp3'
    },  {
        img : 'images/1000009916.jpg',
        name : 'jhanjar Jhumke',
        artist : 'Tippu Sultan',
        music : 'music/Jhanjar Jhumke - Tippu Sultan.mp3'
    },  {
        img : 'images/1000009917.jpg',
        name : 'Long black',
        artist : 'Arjan dhilon',
        music : 'music/Long Back.mp3'
    },  {
        img : 'images/1000009918.jpg',
        name : 'Mood Swings',
        artist : 'Tegi pannu',
        music : 'music/Mood Swings.mp3'
    },  {
        img : 'images/1000009919.jpg',
        name : 'My Prime',
        artist : 'Navaan Sandhu',
        music : 'music/My prime.mp3'
    },  {
        img : 'images/1000009920.jpg',
        name : 'Nachdi Ton',
        artist : 'Hustinder',
        music : 'music/Nachdi Ton.mp3'
    },
    {
        img : 'images/1000009921.jpg',
        name : 'Never Mine',
        artist : 'Harnoor',
        music : 'music/Never Mine.mp3'
    },

   
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    let Color3 = populate('#');
    let Color4 = populate('#');
    let Color5 = populate('#');


    

    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ', ' + Color3 +', ' + Color4 +")";
   
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}


