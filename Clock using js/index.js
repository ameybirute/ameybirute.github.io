

const timegetter=()=>{
let d=new Date()
    document.getElementById("hour").innerHTML= d.getHours() >12 ? (d.getHours()-12):d.getHours()
    document.getElementById("minute").innerHTML= d.getMinutes()
    document.getElementById("seconds").innerHTML= d.getSeconds()
    // document.getElementById("milliseconds").innerHTML= d.getMilliseconds()
}
setInterval(timegetter,10)