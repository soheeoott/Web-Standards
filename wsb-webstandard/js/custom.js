    // 라이트 박스
    $(".lightgallery").lightGallery({
        thembnail: true,
        autoplay: true,
        pause: 3000,
        progressBar: true
    });

    // 윈도우 팝업
    $(".window").click(function(e){
        e.preventDefault();
        // window.open("파일명", "팝업이름", "옵션설정");
        // 옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
        // 이름 지정 : popup01
        window.open("popup.html","popup01","width=800, height=545, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
    })

    // 레이어 팝업
    $(".layer").click(function(e){
       e.preventDefault();
        // $("#layer").css("display","block");
        $("#layer").show();
        // $("#layer").fadeIn();
        // $("#layer").slideDown();
    });
    $("#layer .close").click(function(e){
       e.preventDefault();
        // $("#layer").css("display","none");
        $("#layer").hide();
        // $("#layer").fadeOut();
        // $("#layer").slideUp();
    });

    // 탭메뉴
    var $tab_list = $(".tab_menu"); // ($)jquery style
    $tab_list.find("ul ul").hide(); // display:none;
    $tab_list.find("li.active > ul").show();

    function tabMenu(e) {
        e.preventDefault(); // #
        var $this = $(this); // 버튼의 타깃이 this 에 저장

       $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
        // ul의 부모 박스 li 에게 active(class) 부여
        // 기존의 active 가 있으면 지워줌 (remove)
        // 지운 후 ul 을 안보이게 hide
    }
    // focus / 웹 표준 준수
    $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

    // 배너
    $(".ban").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000, // 3초
        dots: true
    });

    // 갤러리
    $(".gallery_img").slick({
        fade: true,
        pauseOnHover: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1
    });
    $(".play").click(function(){
        $(".gallery_img").slick("slickPlay");
    });
    $(".pause").click(function(){
        $(".gallery_img").slick("slickPause");
    });
    $(".prev").click(function(){
        $(".gallery_img").slick("slickPrev");
    });
    $(".next").click(function(){
        $(".gallery_img").slick("slickNext");
    });

    // 버튼을 클릭하면 전체 메뉴를 보이게 함.
    // jquery css 와 사용방법이 같음
    // $ 로 사용
    // 작동 - function 함수
    $(".tit .btn").click(function(e) {
        // 링크의 #을 무력화하여 이동하는 값(0)을 차단
        e.preventDefault();
        // $("#cont_nav").css("display","block");
        // #cont_nav {display:block;}
        // $("#cont_nav").show(); // .show() : display-none 에서 block 으로 바꿔줌
        // $("#cont_nav").fadeIn(); // 서서히 나타나는 효과
        // $("cont_nav").slideDown();
        // $("#cont_nav").toggle(); // 접고 펼치기
        // $("#cont_nav").fadeToggle(); // 서서히 나타나고 접고 펼치기
        $("#cont_nav").slideToggle(200); // (200) 초 설정

        // 버튼을 클릭했을 때 버튼의 클래스 추가
        // this - 자기 자신
        $(this).toggleClass("on"); // remove+add

    });