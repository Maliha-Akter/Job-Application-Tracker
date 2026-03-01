let currentContainer = "all";
// All button
const AllButton = document.getElementById('btn-All');
const interviewButton = document.getElementById('btn-interview');
const rejectedButton = document.getElementById('btn-rejected');

// All container 
const allContainer = document.getElementById('All-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');
const emptyContainer = document.getElementById("empty-container");

// All seat number of people
const TotalPeople = document.getElementById("total-people")
const TotalInterview = document.getElementById("total-interview")
const TotalRejected = document.getElementById("total-rejected")

// initially all button and card selected
AllButton.classList.add("blue-btn");
allContainer.classList.remove("hidden");

// header part
// TotalPeople.innerText = allContainer.children.length;
const AvailableJob = document.getElementById("available");

AllButton.addEventListener("click", function () {
    currentContainer = "all";
    AvailableJob.innerText = allContainer.children.length;
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
    currentContainer = "interview";
    AvailableJob.innerText = interviewContainer.children.length;

    interviewButton.classList.add("blue-btn");
    AllButton.classList.remove("blue-btn");
    rejectedButton.classList.remove("blue-btn");
    // card
    interviewContainer.classList.remove("hidden");
    allContainer.classList.add("hidden");
    rejectedContainer.classList.add("hidden");



})
rejectedButton.addEventListener("click", function () {
    currentContainer = "rejected";
    AvailableJob.innerText = rejectedContainer.children.length;

    rejectedButton.classList.add("blue-btn");
    AllButton.classList.remove("blue-btn");
    interviewButton.classList.remove("blue-btn");
    // card
    allContainer.classList.add("hidden");
    interviewContainer.classList.add("hidden");
    rejectedContainer.classList.remove("hidden");
  
})

// global declare
const parentJobContainer = document.getElementById("job-container");
//  card switch part
parentJobContainer.addEventListener("click", function (event) {
    const targetElement = event.target;
    const card = targetElement.closest(".card");
    const ParentCard = card.parentNode;
    const appliedButton = card.querySelector(".apply");

    if (targetElement.classList.contains("interview")) {
        interviewContainer.append(card);
        appliedButton.innerText = "Interviewed"
        update();
        availableJob();
        checkEmpty()
    }
    if (targetElement.classList.contains("rejected")) {
        rejectedContainer.append(card);
        appliedButton.innerText = "Rejected"
        update()
        availableJob();
        checkEmpty()
    }
    if (targetElement.classList.contains("delete")) {
        ParentCard.removeChild(card);
        update();
        availableJob();
        checkEmpty()
    }
})
function update() {
    TotalPeople.innerText = allContainer.children.length;
    TotalInterview.innerText = interviewContainer.children.length;
    TotalRejected.innerText = rejectedContainer.children.length;

}
function availableJob(){
    if(currentContainer === "all"){
        AvailableJob.innerText = allContainer.children.length;
    }
    else if(currentContainer === "interview"){
        AvailableJob.innerText = interviewContainer.children.length;
    }
    else if(currentContainer === "rejected"){
        AvailableJob.innerText = rejectedContainer.children.length;
    }
}

function checkEmpty() {
    if (currentContainer === "all" && allContainer.children.length === 0) {
        emptyContainer.classList.remove("hidden");
    }
    else if (currentContainer === "interview" && interviewContainer.children.length === 0) {
        emptyContainer.classList.remove("hidden");
    }
    else if (currentContainer === "rejected" && rejectedContainer.children.length === 0) {
        emptyContainer.classList.remove("hidden");
    }
    else {
        emptyContainer.classList.add("hidden");
    }
}