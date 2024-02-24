from flask import Flask, render_template, jsonify, request,make_response
import connect_database

server_app = Flask("CleanOurFlat")

@server_app.route("/")
def main_page_endpoint():
    return render_template("main_page.html")

@server_app.route("/form")
def add_new_task():
    return render_template("formularz.html")

@server_app.route("/save_task", methods = ["POST","PUT"])
def add_owner_to_task():
    post_data_dict = request.get_json()
    print(post_data_dict)

    if request.method == "POST":
        print(post_data_dict["owner"])
        if int(post_data_dict["owner"]) == 1:
            print("1")
            status = 1
        else:
            print("2")
            status = 2
        if connect_database.edit_database(
            f"""INSERT INTO Tasks (names, status, owner, priority) 
            VALUES ('{post_data_dict["names"]}',{status},{post_data_dict["owner"]},{post_data_dict["priority"]});"""):
            return make_response("", 201)

    elif request.method == "PUT":
        id = post_data_dict["id"]
        owner = post_data_dict["owner"]
        edit_query = "UPDATE Tasks SET owner = " + str(owner)+",status = 2 WHERE tasks_id = " + str(id) + ";"
        if connect_database.edit_database(edit_query):
            return make_response("", 201)

    return make_response("", 400)

@server_app.route("/delete_task", methods = ["DELETE"])
def delete_tasks():
    post_data_dict = request.get_json()
    id = post_data_dict["id"]
    delete_query = "DELETE FROM Tasks WHERE tasks_id = " + str(id) + ";"
    if connect_database.edit_database(delete_query):
        #usuwanie z bazy danych

        return make_response("", 204)
        #gdy się nie uda usunąć
    
    return make_response("", 400)


@server_app.route("/get_tasks")
def get_tasks_endpoint():
    #1. Pobranie zadań z bazy danych - lista list
    data_from_database = connect_database.get_from_database()
    #2. przerobienie listy list na jsona z listą zadań
    tasks_list = []
    for task in data_from_database:
        task_dictionary = {
            "names": task[1],
            "onwer": task[3],
            "priority": task[4],
            "status": task[2],
            "tasks_id": task[0]
        }
        tasks_list.append(task_dictionary)
    
    #3. Wysłanie (zwrócenie) klientowi jsona z listą zadań
    return jsonify(tasks_list)
server_app.run(debug=True, host="0.0.0.0")



