console.log("MamamamS")
// 1. Pobranie gotowych zadań z serwera

//GET-> /get_tasks, zwróci jsona z listą zadań
let tasks_json = {
   "list" : [
    {
        "names": "odkurzanie",
        "onwer": 1,
        "priority": 2,
        "status": 1,
        "tasks_id": 1
    },
    {
        "names": "mycie podłogi",
        "onwer": 1,
        "priority": 1,
        "status": 1,
        "tasks_id": 2
    },
    {
        "names": "odgrzybanie",
        "onwer": 4,
        "priority": 3,
        "status": 2,
        "tasks_id": 3
    },
    {
        "names": "mycie prysznica",
        "onwer": 2,
        "priority": 1,
        "status": 2,
        "tasks_id": 4
    },
    {
        "names": "pranie",
        "onwer": 3,
        "priority": 3,
        "status": 2,
        "tasks_id": 5
    },
    {
        "names": "ścieranie kurzy",
        "onwer": 3,
        "priority": 1,
        "status": 3,
        "tasks_id": 6
    },
    {
        "names": "mycie naczyń",
        "onwer": 2,
        "priority": 2,
        "status": 3,
        "tasks_id": 7
    }
   ]
}
// 2. SELECT UŻYTKOWNIKA
let select_html = `
<select class = "box1">
<option value = 2>Kasia</option>
<option value = 3>Maja</option>
<option value = 4>Michał</option>
</select>
`
// 3. Stworzenie kafelków z zadaniami

for(let i=0; i<tasks_json.list.length ;i++){
    console.log(tasks_json.list[i]);
    //ZADANIA BEZ WŁAŚCICIELA - STATUS 1
    if (tasks_json.list[i].status == 1){
        let without_owner = document.querySelector("#container_task_without_owner")
        without_owner.innerHTML += `
        <div class="list_element priority${tasks_json.list[i].priority}"
        >${tasks_json.list[i].names}
        ${select_html}
          <button> <span>Potwierdź</span>
          </button>
          <button> <span>Usuń</span>
          </button>
    </div>
        `
    }
    //ZADANIA Z WŁAŚCICIELEM - STATUS 2
    else if (tasks_json.list[i].status == 2){
        //KASIA
        if (tasks_json.list[i].onwer==2){
            let kasia_owner = document.querySelector("#Kasia_container")
            kasia_owner.innerHTML += `
            <div class="list_element priority${tasks_json.list[i].priority}"
             >${tasks_json.list[i].names}
                <button> <span>Zrobione</span>
                </button>
                <button> <span>Usuń</span>
                </button>
            </div>
            `
        }
        //MAJA
        else if (tasks_json.list[i].onwer==3){
            let maja_owner = document.querySelector("#Maja_container")
            maja_owner.innerHTML += `
            <div class="list_element priority${tasks_json.list[i].priority}"
             >${tasks_json.list[i].names}
                <button> <span>Zrobione</span>
                </button>
                <button> <span>Usuń</span>
                </button>
            </div>
            `
        }
        //MICHAŁ
        else if(tasks_json.list[i].onwer==4){
            let michal_owner = document.querySelector("#Michal_container")
            michal_owner.innerHTML += `
            <div class="list_element priority${tasks_json.list[i].priority}"
             >${tasks_json.list[i].names}
                <button> <span>Zrobione</span>
                </button>
                <button> <span>Usuń</span>
                </button>
            </div>
            `
        }
    }
    else if (tasks_json.list[i].status == 3){
        let task_done = document.querySelector("#task_done")
        task_done.innerHTML += `
        <div class="list_element priority${tasks_json.list[i].priority}"
         >${tasks_json.list[i].names}
            <button> <span>Akceptuj</span>
            </button>
            <button> <span>Odrzuć</span>
            </button>
        </div>
        `
    }
}