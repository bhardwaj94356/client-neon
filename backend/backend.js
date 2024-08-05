const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const port = 3001

const app = express()

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'L@mborgh!n!700',
    database : 'neon_assam'
})

connection.connect((err) => {
    if(err){
        console.error('Error connecting to database',err)
    }
    console.log('Connected to database');
})

app.listen(port, ()=>{
    console.log('Server listening to :',port);
})

//Send data to database
app.post('/customer_details',(req,res) => {
    const {text, fontStyle, colour, size, name, phno, address} = req.body
    const mysql_query = 'insert into neon_customer_details (text, font_style, font_color, size, name, phone_no, address) values (?,?,?,?,?,?,?)'
    connection.query(mysql_query, [text, fontStyle, colour, size, name, phno, address], (error,results) => {
        if(error){
            console.error('Error executing query',error);
            return res.status(500).json({error: 'Database Error'})
        }
        res.json({text, fontStyle, colour, size, name, phno, address})
    })
})

//Get the data from database
app.get('/customer_details', (req, res) => {
    const query = 'SELECT * FROM neon_customer_details order by id desc';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data', error);
            return res.status(500).json({ error: 'Database Error' });
        }
        res.json(results);
    });
});

// Update order status to accepted
app.post('/accept_order', (req, res) => {
    const { id } = req.body; // Extract ID from the request body
    // console.log('Request body:', req.body);
    console.log('Received ID:', id); // Debugging line
    const query = 'UPDATE neon_customer_details SET action = "accepted" WHERE id = ?';
    connection.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error updating order:', error);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ success: true });
    });
  });


// Update order status to rejected
app.post('/reject_order', (req, res) => {
    const { id } = req.body; // Extract ID from the request body
    console.log('Received ID:', id); // Debugging line
    const query = 'UPDATE neon_customer_details SET action = "rejected" WHERE id = ?';
    connection.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error updating order:', error);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ success: true });
    });
  });