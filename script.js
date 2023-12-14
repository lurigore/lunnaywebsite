const tabela = document.getElementById("tabela");
function showItems()
{
    tabela.style.transform = 0;
}



const vid = document.getElementById("video-background");
const accpt = document.getElementById("accpt-video");
function playVideo()
{
    vid.play();

    accpt.style.opacity = 0;
    accpt.style.transform = 'translateX(-100%)';
    setInterval(deactivateOption, 500);
}

function declineVideo()
{
    vid.style.display = 'none';
    accpt.style.opacity = 0;
    accpt.style.transform = 'translateX(-100%)';
    setInterval(deactivateOption, 500);
}
function deactivateOption(){
    accpt.style.display = 'none';
}

let value1 = 0;
let value2 = 0;
let value3 = 0;
function updateValues(checkbox) {
    
    const checkboxes = document.getElementsByName("checkmark");
    
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false; // Desmarca as outras checkmarks
        }
    });

    value1 = 0;

    checkboxes.forEach((cb) => {
        if (cb.checked) {
            value1 += parseInt(cb.value); // Desmarca as outras checkmarks
        }
    });
    document.getElementById("totalValue").innerText = formatZero(value1 + value2 + value3);
    changeDisplay();
}
function updateValues2(checkbox) {
    const checkboxes = document.getElementsByName("checkmark2");

    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false; // Desmarca as outras checkmarks
        }
    });

    value2 = 0;
    checkboxes.forEach((cb) => {
        if (cb.checked) {
            value2 += parseInt(cb.value); // Desmarca as outras checkmarks
        }
    });
    document.getElementById("totalValue").innerText = formatZero(value1 + value2 + value3);
    changeDisplay();
}
function updateValues3(checkbox) {
    const checkboxes = document.getElementsByName("checkmark3");

    value3 = 0;
    checkboxes.forEach((cb) => {
        if (cb.checked) {
            value3 += parseInt(cb.value); // Desmarca as outras checkmarks
        }
    });
    
    document.getElementById("totalValue").innerText = formatZero(value1 + value2 + value3);
    changeDisplay();
}
function formatZero(formated)
{
     return formated <= 0 ? (`00${formated}`) : formated
}

const image = document.getElementById("display-image");
function changeDisplay()
{
    const bustoChk = document.getElementById("busto");
    const meioCorpoChk = document.getElementById("meio-corpo");
    const corpoInteiroChk = document.getElementById("corpo-inteiro");

    if(bustoChk.checked)
    {
        if((value1 + value2) == 100)
        {
            image.style.display= 'none';
        } else{
            image.style.display= 'block'
        }

        if((value1 + value2) == 150)
        {
            image.src = "display-options/busto/apenas-tracejado.png"
        }
        else if((value1 + value2) == 200)
        {
            image.src = "display-options/busto/render-basico.png"
        }
        else if((value1 + value2) == 250)
        {
            image.src = "display-options/busto/render-normal.png"
        }
        else if((value1 + value2) == 350)
        {
            image.src = "display-options/busto/caprichado.png"
        }
    }
    else if(meioCorpoChk.checked)
    {
        if((value1 + value2) == 150)
        {
            image.style.display= 'none';
        } else{
            image.style.display= 'block'
        }

        if((value1 + value2) == 200)
        {
            image.src = "display-options/meio-corpo/apenas-tracejado.png"
        }
        else if((value1 + value2) == 250)
        {
            image.src = "display-options/meio-corpo/render-basico.png"
        }
        else if((value1 + value2) == 300)
        {
            image.src = "display-options/meio-corpo/render-normal.png"
        }
        else if((value1 + value2) == 400)
        {
            image.src = "display-options/meio-corpo/caprichado.png"
        }
    }
    else if(corpoInteiroChk.checked)
    {
        if((value1 + value2) == 250)
        {
            image.style.display= 'none';
        } else{
            image.style.display= 'block'
        }


        if((value1 + value2) == 300)
        {
            image.src = "display-options/corpo-inteiro/apenas-tracejado.png"
        }
        else if((value1 + value2) == 350)
        {
            image.src = "display-options/corpo-inteiro/render-basico.png"
        }
        else if((value1 + value2) == 400)
        {
            image.src = "display-options/corpo-inteiro/render-normal.png"
        }
        else if((value1 + value2) == 500)
        {
            image.src = "display-options/corpo-inteiro/caprichado.png"
        }
    }else{
        image.style.display='none';
    }

    const PeB = document.getElementById('b&w-check');
    const backgroundCheck = document.getElementById('cenario-check');
    const backgroundDisplay = document.getElementById('background-display');
    if(PeB.checked)
    {
        image.style.filter = 'saturate(0%)'
        backgroundDisplay.style.filter = 'saturate(0%)'
    }
    else{
        image.style.filter = 'saturate(100%)'
        backgroundDisplay.style.filter = 'saturate(100%)'
    }
    if(backgroundCheck.checked)
    {
        backgroundDisplay.style.display = 'block'
    } else{
        backgroundDisplay.style.display = 'none'
    }
}





