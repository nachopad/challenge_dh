import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InitDataContext } from "../../context/InitDataContext";

import showAlert from "../../utils/sweetalert.js";

const ApplicantForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createApplicant, professions } = useContext(InitDataContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const formData = new FormData();

        for (const key in data) {
            if (data[key] && key !== "image") {
                formData.append(key, data[key]);
            } else if (data[key] && key === "image") {
                formData.append("image", data[key][0]);
            } else if (data[key] && key == "profession") {
                data[key].forEach((profession) => {
                    formData.append("profession[]", profession);
                })
            }
        }

        try {
            await createApplicant(formData);
            reset();
            showAlert('Aspirante registrado', 'El aspirante se ha registrado correctamente.', 'success' , 'Ok');
            navigate("/");
        } catch (error) {
            showAlert('Error', 'Ha ocurrido un error al registrar el aspirante.', 'error', 'Ok');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container p-5 bg-light rounded shadow">
            <div className="card-header text-center bg-primary text-white ">
                <h2 className="mb-0 p-3 fs-4">Registro de Aspirante</h2>
            </div>

            <div className="card-body mt-3">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">
                            <b className="fs-5">Nombre</b>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            {...register("firstName", {
                                required: "Nombre es requerido",
                                minLength: { value: 2, message: "El nombre debe tener al menos 2 caracteres" },
                                maxLength: { value: 50, message: "El nombre debe tener como máximo 50 caracteres" }
                            })}
                        />
                        {errors.firstName && (
                            <div className="text-danger">{errors.firstName.message}</div>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">
                            <b className="fs-5">Apellido</b>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            {...register("lastName", {
                                required: "Apellido es requerido",
                                minLength: { value: 2, message: "El apellido debe tener al menos 2 caracteres" },
                                maxLength: { value: 50, message: "El apellido debe tener como máximo 50 caracteres" }
                            })}
                        />
                        {errors.lastName && (
                            <div className="text-danger">{errors.lastName.message}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                            <b className="fs-5">Email</b>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            {...register("email", {
                                required: "Email es requerido",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Email no valido"
                                }
                            })}
                        />
                        {errors.email && (
                            <div className="text-danger">{errors.email.message}</div>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="dni" className="form-label">
                            <b className="fs-5">DNI</b>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="dni"
                            {...register("dni", {
                                required: "DNI es requerido",
                                minLength: { value: 7, message: "El DNI debe tener al menos 7 caracteres" },
                                maxLength: { value: 10, message: "El DNI debe tener como máximo 10 caracteres" }
                            })}
                        />
                        {errors.dni && (
                            <div className="text-danger">{errors.dni.message}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">
                            <b className="fs-5">Teléfono</b>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            {...register("phone", {
                                required: "Teléfono es requerido",
                                minLength: { value: 10, message: "El número de teléfono debe tener al menos 10 caracteres" },
                                maxLength: { value: 15, message: "El número de teléfono debe tener como máximo 15 caracteres" }
                            })}
                        />
                        {errors.phone && (
                            <div className="text-danger">{errors.phone.message}</div>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="urlLinkedin" className="form-label">
                            <b className="fs-5">LinkedIn URL</b>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="urlLinkedin"
                            {...register("urlLinkedin", {
                                required: "LinkedIn URL es requerido",
                                pattern: {
                                    value: /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/,
                                    message: "LinkedIn URL no valido"
                                }
                            })}
                        />
                        {errors.urlLinkedin && (
                            <div className="text-danger">{errors.urlLinkedin.message}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="birthdate" className="form-label">
                            <b className="fs-5">Fecha de Nacimiento</b>
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="birthdate"
                            {...register("birthdate", { required: "Fecha de Nacimiento es requerida" })}
                        />
                        {errors.birthdate && (
                            <div className="text-danger">{errors.birthdate.message}</div>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="image" className="form-label">
                                <b className="fs-5">Foto de Perfil</b>
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            {...register("image", { required: "Image es requerida" })}
                        />
                        {errors.image && (
                            <div className="text-danger">{errors.image.message}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="profession" className="form-label">
                        <b className="fs-5">Profesion </b> <i>( use ctrl + click para seleccionar multiples )</i>
                            
                        </label>
                        <select
                            className={`form-control ${errors.profession ? 'is-invalid' : ''}`}
                            id="profession"
                            multiple
                            {...register("profession", { required: "Profesion es requerida" })}
                        >
                            {professions && professions.map((profession) => (
                                <option key={profession.id} value={profession.id}>
                                    {profession.title}
                                </option>
                            ))}
                        </select>
                        {errors.profession && (
                            <div className="invalid-feedback">{errors.profession.message}</div>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="gender" className="form-label">
                            <b className="fs-5">Genero</b>
                        </label>
                        <div id="gender" className="form-check">
                            <input
                                type="radio"
                                id="genderMale"
                                value="Male"
                                className="form-check-input"
                                {...register("gender", { required: "Genero es requerido" })}
                            />
                            <label htmlFor="genderMale" className="form-check-label">
                                <b>Masculino</b>
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="genderFemale"
                                value="Female"
                                className="form-check-input"
                                {...register("gender", { required: "Genero es requerido" })}
                            />
                            <label htmlFor="genderFemale" className="form-check-label">
                                <b>Femenino</b>
                            </label>
                        </div>
                        {errors.gender && (
                            <div className="text-danger">{errors.gender.message}</div>
                        )}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-1 fs-5">
                    Registrar 
                </button>
            </div>
        
        </form>
    );
}

export default ApplicantForm;
