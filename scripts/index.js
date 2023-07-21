window.onload = function() {
    Particles.init({
      selector: ".background", connectParticles: false, maxParticles: 100, color: "#FFFFFF", 
      sizeVariations: 10, speed: 0.8
    });
};
var background = $("#particles-js");
$(document).on({
    keydown : function(event){
        console.log(event);
        background.css("background-color", getRandomColor());}, 
    click: function(event){
        console.log(event);
        background.css("background-color", getRandomColor());
}});

/*$(".img").on("click", function(){

});*/

// CLICK SUR IMAGE
$(".img").on({
    click: function(){
        //PREMIERE ACTION : CHANGE LE TITRE EN NOM DE L'ARTISTE
        var name = $(this).attr("name");
        $(".titre").text(name).css("text-transform", "uppercase").css("cursor", "pointer");

        //DEUXIÈME ACTION : ANIME LES IMAGES
        $(this).toggleClass("flash");

        //TROISIÈME ACTION : JOUE LA MUSIQUE
        var nameOfMusic = $(this).attr("name") + ".mp3"; 
        playMusic(nameOfMusic);
        background.css("background-color", getRandomColor());
    },
    mouseenter: function(){
        //DEUXIÈME ACTION
        $(this).toggleClass("flash");}
});

// BOUTON PLAY ET INPUT QUI RÉCUPÈRE LE NOM DE L'ARTISTE 
// ET LE PASSE A LA FONCTION QUI JOUE LA MUSIQUE
$("#btn").on("click", function(){
    var nameOfArtist = $("#input").val();
    $(".titre").text(nameOfArtist).css("text-transform", "uppercase");
    var musicOfArtist = nameOfArtist + ".mp3";
    playMusic(musicOfArtist);
});
$("#input").on("keydown", function(event){
    var nameOfArtist = $("#input").val();
    if(event.key == "Enter"){
        var musicOfArtist = nameOfArtist + ".mp3";
        playMusic(musicOfArtist);
    };
});

// FONCTION QUI JOUE LA MUSIQUE
function playMusic(musicToPlay){
    var music = new Audio(`sounds/${musicToPlay}`);
    music.play();
};

// FONCTION QUI GÉNÈRE DES COULEURS ALÉATOIRES
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    while (color.length < 7) {
        color += letters[Math.round(Math.random()*letters.length)];
    };
    return color;
};