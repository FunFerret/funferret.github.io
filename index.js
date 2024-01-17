const Creatures = [ 'Acrocanthosaurus','Apatosaurus','Arganodus','Auroraceratops','Coahuilaceratops','Elasmosaurus','HorseshoeCrab','Kronosaurus','Ichthyovenator','Lurdusaurus','Megalosaurus','Megaraptor','Mosasaurus','Oryctodromeus','Pachycephalosaurus','Parasaurolophus','Pteranodon','Saichania','Tropeognathus','Tyrannosaurus','Utahraptor','Velociraptor'];
const Herbivores = ['Apatosaurus','Auroraceratops','Coahuilaceratops','HorseshoeCrab','Lurdusaurus','Oryctodromeus','Pachycephalosaurus','Parasaurolophus','Saichania'];
const Carnivores = ['Acrocanthosaurus','Ichthyovenator','Megalosaurus','Megaraptor','Tyrannosaurus','Utahraptor','Velociraptor'];
const Flyers = ['Pteranodon','Tropeognathus'];
const Aquatics = ['Arganodus','Elasmosaurus','Kronosaurus','Mosasaurus'];

//used by header buttons to set the div state as well as the button text
function SHfuntion(loc) {
    var select = document.getElementById(loc),
        but = document.getElementById(loc.concat("button"));
    if (select.style.display === "none") {
        select.style.display = "block";
        but.textContent = "Hide".concat(but.textContent.slice(4));
    } else {
        select.style.display = "none";
        but.textContent = "Show".concat(but.textContent.slice(4));
    }
}