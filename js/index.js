$(document).ready(function(){

    let width = window.innerWidth
    let height = window.innerHeight

    let dimensions = [width, height]

    let slide = 1;

    $('#next').click(function(){
        if($('#item3').css('grid-area', 'slide3')){
            $('#item1').css('visibility', 'hidden')
            $('#item4').css('visibility', 'visible')
            for(let i = 2; i<=4;i++){
                $('#item' + i).css('grid-area', 'slide' + (i-1))
            }
            slide++
        }
        else{
            $('#item' + slide).css('visibility', 'hidden')
            $('#item' + (slide-1)).css('visibility', 'visible')
            $('#item' + (slide+1)).css('grid-area', 'slide1')
        }
    });
    
});