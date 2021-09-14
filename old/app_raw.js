function createDiv(size=50, id=''){
    const divEl = document.createElement('div');
    divEl.style.height = size+'px';
    divEl.style.width = size+'px';
    divEl.style.backgroundColor = 'red';
    divEl.style.borderRadius = '50%';
    divEl.id = id;
    return divEl
}

function Input(
    onChange=() => {},
    name="",
    type='text',
    placeholder='',
){
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    input.addEventListener('change', onChange)
    return input
}

function p(id){
    const P = document.createElement('p')
    P.id = id;
    return P;
}

function APP() {
    console.log('My app is running');
    const appDiv = document.getElementById('root')
    appDiv.appendChild(createDiv());
    appDiv.appendChild(createDiv(40));
    appDiv.appendChild(createDiv(100));
    appDiv.appendChild(createDiv(10));
    appDiv.appendChild(createDiv(40));
    appDiv.appendChild(p('samia'));
    appDiv.appendChild(Input(function(e){
        document.getElementById('samia').innerHTML = e.target.value;
    }));
}

APP();