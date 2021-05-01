function what_time(){
    var time_label = document.getElementById("main_clock");
    let current_time = new Date().toLocaleTimeString();
    time_label.innerHTML = new Date().toLocaleTimeString();
    console.log(current_time);
}

setInterval(what_time, 1000);
