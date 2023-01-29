import numpy as np
import pandas as pd
import math
import time 

true = True
false = False
tile_threshold = 0.2


def get_drink_name(row):
    return "NaD"

def get_EtOh_Amount(name):
    return 0

def check_tilt(a): 
    a = a.split("_")
    if abs(float(a[0])-0) >= tile_threshold:
        return True
    if abs(float(a[1])-0) >= tile_threshold:
        return True
    if abs(float(a[2])-9.8) >= tile_threshold:
        return True

    return False


def cooking():
    df = pd.read_csv("log.csv")
    df = np.array(df)  # Convert it to a array

    last_left_height = 0
    last_drink = "NaD"
    last_full_amount = 0
    last_time_start = 0
    for i in df:
        if i[6] == 0:  # lid is open
            continue

        if check_tilt(i[5]):
            continue

        if int(i[1]) - last_left_height >= 1:  # liquid added 1cm, refill
            print("Refill")
            name = get_drink_name(i)
            if last_time_start != 0:
                with open("cooked.csv", "a") as f:
                    f.write(f"{last_time_start}, {int(time.time())}, {name},{last_full_amount-last_left_height}, {get_EtOh_Amount(name)}\n")

            last_full_amount = i[1]
            last_time_start = time.time()

        last_left_height = i[1]
    return "Finished Cooking, enjoy your meal"


cooking()


