const btnSub = document.getElementsByClassName('btnSub')
const inpTitle = document.getElementById('titles')
const inpDescription = document.getElementById('titles2')
const addPriority = document.getElementById('titles3')
const headOfTitlte = document.getElementById('headOfTitlte')
const headOfdescription = document.getElementById('headOfdescription')
const headOfpriority = document.getElementById('headOfpriority')
const dynFathCont = document.getElementById('dynFathCont')
// const separate = document.getElementById('separate')
const dynChildCont = document.getElementById("inputProjectCon")
let taskSave = []

// For element generate
// <div id="inputProjectCon">
//     <input type="checkbox" name="checkbox" id="checkbox">
//     <div class="head">
//         <h5 id="headOfTitlte"></h5>
//     </div>
//     <div class="head2">
//         <h5 id="headOfdescription"></h5>
//         <div class="decText" id="headOfpriority"></div>
//     </div>
//     <div class="linkText">
//         <h5>Edit</h5>
//     </div>
// For element generate

function addTaskBtnSub() {
    const val = inpTitle.value;
    const val2 = inpDescription.value;
    const val3 = addPriority.value;
    const emptyCheck = !val || !val2 || !val3;

    if (emptyCheck) {
        alert('Empty Fields Not Allowed');
        return;
    }
    // console.log("clicked");
    taskSave.push({ title: val, description: val2, priority: val3 });
    console.log("taskSave", taskSave);
    localStorage.setItem("Add Task", JSON.stringify(taskSave))

    dynFathCont.innerHTML = '';

    const dataRetrive = localStorage.getItem("Add Task")
    // console.log("dataRetrive", dataRetrive);
    const retrivedStored = JSON.parse(dataRetrive)
    // console.log("retrivedStored", retrivedStored);
    if (retrivedStored.length > 0) {
        dynFathCont.style.display = "block"
        // separate.style.display ="flex"
    }
    retrivedStored.forEach((task) => {

        const childCont = document.createElement("div");
        childCont.classList.add('inputProjectCon');

        const headingforTitle = document.createElement("h5");
        headingforTitle.textContent = task.title
        // headingforTitle.classList.add('headOfTitlte');

        const headingforDescription = document.createElement("h5");
        headingforDescription.textContent = task.description
        // headingforDescription.classList.add('headOfdescription');

        const headingforPriority = document.createElement("h5");
        headingforPriority.textContent = task.priority
        // headingforPriority.classList.add('headOfpriority');

        headingforTitle.textContent = task.title;
        // console.log("text", headingforTitle);

        headingforDescription.textContent = task.description;
        // console.log("text", headingforDescription);


        headingforPriority.textContent = task.priority;
        // console.log("text", headingforPriority);

        childCont.appendChild(headingforTitle);
        childCont.appendChild(headingforDescription);
        childCont.appendChild(headingforPriority);
        // childCont.appendChild(separate)
        dynFathCont.appendChild(childCont)
    });

    inpTitle.value = "";
    inpDescription.value = "";
    addPriority.value = "Low";
}

