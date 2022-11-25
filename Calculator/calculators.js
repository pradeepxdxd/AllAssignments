let btn = document.querySelectorAll('.button');

let string = "";
let histroy = "";
Array.from(btn).forEach((button) => {
    button.addEventListener('click', e => {
        if(e.target.innerHTML === '='){
            try{
                let his = "";
                his = string;
                string = eval(string);
                document.querySelector('input').value = string;
                histroy += his + "=" + string + "<br/>";
                document.getElementById('hist').innerHTML = histroy;
            }
            catch(error){
                document.querySelector('input').value = "";
                string = "";
            }
        }
        else if(e.target.innerHTML === 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML === 'Del'){
            string = string.slice(0, string.length - 1);
            document.querySelector('input').value = string;
        }
        else{
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

const clearHistory = "";
let histy = document.getElementById("clearAll");
console.log(histy);

histy.addEventListener('click', () => {
    histroy = "";
    document.getElementById('hist').innerHTML = clearHistory;
});