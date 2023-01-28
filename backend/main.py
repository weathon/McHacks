from typing import Union

from fastapi import FastAPI
import time, os
app = FastAPI()

if not "log.csv" in os.listdir("."):
    with open("log.csv","w") as f:
        f.write("time,height,CO2,EtOH,color,acceleration,hall\n")

        
@app.get("/record")
def read_root(height, CO2, EtOH, color, acceleration, hall):
    with open("log.csv","a") as f:
        f.write(f"{int(time.time())},{height}, {CO2}, {EtOH}, {color}, {acceleration}, {hall}\n")
    return "OK"
