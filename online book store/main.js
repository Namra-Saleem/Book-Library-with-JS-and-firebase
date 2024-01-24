/*------- search button ----------- */

searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchform.classList.toggle('active');
}


/*---- login form -------*/

var loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

/*---- swiper  -------*/

var swiper = new Swiper(".books-list", {

  loop:true,
  centeredSlides:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    768: {
      slidesPerView:2,
    },
    1024: {
      slidesPerView:3,
    },
  },
});

/*---- featured section  -------*/

var swiper = new Swiper(".featured-slider", {

  spaceBetween:10,
  loop:true,
  centeredSlides:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },
 navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    450: {
      slidesPerView:2,
    },
    768: {
      slidesPerView:3,
    },
    1024: {
      slidesPerView:4,
    },
  },
});

/*-------- window scroll ----*/

window.onscroll = () =>{

  searchform.classList.remove('active');

  if (window.scrollY > 0){
    document.querySelector('.header .header_two').classList.add('active');

  }else{
    document.querySelector('.header .header_two').classList.remove('active');
  }
}

window.onload = () => {

  if (window.scrollY > 80){
    document.querySelector('.header .header_two').classList.add('active');

  }else{
    document.querySelector('.header .header_two').classList.remove('active');
  }
}

  /*-------- arrivals section start ---------- */

  var swiper = new Swiper('.arrivals-slider', {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView:1,
      },
      768: {
        slidesPerView:2,
      },
      1024: {
        slidesPerView:3,
      },
    },
  });

  /*------ review section --------*/

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView:1,
      },
      768: {
        slidesPerView:2,
      },
      1024: {
        slidesPerView:3,
      },
    },
  });

  /*---------- blog section ------------*/

  var swiper = new Swiper(".blog-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView:1,
      },
      768: {
        slidesPerView:2,
      },
      1024: {
        slidesPerView:3,
      },
    },
  });
  const books = [
    { title: "Book 1", author: "Author 1", ISBN: "123456789" },
    { title: "Book 2", author: "Author 2", ISBN: "987654321" },
    // Add more books as needed
];

const searchInput = document.getElementById('searchInput');
const searchResultsContainer = document.getElementById('searchResults');

searchInput.addEventListener('input', performSearch);

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.ISBN.includes(searchTerm)
    );

    displaySearchResults(filteredBooks);
}

function displaySearchResults(results) {
    // Clear previous search results
    searchResultsContainer.innerHTML = '';

    // Display each book as a div
    results.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-item');
        bookDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p><p>${book.ISBN}</p>`;
        searchResultsContainer.appendChild(bookDiv);
    });
}
