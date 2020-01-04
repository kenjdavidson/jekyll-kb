$(function() {
    const MAX_WIDTH = 992;
    const MAX_WIDTH_SEL = '(max-width: ' + MAX_WIDTH + 'px)';

    // Initialize the Mmenu and drawer, providing the applicable handling of ui actions
    // Sadly this is hard coded based on Bootstrap "md" breakpoint
    const menu = new MmenuLight( document.querySelector( "#main-navigation" ), MAX_WIDTH_SEL );
    const drawer = menu.offcanvas({});
    $( "button#open-menu" ).click( (event) => { event.preventDefault(); drawer.open(); });          
    $( "button#close-menu" ).click( (event) => { event.preventDefault(); drawer.close(); });   

    // Scene controlling the height of the main navigation to ensure that it's full height
    // is always available.
    const navbar = $('nav#primary-navbar');
    const navigation = $('#main-navigation-wrapper');
    initScrollScenes();

    $( window ).on('resize', initScrollScenes);

    function initScrollScenes() {
        if (window.innerWidth > MAX_WIDTH) {  
            const controller = new ScrollMagic.Controller();
            const menuHeightScene = new ScrollMagic.Scene({ duration: navbar.outerHeight() })
                .addTo(controller)
                .on("progress", function (event) {
                    navigation.css({
                        'max-height': window.innerHeight - ((1 - event.progress) * navbar.outerHeight()),
                        'position': 1 === event.progress ? 'sticky' : 'initial',
                        'top': 1 === event.progress ? 0 : undefined
                    });                        
                });
        } else {
            navigation.css({
                'max-height': window.innerHeight
            });
        }
    }
});