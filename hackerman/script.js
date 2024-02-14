let messages=[
  "Initializing Tool",
  "Waiting for response",
  "Few seconds more...",
  "Searching for user",
  "User found",
  "Finding vulnerabilities",
  "Trying to guess password",
  "Attempt failed",
  "Expanding the search list",
  "Attempt failed(2)",
  "Trying brute force attack",
  "Wait..",
  "ATTEMPT SUCCEED!!!"
]

const text = document.getElementById("text");

const sleep =function(seconds)
{return new Promise(resolve =>{setTimeout(() => {
  resolve(true);
    }, seconds * 1000);}
)}

const showmsg = async function(instOfMsg){
  await sleep(2);
  text.innerHTML = text.innerHTML + instOfMsg + "<br>";
}

const msgloader=async function(){
  document.getElementById("buttondiv").style.display = "none";
  document.getElementById("container").style.display = "block";
  for (let i = 0; i < messages.length; i++) {
     await showmsg(messages[i]);
  }

}