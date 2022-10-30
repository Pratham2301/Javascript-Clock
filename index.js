const clock = document.getElementById('clock-time');

function setTime()
{
    let time =  new Date();

    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm = "AM"

    if(hr>=12)
    {
        ampm = "PM";
        if(hr>12)
            hr = hr%12;
    }

    if(hr<10)
    {
        hr = '0' + hr;
    }

    if(min<10)
    {
        min = '0' + min;
    }

    if(sec<10)
    {
        sec = '0' + sec;
    }

    let value = hr + ":" + min + ":" + sec + "     " + ampm;

    clock.innerHTML = value;
}

setTime();

setInterval(setTime,1000);