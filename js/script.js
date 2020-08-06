$(document).ready(function () {
    $(".acc_inner").hide();
    const accul_li = $(".accordion > .acc_ul > li");
    $(accul_li).click(function () {
        $(this).css("border-bottom", "none");
        $(accul_li).not(this).css("border-bottom", "1px solid #d8d8d8");
    });
    $(".accordion > .acc_ul > li > a").click(function () {
        $(this).next().slideDown("slow");
        $(".accordion > .acc_ul > li > a").not(this).next().slideUp("slow");
    });
    const allBtn = $(".header > .r_menu > .all");
    const closeBtn = $("#sideNav > .side_header > .menus > .close");

    $(allBtn).click(function () {
        $("#sideNav").animate({
            left: "0px"
        }, 300);
    });
    $(closeBtn).click(function () {
        $("#sideNav").animate({
            left: "-320px"
        }, 300);
    });

    const moreBtn = $(".header > .r_menu > .more");
    $(".dropMenu").hide();
    $(moreBtn).click(function () {
        if ($(".dropMenu").css("display") == "none") {
            $(".dropMenu").show();
        } else {
            $(".dropMenu").hide();
        }
    });
});