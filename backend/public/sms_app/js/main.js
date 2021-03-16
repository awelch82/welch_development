const numberInput = document.getElementById('number'),
      textInput = document.getElementById('msg'),
      button = document.getElementById('button'),
      response = document.querySelector('.response'),
      specifyTimeId = document.getElementById('specifyTimeId'),
      numbersGroup = document.getElementById('numbersGroup'),
      timeGroup = document.getElementById('timeGroup'),
      timeInput = document.getElementById('timeInput'),
      numbers = [];
      
button.addEventListener('click', send, false);

const socket = io();
socket.on('smsStatus', function(data) {
    response.innerHTML = '<h5>Text message sent to ' + data.to + '</h5>'
})

var promises = [];

function send() {
    const text = textInput.value;
    numbers.forEach(x => {
        const number = x.replace(/\D/g, '');
        promises.push(
            fetch('/', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({number: number, text: text})
            })
            .then(function(res) {
                console.log(res);
            })
            .catch(function(err) {
                console.log(err);
            })
        );
    })
}

Promise.all(promises).then(() => 
    {console.log('done');}
);



function addNumber() {
    if (numberInput.value.length) {
        numbers.push(numberInput.value);
        numberInput.value = '';
        numbersGroup.style.display = 'block';
        buildNumberList();
    }
}

function buildNumberList() {
    $('#numbersGroup').empty();
    numbers.forEach((num, index) => {
        $('#numbersGroup').append(
            '<li class="list-group-item"><button onclick="removeNum('+index+')" style="cursor: pointer" class="btn btn-sm btn-outline-danger float-left">X</button><span style="margin-left: 10px;">' + num  +'</span></li>'
        );
    });
}

function removeNum(index) {
    numbers.splice(index, 1);
    buildNumberList();
}


function specifyTime() {
    if (specifyTimeId.checked) {
        timeGroup.style.display = 'block';
        var date = new Date();
        timeInput.value = date.getHours() + ":" + date.getMinutes() + ":00";;
        document.getElementById('button').innerHTML = 'Schedule';
    } else {
        timeGroup.style.display = 'none';
        document.getElementById('button').innerHTML = 'Send';
    }
}