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