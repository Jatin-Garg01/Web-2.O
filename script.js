{/* <script type="text/javascript">
    $(document).ready(function(){
        $('.slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
</script> */}
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}
