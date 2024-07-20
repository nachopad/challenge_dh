CREATE DATABASE recruitingRH_db;

CREATE TABLE recruitingRH_db.Applicants(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    dni VARCHAR(8) NOT NULL,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    email VARCHAR(30) NOT NULL,
    phone VARCHAR(20),
    url_linkedin VARCHAR(100),
    birthdate DATE,
    gender VARCHAR(20),
    image VARCHAR(200)
);

CREATE TABLE recruitingRH_db.Professions(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    description VARCHAR(2000)
);

CREATE TABLE recruitingRH_db.Applicant_Professions(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    applicant_id INT UNSIGNED,
    profession_id INT UNSIGNED,
    FOREIGN KEY(applicant_id) REFERENCES Applicants(id) ON DELETE CASCADE,
    FOREIGN KEY(profession_id) REFERENCES Professions(id)
);
