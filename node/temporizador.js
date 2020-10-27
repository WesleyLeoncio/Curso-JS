const schedule = require('node-schedule'); // BIBLIOTECA USADA 
const { setgroups } = require('process');

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 1', function () {
    console.log("Executando Tarefa 1! " + new Date().getSeconds());
});

setTimeout(function () {
    tarefa1.cancel();
    console.log("Cancelando Tarefa 1!");
}, 20000);

// OUTRA FORMA DE EXECUTAR A FUNÇÃO
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)]; // DE SEGUNDA A SEXTA
regra.hour = 15; // HORAS 
regra.second = 30; // SEGUNDOS 


const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log("Executando Tarefa 2! " + new Date().getSeconds());
});