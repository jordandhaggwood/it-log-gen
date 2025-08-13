//Saves the logs locally
function saveLog() {
   localStorage.setItem("logHistory", document.getElementById("logHistory").innerHTML);
}

//Loads them upon the page everytime it's started
function loadLog() {
   document.getElementById("logHistory").innerHTML = localStorage.getItem("logHistory") || "";
}

function genEntry() {
    
    //Declaring variables for option type values, and setting them to default.
    let ticketExist = "";
    let ticketNum ="";
    let statusTxt="";


    

    //An if statement that stores the ticket selection as strings
    //If user selects "Ticket" the output will give "Ticket (Ticket Number):"
    if (document.getElementById("yesTicket").selected) {
     ticketExist = "Ticket #";
     ticketNum = document.getElementById("ticketNum").value;

    //If the user selects "No Ticket" the output will give "No Ticket" without the ticketNum value
    } else if (document.getElementById("noTicket").selected) {
       ticketExist = "No Ticket";
       ticketNum = "";
    }
   
   //letiables for the name, Request/Issues, and Actions Taken Field
    let nameTicket = document.getElementById("nameTicket").value;
    let requestTxt = document.getElementById("request").value;
    let solutionTxt = document.getElementById("solution").value;

  //An If statement given if the request was completed or not.  
  //If the user selects "Resolved" the output will be "Status: Reolved"
  if (document.getElementById("resolved").selected) {
   statusTxt = "Status: Resolved"

  //If the user selects "Incomplete" the output will be "Status: Incomplete"
  } else if (document.getElementById("incomplete").selected){
     statusTxt = "Status: Incomplete" 
    
  }

    //full statement. Using innerHTML to replicate like an HTML line.
    //Also declares it self as log entry.
    let logEntry = 
    `${ticketExist}${ticketNum}: ${nameTicket}<br>
    Request/Issue: ${requestTxt}<br>
    Actions Taken: ${solutionTxt}<br>
    ${statusTxt}`;

  
  //gets back the value for logEntry, because the internet thinks using var is a cardinal sin
  return logEntry;

}

//Updates the log output itself.
function updateLogOutput() {
   document.getElementById("logOutput").innerHTML = genEntry();
}


//Function for the copy text
function copyText() {


  //Creates "copy text letiable" for storing the inner text of the output.
  let copyText = document.getElementById("logOutput").innerText;
 

  // Copies the output of the log entry
  navigator.clipboard.writeText(copyText);
  
  // Alert the copied text
  alert("Copied to clipboard");
    
  }

  //Adds an entry to the log
  function addEntry() {
 
  
   let x = document.createElement("P");
   x.innerHTML = genEntry();
   document.getElementById("logHistory").appendChild(x);   
   saveLog();

   
  }
  


//Clears history of the log, saves locally if you do
function clearLog() {
   if (confirm("Are you sure you want to clear your Log History?") == true) {
   document.getElementById("logHistory").innerHTML = "";
   localStorage.removeItem("logHistory");
   }
}

//Copies all of the history log
function copyLog() {
   let copyHist = document.getElementById("logHistory").innerText;

   navigator.clipboard.writeText(copyHist);
  
   // Alert the copied text
   alert("Copied to clipboard");

}

   //Creating a function that disables ticketNum input if "No ticket" is selected.
   const dropdown = document.getElementById("ticketExist");
   const inputField = document.getElementById("ticketNum");
   dropdown.addEventListener('change', disableNum);

   function disableNum(){
   if (dropdown.value == "disabled") {
      inputField.disabled = true;
      inputField.value = "";
   } else {
      inputField.disabled = false;
   }
}

//Loads local storage everytime you load the page.
window.onload = loadLog;

