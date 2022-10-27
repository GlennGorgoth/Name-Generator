from importlib.resources import path
import pandas as pd
import random
from os import path

filename = 'StoryGeneratorCategoriesAll.csv'
path_to_dat = path.abspath(path.join(path.dirname(__file__), filename))

df = pd.read_csv(path_to_dat)
LENGTHS = {}
for column in df:
    LENGTHS[column]=len(df[column])-df[column].isnull().sum()-1

def generate(df):
    character = df['Characters'][random.randint(0,LENGTHS['Characters'])]
    situation = df['Situations'][random.randint(0,LENGTHS['Situations'])]
    location = df['Locations'][random.randint(0,LENGTHS['Locations'])]
    problem = df['Problems'][random.randint(0,LENGTHS['Problems'])]
    print('  ')
    print('Once there was a ', character)
    print('every day, ',character, ' likes to ',situation,' at ', location)
    print('But one day, ',problem)
    print('...')
    print('')

while True:
    input('Press Enter to Generate a Story Idea...')
    generate(df)
