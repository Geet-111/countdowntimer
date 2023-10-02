const enddate = '17 September 2023 04:11:00 PM';
document.getElementById('enddate').innerText = enddate;

var inputs = document.querySelectorAll('input');

function clock() {
    const end = new Date(enddate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log(end);
    // console.log(now);
    // console.log(end - now);
    // console.log(diff);
    // covvert to days

    if(diff<0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600 % 24);
    inputs[2].value = Math.floor(diff / 60 % 60);
    inputs[3].value = Math.floor(diff % 60);



    // console.log(diff / 1000);

    // inputs[0].value = (diff / 3600 / 60 / 24);
    // console.log((diff / 3600 / 60 / 24));
    setInterval(function(){
        clock()
    }, 1000)
}
clock()