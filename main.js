
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

function generateNames(index) {
    document.getElementById("nameText").innerHTML = "";
    nameTable = document.getElementById("nameText");
    nameTable.hidden = false;
    var names = new Array();
    var pictureStart = 1;
    var firstNameLength = nameLists[index].length - 1
    var lastNameLength = nameLists[2].length -1
    for (i=0;i<5;i++){

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

        // Generate 5 pictures of characters
        if (index==0){
            pictureStart = 1
        } else {
            pictureStart = 3000
        }
        var pictureCell = document.getElementById("picture_"+i.toString());
        pictureCell.innerHTML = "";
        var picture = document.createElement("img");
        picture.setAttribute("id","img_"+i.toString());
        var picName = pictureStart + getRandomInt(999)+1;
        console.log(picName);
        var picLink = "./images/"+picName.toString()+".jpg";
        picture.src = picLink;
        pictureCell.appendChild(picture);
        
    }
}

function enlargeImg(imgnum){
    var overlay = document.getElementById("overlay");
    var overImgDiv = document.getElementById("overImgDiv");
    overImgDiv.innerHTML="";
    var clickedPic = document.getElementById("img_"+imgnum.toString());
    var overImage = document.createElement("img");
    overImage.src = clickedPic.src;
    overImage.onclick =function(){hideOverlay()};
    overImage.setAttribute('id','overImage');
    overImgDiv.appendChild(overImage);
    overlay.style.visibility = "visible";
}

function hideOverlay(){
    var overlay = document.getElementById("overlay");
    overlay.style.visibility = "hidden";
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
  