import { useForm } from "react-hook-form";
import { useContext } from "react";
import { InitDataContext } from "../../context/InitDataContext";

const ApplicantForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createApplicant, professions } = useContext(InitDataContext);

    const onSubmit = async (data) => {
        const formData = new FormData();

        for (const key in data) {
            if (data[key] && key !== "image") {
                formData.append(key, data[key]);
            } else if (data[key] && key === "image") {
                formData.append("image", data[key][0]);
            }
        }
        try {
            await createApplicant(formData);
            reset();
            alert("Aspirante registrado correctamente!");
        } catch (error) {
            console.error("Error al registrar el aspirante:", error);
            alert("Error al registrar el aspirante.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container p-4 bg-light rounded shadow-lg">
            <div className="card-header text-center bg-primary text-white p-3 fs-3">
                <h2 className="mb-0 ">Registro de Aspirante</h2>
            </div>

            <div className="card-body mt-3">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">
                            Nombre
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
                            Apellido
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
                            Email
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
                            DNI
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
                            Telefono
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
                            LinkedIn URL
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
                            Fecha de Nacimiento
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
                            Foto de Perfil
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
                            Profesion
                        </label>
                        <select
                            className="form-control"
                            id="profession"
                            {...register("profession", { required: "Profesion es requerida" })}
                        >
                            <option value="">Selecciona</option>
                            {professions &&
                                professions.map((profession) => (
                                    <option key={profession.id} value={profession.id}>
                                        {profession.title}
                                    </option>
                                ))}
                        </select>
                        {errors.profession && (
                            <div className="text-danger">{errors.profession.message}</div>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="gender" className="form-label">
                            Genero
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
                                Masculino
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
                                Femenino
                            </label>
                        </div>
                        {errors.gender && (
                            <div className="text-danger">{errors.gender.message}</div>
                        )}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Registrar 
                </button>
            </div>
        
        </form>
    );
}

export default ApplicantForm;
