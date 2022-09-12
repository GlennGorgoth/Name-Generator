
const nameCsvFiles = [
    "/files/femaleFirstNames.csv",
    "/files/maleFirstNames.csv",
    "/files/lastNames.csv"
]

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function dynamicallyLoadCSV(url) {
    var link = document.createElement("link");
    link.href = url;

    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

var nameLists = new Array();

function importNameLists() {
    var nameFile
    console.log("importing name lists")
    for (a = 0; a < 3; a++){
        console.log("indx = " + a);
        nameFile = nameCsvFiles[a];
        console.log('retrieving ' + nameFile)
        $.ajax({
            type: "GET",
            url: nameFile,
            dataType: "text",
            success: function(data) {
              console.log(data)
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

// function convertCSV(data){
//     const nameList = []
//     const reader = new FileReader();
//     reader.onload = function (e) {
//         let str = e.target.result;
//         nameList = csvStringToArray(str);
//         // document.write(text);
//         // console.log(text); // the CSV content as string
//     };
//     reader.readAsText(data);
//     return nameList
// }

function convertCSV(data){

}
function csvStringToArray(str, delimiter = "\n"){
    const names = str.split(delimiter);
    return names
}


function generateNames(index) {
    var names = new Array();
    var firstNameLength = nameLists[index].length - 1
    var lastNameLength = nameLists[2].length -1
    for (i=0;i<5;i++){
        var firstName = nameLists[index][getRandomInt(firstNameLength)]
        var lastName = nameLists[2][getRandomInt(lastNameLength)]
        var newName = firstName + " " + lastName;
        names.push(newName)
    console.log(names)
    }


// names = []
// femaleNameLength = len(nameLists[0])-1
// maleNameLength = len(nameLists[1])-1
// lastNameLength = len(nameLists[2])-1    
// if indx == 0:
//     listlen = femaleNameLength
// else:
//     listlen = maleNameLength
// for i in range (5):
    // firstName = nameLists[indx][random.randint(1, listlen)] 
    // lastName = nameLists[2][random.randint(1, lastNameLength)]
    // newName = firstName + ' ' + lastName
    // if len(newName)>29:
    //     newName = getNewName(indx, nameLists)
    // names.append(newName)
// return names

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
    names = generateNames(getRandomInt(2))
    return names
}

$(document).ready(function() {
    importNameLists();
  });
  