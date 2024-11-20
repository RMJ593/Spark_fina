const express = require('express');
const authRoutes = require('./routes/auth');
const creditRoutes = require('./routes/credits');

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/credits', creditRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

/*const express = require('express')
const app = express()
const { supabase: initPromise } = require('./config');

app.get('/', (req, res) => {
    console.log('Starting the server')
})

app.post('/signup', (req, res) => {
    
    res.send('Hi SignUp page')
})

app.listen(5000)
*/