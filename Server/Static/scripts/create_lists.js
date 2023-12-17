
// 1. Pobranie gotowych zadań z serwera

//GET-> /get_tasks, zwróci jsona z listą zadań
fetch("/get_tasks")
.then(response => {
    // Jeśli wszystko jest w porządku, przekonwertuj odpowiedź na JSON
    return response.json();
  })
  .then(tasks_list => {
    // Tutaj masz dostęp do danych w formacie JSON
    console.log(tasks_list);

    // 3. Stworzenie kafelków z zadaniami

for(let i=0; i<tasks_list.length ;i++){
    //ZADANIA BEZ WŁAŚCICIELA - STATUS 1
    if (tasks_list[i].status == 1){
        let without_owner = document.querySelector("#container_task_without_owner")
        without_owner.innerHTML += `
        <div class="list_element priority${tasks_list[i].priority}"
        >${tasks_list[i].names}
        ${select_html}
          <button> <span>Potwierdź</span>
          </button>
          <button> <span>Usuń</span>
          </button>
    </div>
        `
    }
    //ZADANIA Z WŁAŚCICIELEM - STATUS 2
    else if (tasks_list[i].status == 2){
        //KASIA
        if (tasks_list[i].onwer==2){
            let kasia_owner = document.querySelector("#Kasia_container")
            kasia_owner.innerHTML += `
            <div class="list_element priority${tasks_list[i].priority}"
             >${tasks_list[i].names}
                <button> <span>Zrobione</span>
                </button>
                <button> <span>Usuń</span>
                </button>
            </div>
            `
        }
        //MAJA
        else if (tasks_list[i].onwer==3){
            let maja_owner = document.querySelector("#Maja_container")
            maja_owner.innerHTML += `
            <div class="list_element priority${tasks_list[i].priority}"
             >${tasks_list[i].names}
                <button> <span>Zrobione</span>
                </button>
                <button> <span>Usuń</span>
                </button>
            </div>
            `
        }
        //MICHAŁ
        else if(tasks_list[i].onwer==4){
            let michal_owner = document.querySelector("#Michal_container")
            michal_owner.innerHTML += `
            <div class="list_element priority${tasks_list[i].priority}"
             >${tasks_list[i].names}
                <button> <span>Zrobione</span>
                </button>
                <button> <span>Usuń</span>
                </button>
            </div>
            `
        }
    }
    else if (tasks_list[i].status == 3){
        let task_done = document.querySelector("#task_done")
        task_done.innerHTML += `
        <div class="list_element priority${tasks_list[i].priority}"
         >${tasks_list[i].names}
            <button> <span>Akceptuj</span>
            </button>
            <button> <span>Odrzuć</span>
            </button>
        </div>
        `
    }
}



  });

// 2. SELECT UŻYTKOWNIKA
let select_html = `
<select class = "box1">
<option value = 2>Kasia</option>
<option value = 3>Maja</option>
<option value = 4>Michał</option>
</select>
`
function add_new_task(){
    window.location.href = "/form";
}