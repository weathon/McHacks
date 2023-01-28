import pandas as pd
import numpy as np

def dataprocess():
    df = pd.open_csv("data.csv")
    df = np.array(df)

    # Alcohol 
    alcohol_amount = 0

    # Types of drink ML
    latte_ML_amount = 0
    soda_ML_amount = 0
    Orange_Juice_ML_amount = 0
    Coke_ML_amount = 0
    flavoured_coke_ML_amount = 0
    RedBull_ML_amount = 0
    Flavoured_energydrink_ML_amount = 0
    Wine_ML_amount = 0
    White_Wine_ML_amount = 0
    Black_Coffee_ML_amount = 0
    Tomatao_Juice_ML_amount = 0
    Apple_Juice_ML_amount = 0
    Mtn_Dew_ML_amount = 0


    # Types:
    alcohol_ML = 0
    coffee_ML = 0
    fruit_juice_ML = 0
    energy_drink_ML = 0
    soda_ML = 0


    for i in range (0, len(df)):
        # 0-4 ]
        if df[2] == 'latte':
            latte_ML_amount += df[3]
            coffee_ML += latte_ML_amount
        if df[2] == 'flavoured coke':
            flavoured_coke_ML_amount += df[3]
            soda_ML += flavoured_coke_ML_amount
        if df[2] == 'flavoured energy drink':
            Flavoured_energydrink_ML_amount
            energy_drink_ML += Flavoured_energydrink_ML_amount
        if df[2] == 'soda':
            soda_ML_amount += df[3]
            soda_ML += soda_ML_amount
        if df[2] == 'orange juice':
            Orange_Juice_ML_amount += df[3]
            fruit_juice_ML += Orange_Juice_ML_amount
        if df[2] == 'coke':
            Coke_ML_amount += df[3]
            soda_ML += Coke_ML_amount
        if df[2] == 'redbull':
            RedBull_ML_amount += df[3]
            energy_drink_ML += RedBull_ML_amount
        if df[2] == 'wine':
            Wine_ML_amount += df[3]
            alcohol_ML += Wine_ML_amount
            alcohol_amount += df[4] * Wine_ML_amount
        if df[2] == 'white wine':
            White_Wine_ML_amount += df[3]
            alcohol_ML += White_Wine_ML_amount
            alcohol_amount += df[4] * White_Wine_ML_amount
        if df[2] == 'black coffee':
            Black_Coffee_ML_amount += df[3]
            coffee_ML += Black_Coffee_ML_amount
        if df[2] == 'tomato juice':
            Tomatao_Juice_ML_amount += df[3]
            fruit_juice_ML += Tomatao_Juice_ML_amount
        if df[2] == 'apple juice':
            Apple_Juice_ML_amount += df[3]
            fruit_juice_ML += Apple_Juice_ML_amount
        if df[2] == 'mountain dew':
            Mtn_Dew_ML_amount += df[3]
            soda_ML += Mtn_Dew_ML_amount
      





