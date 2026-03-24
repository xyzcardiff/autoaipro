// AutoAIPro - Generate images from text prompts
// Built with AI Trend App Builder

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'AutoAIPro',
        description: 'Generate images from text prompts',
        status: 'running',
        built_at: '2026-03-24 09:00:02'
    });
});

app.get('/api/trend', (req, res) => {
    res.json({
        topic: 'AI Image Generator',
        keywords: ["image gen","DALL-E","Stable Diffusion","AI art"]
    });
});

app.listen(PORT, () => {
    console.log(`AutoAIPro running on port `);
});
