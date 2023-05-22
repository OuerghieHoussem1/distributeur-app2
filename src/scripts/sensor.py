import rdm6300
import requests
reader = rdm6300.Reader('/dev/ttyS0')
print("Please insert an RFID card")
while True:
    card = reader.read()
    if card:
        data = card.value
        print(data)
        val = requests.post(
        "http://localhost:5000/checkCard", 
        data=None,
        json={'cardId':data}
        )