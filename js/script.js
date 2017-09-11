/* Scroll Menu Efect */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $('#nav').addClass('shrink');
        }
        else {
            $('#nav').removeClass('shrink');
        }
    });
});


/* Animate Progress Bar */
$(document).ready(function () {

    var progressBars = [];
    var animationProgressBarFinished = false;

    if (!animationProgressBarFinished) {
        $(window).scroll(function () {
            if (progressBars.length != $(".progress-bar").length) {

                $.each($(".progress-bar"), function () {
                    scrollPositionBottom = $(window).scrollTop() + $(window).height();
                    distanceElementToTop = $(this).offset().top;

                    className = returnSpanClassNameOfChildSpan($(this));

                    if (!classNameExistsInArray(className) && !className.match(/show-percentage/)) {
                        if (scrollPositionBottom > distanceElementToTop) {
                            animateProgressBar(className);
                            progressBars.push(className);
                        }
                    }
                });
            } else {
                animationProgressBarFinished = true;
            }
        });
    }

    function classNameExistsInArray(className) {
        if (className != undefined) {
            return progressBars.indexOf(className) != -1;
        }
        return false;
    }

    function returnSpanClassNameOfChildSpan(element) {
        return element.children("span").attr("class");
    }

    function animateProgressBar(classSpanElement) {
        var percentageValue = $("." + classSpanElement).text();
        $("." + classSpanElement).parent().css('width', percentageValue);
        $("." + classSpanElement).parent().addClass("animated-progress-bar");
        $("." + classSpanElement).addClass("show-percentage");
    }
});