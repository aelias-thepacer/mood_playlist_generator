// Sets up a list of songs as well as their artist and fun facts.
let songArraySad = [{songName:"Tourniquet", songArtist:"Zach Bryan"}, {songName:"Hurt", songArtist:"Nine Inch Nails"}, {songName:"Losing My Religion (Cover)", songArtist:"Shawn James"}, {songName:"I Hope That I Don't Fall in Love With You", songArtist:"Tom Waits"}, {songName:"Follow You to Virgie", songArtist:"Tyler Childers"}, {songName:"Achilles Come Down", songArtist:"Gang of Youths"}, {songName:"Atlantis", songArtist:"Seafret"}, {songName:"Goodbye", songArtist:"Arcane"}, {songName:"What Could Have Been", songArtist:"Arcane"}, {songName:"I Really Want To Stay At Your House", songArtist:"Rosa Walton"}, {songName:"The Path (A New Beginning)", songArtist:"Gustavo Santolalla"}, {songName:"Oh Girl", songArtist:"Eagles Of Death Of Metal"}, {songName:"Shes Gone Away", songArtist:"Nine Inch Nails"}, {songName:"This Isnt The Place", songArtist:"Nine Inch Nails"}, {songName:"My Stress", songArtist:"NF"}, {songName:"Heavy", songArtist:"Linkin Park"}, {songName:"Hollow", songArtist:"Lo Spirit"}, {songName:"18002738255", songArtist:"Logic"}, {songName:"All Messed Up", songArtist:"The Amity Affliction"}];
let songArrayHappy = [{songName:"Why We Lose", songArtist:"Cartoon"},{songName:"Isle Unto Thyself", songArtist:"Miracle Music"},{songName:"Wings (Aether 2)", songArtist:"Emile van Krieken"},{songName:"Nimbostratus", songArtist:"Peppsen"},{songName:"Faster Than Light", songArtist:"Paradox Interactive"},{songName:"Giza Butler", songArtist:"Sleep"},{songName:"Hyacinth", songArtist:"Will & Floyd"},{songName:"Big in Japan", songArtist:"Tom Waits"},{songName:"Hero Of The Day", songArtist:"Metallica"},{songName:"Batshit", songArtist:"Lights"},{songName:"Sunroof", songArtist:"Nicky Youre & Day"},{songName:"Not the 1975", songArtist:"Knox"},{songName:"Sh-Boom", songArtist:"The Crew Cuts"},{songName:"Way of the Triune God", songArtist:"Tyler Childers"},{songName:"Ocean Man", songArtist:"Ween"},{songName:"Bite Hard", songArtist:"Franz Ferdinand"},{songName:"Night Life", songArtist:"Mrs. Magician"}];
let songArrayLove = [{songName:"Make It Wit Chu", songArtist:"Queens of The Stone Age"}, {songName: "In Your Arms" , songArtist: "Hellogoodbye"},{songName: "Sleazy Bed Track" , songArtist: "The Bluetones"},{songName: "Pay No Rent" , songArtist: "Turnpike Troubadours"},{songName: "You Got Me" , songArtist: "The Roots"},{songName: "We Are The Night" , songArtist: "Madison Mars"},{songName: "Kiss From A Rose" , songArtist: "Wake Me"},{songName: "Come 2 Me" , songArtist: "Johnny Goth"},{songName: "Too Sweet" , songArtist: "Hozier"},{songName: "Ride It" , songArtist: "Regard"},{songName: "Sun To Me" , songArtist: "Machine Gun Kelly"},{songName: "Life Was Easier When I Only Cared About Me" , songArtist: "Bad Suns"},{songName:"DYWTYLM", songArtist:"Sleep Token"}];
let songArrayAngry = [{songName:"Rats", songArtist:"Cancer Bats"}, {songName:"My Heart is the Worst Kind of Weapon", songArist:"Fall Out Boy"}, {songName:"Track 1 R", songArtist:"'68"},{songName:"Mother", songArtist:"IDLES"},{songName:"Troglodyte", songArtist:"Viagra Boys"}, {songName:"Blood And Thunder", songArtsit:"Mastodon"}, {songName:"Cyberpsychosis", songArtist:"Faderhead"}, {songName:"God Run", songArtist:"505 Games"}, {songName:"Blood Code", songArtist:"Le Castle Vania"}, {songName:"Half-Life", songArtist:"Essenger"}, {songName:"Purify", songArtist:"Metallica"}, {songName:"Freebooter", songArtist:"High On Fire"}, {songName:"One Gun", songArtist:"Lamb Of God"}, {songName:"Explosia", songArtist:"Gojira"}, {songName:"Why You Gotta Kick Me While I’m Down", songArtist:"Bring Me The Horizon"}, {songName:"Deep End", songArtist:" I Prevail"}, {songName:"Reinventing Your Exit", songArtist:"Underoath"}, {songName:"The Crown", songArtist:"Stick To Your Guns"}];
let songArrayCalm = [{songName:"Blue Reverie", songArtist:"ERRA"},{songName:" We Out Of Sight", songArtist:"Hundredth"},{songName:"Lesser Gods", songArtist:"Ghost Atlas"},{songName:"Slow Motion", songArtist:"Flor"},{songName:"Fluff", songArtist:"Black Sabbath"},{songName:"The Golden Rose", songArtist:"Tom Petty"},{songName:"Intermission", songArtist:"Truckerfighters"},{songName:"Kana Kassy", songArtist:"Ali Farke Toure"},{songName:"Sweden", songArtist:"C418"},{songName:"The River", songArtist:"Andrew Prahlow"},{songName:"Robotic Assist Module", songArtist:"Wojciech Golczewskie"},{songName:"Aria Math", songArtist:"C418"},{songName:"Lost Ember Main Title", songArtist:"Will Morton"},{songName:"Winter Is All Over You (Baauer Remix)", songArtist:"First Aid Kit"},{songName:"Alrighty Aphrodite", songArtist:"Peach Pit"},{songName:"We've Never Met but Can We Have a Cup of Coffee or Something", songArtist:"In Love With A Ghost"},{songName:"Hurt", songArtist:"Yung Lean"},{songName:"November Air", songArtist:"Zach Bryan"}];

// Declares global variables.
let currentMood = songArraySad;
let numberOfSongs = 10;
let song;

// Selects elements from HTML
let songsDivEl = document.querySelector('#songsDiv');
let moodModal = document.querySelector('#moodModal');

// Sets Mood Buttons to visible
function callMoodButtons() {
    moodModal.setAttribute("style", "visibility:visible");
}

// Sets Mood Buttons to hidden
function dismissMoodButtons() {
    moodModal.setAttribute("style", "visibility:hidden");
}

// Selects [songsCalled] number of songs from [songArray] and calls objectMaker on each.
function songSelector(songArray, songsCalled) {
    console.log("ran songSelector");
    songsDivEl.innerHTML = "";
    for (let index = 0; index < songsCalled; index++) {
        song = songArray[Math.floor(Math.random() * songArray.length)];
        console.log(song);
        objectMaker(song);
        
    }
}

// Creates new HTML elements within songsDivEl and appends them.
function objectMaker(object) {
    let articleEl = document.createElement('article');
    let titleEl = document.createElement('h2');
    let contentEl = document.createElement('blockquote');
    let posterEl = document.createElement('p');

    titleEl.textContent = object.songName;
    contentEl.textContent = object.songArtist;

    songsDivEl.appendChild(articleEl);
    articleEl.appendChild(titleEl);
    articleEl.appendChild(contentEl);
    articleEl.appendChild(posterEl);
}

// Changes currentMood based on string input and dismisses mood buttons
function moodSelector(mood) {
    if (mood == "happy") {
        currentMood = songArrayHappy;
    } else if (mood == "sad") {
        currentMood = songArraySad;
    } else if (mood == "angry") {
        currentMood = songArrayAngry;
    } else if (mood == "love") {
        currentMood = songArrayLove;
    } else if (mood == "calm") {
        currentMood = songArrayCalm;
    }
    dismissMoodButtons();
}

// Sets up object listeners for buttons.
document.getElementById("rerollButton").addEventListener("click", () => songSelector(currentMood, numberOfSongs));
document.getElementById("newMoodButton").addEventListener("click", callMoodButtons);
document.getElementById("sadButton").addEventListener("click", () => moodSelector("sad"));
document.getElementById("angryButton").addEventListener("click", () => moodSelector("angry"));
document.getElementById("happyButton").addEventListener("click", () => moodSelector("happy"));
document.getElementById("loveButton").addEventListener("click", () => moodSelector("love"));


songSelector(songArraySad, 10);
dismissMoodButtons();