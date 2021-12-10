import { MendixSdkClient  } from 'mendixplatformsdk';


const logfunc = console.log;
console.log = function () {}
const myArgs = process.argv.slice(2);
const username = myArgs[0];
const apikey = myArgs[1];
const appName = myArgs[2] || 'mooncake';
const client = new MendixSdkClient(username, apikey);

async function main() {
    const project = await client.platform().createNewApp(appName
        ,"","598aefe3-67d7-4564-a266-dab3f4919080");
    
    logfunc(`{ "AppName": "${project.name()}"
    , "AppId": "${project.id()}" }`);     
}

main();