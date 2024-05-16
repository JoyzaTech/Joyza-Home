$(document).ready(function () {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dimensions = [width, height];

    let images = [
        {
            src: "./images/1st.png",
            alt: "test image 1",
        },
        {
            src: "./images/2nd.png",
            alt: "test image 2",
        },
        {
            src: "./images/3rd.png",
            alt: "test image 3",
        },
        {
            src: "./images/joyza logo.png",
            alt: "test image 4",
        },
        {
            src: "./images/test_img4.jpg",
            alt: "test image 5",
        }

    ];

    let length = images.length;

    $("#sliderLeft").click(function () {
        getNextImages("left");
        console.log('left');
    });
    $("#sliderRight").click(function () {
        getNextImages("right");
        console.log('right');
    });
    let currentImages = [images[0], images[1], images[2]];
    let intImages = function (current) {
        $("#sliderGrid").append(
            `<img class="pictures" id="picture1" src="${current[0].src}" alt="${current[0].alt}">`
        );
        $("#sliderGrid").append(
            `<img class="pictures" id="picture2" src="${current[1].src}" alt="${current[1].alt}">`
        );
        $("#sliderGrid").append(
            `<img class="pictures" id="picture3" src="${current[2].src}" alt="${current[2].alt}">`
        );
    };
    intImages(currentImages);
    let num = 1;
    let getNextImages = function (direction) {
        switch (direction) {
            case "right":
                console.log(num);
                console.log(num % length);
                num = (num - 1 + length) % length;
                try {
                    currentImages = [
                        images[(num - 1 + length) % length],
                        images[num],
                        images[(num + 1) % length],
                    ];
                } finally {
                    console.log(currentImages);
                    break;
                }
            case "left":
                console.log(num);
                console.log(num % length);
                num = (num + 1) % length;
                try {
                    currentImages = [
                        images[(num - 1 + length) % length],
                        images[num],
                        images[(num + 1) % length],
                    ];
                } finally {
                    console.log(currentImages);
                    break;
                }
        }
        width = window.innerWidth;
        height = window.innerHeight;
        ticScreen()
        transition(direction)
    };
    let transition = function (direction) {
        switch(direction){
        case "left":
        if (width <= 1200){

        }
        else{
            $("#sliderGrid").append(
                `<img class="pictures" id="picture3" src="${currentImages[2].src}" alt="${currentImages[2].alt}">`
            );
            $('#picture1').animate({ left: `${left.left - $('#picture1').position().left}px` }, 300);
            $('#picture2').animate({ left: `-=${imageSize.width + 35}px` }, 300);
            $('#picture3').animate({ left: `-=${imageSize.width + 35}px` }, 300);
        }
        break;
        case "right":
            if (width <= 1200){

            }
            else{
                $("#sliderGrid").append(
                    `<img class="pictures" id="picture1" src="${currentImages[0].src}" alt="${currentImages[0].alt}">`
                );
                $('#picture1').animate({ left: `+=${imageSize.width + 35}px` }, 300);
                $('#picture2').animate({ left: `+=${imageSize.width + 35}px` }, 300);
                $('#picture3').animate({ left: `${right.left - $('#picture3').position().left}px` }, 300);
            }

    }
    }
    let ticScreen = function () {
        width = window.innerWidth;
        height = window.innerHeight;
        dimensions = [width, height];
        console.log(dimensions);
        left = $('#postContent').position()
        right = $('#nextContent').position()
        imageSize = {
            width: Math.round($('#picture1').width()),
            height: Math.round($('#picture1').height())
        }
        console.log(left, right);
        console.log(imageSize);
        console.log($('#picture1').position(), $('#picture3').position());
        console.log($('#picture3').position());
    }
    let mainScreen = async function () {
    while (true) {
        await sleep(15000)
        ticScreen()
    }}
    ticScreen()
    mainScreen()
});
