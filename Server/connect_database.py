import mysql.connector

try:
    connection = mysql.connector.connect(
        host='localhost',
        user='sqluser',
        password='1234',
        database='cleanourflat'
    )
    if connection.is_connected():
        print("Database connected")

except mysql.connector.Error as e:
    print("Database connection error: ", e)

my_cursor = connection.cursor()

def get_from_database():
    my_cursor.execute("SELECT * FROM Tasks")
    data_from_database = my_cursor.fetchall()
    return data_from_database

def edit_database(sql_query):
    try:
        my_cursor.execute(sql_query)
        #"INSERT INTO Tasks (names, status, owner, priority) VALUES ('ścieranie kurzu z szafki',1,1,1);"
        connection.commit()
        return True
    except:
        print("Problem with saving database")
        return False


"""
try:
    cursor.execute("INSERT INTO Tasks (names, status, owner, priority) VALUES ('ścieranie kurzu z szafki',1,1,1);")
    connection.commit()
except:
    print("Problem with saving database")

print("PO DODANIU")
my_cursor.execute("SELECT * FROM Tasks")
print(my_cursor.fetchall())
"""


