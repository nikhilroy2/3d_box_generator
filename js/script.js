// dimensions

const dimensions = [...document.querySelectorAll(".box_3d_sizing input")];
const docStyle = document.documentElement.style;

dimensions[0].addEventListener("input", setWidth);
dimensions[1].addEventListener("input", setHeight);
dimensions[2].addEventListener("input", setDepth);

// --------------------------
function setWidth() {
    docStyle.setProperty("--cube-width", dimensions[0].value + "px");
    let box_view = document.querySelector('.box_view')
    
    if(Number(dimensions[0].value) <= 300){
        box_view.style.zoom = '.8'
    } else if(Number(dimensions[0].value) <= 400){
        box_view.style.zoom = '.6'

    } else if(Number(dimensions[0].value) <= 800){
        box_view.style.zoom = '.3'

    } else if(Number(dimensions[0].value) <= 1000){
        box_view.style.zoom = '.2'
    } else if(Number(dimensions[0].value) > 1000 && Number(dimensions[0].value) <= 1500){
        box_view.style.zoom = '.1'
    }  else if(Number(dimensions[0].value) >= 1501){
        alert("Sorry max value 1500px");
        dimensions[0].value = 1500;
        box_view.style.zoom = '.1'
    }
}

function setHeight() {
	docStyle.setProperty("--cube-height", dimensions[1].value + "px");
    let box_view = document.querySelector('.box_view')
    
    if(Number(dimensions[1].value) <= 300){
        box_view.style.zoom = '.8'
    } else if(Number(dimensions[1].value) <= 400){
        box_view.style.zoom = '.6'

    } else if(Number(dimensions[1].value) <= 800){
        box_view.style.zoom = '.3'

    } else if(Number(dimensions[1].value) <= 1000){
        box_view.style.zoom = '.2'
    } else if(Number(dimensions[1].value) > 1000 && Number(dimensions[1].value) <= 1500){
        box_view.style.zoom = '.1'
    }  else if(Number(dimensions[1].value) >= 1501){
        alert("Sorry max value 1500px");
        dimensions[1].value = 1500;
        box_view.style.zoom = '.1'
    }
}

function setDepth() {
	docStyle.setProperty("--cube-depth", dimensions[2].value + "px");
    let box_view = document.querySelector('.box_view')
    
    if(Number(dimensions[2].value) <= 300){
        box_view.style.zoom = '.2'
    } else if(Number(dimensions[2].value) <= 400){
        box_view.style.zoom = '.6'

    } else if(Number(dimensions[2].value) <= 800){
        box_view.style.zoom = '.3'

    } else if(Number(dimensions[2].value) <= 1000){
        box_view.style.zoom = '.2'
    } else if(Number(dimensions[2].value) > 1000 && Number(dimensions[2].value) <= 1500){
        box_view.style.zoom = '.1'
    }  else if(Number(dimensions[2].value) >= 1501){
        alert("Sorry max value 1500px");
        dimensions[2].value = 1500;
        box_view.style.zoom = '.1'
    }
}
reset()
function reset() {
	setWidth();
	setHeight();
	setDepth();
}


function boxSide(val){
    let box_3d = document.querySelector('.box_3d')
    switch(val){
        case 'front':
            box_3d.style.transform = 'rotate(0deg)'
        break;
        case 'left':
            box_3d.style.transform = 'rotateY(90deg)'
        break;
        case 'right':
            box_3d.style.transform = 'rotateY(-90deg)'
        break;
        case 'top':
            box_3d.style.transform = 'rotateX(90deg)'
        break;
        case 'bottom':
            box_3d.style.transform = 'rotateX(-90deg)'
        break;
        case 'back':
            box_3d.style.transform = 'perspective(1000px) rotateY(180deg)'
        break;
        default:
            console.log("not found 3d box part")
    }
}
