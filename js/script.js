var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });


  let accordions = document.querySelectorAll('.accordion-wrapper .accordion');
  accordions.forEach((acco)=>{
    acco.onclick = () => {
      accordions.forEach((subcontent) => {
        subcontent.classList.remove("active");
      });
      acco.classList.add('active');
    };
  });



  let currentSlide = 1;

  function showSlide(slideIndex) {
      const testimonialText = [
        "Ca mamă, sunt extrem de mulțumită de cursurile oferite. Am văzut cum copilul meu se dezvoltă frumos și capătă încredere în abilitățile sale. Profesorii sunt dedicați și atenți, iar atmosfera este mereu prietenoasă și stimulativă. Este un loc în care știu că copilul meu învață, se distrează și își descoperă talentele. Recomand cu toată inima!",
        "Ca mamă, sunt extrem de mulțumită de cursurile oferite. Am văzut cum copilul meu se dezvoltă frumos și capătă încredere în abilitățile sale. Profesorii sunt dedicați și atenți, iar atmosfera este mereu prietenoasă și stimulativă. Este un loc în care știu că copilul meu învață, se distrează și își descoperă talentele. Recomand cu toată inima!",
        "Ca mamă, sunt extrem de mulțumită de cursurile oferite. Am văzut cum copilul meu se dezvoltă frumos și capătă încredere în abilitățile sale. Profesorii sunt dedicați și atenți, iar atmosfera este mereu prietenoasă și stimulativă. Este un loc în care știu că copilul meu învață, se distrează și își descoperă talentele. Recomand cu toată inima!"
      ];
      const authors = [
          "Elena Murarescu",
          "Elena Murarescu",
          "Elena Murarescu"
      ];
  
      document.querySelector('.testimonial-content p').innerText = testimonialText[slideIndex - 1];
      document.querySelector('.author').innerText = authors[slideIndex - 1];
  
      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex - 1].classList.add('active');

  }