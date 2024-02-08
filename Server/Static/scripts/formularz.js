function go_to_main_page(){
    window.location.href = "/";
}

function save_task(){

    let task_name = document.querySelector("#task_name");

    let owner = document.querySelector("#owner");

    let priority = document.querySelector("#priority");

    let task_json = {
        "names": task_name.value,
        "owner": owner.value,
        "priority": priority.value
    };

    let fetch_options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task_json)
      };
    
      fetch("/save_task", fetch_options)
      .then(response => {
        if (response.status == 201) {
          alert("Zmiany zapisane");
          window.location.href = "/";
        }
        else alert("Nie udało się zapisać zmian");
      });
    console.log(task_json);
}

