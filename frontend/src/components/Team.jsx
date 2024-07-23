
function Team() {
    const teamData = [
        {
            name: "Agustin Padilla",
            github: "https://github.com/nachopad",
            linkedin: "https://www.linkedin.com/in/ignacio-padilla/",
            img: "/assets/images/nacho.jpeg",
        },
        {
            name: "Leandro Cruz",
            github: "https://github.com/Leo-apu",
            linkedin: "https://www.linkedin.com/in/leandro-v-cruz/",
            img: "/assets/images/leandro.png",
        },
        {
            name: "Carlos Sanchez",
            github: "https://github.com/sanchezcarlosr",
            linkedin: "https://www.linkedin.com/in/carlos-sanchez-308727292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            img: "/assets/images/carlosS.jpeg",
        },
        {
            name: "Maximiliano J. Carrillo",
            github: "https://github.com/MaxiCarrillo",
            linkedin: "http://www.linkedin.com/in/maximiliano-joaqu%C3%ADn-carrillo-b742972a3/",
            img: "/assets/images/maxi.jpg",
        },
        {
            name: "Andres Ismael Miranda",
            github: "https://github.com/isma92ok",
            linkedin: "",
            img: "/assets/images/isma.jpeg",
        },
        {
            name: "Jonathan R. Mascareño",
            github: "https://github.com/JohnRM992",
            linkedin: "https://www.linkedin.com/in/jonatanmascare%C3%B1o992?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            img: "/assets/images/jona.jpeg",
        },
    ];

    return (
       
        <div className="container bg-light shadow">
            <div className="row justify-content-center">
            <div className="">
                <h2 className="mt-3 fs-3 text-white bg-primary p-3 rounded-top">Nuestro Equipo</h2>
                <h3 className="p-3 text-center">Conoce a nuestro equipo de Desarrolladores</h3>
            </div>
            </div>
            <div className="row d-flex mt-3 justify-content-center text-center">
            {teamData
                ? teamData.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 mb-4">
                    <div className="thumbnail p-2">
                        <img
                        src={d.img}
                        alt="..."
                        className="img-fluid w-50 rounded shadow-sm mb-3"
                        />
                        <div className="caption">
                        <h4>{d.name}</h4>
                        <div className="d-flex justify-content-evenly">
                            <a
                            href={d.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <i
                                className="bi bi-github"
                                style={{ fontSize: "1.5em" }}
                            ></i>
                            </a>
                            <a
                            href={d.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <i
                                className="bi bi-linkedin"
                                style={{ fontSize: "1.5em" }}
                            ></i>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                ))
                : "loading"}
            </div>
        </div>
    );
}

export default Team;
