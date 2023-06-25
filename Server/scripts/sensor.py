import time, serial
import requests
print('zzzz')
sl = serial.Serial("/dev/serial0", 9600)
print("aaa")
while True:
    ID = ""
    read_byte = sl.read()
    if read_byte == b'\x02':
        for i in range(12):
            read_byte = sl.read()
            ID = ID + str(read_byte)
        ID = ID.replace("b","")
        ID = ID.replace("'","")
        ID = ID[:-2]
        print(ID)
        val = requests.post(
        "http://localhost:5000/checkCard", 
        data=None,
        json={'cardId':ID}
        )