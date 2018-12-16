function clock(){
    document.querySelectorAll(".words").forEach(div => div.classList.remove("on"));

    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();

    let hoursClass = "";
    let minsClass = "";

    if (hours > 12){
        hours = hours - 12;
    }

    if ((mins >= 35) && (hours === 12)){
        hours = 1;
    } else if ((hours != 12) && (mins >= 35)){
        hours = hours + 1;
    }

    switch (hours) {
        case 0:
            hoursClass = "twelve";
            break;
        case 1:
            hoursClass = "one";
            break;
        case 2:
            hoursClass = "two";
            break;
        case 3:
            hoursClass = "three";
            break;
        case 4:
            hoursClass = "four";
            break;
        case 5:
            hoursClass = "five";
            break;
        case 6:
            hoursClass = "six";
            break;
        case 7:
            hoursClass = "seven";
            break;
        case 8:
            hoursClass = "eight";
            break;
        case 9:
            hoursClass = "nine";
            break;
        case 10:
            hoursClass = "ten";
            break;
        case 11:
            hoursClass = "eleven";
            break;
        case 12:
            hoursClass = "twelve";
    }

    document.querySelector("." + hoursClass + ".hours").classList.add("on");

    if (((mins >= 5) && (mins < 10)) || ((mins >= 55) && (mins <=59))){
        minsClass = "fiveMins";
    } else if (((mins >= 10) && (mins < 15))|| ((mins >= 50) && (mins < 55))){
        minsClass = "tenMins";
    } else if (((mins >= 20) && (mins < 25)) || ((mins >= 40) && (mins < 45))){
        minsClass = "twentyMins";
    } else if (((mins >= 25) && (mins < 30))|| ((mins >= 35) && (mins < 40))){
        document.querySelector(".twentyMins").classList.add("on");
        document.querySelector(".fiveMins").classList.add("on");
    } else if (((mins >= 15) && (mins < 20)) || ((mins >= 45) && (mins < 50))){
        minsClass = "quarter";
    } else if ((mins >= 30) && (mins < 35)){
        minsClass = "half";
    } else if ((mins >= 0) && (mins < 5)){
        minsClass = "oclock";
    }

    if ((mins >= 5) && (mins < 35)){
        document.querySelector(".past").classList.add("on");
    } else if (mins >= 35) {
        document.querySelector(".to").classList.add("on");
    }

    if (minsClass != ""){
        document.querySelector("." + minsClass + "").classList.add("on");
    }

    let minsRemainder = mins % 5;
    let minsRemainderClass = "";
    switch (minsRemainder) {
        case 1:
            minsRemainderClass = ".one";
            break;
        case 2:
            minsRemainderClass = ".two";
            break;
        case 3:
            minsRemainderClass = ".three";
            break;
        case 4:
            minsRemainderClass = ".four";
            break;
        default:
            minsRemainderClass = "";
    }

    if (minsRemainder != 0){
        document.querySelectorAll("" + minsRemainderClass + ".mins")
        .forEach(mins => mins.classList.add("on"));
    } else {
        document.querySelectorAll(".mins").forEach(mins => mins.classList.remove("on"));
    }
}


setInterval(clock, 1000);

clock();