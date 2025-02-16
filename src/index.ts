import { serve } from '@hono/node-server';
import { Hono } from 'hono'

const app = new Hono();

app.get('/', (c) => c.json({ hello: 'world world', status: 200 }));

serve({
    fetch: app.fetch,
    port: 4001,
});