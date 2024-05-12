$(document).ready(function () {
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

    ];

    let length = images.length;

    $("#sliderLeft").click(function () {
        slideImages("left");
    });
    $("#sliderRight").click(function () {
        slideImages("right");
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
    let slideImages = function (direction) {
        switch (direction) {
            case "left":
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
            case "right":
                currentImages;
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
        intImages(currentImages);
        console.log(width);
    };
});
