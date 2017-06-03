$(document).ready(function() {
	$('#btn').click(function() {
		$('.container').empty();
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
	$(this).css("background-color", "black");
});

});
	$('#btn3').click(function() {
	$('.ruutu').css("background-color", "white")
});

$('#btn2').click(function() {
		$('.container').empty();
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
	var randomColor = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
		$(this).css("background-color", randomColor);

});

$('#btn3').click(function() {
	$('.ruutu').css("background-color", "white")
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