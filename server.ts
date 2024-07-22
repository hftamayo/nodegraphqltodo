import {startBackEnd} from './src/backend';

startBackEnd()
.then(() => {
    console.log("GraphQLtodo backend is up and ready")
})
.catch((error: any) => {
    console.error("Error starting Nodetodo backend: ", error);
    process.exit(1);
});

