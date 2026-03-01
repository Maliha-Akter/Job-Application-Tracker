let currentKey = "All"
// All button
const AllButton = document.getElementById('btn-All');
const interviewButton = document.getElementById('btn-interview');
const rejectedButton = document.getElementById('btn-rejected');

// All container 
const allContainer = document.getElementById('All-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');

// All sit number of people
const TotalPeople = document.getElementById("total-people")
const TotalInterview = document.getElementById("total-interview")
const TotalRejected = document.getElementById("total-rejected")

function changeKey(key) {
    // console.log(key);
    const AllKeys = ['All', 'interview', 'rejected'];

}
// initially all button and card selected
AllButton.classList.add("blue-btn");
allContainer.classList.remove("hidden");

// header part
TotalPeople.innerText = allContainer.children.length;

AllButton.addEventListener("click", function () {
    // console.log("AllButton")
    AllButton.classList.add("blue-btn");
    interviewButton.classList.remove("blue-btn");
    rejectedButton.classList.remove("blue-btn");

    // card
    allContainer.classList.remove("hidden");
    interviewContainer.classList.add("hidden");
    rejectedContainer.classList.add("hidden");
    
    
})

interviewButton.addEventListener("click", function () {
    interviewButton.classList.add("blue-btn");
    AllButton.classList.remove("blue-btn");
    rejectedButton.classList.remove("blue-btn");
    // card
    interviewContainer.classList.remove("hidden");
    allContainer.classList.add("hidden");
    rejectedContainer.classList.add("hidden");

})
rejectedButton.addEventListener("click", function () {
    rejectedButton.classList.add("blue-btn");
    AllButton.classList.remove("blue-btn");
    interviewButton.classList.remove("blue-btn");
    // card
    allContainer.classList.add("hidden");
    interviewContainer.classList.add("hidden");
    rejectedContainer.classList.remove("hidden");


})


//  card switch part
document.getElementById("job-container").addEventListener("click",function(event){
   const targetElement = event.target;
   const card = targetElement.closest(".card");
   const ParentCard = card.parentNode;

   
   const appliedButton = card.querySelector(".apply");
//    console.log(card)
   if(targetElement.classList.contains("interview")){
    interviewContainer.append(card);
    appliedButton.innerText = "Interviewed"
   }
   if(targetElement.classList.contains("rejected")){
    rejectedContainer.append(card);
    appliedButton.innerText = "Rejected"
   }
   if(targetElement.classList.contains("delete")){
    ParentCard.removeChild(card);
   }
})
