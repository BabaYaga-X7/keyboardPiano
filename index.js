window.onkeydown = play;

function play(_key)
{
    let keyPressed = _key.key;

    switch(keyPressed)
    {
        case 'a':
            document.getElementById('btnA').classList.add('playing');
            document.getElementById('audioPlayerA').setAttribute('src','sounds/a.mp3');
            document.getElementById('audioPlayerA').setAttribute('type','audio/mpeg');
            document.getElementById('audioPlayerA').setAttribute('autoplay','');
            setTimeout(() => {
                updateStyle('btnA');
            },400);            
            break;

        case 's':
            document.getElementById('btnS').classList.add('playing');
            document.getElementById('audioPlayerS').setAttribute('src','sounds/s.mp3');
            document.getElementById('audioPlayerS').setAttribute('type','audio/mpeg');
            document.getElementById('audioPlayerS').setAttribute('autoplay','');
            setTimeout(() => {
                updateStyle('btnS');
            },400);  
            break;

        case 'd':
            document.getElementById('btnD').classList.add('playing');
            document.getElementById('audioPlayerD').setAttribute('src','sounds/d.mp3');
            document.getElementById('audioPlayerD').setAttribute('type','audio/mpeg');
            document.getElementById('audioPlayerD').setAttribute('autoplay','');
            setTimeout(() => {
                updateStyle('btnD');
            },400);   
            break;      

        case 'j':
            document.getElementById('btnJ').classList.add('playing');
            document.getElementById('audioPlayerJ').setAttribute('src','sounds/j.mp3');
            document.getElementById('audioPlayerJ').setAttribute('type','audio/mpeg');
            document.getElementById('audioPlayerJ').setAttribute('autoplay','');
            setTimeout(() => {
                updateStyle('btnJ');
            },400);  
            break;

        case 'k':
            document.getElementById('btnK').classList.add('playing');
            document.getElementById('audioPlayerK').setAttribute('src','sounds/k.mp3');
            document.getElementById('audioPlayerK').setAttribute('type','audio/mpeg');
            document.getElementById('audioPlayerK').setAttribute('autoplay','');
            setTimeout(() => {
                updateStyle('btnK');
            },400);  
            break;    

        case 'l':
            document.getElementById('btnL').classList.add('playing');
            document.getElementById('audioPlayerL').setAttribute('src','sounds/l.mp3');
            document.getElementById('audioPlayerL').setAttribute('type','audio/mpeg');
            document.getElementById('audioPlayerL').setAttribute('autoplay','');
            setTimeout(() => {
                updateStyle('btnL');
            },400);   
            break;  

        default:
            break;
    }
}

function updateStyle(_key)
{   
    document.getElementById(_key).classList.remove('playing'); 
}