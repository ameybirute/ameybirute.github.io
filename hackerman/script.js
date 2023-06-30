let messages=[
    "Initialing Tool",
    "Waiting for response",
    "just few seconds more...",
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

(async () => {
  for (let i = 0; i < messages.length; i++) {
          await showHack(messages[i])
  }
})()