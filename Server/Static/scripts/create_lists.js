
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
        <div class="list_element priority${tasks_list[i].priority}" id = "element${i}"
        >${tasks_list[i].names}
        ${select_html}
          <button onclick = "add_user_to_task(${tasks_list[i].tasks_id}, 'element${i}' )"> <span>Potwierdź</span>
          </button>
          <button onclick = "delete_task(${tasks_list[i].tasks_id})"> <span>Usuń</span>
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
                <button onclick = "delete_task(${tasks_list[i].tasks_id})"> <span>Usuń</span>
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
                <button onclick = "delete_task(${tasks_list[i].tasks_id})"> <span>Usuń</span>
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
                <button onclick = "delete_task(${tasks_list[i].tasks_id})"> <span>Usuń</span>
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
         <button onclick = "delete_task(${tasks_list[i].tasks_id})"> <span>Akceptuj</span>
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

function delete_task(id){
    fetch('/delete_task', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
        }),
      })
        .then(response => {
          if (response.status == 204){
            alert("Usuwanie udane. Kod 204.");
            window.location.href = "/";
          }
          else{
            alert(`Usuwanie nie powiodło się. Kod błędu ${response.status}`);
          }
        });
}

function add_user_to_task(task_id, list_element_id ){
    const list_element = document.querySelector("#"+list_element_id);
    const owner = list_element.children[0].value; 
    fetch('/save_task', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: task_id, owner: owner
        }),
      })
        .then(response => {
          if (response.status == 201){
            alert(`Przypisanie użytkownika udane. Kod ${response.status}.`);
            window.location.href = "/";
          }
          else{
            alert(`Przypisanie użytkownika nie powiodło się. Kod błędu ${response.status}`);
          }
        });

}