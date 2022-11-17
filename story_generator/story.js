

function getRandomInt(hi){
    return Math.floor(Math.max(1, Math.random() * hi));
}

const CSVLISTS = [
    'characters.csv',
    'situations.csv',
    'locations.csv',
    'problems.csv',
]


var storyLists = new Array();

function importStoryLists() {
    var nameFile
    console.log("importing story csvs")
    for (a = 0; a < 4; a++){
        // console.log("indx = " + a);
        nameFile = CSVLISTS[a];
        $.ajax({
            type: "GET",
            url: nameFile,
            dataType: "text",
            success: function(data) {
                console.log(data)
                console.log('imported csv')
            //   nameLists.push(data)
                const items = $.csv.toArrays(data); //define your own function
                console.log(items)
                storyLists.push(items)
                checkIfFinished();
            }
            });
        
        }
    }

function checkIfFinished(){
    if (storyLists.length == 4) {
        for (i=0; i<4; i++){
            console.log("added " + storyLists[i][0])
        }
        }
    }

function generateStory() {
    console.log("Generating a story")
    document.getElementById("storyText").innerHTML = "";
    storyText = document.getElementById("storyText");
    for (i=0; i<4; i++){
        if (storyLists[i][0] == 'Characters'){
            var char_len = storyLists[i].length-1
            var character = storyLists[i][getRandomInt(char_len)]
        }
        else if(storyLists[i][0] == 'Situations'){
            var sit_len = storyLists[i].length-1
            var situation = storyLists[i][getRandomInt(sit_len)]
        }
        else if(storyLists[i][0] == 'Locations'){
            var loc_len = storyLists[i].length-1
            var location = storyLists[i][getRandomInt(loc_len)]
        }
        else if(storyLists[i][0] == 'Problems'){
            var prob_len = storyLists[i].length-1
            var problem = storyLists[i][getRandomInt(prob_len)]
        }
    }
    var story_p1 = 'Once there was a '+character
    var story_p2 = 'Every day ' + character + ' likes to ' + situation + ' at ' + location
    var story_p3 = 'But one day... ' + problem 
    var text1 = document.createTextNode(story_p1)
    var text2 = document.createTextNode(story_p2)
    var text3 = document.createTextNode(story_p3)
    var brk1 = document.createElement("br")
    var brk2 = document.createElement("br")
    storyText.appendChild(text1)
    storyText.appendChild(brk1)
    storyText.appendChild(text2)
    storyText.appendChild(brk2)
    storyText.appendChild(text3)
    }

$(document).ready(function() {
    importStoryLists();
  });
  