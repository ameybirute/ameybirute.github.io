const arr=[
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

const sleep=async(n)=>{
  return new Promise((resolve)=>{
      setTimeout(function(){
      resolve()
  },(n*1000))  
  })
}

(async()=>{
for(let i=0;i<arr.length;i++){
  await sleep(2)
  console.log(arr[i])
}
})()

