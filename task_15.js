/* Logger: Напишите функцию createLogger(), которая должна возвращать объект с методами:
log(message): сохраняет сообщение в массив.
getLogs(): выводит все сохраненные сообщения.*/

function createLogger() {
    const messages = [];
    
    return {
        log: function (message) {
            messages.push(message);
        },
        getLogs: function () {
            if (messages && !messages.length) {
                console.log('There is no messages yet');
            } else {
                console.log(messages.join('\n'));
            }
        }
    }
}

const logger = createLogger();

logger.log('Starting program...');
logger.log('Testing program...');
logger.log('Ending program... Exit');
logger.getLogs();

// Генератор случайных чисел из диапазона
function createRandomGenerator(min, max) {
    let result = 0;
    
    return {
        generate: function () {
            result = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log('Generating ' + result);
        },
        log: function() {
            console.log('Current value is ' + result);
        }
    }
}

const generator = createRandomGenerator(5, 10);

generator.generate();
generator.generate();
generator.generate();
generator.generate();
generator.generate();
generator.log();
