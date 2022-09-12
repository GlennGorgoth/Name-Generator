
const nameCsvFiles = [
    "/files/femaleFirstNames.csv",
    "/files/maleFirstNames.csv",
    "/files/lastNames.csv"
]

function dynamicallyLoadCSV(url) {
    var link = document.createElement("link");
    link.href = url;

    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "files/lastNames.csv",
      dataType: "text",
      success: function(data) {
        console.log(data)
        processData(data); //define your own function
      }
    });
  });

// const nameLists = importNameLists();

// function importNameLists() {
//     console.log("importing name lists")
//     let nameLists = [];
//     for (a = 0; a < 3; a++){
//         console.log("indx = " + a);
//         var nameFile = nameCsvFiles[a];
//         $.ajax({
//             type: "GET",
//             url: nameFile,
//             dataType: "text",
//             success: function(data) {
//               console.log('retrieving ' + nameFile)
//               const names = convertCSV(data); //define your own function
//             }
//           });
//     }
//     return text;
    // nameLists = []
    // for file in csvfiles:
    //     namelyst = []
    //     with open(relativePathNames+file, 'r') as csvfile:
    //         names = csv.reader(csvfile)
    //         for name in names:
    //             namelyst.append(name[0])
    //     nameLists.append(namelyst)
    // return nameLists
// }

function convertCSV(data){
    const nameList = []
    const reader = new FileReader();
    reader.onload = function (e) {
        let text = e.target.result;
        // document.write(text);
        console.log(text); // the CSV content as string
    };
    reader.readAsText(data);
    return nameList
}


function generateNames(index) {
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