// Name :- Vishal Manojbhai Popat
// Student Number :- 8866335

// document ready
$(document).ready(() => {
    // hover effect for logos
    $(".logos .google").hover(
        () => {
            $(".logos .google").attr("src", "images/Google-color.png");
            $(".logos .google").css("cursor", "pointer");
        },
        () => {
            $(".logos .google").attr("src", "images/Google-bw.png");
        }
    );

    $(".logos .ibm").hover(
        () => {
            $(".logos .ibm").attr("src", "images/IBM-color.png");
            $(".logos .ibm").css("cursor", "pointer");
        },
        () => {
            $(".logos .ibm").attr("src", "images/IBM-bw.png");
        }
    );

    $(".logos .meta").hover(
        () => {
            $(".logos .meta").attr("src", "images/Meta-color.png");
            $(".logos .meta").css("cursor", "pointer");
        },
        () => {
            $(".logos .meta").attr("src", "images/Meta-bw.png");
        }
    );

    $(".logos .microsoft").hover(
        () => {
            $(".logos .microsoft").attr("src", "images/Microsoft-color.png");
            $(".logos .microsoft").css("cursor", "pointer");
        },
        () => {
            $(".logos .microsoft").attr("src", "images/Microsoft-bw.png");
        }
    );

    $(".logos .aws").hover(
        () => {
            $(".logos .aws").attr("src", "images/aws-color.png");
            $(".logos .aws").css("cursor", "pointer");
        },
        () => {
            $(".logos .aws").attr("src", "images/aws-bw.png");
        }
    );

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    $(".course-tile button").click((e) => {
        // store the clicked link in a constant
        const clickedLink = e.currentTarget;

        // find the previous <p> element and toggle
        const targetDiv = $(clickedLink).parent().prev("p");
        targetDiv.slideToggle();

        // update the link text based on the button text
        $(clickedLink).text(
            $(clickedLink).text() == "Show more" ? "Show Less" : "Show more"
        );
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    // hover effect for course images
    let image = $(".course-thumbnail img"), //Or some other selector
        imgWidth = image.width(),
        imgHeight = image.height();
    $(".course-thumbnail img").hover(
        function () {
            //The mouseover
            $(this).animate({ height: imgHeight * 1.1, width: imgWidth * 1.1 }, 200);
        },
        function () {
            $(this).animate({ height: imgHeight, width: imgWidth }, 200);
        }
    );

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    // hover effect for navbar
    let nav = $(".navbar-nav li a svg"), //Or some other selector
        imageWidth = nav.width(),
        imageHeight = nav.height();
    $(".navbar-nav li a svg").hover(
        function () {
            //The mouseover
            $(this).animate(
                { height: imageHeight * 1.5, width: imageWidth * 1.5 },
                200
            );
        },
        function () {
            $(this).animate({ height: imageHeight, width: imageWidth }, 200);
        }
    );

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    // manual slider
    $(".rightarrow").click(() => {
        let currentSlide = $(".cognify-success-story-slider .active");
        let nextSlide = currentSlide.next();
        let currentDot = $(".dots .active");
        let nextDot = currentDot.next();
        if (nextSlide.length) {
            currentSlide.fadeOut(500, () => {
                nextSlide.fadeIn(500);
                currentSlide.removeClass("active");
                nextSlide.addClass("active");
                currentDot.removeClass("active");
                nextDot.addClass("active");
            });
        }
    });
    $(".leftarrow").click(() => {
        let currentSlide = $(".cognify-success-story-slider .active");
        let prevSlide = currentSlide.prev();
        let currentDot = $(".dots .active");
        let prevDot = currentDot.prev();
        if (prevSlide.length) {
            currentSlide.fadeOut(500, () => {
                prevSlide.fadeIn(500);
                currentSlide.removeClass("active");
                prevSlide.addClass("active");
                currentDot.removeClass("active");
                prevDot.addClass("active");
            });
        }
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // automatic slider
    setInterval(() => {
        let currentSlide = $(".cognify-success-story-slider .active");
        let nextSlide = currentSlide.next();
        let currentDot = $(".dots .active");
        let nextDot = currentDot.next();
        if (nextSlide.length) {
            currentSlide.fadeOut(1000, () => {
                nextSlide.fadeIn(1000);
                currentSlide.removeClass("active");
                nextSlide.addClass("active");
                currentDot.removeClass("active");
                nextDot.addClass("active");
            });
        } else {
            $(".cognify-success-story-slider .active")
                .removeClass("active")
                .css("display", "none");
            $(".cognify-success-story-slider div:first-child").addClass("active");
            $(".dots .active").removeClass("active");
            $(".dots span:first-child").addClass("active");
            $(".cognify-success-story-slider .active").fadeOut(3000, () => {
                $(".cognify-success-story-slider div:first-child").fadeIn(3000);
            });
        }
    }, 6000);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    // image hover effect for about us page
    $(".aboutus-img").mousemove(function (e) {
        var x = (e.pageX - $(this).offset().left) / $(this).width() - 0.5;
        var y = (e.pageY - $(this).offset().top) / $(this).height() - 0.5;
        var angle = 20;
        $(this)
            .find("img")
            .css(
                "transform",
                "rotateY(" + x * angle + "deg) rotateX(" + y * -angle + "deg)"
            );
    });
});
