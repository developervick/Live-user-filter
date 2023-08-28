window.onload = main
let users = []

function main(){
    
    let userCon = document.querySelector("#userContainer")

    getData().then((data) => {
        userCon.innerHTML = ''  
        data.forEach(element => {    
        let userItem = document.createElement("li")
        users.push(userItem)
        
        userItem.innerHTML = `
        <li id="userCard" class="bg-white no-scrollbar flex px-3 py-2 items-center border-b-[2px] border-gray-200">
                <img src="${element.picture.medium}" class="w-14 rounded-full">
                <div class="flex flex-col justify-self-start self-start justify-start mx-3">
                    <h5 class="text-lg font-semibold">${element.name.first}</h5>
                    <h5 class="text-sm font-semibold one-line">${element.location.city}, ${element.location.state}</h5>
                </div>
            </li>
            `
        userCon.appendChild(userItem)   
        });
    })

    document.querySelector('#search').addEventListener("input", (e)=>{
        filter(e.target.value)
    })
}

async function getData(){
    let userData = await fetch("https://randomuser.me/api/?results=50").then(res => res.json())
    .then(data => {
        return data
    })
    return userData.results
}

function filter(serachTerm){
    
    users.forEach((user) => {
        if(user.innerText.toLowerCase().includes(serachTerm.toLowerCase())){
            user.classList.remove('hidden')
        }
        else{
            user.classList.add('hidden')
        }
    })
}