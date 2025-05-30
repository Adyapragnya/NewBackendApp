import express from 'express';
import LoginDetail from '../models/LoginDetails.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    try {
            const user = await LoginDetail.findOne({
                adminName: new RegExp(`^${username.trim()}$`, 'i'),
                adminPassword: password.trim(), // use hashing if needed
            });
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.adminName,
                role: user.adminRole,
            },
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});

export default router;