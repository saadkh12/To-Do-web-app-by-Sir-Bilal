

// const addTask = document.querySelectorAll('#title')
const btnSub = document.getElementsByClassName('btnSub')
const inpTitle = document.getElementById('titles')

const inpDescription = document.getElementById('titles2')
const addPriority = document.getElementById('titles3')

const filterTaskState = document.getElementById('state')

const checkBox = document.getElementById('checkbox')
const headOfTitlte = document.getElementById('headOfTitlte')
const headOfdescription = document.getElementById('headOfdescription')
const headOfpriority = document.getElementById('headOfpriority')

let taskSave = []

// localStorage.getItem("taskSave")

// function addTaskBtnSub() {

//     if (inpTitle.value = "" , inpDescription.value == "" , addPriority.value , "") {
//         console.log("Empty fields not allowed");
//     } else {
//         console.log("clicked");
//         const val = inpTitle.value;
//         const val2 = inpDescription.value;
//         const val3 = addPriority.value;
//         const final = taskSave.push({ title: val, description: val2, priority: val3 })
//         console.log("final", final);
//         localStorage.setItem("fortask", "tasksaved")

//         const hot = document.createElement("hot");
//         hot.innerHTML = Object.title
//         headOfTitlte.appendChild(hot)
//      final   console.log("hot", hot);

//         const hod = document.createElement("hod");
//         hot.innerHTML = Object.description
//         headOfdescription.appendChild(hod)
//         console.log("hod", hod);

//         const hop = document.createElement("hop");
//         hot.innerHTML = Object.priority
//         headOfpriority.appendChild(hop)
//         console.log("hop", hop);

//         inpTitle.value = "";
//         inpDescription.value = "";
//         addPriority.value = "";
//     }
// }

function addTaskBtnSub() {
    const val = inpTitle.value;
    const val2 = inpDescription.value;
    const val3 = addPriority.value;
    const emptyCheck = !val;

    if (emptyCheck) {
        console.log('wwe');

        return;
    } else {
        console.log("clicked");
        taskSave.push({ title: val, description: val2, priority: val3 });
        console.log("taskSave", taskSave);
        localStorage.setItem("Add Task", JSON.stringify(taskSave))

        const hot = document.createElement("hot");
        const dataRetrive = localStorage.getItem("Add Task")
        console.log("dataRetrive", dataRetrive);
        const retrivedStored = JSON.parse(dataRetrive)
        console.log("retrivedStored", retrivedStored);
        const objecRet = retrivedStored[0].title
        console.log("objecRet", objecRet);

        hot.innerText = objecRet;
        console.log("text", hot);
        headOfTitlte.appendChild(hot)

        const hod = document.createElement("hod");
        const decRetrive = localStorage.getItem("Add Task")
        console.log("dataRetrive", decRetrive);
        const decRetrivedStored = JSON.parse(decRetrive)
        console.log("retrivedStored", decRetrivedStored);
        const descRet = retrivedStored[0].description
        console.log("descRet", descRet);

        hod.innerText = descRet;
        console.log("text", hod);
        headOfdescription.appendChild(hod)

        const hop = document.createElement("hop");
        const prioRetrive = localStorage.getItem("Add Task")
        console.log("dataRetrive", prioRetrive);
        const prioRetrivedStored = JSON.parse(prioRetrive)
        console.log("retrivedStored", prioRetrivedStored);
        const prioRet = retrivedStored[0].priority
        console.log("descRet", prioRet);

        hop.innerText = prioRet;
        console.log("text", hop);
        headOfpriority.appendChild(hop)
        // const map = new map();
        // map.set('title',headOfpriority)
        // console.log(map.get('title'))

        inpTitle.value = "";
        inpDescription.value = "";
        addPriority.value = "";
    }
}