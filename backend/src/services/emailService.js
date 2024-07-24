const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'grupo1.integrador.dh.recruitingrh@gmail.com',
        pass: 'aorsmsfrfvamsxle',
    },
});

const emailService = {
    sendRegistrationEmail: async (email, firstName) => {
        const mailOptions = {
            from: 'grupo1.integrador.dh.recruitingrh@gmail.com',
            to: email,
            subject: 'Registro exitoso',
            html: `<p>Estimado/a ${firstName},</p><p>Su registro ha sido exitoso. ¡Bienvenido!</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Correo enviado exitosamente');
        } catch (error) {
            console.error('Error al enviar correo:', error);
            throw error;
        }
    },
};

module.exports = emailService;