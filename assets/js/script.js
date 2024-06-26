$(document).ready(function () {
  var w = window.innerWidth;

  if (w > 767) {
    $("#menu-jk").scrollToFixed();
  } else {
    $("#menu-jk").scrollToFixed();
  }
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  
});

const data = JSON.parse(localStorage.getItem("turistdata")) || [
    {
        title: "Brazil",
        Cost: "45000",
        image: "assets/images/destination/d1.jpg",
        like: 0,
        comment: []
    },
    {
        title: "Malaysia",
        Cost: "75000",
        image: "assets/images/destination/d2.jpg",
        like: 0,
        comment: []
    },
    {
        title: "Sri Lanka",
        Cost: "55000",
        image: "assets/images/destination/d3.jpg",
        like: 0,
        comment: []
    },
    {
        title: "London",
        Cost: "195000",
        image: "assets/images/london/london small.jpg",
        like: 0,
        comment: []
    },
    {
        title: "USA",
        Cost: "495000",
        image: "assets/images/newyork small/andrew-hubbert-VnmFGdrx02U-unsplash.jpg",
        like: 0,
        comment: []
    },
    {
        title: "Paris",
        Cost: "395000",
        image: "assets/images/paris/paris small.jpg",
        like: 0,
        comment: []
    }
];

localStorage.setItem("turistdata", JSON.stringify(data));

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || { firstname: 'Guest' };

const mapper = (data) => {
    const container = document.getElementById('packageCards');
    container.innerHTML = ''; 
    data.forEach((ele, index) => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const picture = document.createElement('img');
        picture.src = ele.image;
        picture.className = 'card-img-top';
        picture.alt = ele.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.innerHTML = ele.title;

        const price = document.createElement('p');
        price.className = 'card-text';
        price.innerHTML = `Cost: ${ele.Cost}`;

        const likeContainer = document.createElement('div');
        likeContainer.className = 'd-flex align-items-center';

        const likeIcon = document.createElement('span');
        likeIcon.className = 'like-icon mr-2';
        likeIcon.innerHTML = '<i class="fas fa-heart"></i>'; 
        likeIcon.addEventListener('click', () => {
            ele.like++;
            likeCount.innerHTML = ele.like;
            localStorage.setItem("turistdata", JSON.stringify(data));
        });

        const likeCount = document.createElement('p');
        likeCount.className = 'card-text mb-0';
        likeCount.innerHTML = ele.like;

        likeContainer.append(likeIcon, likeCount);

        cardBody.append(title, price, likeContainer);
        card.append(picture, cardBody);
        col.append(card);
        container.append(col);
        

        // Add comment input and section
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.className = 'form-control mt-3';
        commentInput.placeholder = 'Add a comment';
        commentInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' && commentInput.value.trim() !== '') {
                ele.comment.push({ user: loggedInUser.firstname, comment: commentInput.value.trim() });
                displayComments();
                localStorage.setItem("turistdata", JSON.stringify(data));
                commentInput.value = ''; // Clear the input field
            }
        });

        cardBody.appendChild(commentInput);
    });
};

const displayComments = () => {
    const commentsSection = document.getElementById('commentsSection');
    const allCommentsList = document.getElementById('allComments');
    allCommentsList.innerHTML = ''; 

    data.forEach((ele) => {
        if (ele.comment.length > 0) {
            const cardComments = document.createElement('div');
            cardComments.className = 'mb-3';
            const commentTitle = document.createElement('h5');
            commentTitle.textContent = ele.title;
            cardComments.appendChild(commentTitle);
            ele.comment.forEach((comment) => {
                const commentItem = document.createElement('li');
                commentItem.textContent = `${comment.user}: ${comment.comment}`;
                cardComments.appendChild(commentItem);
            });
            allCommentsList.appendChild(cardComments);
        }
    });

    
};

const applySortFilter = () => {
    const sortFilterValue = document.getElementById('sortFilter').value;
    let sortedData = [...data];

    if (sortFilterValue === 'title') {
        sortedData = sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortFilterValue === 'Cost') {
        sortedData = sortedData.sort((a, b) => parseInt(a.Cost.replace(/,/g, '')) - parseInt(b.Cost.replace(/,/g, '')));
    } else if (sortFilterValue === 'like') {
        sortedData = sortedData.sort((a, b) => a.like - b.like);
    }

    mapper(sortedData);
    displayComments();
};

document.addEventListener('DOMContentLoaded', () => {
    mapper(data);
    displayComments();
});