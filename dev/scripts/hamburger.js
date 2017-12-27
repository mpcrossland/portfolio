$( ".cross" ).hide();
$( ".h-nav" ).hide();
$( ".hamburger" ).click(function() {
$( ".h-nav" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".h-nav" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});