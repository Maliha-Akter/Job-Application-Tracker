let currentKey = "All"
// All button
const AllButton = document.getElementById('btn-All');
const interviewButton = document.getElementById('btn-interview');
const rejectedButton = document.getElementById('btn-rejected');

function changeKey(key) {
    // console.log(key);
    const AllKeys = ['All', 'interview', 'rejected'];

}

AllButton.addEventListener("click", function () {
    // console.log("AllButton")
    AllButton.classList.add("blue-btn");
    interviewButton.classList.remove("blue-btn");
    rejectedButton.classList.remove("blue-btn");
})

interviewButton.addEventListener("click", function () {
    interviewButton.classList.add("blue-btn");
    AllButton.classList.remove("blue-btn");
    rejectedButton.classList.remove("blue-btn");
})
rejectedButton.addEventListener("click", function () {
    rejectedButton.classList.add("blue-btn");
    AllButton.classList.remove("blue-btn");
    interviewButton.classList.remove("blue-btn");
})