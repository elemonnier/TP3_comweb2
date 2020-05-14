function ajaxRequest(type, url, callback, callback2){
    let xhr = new XMLHttpRequest();
    xhr.open(type, url);
    xhr.onload = () => {
        switch(xhr.status) {
            case 200:
            case 201:
                callback(JSON.parse(xhr.responseText));
                break;
            default: 
                callback2(xhr.status);
                break;
        }
    };
    xhr.send();
}

function modify(table){
    document.getElementById('title').innerText = table[0];
    document.getElementById('detail').innerText = "*** Détails ***\nHeures : " + table[1]["hours"] + "\nMinutes : " + table[1]["minutes"] + "\nSecondes : " + table[1]["secondes"];  
    displayClock(table[1]);
}

function errors(code) {
    let a = document.getElementById("errors");
    switch(code){
        case 400:
            a.removeAttribute("style");
            a.innerText = 'Requête incorrecte';
            break;
        case 401:
            a.removeAttribute("style");
            a.innerText = 'Authentifiez-vous';
            break;    
        case 403:
            a.removeAttribute("style");
            a.innerText = 'Accès refusé';
            break;
        case 404:
            a.removeAttribute("style");
            a.innerText = 'Page non trouvée';
            break;  
        case 500:
            a.removeAttribute("style");
            a.innerText = 'Erreur interne du serveur';
            break;
        case 503:
            a.removeAttribute("style");
            a.innerText = 'Service indisponible';
            break;  
    }
}


function main(){
    setInterval(ajaxRequest, 1000, "GET", "php/time.php", modify, errors);
}
main();