import { handler } from './build/handler.js';
import express from 'express';
import {
    createIPX,
    ipxHttpStorage,
    createIPXNodeServer
} from "ipx";


const app = express();

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
    res.end('ok');
});

;
// ipx image optimizer
const ipx = createIPX({
    // Allowed domains - with httpStorage: ipxHttpStorage({ domains: ["your-domain.com", "second-domain.com"] }), 
    // ipx will optimize images coming for a given domain.
    httpStorage: ipxHttpStorage({ domains: ["picsum.photos"] }),
});
app.use("/_ipx", createIPXNodeServer(ipx));

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3000, () => {
    console.log('listening on port 3000');
});