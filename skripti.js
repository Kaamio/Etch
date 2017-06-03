$(document).ready(function() {
	$('#btn').click(function() {
		var grid = prompt("Grid size (0-64)?")
		
if (grid>0 && grid < 64) {
	teeRuudut(grid);
	adjustGrid(grid);
}

else if (grid==0) {
	alert("Size can't be 0!")
}

else if (grid > 64) {
	alert("Grid size has to be 0-64!")
}
else {
	alert("Size has to be a number!")
}

$('.ruutu').hover(function() {
	$(this).addClass('vari');
});

});





		
function teeRuudut(sivu) {
	for(var i=0; i<sivu*sivu; i++) {
	$('.container').append("<div class='ruutu'> </div>")
		}
}
	

function adjustGrid(koko) {
	var korkeus = 540/koko;
	var leveys = 540/koko;

	$('.ruutu').css("height", korkeus);
	$('.ruutu').css("width", leveys);
}

});