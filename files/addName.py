import json
import csv
import random

def create_name_lists(relativePathNames):
    csvfiles = ['femaleFirstNames.csv', 'maleFirstNames.csv','lastNames.csv']
    nameLists = []
    for file in csvfiles:
        namelyst = []
        with open(relativePathNames+file, 'r') as csvfile:
            names = csv.reader(csvfile)
            for name in names:
                namelyst.append(name[0])
        nameLists.append(namelyst)
    return nameLists

def getNewName(indx, nameLists):
    femaleNameLength = len(nameLists[0])-1
    maleNameLength = len(nameLists[1])-1
    lastNameLength = len(nameLists[2])-1    
    if indx == 0:
        listlen = femaleNameLength
    else:
        listlen = maleNameLength
    firstName = nameLists[indx][random.randint(1, listlen)] 
    lastName = nameLists[2][random.randint(1, lastNameLength)]
    newName = firstName + ' ' + lastName
    if len(newName)>29:
        newName = getNewName(indx, nameLists)
    return newName
