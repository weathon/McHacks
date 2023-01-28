from typing import Union

from fastapi import FastAPI
import time, os
import pandas as pd

app = FastAPI()

if not "log.csv" in os.listdir("."):
    with open("log.csv","w") as f:
        f.write("time,height,CO2,EtOH,color,acceleration,hall\n")

        
@app.get("/record")
def read_root(height, CO2, EtOH, color, acceleration, hall):
    with open("log.csv","a") as f:
        f.write(f"{int(time.time())},{height}, {CO2}, {EtOH}, {color}, {acceleration}, {hall}\n")
    return "OK"

def cooking():
    df = pd.open_csv("log.csv")
    df = np.array(df)
    return "Finished Cooking, enjoy your meal"