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

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
          setTimeout(() => { resolve(true) }, seconds * 1000)
  })
}

const showHack = async (message) => {
  await sleep(2)
  text.innerHTML = text.innerHTML + message + "<br>"
}

const myfn=async()=>{
  document.getElementById("container").style.display="block"
  document.getElementById("buttondiv").style.display="none"
  for (let i = 0; i < messages.length; i++) {
          await showHack(messages[i])
  }
}  
