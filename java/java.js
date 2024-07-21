let icon=document.querySelector('.icon .fa-bars');
let navbar=document.querySelector('.navbar');
let  navlinks=document.querySelector('.navlinks');
let row=document.querySelector('.row');
let search =document.querySelector('.search-by-name');
let home=document.querySelector('.home');
let cont=document.querySelector('.cont');
let pop=document.querySelector('.Popular');
let TopRated=document.querySelector('.TopRated');
let Trending=document.querySelector('.Trending');
let Upcoming=document.querySelector('.Upcoming')
let animate=document.querySelector('.animate')
const API='7070af45a50863f43665a2e7d3e15014';
function navbarside(){
    if(icon.classList.contains('fa-bars')){
        // navbar.style.cssText='width:300px';
       
        $('.navbar').animate({width:'300px'},1000);
        navlinks.classList.remove('d-none');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        animate.classList.remove('animate__animated','animate__fadeOutLeft');
        animate.classList.add('animate__animated','animate__fadeInUp');
    }

 else
 {
    $('.navbar').animate({width:'70px'},1000)
    navlinks.classList.add('d-none');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
    
    animate.classList.remove('animate__animated','animate__fadeInUp');  
    animate.classList.add('animate__animated','animate__fadeOutLeft'); 
   
 } 
}
icon.addEventListener('click',function(){
    navbarside()
});

(async function getmovies() {
    console.log('hi');
    
    
        // home.innerHTML='<div class="loadingSc"><span class="loader"></span></div>';
        const data =await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=7070af45a50863f43665a2e7d3e15014`);
        
        const response= await data.json();
        console.log(response.results[0].poster_path);
        
        var cartona='';
        for (let index = 0; index < response.results.length; index++) {
           cartona+=`  <div class=" movie col-md-4 col-sm-12     ">
                    <div class='imgMovie'  >
                        <img src="https://image.tmdb.org/t/p/w500/${response.results[index].poster_path}" class="w-100 rounded-2" alt="">
                   
                        </div>
                          <div class="layer">
                                        <div class='text-white p-2 ms-3 '>
                                        <div class=" m-auto mb-5 text-center"><h1 class='text-content ' >${response.results[index].original_title}</h1></div>
                                        
                                        <p class="overview">${response.results[index].overview}</p>
                                       <div class="more">
                                       
                                        <div class='icons-layer '>
                                         <p class='mt-3 '>Release Date : ${response.results[index].release_date}</p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                       
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                      
                                        <br></br>
                                       
                                

                                        <span class="  ">${(response.results[index].vote_average).toFixed(1)}</span>
                                        </div>
                                        
                                        
                                       </div>

                                        
                                        </div>

                                        </div>
                </div>`;
        row.innerHTML=cartona;
         
    }


})();

search.addEventListener('keydown',function(){
    console.log('love');
    searchByName(search.value);
  });

async function searchByName(movieName){


      
    const data =await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=7070af45a50863f43665a2e7d3e15014`);
    
    const response= await data.json();
    
    var cartona='';
    for (let index = 0; index < response.results.length; index++) {
       cartona+=`  <div class=" movie col-md-4 col-sm-12     ">
                    <div class='imgMovie'  >
                        <img src="https://image.tmdb.org/t/p/w500/${response.results[index].poster_path}" class="w-100 rounded-2" alt="">
                   
                        </div>
                          <div class="layer">
                                        <div class='text-white p-2 ms-3 '>
                                        <div class=" m-auto mb-5 text-center"><h1 class='text-content ' >${response.results[index].original_title}</h1></div>
                                        
                                        <p class="overview">${response.results[index].overview}</p>
                                       <div class="more">
                                       
                                        <div class='icons-layer '>
                                         <p class='mt-3 '>Release Date : ${response.results[index].release_date}</p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                       
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                      
                                        <br></br>
                                       
                                

                                        <span class="  ">${(response.results[index].vote_average).toFixed(1)}</span>
                                        </div>
                                        
                                        
                                       </div>

                                        
                                        </div>

                                        </div>
                </div>`;
        }
        
   
      row.innerHTML=cartona;
    
      
       


}
let url;

pop.addEventListener('click',function(){
    url=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=7070af45a50863f43665a2e7d3e15014`
    geturl(url);
})

async function geturl(x) {
    console.log('hi');
    
    
        row.innerHTML='<h2>featching Recipes...</h2>';
        const data =await fetch(x);
        
        const response= await data.json();
        console.log(response.results[0].poster_path);
        
        var cartona='';
        for (let index = 0; index < response.results.length; index++) {
           cartona+=`  <div class=" movie col-md-4 col-sm-12     ">
                    <div class='imgMovie'  >
                        <img src="https://image.tmdb.org/t/p/w500/${response.results[index].poster_path}" class="w-100 rounded-2" alt="">
                   
                        </div>
                          <div class="layer">
                                        <div class='text-white p-2 ms-3 '>
                                        <div class=" m-auto mb-5 text-center"><h1 class='text-content ' >${response.results[index].original_title}</h1></div>
                                        
                                        <p class="overview">${response.results[index].overview}</p>
                                       <div class="more">
                                       
                                        <div class='icons-layer '>
                                         <p class='mt-3 '>Release Date : ${response.results[index].release_date}</p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                       
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                      
                                        <br></br>
                                       
                                

                                        <span class="  ">${(response.results[index].vote_average).toFixed(1)}</span>
                                        </div>
                                        
                                        
                                       </div>

                                        
                                        </div>

                                        </div>
                </div>`;
        row.innerHTML=cartona;
         
    }


}
TopRated.addEventListener('click',function(){
    url=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=7070af45a50863f43665a2e7d3e15014`
    geturl(url);
});


Trending.addEventListener('click',function(){
    url=`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=7070af45a50863f43665a2e7d3e15014`
    geturl(url);
});

Upcoming.addEventListener('click',function(){
    url=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}&api_key=7070af45a50863f43665a2e7d3e15014`
    geturl(url);
});
//