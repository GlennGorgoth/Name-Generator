import os
import sys
import pandas as pd
from bs4 import BeautifulSoup
import string

path = 'Top 100 supervillains.html'
data = []
caps = string.ascii_uppercase

list_header = ['CHARACTER NAME']
soup = BeautifulSoup(open(path), 'html.parser')
names = soup.find_all("h3")

for name in names:
    text = name.text.strip()
    n = ''
    s = False
    for c in text:
        if not s:
            if c in caps:
                s = True
                n+=c
        else:
            if c=='<':
                break
            n+=c
    data.append(n)
    # print(n, end="\n"*2)
df = pd.DataFrame(data=data, columns=list_header)
print(df)
df.to_csv('SuperVillains.csv')