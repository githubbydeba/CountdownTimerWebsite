const endDate="02 october 2023 10.00am";

document.getElementById("end-date").innerText= endDate;
const inputs =  document.querySelectorAll("input")
// initial call
clock()

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end);
    // console.log(now);
    const diff = (end-now) / 1000;

    if (diff<0 ) return;
    // convert into days
    inputs[0].value= (Math.floor(diff /3600/24));
    // convert into hours
    inputs[1].value=(Math.floor(diff / 3600)%24);
    // covert into minutes
    inputs[2].value=(Math.floor(diff/60)%60);
    // convert into seconds
    inputs[3].value=(Math.floor(diff%60));
}

setInterval(
    function(){
        clock()
    }
    
)
   
    




// 1day=24hrs
// 1hr=60min
// 60min=3600 sec