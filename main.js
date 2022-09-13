
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

function generateNames(index) {
    document.getElementById("nameText").innerHTML = "";
    nameTable = document.getElementById("nameText");
    nameTable.hidden = false;
    var names = new Array();
    var pictureStart = 1;
    var firstNameLength = nameLists[index].length - 1
    var lastNameLength = nameLists[2].length -1
    for (i=0;i<5;i++){
        // Generate 5 pictures of characters
        if (index==0){
            pictureStart = 1
        } else {
            pictureStart = 3000
        }
        var pictureCell = document.getElementById("picture_"+i.toString());
        pictureCell.innerHTML = "";
        var picture = document.createElement("img");
        var picName = pictureStart + getRandomInt(999)+1;
        console.log(picName);
        picture.src = "/images/"+picName.toString()+".jpg";
        pictureCell.appendChild(picture);
        // Generate 5 character names
        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.classList.add("nameCells");
        var firstName = nameLists[index][getRandomInt(firstNameLength)]
        var lastName = nameLists[2][getRandomInt(lastNameLength)]
        var newName = firstName + " " + lastName;
        names.push(newName)
        var text = document.createTextNode(newName);
        cell.appendChild(text);
        row.appendChild(cell);
        nameTable.appendChild(row);
        
    // console.log(names)
    }
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
  