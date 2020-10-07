const actividad = (tarea, duracion, callback) => {
    
    setTimeout(() => {
        callback(tarea);    
    }, duracion);
    
}

actividad("1. levantarse", 5000, (tarea)=> {
    console.log("tarea "+ tarea);
    actividad("2. tender la cama", 3000, (tarea)=> {
        console.log("tarea "+ tarea);
        actividad("3. bañarse", 3000, (tarea)=> {
            console.log("tarea "+ tarea);
            actividad("4. clase paradigmas", 5000, (tarea)=> {
                console.log("tarea "+ tarea);
                actividad("5. desayunar", 8000, (tarea)=> {
                    console.log("tarea "+ tarea);
                    actividad("6. jugar", 10000, (tarea)=> {
                        console.log("tarea "+ tarea);
                    })
                })
            })
        })
    })
})


















/*actividad("levantarse", (tarea) => {
    setTimeout(() => {
        console.log("tarea: "+tarea);
    }, 5000)
})*/













/*
const levantarse = () => {
    setTimeout(() => {
        console.log("Levantarse");
    }, 500);
}

const tenderLaCama = () => {
    setTimeout(() => {
        console.log("Tender la cama");
    }, 300);
}

const bañarse = () => {
    setTimeout(() => {
        console.log("Bañarse");
    }, 300);
}

const claseParadigmas = () => {
    setTimeout(() => {
        console.log("tomar clase de paradigmas");
    }, 300);
}

const desayunar = () => {
    setTimeout(() => {
        console.log("Desayunar");
    }, 400);
}

const jugar = () => {
    setTimeout(() => {
        console.log("Jugar videojuegos");
    }, 500);
}

levantarse();
tenderLaCama();
bañarse();
claseParadigmas();
desayunar();
jugar();*/
