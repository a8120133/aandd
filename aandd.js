function show(array) {
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    for (var i = 0; i < array.length; i++) {
        html = html + '<td>' + array[i] + '</td>';
    }
    html = html + '</tr>';
    html = html + '</table>';
    //document.getElementById('res').innerHTML = html;
    document.getElementById('res').insertAdjacentHTML('beforeend', html);
}

function createSequentialNumbers(array, n) {
    for (var i = 1; i <= n; i++){
        array.push(i);
    }
}

function createRandomNumbers(array, n){
    for (var i = 0; i <= n; i++){
        var num = Math.floor(Math.random()*100);
        array.push(num);
    }
}

function createRandomNumbers20(array, n){ //0から20;
    for (var i = 0; i <= n; i++){
        var num = Math.floor(Math.random()*21);
        array.push(num);
    }
}