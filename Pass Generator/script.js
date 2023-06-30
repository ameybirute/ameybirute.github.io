var length
let char = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
let symbols="!@#$%^&*<>?/\|"
let numbers="0123456789"

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomIntegerPartNumber(min, max) {
    return (Math.random() * (max - min) + min);
}

//copied this function
function copy() {

    if(document.getElementById("display").value==""){
        document.getElementById("copybtn").innerHTML = "Copy"
    }

    else{
    var copyText = document.getElementById("display");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copybtn").innerHTML = "Copied!"
    }
}


class passGenerator {
    constructor(length) {
        this.length = length;
    }

    weakPass() {
        
        let a = "";
        for (let i = 0; i < this.length; i++) {
            a = a + char[randomNumber(0, 51)];
        }
        return a
    }

    moderatePass() {
        let a = ""
        for (let i = 0; i < this.length; i++) {
            let gInt = Math.trunc(randomIntegerPartNumber(1.00, 2.99))
            if (gInt == 1) {
                a = a + char[randomNumber(0, 51)];
            }
            else if (gInt == 2) {
                let numbers = "0123456789"
                a = a + numbers[randomNumber(0, 9)];
            } 
        }
        return a
    }

    moderatePass2() {
        let a = ""
        for (let i = 0; i < this.length; i++) {
            let gInt = Math.trunc(randomIntegerPartNumber(1.00, 2.99))
            if (gInt == 1) {
                a = a + char[randomNumber(0, 51)];
            }
            else if (gInt == 2) {
                a=a+symbols[randomNumber(0,13)]
            } 
        }
        return a
    }

    strongPass(){
        
        let a =""
            for(let i=0;i<this.length;i++){
        let gInt=Math.trunc(randomIntegerPartNumber(1.00,3.99))
        if(gInt==1){
            a=a+char[randomNumber(0,51)];
        }
        else if(gInt==2){
    a=a+numbers[randomNumber(0,9)];
        }
        else if(gInt==3){
    a=a+symbols[randomNumber(0,13)]
        }
        }
        return a
        }
}

const lg = () => {
    length = document.getElementById("lengthsetter").value
    length = Number.parseInt(length)

    if (length < 4 || length > 12) {
        document.getElementById("lengthsetter").value = ""
    }
    else {
        document.getElementById("copybtn").innerHTML = "Copy"
        let b = new passGenerator(length)
        var checkbox1 = document.getElementById("checkbox1");
        var checkbox2 = document.getElementById("checkbox2");
        if(checkbox1.checked == true && checkbox2.checked == false){
            document.getElementById("display").value = b.moderatePass()
        }
        else if(checkbox1.checked == true && checkbox2.checked == true){
            document.getElementById("display").value = b.strongPass()
        }

        else if(checkbox1.checked == false && checkbox2.checked == true){
            document.getElementById("display").value = b.moderatePass2()
        }

        else if(checkbox1.checked == false && checkbox2.checked == false){
            document.getElementById("display").value = b.weakPass()
        }

  
    }
}



