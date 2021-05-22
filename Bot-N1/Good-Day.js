const fs = require( 'fs');
const { Client } = require( 'whatsapp-web.js');
var schedule = require( 'node-schedule');

const SESSION_FILE_PATH = './session.json';
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}

const client = new Client ({ puppeter: {headless: true }, session: sessionCfg });


client.initialize();

client.on('qr', (qr) => {
    // NOTE: this event will not be fired if a session is specified.
    console.log('QR RECEIVED', qr);
});

client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
    sessionCfg=session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) { 
        if (err) {
            console.error(err);
        } 
    });
})

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccesfull
    console.error('AUTHENTICATION FAILURE', msg);
})

const goodDay = [
    'Estoy riendo por no llorar.. xd'
]

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) * min;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

var j = schedule.scheduleJob('* 15 * * *', function(){

});
client.on('ready', () => {
    console.log('READY')
    console.log("sending")
    console.log("-----") 
    console.log("-----")
    let y = Math.round(getRandomArbitrary(0, 0));
    client.sendMessage('593986426325@c.us',goodDay[y]).then ((response)=>{
        if(response.id.fromMe){
            console.log("done");
            //process.exit(1)
            stop();
        }
    });
});

async function stop() {
    console.log('Fin de la ejecucion.');
    await new Promise(resolve => setTimeout(resolve, 1000));
    process.exit(0);
};
