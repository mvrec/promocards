const tkTitleSelector = document.getElementById("tkTitleSelector");
const tkArtistSelector = document.getElementById("tkArtistSelector");
const hcLogoToggler = document.getElementById("hcLogoToggler");
var bgColor = document.getElementById("bg-color");
var newColor;

document.getElementById("bg-color").addEventListener("change", function () {
    var Nbackground = "#202020 #d32f2f #c2185b #7b1fa2 #512da8 #303f9f #1976d2 #0288d1 #0097a7 #00796b #388e3c #689f38 #afb42b #fbc02d #ffa000 #f57c00 #e64a19 #5d4037 #616161 #455a64 #1683ac".split(" ")[bgColor.selectedIndex];
    document.getElementById("canvas").style.backgroundColor = Nbackground;
    newColor = Nbackground;
    process();
}); 
document.getElementById("SelectBtn").addEventListener("click", function() {
  $("#form").fadeOut(1000);
  $("#info").css("transform", `translateX(100%)`);
  $("#info").fadeOut(1000);
  $("#selectTrack").fadeIn(2000);
  $("#selectTrack").css("transform", `translateX(0)`);
});


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const downloader = document.getElementById("downloader");

const mvMarkLogo = new Image();
mvMarkLogo.src =
  "img/mvrecmark.png";
mvMarkLogo.crossOrigin = "Anonymous";

const mvMainLogo = new Image();
mvMainLogo.src =
  "img/checkitnow01.png";
mvMainLogo.crossOrigin = "Anonymous";

const bgImage = new Image();
bgImage.crossOrigin = "Anonymous";

function addBgImage() {
  bgImage.src = coverImage;
    var setNewcolor = newColor;
    ctx.fillStyle = setNewcolor;
    ctx.fillRect(0, 0, 1920, 1080);
    ctx.save();
    roundedImage(ctx, 170, 300, 550, 550, 20);
    ctx.clip();
   // bgImage.crossOrigin = "Anonymous";
    ctx.drawImage(bgImage, 170, 300, 550, 550);  
    ctx.restore();
    
    hcLogo();
    tkTitleSelector.value.length === 0 ? null : TitleSelector()
    tkArtistSelector.value.length === 0 ? null : ArtistSelector()
    
  function roundedImage(ctx1, x, y, width, height, radius) {
    ctx1.beginPath();
    ctx1.moveTo(x + radius, y);
    ctx1.lineTo(x + width - radius, y);
    ctx1.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx1.lineTo(x + width, y + height - radius);
    ctx1.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx1.lineTo(x + radius, y + height);
    ctx1.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx1.lineTo(x, y + radius);
    ctx1.quadraticCurveTo(x, y, x + radius, y);
    ctx1.closePath();
  }
  
}

function TitleSelector() {
  let tkTtl = tkTitleSelector.value;

  ctx.fillStyle = "#fff";
  ctx.lineWidth = 12;
  ctx.font = "40px sans-serif";
  ctx.textBaseline = "bottom";

  ctx.save();
  //ctx.scale(1.05, 0.98);
  ctx.fillText(tkTtl, 750, 550);
  ctx.fillRect(0, 475, 80, 12);
  ctx.restore();
 // ctx.fill();
}

function ArtistSelector() {
  let tkAts = tkArtistSelector.value;
  ctx.fillStyle = "#fff";
  ctx.lineWidth = 12;
  ctx.font = "40px sans-serif";
  ctx.textBaseline = "bottom";
  ctx.save();
  ctx.fillText(tkAts, 750, 620);
  ctx.restore();
}

function hcLogo() {
  ctx.drawImage(mvMarkLogo, 50, 50, 100, 100);
  ctx.drawImage(mvMainLogo, 1240, 810, 600, 175);
}

function process() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  coverImage.length === 0 ? (
    hcLogo(),
    tkTitleSelector.value.length === 0 ? null : TitleSelector(),
    tkArtistSelector.value.length === 0 ? null : ArtistSelector()
  ) : addBgImage()
}

function finishEditing() {
  let downloadShow = document.createElement('div');
  downloadShow.className = "downloadShow";
  downloadShow.textContent = "Your thumbnail will be downloaded."
  document.body.appendChild(downloadShow);
  setTimeout(() => {
    downloadShow.style.opacity = "1"
  }, 0)
  setTimeout(() => {
    downloadShow.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(downloadShow)
    }, 100)
  }, 5500);

  downloader.download = `${tkTitleSelector.value}.png`;
  downloader.href = canvas.toDataURL("image/png")
}

let keyCheat = [];
let darkText = "invert"
let oldTime = Date.now();

document.onkeydown = (e) => {
  if (darkText.indexOf(e.key.toLowerCase()) !== -1) {
    let newTime = Date.now();
    if (newTime - oldTime > 1000) {
      keyCheat = []
    }
    oldTime = newTime;

    keyCheat.push(e.key.toLowerCase())
    keyCheat.join('') === "invert" ? (darken(document.body.classList.contains("dark") ? "light" : "dark"), keyCheat = []) : null
  }
}