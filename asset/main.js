function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
/* LA ROUE QUI ROTATE DANS COMPETENCE */
/* variables pour le bouton principale */
const wheel = document.getElementById('wheelP');
const title = document.getElementById('title');
const imgRotateOne = document.getElementById('imgRotateOne');
const imgRotateTwo = document.getElementById('imgRotateTwo');
const bgColorImage = document.getElementById('bgColorImage');
const welcomePart = document.getElementById('welcomePage')
/*rotation et couleur du BG du boutont principal*/
imgRotateOne.addEventListener('mouseover', function () {
  bgColorImage.classList.add('bgColorImage');
})
imgRotateOne.addEventListener('mouseout', function () {
  bgColorImage.classList.remove('bgColorImage');
})
/* ROTATION ROUE + ANIMATIONS   */
// icones home 
const iconeWp = document.getElementById('iconeWp');
const iconePhp = document.getElementById('iconePhp');
const iconeHtml = document.getElementById('iconeHtml');
const iconeCss = document.getElementById('iconeCss');
const iconeSass = document.getElementById('iconeSass');
const iconeBoot = document.getElementById('iconeBoot');
const iconeGithub = document.getElementById('iconeGithub');
const iconeJs = document.getElementById('iconeJs');
// incones non affichés
iconeWp.style.display = 'none';
iconePhp.style.display = 'none';
iconeJs.style.display = 'none';
iconeHtml.style.display = 'none';
iconeCss.style.display = 'none';
iconeSass.style.display = 'none';
iconeBoot.style.display = 'none';
iconeGithub.style.display = 'none';
// code pour faire apparaitre icones
imgRotateOne.addEventListener('click', function () {
  if (iconeCss.style.display == 'none') {
    wheel.style.display = "none";
    iconeWp.classList.remove('disableIcone')
    iconePhp.classList.remove('disableIcone')
    iconeJs.classList.remove('disableIcone')
    iconeCss.classList.remove('disableIcone')
    iconeHtml.classList.remove("disableIcone");
    iconeBoot.classList.remove('disableIcone')
    iconeGithub.classList.remove('disableIcone')
    iconeSass.classList.remove('disableIcone')
    imgRotateOne.classList.add('imgOneRotate');
    imgRotateTwo.classList.add('imgTwoRotate');
    setTimeout(() => { iconeHtml.style.display = 'flex' }, 500);
    setTimeout(() => { iconeCss.style.display = 'flex' }, 1000);
    setTimeout(() => { iconeSass.style.display = 'flex' }, 1500);
    setTimeout(() => { iconeBoot.style.display = 'flex' }, 2000);
    setTimeout(() => { iconeGithub.style.display = 'flex' }, 2500);
    setTimeout(() => { iconeJs.style.display = 'flex' }, 3000);
    setTimeout(() => { iconePhp.style.display = 'flex' }, 3500);
    setTimeout(() => { iconeWp.style.display = 'flex' }, 4000);
  } else {
    imgRotateOne.classList.remove('imgOneRotate');
    imgRotateTwo.classList.remove('imgTwoRotate');
    setTimeout(() => { iconeWp.classList.add('disableIcone') }, 0);
    setTimeout(() => { iconeWp.style.display = 'none' }, 500);
    setTimeout(() => { iconePhp.classList.add('disableIcone') }, 500);
    setTimeout(() => { iconePhp.style.display = 'none' }, 1000);
    setTimeout(() => { iconeJs.classList.add('disableIcone') }, 1000);
    setTimeout(() => { iconeJs.style.display = 'none' }, 1500);
    setTimeout(() => { iconeGithub.classList.add('disableIcone') }, 1500);
    setTimeout(() => { iconeGithub.style.display = 'none' }, 2000);
    setTimeout(() => { iconeBoot.classList.add('disableIcone') }, 2000);
    setTimeout(() => { iconeBoot.style.display = 'none' }, 2500);
    setTimeout(() => { iconeSass.classList.add('disableIcone') }, 2500);
    setTimeout(() => { iconeSass.style.display = 'none' }, 3000);
    setTimeout(() => { iconeCss.classList.add('disableIcone') }, 3000);
    setTimeout(() => { iconeCss.style.display = 'none' }, 3500);
    setTimeout(() => { iconeHtml.classList.add('disableIcone') }, 3500);
    setTimeout(() => { iconeHtml.style.display = 'none' }, 4000);
    setTimeout(() => { wheel.style.display = "block"}, 4000);
  }
});
