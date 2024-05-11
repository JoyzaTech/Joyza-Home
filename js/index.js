$(document).ready(function(){

    let width = window.innerWidth
    let height = window.innerHeight

    let dimensions = [width, height]

    let slide = 3;

    $('#next').click(function(){
        if(slide < 4){
            $('#item'+(slide-2)).css('visibility', 'hidden')
            $('#item'+(slide-2)).css('grid-area', 'none')
            $('#item'+(slide-1)).css('grid-area', 'slide1')
            $('#item'+(slide)).css('grid-area', 'slide2')
            $('#item'+(slide+1)).css('grid-area', 'slide3')
            $('#item'+(slide+1)).css('visibility', 'visible')
            $('#item'+slide).css('visibility', 'visible')
            $('#item'+(slide-1)).css('visiibility', 'visible')
            slide++
        }
        else if(slide == 4){
            $('#item'+(slide-2)).css('visibility', 'hidden')
            $('#item'+(slide-2)).css('grid-area', 'none')
            $('#item'+(slide-1)).css('grid-area', 'slide1')
            $('#item'+(slide)).css('grid-area', 'slide2')
            $('#item'+(slide+1)).css('grid-area', 'slide3')
            $('#item'+(slide+1)).css('visibility', 'visible')
            $('#item'+slide).css('visibility', 'visible')
            $('#item'+(slide-1)).css('visiibility', 'visible')
        }
    });
    
    $('#back').click(function(){
        if(slide >= 3){
            $('#item' + slide).css('visibility', 'hidden')
            $('#item' + (slide-1)).css('visibility', 'visible')
            $('#item' + (slide-2)).css('visibility', 'visible')
            $('#item' + (slide-3)).css('visibility', 'visible')
            $('#item' + slide).css('grid-area', 'none')
            $('#item' + (slide-1)).css('grid-area', 'slide3')
            $('#item' + (slide-2)).css('grid-area', 'slide2')
            $('#item' + (slide-3)).css('grid-area', 'slide1')
            slide--
        }
    })
});