(timeloader = () => {
    const d = new Date()
    document.getElementById("timedisplay").innerHTML = (d.getHours() > 12 ? (d.getHours() - 12) : d.getHours()) + ":" + d.getMinutes() + ":" + d.getSeconds()
})()

setInterval(timeloader, 1000)

let f =new Date()
document.getElementById("hour").value=(f.getHours() > 12 ? (f.getHours() - 12) : f.getHours())
document.getElementById("minutes").value=f.getMinutes()


const alarmset = () => {
    let hourinput=Number.parseInt(document.getElementById("hour").value)
    let minutesinput=Number.parseInt(document.getElementById("minutes").value)  
    var e = document.getElementById("time");
    var value = e.value;
    if (value == "am") {
        
        let i=1
        setInterval(function () {
            let a = new Date()
            if ((a.getHours() == hourinput) && (a.getMinutes() == minutesinput) && (a.getSeconds()==0)) {
                while(i==1){
                    var audio = new Audio('audio/audio_file.mp3');
                    audio.play();
                    i++
                break
            }
            }
        }, 1000)

    }
    else if (value == "pm") {
        let j=1
        setInterval(function () {
            let b = new Date()
            if ((b.getHours() == (hourinput + 12)) && (b.getMinutes() == minutesinput) && (b.getSeconds()==0)) {
                while(j==1){
                    var audio = new Audio('audio/audio_file.mp3');
                    audio.play();
                j++
                break
            }
            }
        }, 1000)

    }

}

const pausealarm=()=>{
    audio.pause()
}

