var isStatus = document.querySelector("h2");

var btn = document.querySelector("#add")

var flag = 0;

btn.addEventListener("click",function(){
    if(flag == 0){

        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        flag = 1
    }
    else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        flag = 0;
    }
})

