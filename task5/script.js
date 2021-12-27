document.querySelector('button').addEventListener('click', myClick);

function myClick() {
    let inputIn = document.querySelector('.inputIn').value;
    console.log(inputIn);
    document.querySelector('.out').innerHTML = inputIn;
}

