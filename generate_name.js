
const nameCsvFiles = [
    "./files/femaleFirstNames.csv",
    "./files/maleFirstNames.csv",
    "./files/lastNames.csv"
]

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

var nameLists = new Array();

function importNameLists() {
    var nameFile
    console.log("importing name lists")
    for (a = 0; a < 3; a++){
        // console.log("indx = " + a);
        nameFile = nameCsvFiles[a];
        // console.log('retrieving ' + nameFile)
        $.ajax({
            type: "GET",
            url: nameFile,
            dataType: "text",
            success: function(data) {
            //   console.log(data)
            //   nameLists.push(data)
              const names = $.csv.toArrays(data); //define your own function
              nameLists.push(names)
              checkIfFinished();
            }
          });
       
    }
}

function checkIfFinished(){
    if (nameLists.length == 3) {
        for (i=0; i<3; i++){
            console.log("added " + nameLists[i][0])
        }
    }
}

function generateNames(index, surprise=false) {
    document.getElementById("nameText").innerHTML = "";
    nameTable = document.getElementById("nameText");
    nameTable.hidden = false;
    var names = new Array();
    var pictureStart = 1;
    var maxPicNum = 1799;
    var lastNameLength = nameLists[2].length -1
    if (surprise==true){
        index=getRandomInt(2);
    }
    var firstNameLength = nameLists[index].length - 1
    var firstName = nameLists[index][getRandomInt(firstNameLength)]
    var lastName = nameLists[2][getRandomInt(lastNameLength)]
    var newName = firstName + " " + lastName;
    names.push(newName)
    var text = document.createTextNode(newName);
    cell.appendChild(text);
    row.appendChild(cell);
    nameTable.appendChild(row);

   
}


function getMaleName(){
    names = generateNames(1)
    return names
}

function getFemaleName(){
    names = generateNames(0)
    return names
}

function getSurpriseName(){
    names = generateNames(getRandomInt(2),true)
    return names
}

$(document).ready(function() {
    importNameLists();
  });
  