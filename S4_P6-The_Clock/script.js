let colors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

let whichColor = 0;

let dateDisplay = document.querySelector('div');
let backColSet = document.querySelector('body');
setTime()
setInterval(setTime, 1000);

function setColor () {
    whichColor = whichColor + 1;
    if (whichColor > colors.length - 1) {
        whichColor = 0;
    }
    backColSet.style.backgroundColor = colors[whichColor];
}

function setTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let mornNight = ""
    if (h > 12) { // set to non military time and add AM and PM
        h = h - 12;
        mornNight = "P.M."
    } else {
        mornNight = "A.M."
    }
    
    if (h < 10) { //hours display format
    h = "0" + h;
    } if(m < 10) { //minutes display format
        m = "0" + m;
    } if(s < 10) { //seconds display format
        s = "0" + s;
    }
    dateDisplay.innerHTML =  h + ":" + m + ":" + s + " " + mornNight;
    setColor();
}
