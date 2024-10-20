// Variables para almacenar los totales
let gastos = 0;
let pagos = 0;
let saldo = 0;

// Capturar elementos del DOM
const transactionForm = document.getElementById('transaction-form');
const gastosElement = document.getElementById('total-gastos');
const pagosElement = document.getElementById('total-pagos');
const saldoElement = document.getElementById('saldo');

// Función flecha para manejar el submit del formulario
const handleFormSubmit = (event) => {
    // Evitar que el formulario recargue la página
    event.preventDefault();

    // Obtener los valores del formulario
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;

    // Agregar la transacción
    addTransaction(type, amount);

    // Actualizar el resumen de finanzas
    updateSummary();

    // Limpiar el formulario
    transactionForm.reset();
};

// Función flecha para agregar una transacción
const addTransaction = (type, amount) => {
    if (type === 'gasto') {
        gastos += amount;
    } else if (type === 'pago') {
        pagos += amount;
    }
    // Calcular el saldo
    saldo = pagos - gastos;
};

// Función flecha para actualizar los totales en el DOM
const updateSummary = () => {
    gastosElement.textContent = '$' + gastos.toFixed(2);
    pagosElement.textContent = '$' + pagos.toFixed(2);
    saldoElement.textContent = '$' + saldo.toFixed(2);
};

// Agregar el evento 'submit' al formulario
transactionForm.addEventListener('submit', handleFormSubmit);
