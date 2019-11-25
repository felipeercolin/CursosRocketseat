// ASYNC/AWAIT - INICIO
// const minhaPromise = ()=> new Promise((resolve, reject)=> {
//     setTimeout(() => { resolve('OK') }, 2000);
// });

// async function executaFuncao(){
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());    
// }
//executaFuncao();

// const executaPromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// };
//  //executaPromise();

// import axios from 'axios';

// class Api {
//     static async getUserInfo(userName){
//         try{
//             const response = await axios.get(`https://api.github.com/users/${userName}`);
//             console.log(response);
//         }
//         catch(error){
//             console.warn(error);
//         }
//     }
// }

// Api.getUserInfo('felipeercolin');
// ASYNC/AWAIT - FIM

// APLICACAO COM ES6+ - INICIO
import api from './api'

class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name="respository"]');
        this.listEle = document.getElementById('repo-list');
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
        this.inputEl.focus();
    }

    loading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loading.setAttribute('id', 'loading');
        }
        else document.getElementById('loading').remove();
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;
        if(repoInput.lenght === 0) return;

        this.loading();
        
        try{
            const respose = await api.get(`/repos/${repoInput}`);

            const {name, description, html_url, owner:{ avatar_url }} = respose.data;
    
            this.repositories.push({ name, description, avatar_url, html_url});
    
            this.inputEl.value = '';
            this.inputEl.focus();
    
            this.render();
        }
        catch(error){
            alert('Repositorio nao encontrado');
        }

        this.loading(false);
    }

    render(){
        this.listEle.innerText = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEle.appendChild(listItemEl);

        });
    }
}

new App();

// APLICACAO COM ES6+ - FIM