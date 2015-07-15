/* $('.acordeon__titulo').on('click', function() {	
	// var $contenido = $(this).siblings('.acordeon__contenido')
	var $contenido = $(this).next();

	$contenido.toggle('easing');
	$('.acordeon__contenido').not($contenido).hide('easing');
}); */

$('.acordeon').on('click', 'h2', function() {	
	var $t = $(this);
	var $tp = $t.next();
	var $p = $t.parent().siblings().find('p');
	
    $tp.slideToggle();
    $p.slideUp();
})