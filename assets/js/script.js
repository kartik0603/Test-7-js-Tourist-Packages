$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }



})


$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});


let data =[

{
    title: "Brazil",
    Cost :"45000",
    image: "assets/images/destination/d1.jpg",
    like:0,
    comment:[]
},

{
    title: "Malaysia",
    Cost :"75000",
    image: "assets/images/destination/d2.jpg",
    like:0,
    comment:[],
},

{
    title: "Sri Lanka",
    Cost :"55000",
    image: "assets/images/destination/d3.jpg",
    like:0,
    comment:[],
},

{
    title: "London",
    Cost :"1,95,000",
    image: "assets/images/london/london small.jpg",
    like:0,
    comment:[],
},

{
    title: "USA",
    Cost :"3,95,000",
    image: "assets/images/newyork small/andrew-hubbert-VnmFGdrx02U-unsplash.jpg",
    like:0,
    comment:[],
},

{
    title: "Paris",
    Cost :"3,95,000",
    image: "assets/images/paris/paris small.jpg",
    like:0,
    comment:[],
},



]


localStorage.setItem("turistdata",JSON.stringify(data));

const mapper =(data)=>{

    data.map((ele)=>{
        let title=document.createElement('h4');
        title.innerHTML=`
        <div class="layycover">
                            <h4>${data.title}<span class="badge badge-info">5 Places</span></h4>
                        </div>`;
        let price=document                
    })
}