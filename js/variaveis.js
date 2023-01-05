const botaoCor = document.getElementById('botao--cores');
const corpo = document.querySelector('body');
const conteudoPrincipalTitulo = document.querySelectorAll('.conteudo--principal--titulo');
const conteudoPrincipalTexto = document.querySelectorAll('.conteudo--principal--texto');
const conteudoPrincipalBotao1 = document.querySelectorAll('.conteudo--principal--botao--principal');
const conteudoPrincipalBotao2 = document.querySelectorAll('.conteudo--principal--botao--secundario');
const conteudoPrincipalVideo = document.querySelectorAll('.conteudo--principal--video');
const rodape = document.querySelector('.rodapé')
const entradaTexto = document.querySelectorAll('.entrada--de--texto')
const botaoEnviar = document.querySelector("conteudo--secundario--botaoEnviar")
let contador = 0;

function trocaCor(botao){
    if(botao.srcElement.className == "botao--escuro"){
        botaoCor.classList.add('botao--claro');
        corpo.classList.add('corpo');
        rodape.classList.add('rodape--claro')
        for(let i = 0; i < conteudoPrincipalTitulo.length; i++){
            conteudoPrincipalTitulo[i].classList.add('conteudo--principal--titulo--claro');
        }
        for(let i = 0; i < conteudoPrincipalTexto.length; i++){
            conteudoPrincipalTexto[i].classList.add('conteudo--principal--texto--claro');
        }
        for(let i = 0; i < conteudoPrincipalBotao1.length; i++){
            conteudoPrincipalBotao1[i].classList.add('conteudo--principal--botao--principal--claro');
        }
        for(let i = 0; i < conteudoPrincipalBotao2.length; i++){
            conteudoPrincipalBotao2[i].classList.add('conteudo--principal--botao--secundario--claro');
        }
        for(let i = 0; i < conteudoPrincipalVideo.length; i++){
            conteudoPrincipalVideo[i].classList.add('conteudo--principal--video--claro');
        }
        for(let i = 0; i < entradaTexto.length; i++){
            entradaTexto[i].classList.add('entradaTexto--claro');
        }
    }else{
        botaoCor.classList.remove('botao--claro');
        corpo.classList.remove('corpo');
        rodape.classList.remove('rodape--claro')
        for(let i = 0; i < conteudoPrincipalTitulo.length; i++){
            conteudoPrincipalTitulo[i].classList.remove('conteudo--principal--titulo--claro');
        }
        for(let i = 0; i < conteudoPrincipalTexto.length; i++){
            conteudoPrincipalTexto[i].classList.remove('conteudo--principal--texto--claro');
        }
        for(let i = 0; i < conteudoPrincipalBotao1.length; i++){
            conteudoPrincipalBotao1[i].classList.remove('conteudo--principal--botao--principal--claro');
        }
        for(let i = 0; i < conteudoPrincipalBotao2.length; i++){
            conteudoPrincipalBotao2[i].classList.remove('conteudo--principal--botao--secundario--claro');
        }
        for(let i = 0; i < conteudoPrincipalVideo.length; i++){
            conteudoPrincipalVideo[i].classList.remove('conteudo--principal--video--claro');
        }
        for(let i = 0; i < entradaTexto.length; i++){
            entradaTexto[i].classList.remove('entradaTexto--claro');
        }
    } 
}

export default trocaCor