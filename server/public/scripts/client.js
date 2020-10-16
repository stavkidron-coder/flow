console.log('Hello from js');

$(document).ready(onReady);

function onReady(){
    console.log('Hello from jq');
    getPaths();
}

// GET inputed paths data from server
function getPaths(){
    $('#pathTableBody').empty();
    $.ajax({
        type: 'GET',
        url: '/inputsLibrary'
    }).then(function(response) {
        console.log('GET from server response:', response);
        //append data to dom
        for (let i = 0; i < response.length; i++) {
            $('#pathTableBody').append(`
                <tr data-id=${response[i].id}>
                    <td>${response[i].instrument}</td>
                    <td>${response[i].microphone}</td>
                    <td>${response[i].tieline}</td>
                    <td>${response[i].outboardGear}</td>
                    <td>${response[i].preamp}</td>
                    <td>${response[i].dawInput}</td>
                </tr>
            `)
            
        }
    })
}
