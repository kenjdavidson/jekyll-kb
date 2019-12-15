$(function() {
    initializeMenu();

    function initializeMenu() {
        const menu = new MmenuLight( document.querySelector( "#main-navigation" ), "(max-width: 992px)" );
        const drawer = menu.offcanvas({});
        
        $( "button#open-menu" ).click( (event) => {
            event.preventDefault();
            drawer.open();
        });      
        
        $( "button#close-menu" ).click( (event) => {
            event.preventDefault();
            drawer.close();
        });   
    }
});