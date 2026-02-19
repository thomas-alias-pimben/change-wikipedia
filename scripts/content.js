NBIMAGES=6

function renderReadingTime() {
  

  const image = document.querySelector("img[class='mw-logo-icon']");


  image.src= randomWikipeTAn()
  
  image.style.height = '25%';
  image.style.width = '25%';
  
  lol=document.getElementById("accueil_2017_bandeau")


  lol.style.backgroundImage= "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url('"+chrome.runtime.getURL('/images/logo1.png')+"')"

  lol.style.backgroundPosition= "0% -3%";
  lol.style.backgroundSize= "250px 450px";
  
}

function randomWikipeTAn() {
  random = Math.floor(Math.random() * NBIMAGES)+1

  return chrome.runtime.getURL('/images/logo'+random+'.png');
}



repertoire=chrome.runtime.getURL('/images');
chemin_fichiers = opendir(repertoire);



renderReadingTime();












