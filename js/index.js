$(document).ready(function(){

    let width = window.innerWidth
    let height = window.innerHeight

    let dimensions = [width, height]

    let slide = 1
    $('#next').click(function(){
        if(slide == 1){
            $('#item' + slide).css('visibility', 'hidden')
            $('#item' + (slide+3)).css('visibility', 'visible')
            slide++
            for(;slide<=4;slide++){
                $('#item' + slide).css('grid-area', 'slide' + (slide-1))
            }
            slide = 2
        }
    })
});