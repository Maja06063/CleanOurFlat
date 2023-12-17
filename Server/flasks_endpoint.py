from flask import Flask, render_template, jsonify
import connect_database

server_app = Flask("CleanOurFlat")

@server_app.route("/")
def main_page_endpoint():
    return render_template("main_page.html")

@server_app.route("/form")
def add_new_task():
    return render_template("formularz.html")

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



