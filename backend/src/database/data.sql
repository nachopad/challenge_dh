USE recruitingRH_db;

-- Populate Applicants table
INSERT INTO Applicants (dni, first_name, last_name, email, phone, url_linkedin, birthdate, gender, image) VALUES
('12345678', 'Juan', 'Pérez', 'juan.perez@example.com', '123456789', 'https://linkedin.com/in/juanperez', '1985-05-15', 'Masculino', 'juan.jpg'),
('87654321', 'María', 'Gómez', 'maria.gomez@example.com', '987654321', 'https://linkedin.com/in/mariagomez', '1990-08-25', 'Femenino', 'maria.jpg'),
('11223344', 'Carlos', 'Rodríguez', 'carlos.rodriguez@example.com', '1122334455', 'https://linkedin.com/in/carlosrodriguez', '1978-12-12', 'Masculino', 'carlos.jpg'),
('44332211', 'Lucía', 'Fernández', 'lucia.fernandez@example.com', '5544332211', 'https://linkedin.com/in/luciafernandez', '1982-03-30', 'Femenino', 'lucia.jpg');

-- Populate Professions table
INSERT INTO Professions (title, description) VALUES
('Desarrollador de Software', 'Responsable del desarrollo, prueba y mantenimiento de software.'),
('Diseñador Gráfico', 'Encargado de crear diseños visuales para diversos medios.'),
('Analista de Datos', 'Analiza datos para ayudar a tomar decisiones estratégicas.'),
('Gerente de Proyectos', 'Supervisa y coordina proyectos desde la concepción hasta su finalización.');

-- Populate Applicant_Professions table
INSERT INTO Applicant_Professions (applicant_id, profession_id) VALUES
(1, 1),
(1, 3),
(2, 2),
(3, 4),
(4, 1),
(4, 2);