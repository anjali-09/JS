class staticVariables {
    static random() {
        return Math.floor(Math.random()*100);
    }

    static index = 0;
    static count = 10;
}

var random = staticVariables.random();
function submit()
{
    var number = document.getElementById("number").value;
    if(number<0 || number>100 || number=="" || isNaN(number)) {
        alert("Please enter a valid number between 1-100");
        return;
    }
    if(staticVariables.index < 10) {
        if(number > random) {
            alert("Try Again! Guessed number is greater.");
            document.getElementById("number").value = '';
        } else if(number < random) {
            alert("Try Again! Guessed number is smaller.");
            document.getElementById("number").value = '';
        } else {
            alert("Congratulations!! Guessed number is correct.");
            document.getElementById('submit').style.display = 'none';
            document.getElementById('restart').style.display = 'block';
        }
        
       document.getElementById('count').value = --staticVariables.count;
    } 
    if(staticVariables.index == 9 && number != random) {
        alert('OPPS! You need to restart the game.');
        document.getElementById('submit').style.display = 'none';
        document.getElementById('restart').style.display = 'block';
    }
    document.getElementById('guessed').style.display = 'block';
    if(staticVariables.index == 0) {
        document.getElementById('guessedNumbers').value = number;
    } else {
        document.getElementById('guessedNumbers').value += ', ' + number;
    }
    staticVariables.index++;
}

function restart() {
    document.getElementById("number").value = '';
    random = staticVariables.random();
    staticVariables.index=0;
    staticVariables.count = 10;
    document.getElementById('count').value = staticVariables.count;
    document.getElementById('restart').style.display = 'none';
    document.getElementById('submit').style.display = 'block';
    document.getElementById('guessed').style.display = 'none';
    document.getElementById('guessedNumbers').value ='';
}