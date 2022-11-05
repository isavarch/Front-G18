//hay un tiempo de espera nosa sabemos cuanto puede tardar 
//peticion.. no esta bien estructurada nunca retornara nada 


const imgProfile =document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUserName = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubTwitter = document.querySelector("#github-twitter");
const githubLocation = document.querySelector("#github-location");

const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search");


githubActionSearch.onclick =() => {
    const username = githubInputSearch.value;
    githubInputSearch.value ="";

    if(username ===""){
        Swal.fire({
            title: "Error",
            text: "Debes llenar el campo usuario",
            icon: "error"
        });
        return; 
    }

    obtenerDatosgithub(username);
};



const obtenerDatosgithub = async(username = "isavarch")=>{

    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();

    if(data.message === "Not Found"){
        Swal.fire({
            title: "Error",
            text: "No se encontró el usuario",
            icon: "error"
        });
        return;
    }

    setDataUser(data)
};

const formatDate = (fecha)=>{
    let date = new Date(fecha);
    return date.toISOString().split("T")[0];
}


const setDataUser = (data) => {
    imgProfile.src = data.avatar_url;
    githubName.innerHTML = data.name;
    githubBio.innerHTML = data.bio;
    githubUserName.innerHTML = `@${data.login}`;
    githubJoined.innerHTML = formatDate(data.created_at);
    githubRepos.innerHTML = data.public_repos;
    githubFollowers.innerHTML =data.followers;
    githubFollowing.innerHTML = data.following;
    githubLocation.innerHTML = data.location;
    githubTwitter.innerHTML = data.twitter_username;
}

//llamar a la funcion
obtenerDatosgithub();