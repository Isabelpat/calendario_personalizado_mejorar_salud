// Obtener elementos del DOM
const inputTarea = document.getElementById('input');
const botonAgregar = document.getElementById('botonAgregar');
const categoriaSelect = document.getElementById('categoria');
const faseSelect = document.getElementById('fase');
const fechaSeleccionada = document.getElementById('fechaSeleccionada');
const imagenRutina = document.getElementById('imagenRutina');
const listaTareas = document.getElementById('lista');
const ejercicioRecomendado = document.getElementById('ejercicioRecomendado');
const alimentacionRecomendada = document.getElementById('alimentacionRecomendada');

// Función para mostrar recomendaciones según la fase
faseSelect.addEventListener('change', function() {
    const fase = faseSelect.value;

    switch (fase) {
        case 'menstrual':
            ejercicioRecomendado.textContent = 'Ejercicio recomendado: Yoga, caminatas ligeras, ejercicios de respiración.';
            alimentacionRecomendada.textContent = 'Alimentación sugerida: Alimentos ricos en hierro (espinacas, lentejas), vitamina C (naranjas, fresas) y bebidas calientes.';
            break;
        case 'folicular':
            ejercicioRecomendado.textContent = 'Ejercicio recomendado: Entrenamientos de fuerza, HIIT moderado, natación.';
            alimentacionRecomendada.textContent = 'Alimentación sugerida: Proteínas magras, carbohidratos complejos, grasas saludables (aguacate, frutos secos).';
            break;
        case 'ovulatoria':
            ejercicioRecomendado.textContent = 'Ejercicio recomendado: Entrenamientos intensos de fuerza, cardio de alta intensidad.';
            alimentacionRecomendada.textContent = 'Alimentación sugerida: Alimentos ricos en zinc (semillas, mariscos), verduras crucíferas y proteínas.';
            break;
        case 'premenstrual':
            ejercicioRecomendado.textContent = 'Ejercicio recomendado: Cardio moderado, pilates, ejercicios de movilidad.';
            alimentacionRecomendada.textContent = 'Alimentación sugerida: Té de hierbas, alimentos ricos en magnesio (plátano, chocolate oscuro), evita el exceso de sal.';
            break;
        default:
            ejercicioRecomendado.textContent = 'Selecciona una fase para ver el ejercicio recomendado.';
            alimentacionRecomendada.textContent = 'Selecciona una fase para ver la alimentación sugerida.';
    }
});

// Función para agregar tarea
botonAgregar.addEventListener('click', function() {
    const tarea = inputTarea.value;
    const categoria = categoriaSelect.value;
    const fase = faseSelect.value;
    const fecha = fechaSeleccionada.value;
    const imagen = imagenRutina.files[0];

    if (!tarea) {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const tareaElemento = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = `${tarea} - ${categoria} - Fase: ${fase} - Fecha: ${fecha}`;

    if (imagen) {
        const imagenVista = document.createElement('img');
        imagenVista.src = URL.createObjectURL(imagen);
        tareaElemento.appendChild(imagenVista);
    }

    tareaElemento.appendChild(checkbox);
    tareaElemento.appendChild(label);
    listaTareas.appendChild(tareaElemento);

    inputTarea.value = '';
    fechaSeleccionada.value = '';
    imagenRutina.value = '';
});
