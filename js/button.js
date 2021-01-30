var buttons = Array();
var selectionables = Array();
var totalComponents = 2;
//var seleccionables = document.querySelector(".seleccionable");

function getButtons()
{
    for (let i = 0; i < totalComponents; i++)
    {
        let id = "#input" + i;
        buttons.push(document.querySelector(id));
        buttons[i].onclick = () =>
        {
            console.log(document.childElementCount)
            if (buttons[i].checked)
            {
                selectionables[i].style.display = "none";
            }
            else
            {
                selectionables[i].style.display = "block";
            }
        }
    }
}

function getSelectionables()
{
    for (let i = 0; i < totalComponents; i++)
    {
        let id = "#slc" + i;
        selectionables.push(document.querySelector(id));
    }
}

function init()
{
    getSelectionables();
    getButtons();
}

init();