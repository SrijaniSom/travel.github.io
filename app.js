const togglebtn=document.querySelector('.ToggleIcon');
const ListOfItems=document.querySelector('.itemList');
const Item=document.querySelectorAll('.item');
const loginBtn=document.querySelector('.Login');
const AboutSection=document.querySelector('.AboutSec');
const AboutBtn=document.querySelector('.about');
const NavSection=document.querySelector('.NavBar');
const CoverSection=document.querySelector('.coverPart');
const AdventureBtn=document.querySelector('.adventure');
const FeaturedSec=document.querySelector('.Featured');
const StorySec=document.querySelector('.Wondersec');
const midsection=document.querySelector('.MidSec');
const blogSec=document.querySelector('.BlogSection');
const BlogBtn=document.querySelector('.blogs');
const BookNowSec=document.querySelector('.BookingSection');
const bookingBtn=document.querySelector('.bookNow');
const PriorSec=document.querySelector('.PriorTour');
const QuestionSec=document.querySelector('.mainPart');
const BillSec=document.querySelector('.BookingReceiptHotel');




bookingBtn.addEventListener("click",()=>{

        CoverSection.style.display="none";
        AboutSection.style.display="none";
        FeaturedSec.style.display="none";
        StorySec.style.display="none";
        midsection.style.display="none";
        blogSec.style.display="none";
        BookNowSec.style.display="block";
        PriorSec.style.display="none";
        QuestionSec.style.display="none";
        BillSec.style.display="none";

});
togglebtn.addEventListener("click",()=>
{

        ListOfItems.style.display="flex";
        ListOfItems.classList.toggle("show-links");
        loginBtn.style.display="flex";
        BillSec.style.display="none";
       

});
AboutBtn.addEventListener("click",()=>{

        CoverSection.style.display="none";
        AboutSection.style.display="block";
        FeaturedSec.style.display="block";
        StorySec.style.display="flex";
        midsection.style.display="flex";
        blogSec.style.display="none";
        BookNowSec.style.display="none";
        PriorSec.style.display="none";
        QuestionSec.style.display="none";
        BillSec.style.display="none";



});
AdventureBtn.addEventListener("click",()=>{

        CoverSection.style.display="block";
        AboutSection.style.display="none";
        FeaturedSec.style.display="none";
        StorySec.style.display="none";
        midsection.style.display="none";
        blogSec.style.display="none";
        BookNowSec.style.display="none";
        PriorSec.style.display="block";
        QuestionSec.style.display="block";
        BillSec.style.display="none";
});
BlogBtn.addEventListener("click",()=>{

        CoverSection.style.display="none";
        AboutSection.style.display="none";
        FeaturedSec.style.display="none";
        StorySec.style.display="none";
        midsection.style.display="none";
        blogSec.style.display="block";
        BookNowSec.style.display="none";
        PriorSec.style.display="none";
        QuestionSec.style.display="none";
        BillSec.style.display="none";

});

var picArr=["jungleLand.jpg","trekking.jpg","boat.jpg","safari.gif","las.jpg"];
var textArr=["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,, comes from a line in section 1.10.32.","The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 fromby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
            ,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, co",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."];



const BlogList=document.querySelectorAll('.blog');
BlogList.forEach(function(item){

        item.addEventListener("click",()=>{

                var num=item.id;
                const ImageContainer=document.querySelector('.picBlog');
                ImageContainer.src=picArr[(num.charAt(1))-1];
                const HeadingContainer=document.querySelector('.headingBlog2');
                HeadingContainer.textContent=document.querySelector(".h"+(num.charAt(1))).textContent;
               
                const blogFull=document.querySelector('.BlogText');
                blogFull.textContent=textArr[num.charAt(1)-1].substring(0,60);

                const contentBtn=document.querySelector('.readBtn');
                contentBtn.addEventListener("click",()=>{

                       
                        blogFull.textContent=textArr[num.charAt(1)-1];

                });
        });

});

var images=["Cairo.jpg","japan.jpg","London.jpg","montana.png","montevideoUruguay.jpg","Nepal.jpg","NairobiKenya.jpg","patagonia.jpg","qatar.jpg","Romania.jpg","Shanghai.jpg"];
var places=["Cairo,Egypt","Japan","London","Montana,United States","Montevideo,Uruguay","Nepal","Nairobi,Kenya","Patagonia","Qatar","Romania","Shanghai"];
var startDate=["11th Jan","31st Jan","2nd Feb","25th Feb","2nd March","28th March","3rd April","15th April","4th May","10th June","5th August"];
var EndDate=["21st Jan","10th Feb","17th Feb","3rd March","9th March","5th April","15th April","29th April","24th May","17th June","18th August"];
var Duration=["10 Days","11 Days","15 Days","7 Days","7 Days","8 Days","12 Days","14 Days","20 Days","7 Days","13 Days"];

var counter=0;
const PreBtn=document.querySelector('.PrevBtn');
const NextBtn=document.querySelector('.NextBtn');
const pic=document.querySelector('.PictureContainer');
const place=document.querySelector('.PlaceName');
const StartDate=document.querySelector('.start');
const EndingDate=document.querySelector('.end');
const tourDuration=document.querySelector('.TourLength');




PreBtn.addEventListener("click",()=>{

        counter--;
       
        if(counter == -1)
                counter=images.length-1;

        console.log(counter);

                pic.src=images[counter];
                place.textContent=places[counter];
                StartDate.textContent=startDate[counter];
                EndingDate.textContent=EndDate[counter];
                tourDuration.textContent=Duration[counter];

                
        
});

NextBtn.addEventListener("click",()=>{

        counter++;

        if(counter == images.length)
        counter=0;
       
        console.log(counter);

      

                pic.src=images[counter];
                place.textContent=places[counter];
                StartDate.textContent=startDate[counter];
                EndingDate.textContent=EndDate[counter];
                tourDuration.textContent=Duration[counter];


               
        
});

function display(x)
{
        document.querySelector("#d"+x).style.display="block";
}

function hide(x)
{

        document.querySelector("#d"+x).style.display="none";

}

const GuestBtn=document.querySelector('.guesthouse');
const ApartmentBtn=document.querySelector('.apartment');
const ResortBtn=document.querySelector('.resort');
const bedbtn=document.querySelector('.bedroom');
const HotelList=document.querySelectorAll('.SingleItem');


GuestBtn.addEventListener("click",()=>
{

        HotelList.forEach(function(item){

                if(item.classList.contains("guest"))
                {
                        item.style.display="block";
                }

                else
                {
                        item.style.display="none";
                }
        })

        document.querySelector('.Result').style.display="none";
});

ApartmentBtn.addEventListener("click",()=>{


        HotelList.forEach(function(item){

                if(item.classList.contains("apart"))
                {
                        item.style.display="block";
                }

                else
                {
                        item.style.display="none";
                }
        })

        document.querySelector('.Result').style.display="none";

});

ResortBtn.addEventListener("click",()=>{

        HotelList.forEach(function(item){

                if(item.classList.contains("res"))
                {
                        item.style.display="block";
                }

                else
                {
                        item.style.display="none";
                }

                document.querySelector('.Result').style.display="none";
        })

});

bedbtn.addEventListener("click",()=>{

        HotelList.forEach(function(item){

                if(item.classList.contains("bed"))
                {
                        item.style.display="block";
                }

                else
                {
                        item.style.display="none";
                }
        })
        document.querySelector('.Result').style.display="none";

});

const filterButton=document.querySelector('.FilterBtn');
filterButton.addEventListener("click",()=>{
        var ce=0;
        var e = document.getElementById("country").value;
        console.log(e);  
        var count=0;
        const Address=document.querySelectorAll('.AddressHolder');
        Address.forEach(function(item){
                count++;

                if(item.textContent.toString().toLowerCase().includes(e.toString().toLowerCase()))
                {
                        document.getElementById(count).style.display="block";
                        ce++;
                }

                else
                {
                        document.getElementById(count).style.display="none";
                }

        })

        if(ce==0)
        {
                document.querySelector('.Result').style.display="block";
        }

})

function correctDisplay()
{
       const valcon= document.querySelector('.priceVal');

        var c=0;
       
        
       const prices=document.querySelectorAll('.PriceHolder');
       prices.forEach(function any(item)
       {
        var priceValue="";
        var p=0;
                c++;
                var PriceEach=item.textContent.toString();
                
                var lengthPrice=PriceEach.length;
                for(let i=0;i<lengthPrice;i++)
                {
                        if(p>0)
                        priceValue=priceValue+item.innerHTML.toString().charAt(i);
                    if(item.innerHTML.toString().charAt(i) == '$')
                    {
                            p++;
                    }

                   
        
                }









                var priceLimit=document.querySelector('.SliderRange').value;
               
                valcon.textContent="Value=$"+priceLimit;
                console.log(priceLimit);
                console.log(priceValue);
                if(priceValue<=priceLimit)
                {
                        document.getElementById(c).style.display="block";

                }

                else
                {
                        document.getElementById(c).style.display="none";
                }
                
       });
}


var names= ["Anna Johnson","Peter Jones","Bill Anderson","Susan Smith"];
var posts=["Karnataka,India","California","Kabul,Afghanistan","Italy,Europe"];
var infos=["Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.","Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.","Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.","I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"];
var pics=["p1.jpg","p2.jpg","p3.jfif","p4.jfif"];

var count2=0;
const previousButton=document.querySelector('.prev-btn');
const nextButton=document.querySelector('.next-btn');
const nameTag=document.querySelector('.name');
const postTag=document.querySelector('.post');
const infoTag=document.querySelector('.info');
const picTag=document.querySelector('.picCon');

/*picTag.addEventListener("click",()=>{
        console.log("clicked");
});
*/
previousButton.addEventListener("click",()=>{
    count2--;
    
    if(count2 ==-1)
        {
            count2=3;
     
        }
        if(count2 == 4)
        {
            count2=0;
        }
       
        nameTag.textContent=names[count2];
        postTag.textContent=posts[count2];
        infoTag.textContent=infos[count2];
        picTag.src=pics[count2];
        
    
});
nextButton.addEventListener("click",()=>{
    count2++;
    
    
    if(count2 ==-1)
        {
            count2=3;
     
        }
        if(count2 == 4)
        {
            count2=0;
        }
       
        nameTag.textContent=names[count2];
        postTag.textContent=posts[count2];
        infoTag.textContent=infos[count2];
        picTag.src=pics[count2];
});


//using selectors inside the element
const questions = document.querySelectorAll(".card");

questions.forEach(function (question) {
  const btn = question.querySelector(".sign");
  const infoText = question.querySelector(".info");
  const close=question.querySelector(".CloseSign");
    const sep=question.querySelector(".separator");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) 
    {
      if (item != question) {
        infoText.style.display="none";
      }
    });

    infoText.style.display="flex";
    btn.style.display="none";
    close.style.display="flex";
    sep.style.display="flex";
    close.addEventListener("click",()=>{

        infoText.style.display="none";
        btn.style.display="flex";
        close.style.display="none";
        sep.style.display="none";


    });
  });


})

function billCal(x)
{
 var imgSrc=document.querySelector('.x'+x).getAttribute("src");
 document.querySelector('.picCon2').src = imgSrc;

 var NameOfHotel=document.querySelector('.nameHotel');
 NameOfHotel.textContent=document.querySelector('.n'+x).textContent;

 var CostOfHotel=document.querySelector('.CashPaid');
 CostOfHotel.textContent=document.querySelector('.c'+x).textContent;

 var HotelAddress=document.querySelector('.hostelAddress');
 HotelAddress.textContent=document.querySelector('.a'+x).textContent;

 BillSec.style.display="block";

 CoverSection.style.display="none";
 AboutSection.style.display="none";
 FeaturedSec.style.display="none";
 StorySec.style.display="none";
 midsection.style.display="none";
 blogSec.style.display="none";
 BookNowSec.style.display="none";
 PriorSec.style.display="none";
 QuestionSec.style.display="none";
 

}

function Book(x)
{
 var num=x.charAt(1);

 var imgSrc=document.querySelector('.t'+num).getAttribute("src");
 document.querySelector('.picCon2').src = imgSrc;

 var placen="";
 var add="";
 var cost="";

 if(num=='1')
 {
         placen="New Zealand";
         add="10 days";
         cost="$10000";
         
 }

 if(num=='2')
 {
         placen="Seoul";
         add="13 days";
         cost="$11000";
         
 }
 if(num=='3')
 {
         placen="Norway";
         add="8 days";
         cost="$8000";
         
 }
 if(num=='4')
 {
         placen="Rome";
         add="21 days";
         cost="$11000";
         
 }
 
 var NameOfHotel=document.querySelector('.nameHotel');
 NameOfHotel.textContent=placen;

 var CostOfHotel=document.querySelector('.CashPaid');
 CostOfHotel.textContent=cost;

 var HotelAddress=document.querySelector('.hostelAddress');
 HotelAddress.textContent=add;
 
 

 
 BillSec.style.display="block";

 CoverSection.style.display="none";
 AboutSection.style.display="none";
 FeaturedSec.style.display="none";
 StorySec.style.display="none";
 midsection.style.display="none";
 blogSec.style.display="none";
 BookNowSec.style.display="none";
 PriorSec.style.display="none";
 QuestionSec.style.display="none";


}