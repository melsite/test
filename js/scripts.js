
        document.addEventListener('keydown', function(event) {
            // Bloquear o acesso às ferramentas de desenvolvedor e código fonte
            if (event.key === 'F12' || event.ctrlKey && event.shiftKey && event.key === 'I' || 
                event.ctrlKey && event.shiftKey && event.key === 'C' || 
                event.ctrlKey && event.shiftKey && event.key === 'J' || 
                event.ctrlKey && event.key === 'U') {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
        });

        // Bloquear o clique direito
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });

        // Bloquear a abertura do menu de desenvolvimento usando a tecla F12 e outros atalhos
        document.addEventListener('keydown', function(event) {
            if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
                event.preventDefault();
                return false;
            }
        });
        
       

const inicioDiv = document.getElementById('inicio');
const saqueDiv = document.getElementById('saque');
const loginDiv = document.getElementById('login');
const bonusDiv = document.getElementById('bonus');

function playAudio() {
    var audio = document.getElementById("meuAudio");
    audio.play();
}

// FunÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o para definir um cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
}

// FunÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o para obter o valor de um cookie
function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

let valor = parseFloat(getCookie('valor')) || 85.00;
const valorSpan = document.getElementById('valor');
const valorSpanSaque = document.getElementById('valor-saque');
const valorSpanMoney = document.getElementById('valor-money');

function atualizarValor() {
    valorSpan.textContent = `R$ ${valor.toFixed(2)}`;
    valorSpanSaque.textContent = `R$ ${valor.toFixed(2)}`;
    valorSpanMoney.textContent = `R$ ${valor.toFixed(2)}`;
    setCookie('valor', valor.toFixed(2), 365); // Armazena o valor como um cookie vÃƒÆ’Ã‚Â¡lido por 1 ano
}

atualizarValor(); // Atualiza o valor inicial na caixa de valor

// Array com os valores desejados
const valoresDesejados = [38, 36, 40, 43, 44, 43, 42, 38, 45, 44];

// FunÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o para aumentar o valor
function aumentarValor() {
    // Se ainda houver valores no array
    if (valoresDesejados.length > 0) {
        // Retira o prÃƒÆ’Ã‚Â³ximo valor do array
        const valorIncremento = valoresDesejados.shift();

        // Adiciona o valor ao total
        valor += valorIncremento;

        // Atualiza e verifica o valor
        atualizarValor();
        verificarValor();
    }
}  





function mostrarPagina(pagina) {
  inicioDiv.style.display = pagina === 'inicio' ? 'block' : 'none';
  saqueDiv.style.display = pagina === 'saque' ? 'block' : 'none';
  loginDiv.style.display = pagina === 'login' ? 'block' : 'none';
  bonusDiv.style.display = pagina === 'bonus' ? 'block' : 'none';
}

function trocarDiv(esconderId, mostrarId) {
  document.getElementById(esconderId).style.display = 'none';
  document.getElementById(mostrarId).style.display = 'block';
}

// Atualizar o valor exibido inicialmente
atualizarValor();




//--------------------------------- Ad 1 ---------------------------------


function showPopupB1() {
    document.getElementById('B1').disabled = true;
    document.getElementById('popupB1').style.display = 'block';
}

function closePopupB1() {
    document.getElementById('popupB1').style.display = 'none';
    document.getElementById('B1').disabled = true;
}   

// Carregando B1
    function showLoadingB1() {
        var button = document.getElementById("B1");
            showPopupB1();
            playAudio();
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB1();
                aumentarValor();
                trocarDiv('ad1', 'ad2');
            }, 4000); // 3 segundos
        }


//--------------------------------- Ad 2 ---------------------------------


function showPopupB2() {
    document.getElementById('popupB2').style.display = 'block';
    document.getElementById('B2').disabled = true;
}

function closePopupB2() {
    document.getElementById('popupB2').style.display = 'none';
    document.getElementById('B2').disabled = true;
}   

// Carregando B2
    function showLoadingB2() {
        var button = document.getElementById("B2");
            showPopupB2();
            playAudio();
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB2();
                aumentarValor();
                trocarDiv('ad2', 'ad3');
            }, 4000); // 3 segundos
        }

    
//--------------------------------- Ad 3 ---------------------------------


function showPopupB3() {
    document.getElementById('popupB3').style.display = 'block';
    document.getElementById('B3').disabled = true;
}

function closePopupB3() {
    document.getElementById('popupB3').style.display = 'none';
    document.getElementById('B3').disabled = true;
}   


    function showLoadingB3() {
        var button = document.getElementById("B3");
            showPopupB3();
            playAudio();
            setTimeout(function () {
                closePopupB3();
                aumentarValor();
                trocarDiv('ad3', 'ad4');
            }, 4000); 
        }


//--------------------------------- Ad 4 ---------------------------------


function showPopupB4() {
    document.getElementById('popupB4').style.display = 'block';
    document.getElementById('B4').disabled = true;
}

function closePopupB4() {
    document.getElementById('popupB4').style.display = 'none';
    document.getElementById('B4').disabled = true;
}   


    function showLoadingB4() {
        var button = document.getElementById("B4");
            showPopupB4();
            playAudio();
            setTimeout(function () {
                closePopupB4();
                aumentarValor();
                trocarDiv('ad4', 'ad5');
            }, 4000); 
        }


//--------------------------------- Ad 5 ---------------------------------


function showPopupB5() {
    document.getElementById('popupB5').style.display = 'block';
    document.getElementById('B5').disabled = true;
}

function closePopupB5() {
    document.getElementById('popupB5').style.display = 'none';
    document.getElementById('B5').disabled = true;
}   


    function showLoadingB5() {
        var button = document.getElementById("B5");
            showPopupB5();
            playAudio();
            setTimeout(function () {
                closePopupB5();
                aumentarValor();
                trocarDiv('ad5', 'ad6');
            }, 4000);
        }

    
//--------------------------------- Ad 6 ---------------------------------


function showPopupB6() {
    document.getElementById('popupB6').style.display = 'block';
    document.getElementById('B6').disabled = true;
}

function closePopupB6() {
    document.getElementById('popupB6').style.display = 'none';
    document.getElementById('B6').disabled = true;
}   


    function showLoadingB6() {
        var button = document.getElementById("B6");
            showPopupB6();
            playAudio();
            setTimeout(function () {
                closePopupB6();
                aumentarValor();
                trocarDiv('ad6', 'ad7');
            }, 4000);
        }

//--------------------------------- Ad 7 ---------------------------------


function showPopupB7() {
    document.getElementById('popupB7').style.display = 'block';
    document.getElementById('B7').disabled = true;
}

function closePopupB7() {
    document.getElementById('popupB7').style.display = 'none';
    document.getElementById('B7').disabled = true;
}   


    function showLoadingB7() {
        var button = document.getElementById("B7");
            showPopupB7();
            playAudio();
            setTimeout(function () {
                closePopupB7();
                aumentarValor();
                trocarDiv('ad7', 'ad8');
            }, 4000);
        }


//--------------------------------- Ad 8 ---------------------------------


function showPopupB8() {
    document.getElementById('popupB8').style.display = 'block';
    document.getElementById('B8').disabled = true;
}

function closePopupB8() {
    document.getElementById('popupB8').style.display = 'none';
    document.getElementById('B8').disabled = true;
}   


    function showLoadingB8() {
        var button = document.getElementById("B8");
            showPopupB8();
            playAudio();
            setTimeout(function () {
                closePopupB8();
                aumentarValor();
                trocarDiv('ad8', 'ad9');
            }, 4000);
        }


//--------------------------------- Ad 9 ---------------------------------

function showPopupB9() {
    document.getElementById('popupB9').style.display = 'block';
    document.getElementById('B9').disabled = true;
}

function closePopupB9() {
    document.getElementById('popupB9').style.display = 'none';
    document.getElementById('B9').disabled = true;
}   

    function showLoadingB9() {
        var button = document.getElementById("B9");
            showPopupB9();
            playAudio();
            setTimeout(function () {
                closePopupB9();
                aumentarValor();
                trocarDiv('ad9', 'ad10');
            }, 4000);
        }



//--------------------------------- Ad 10 ---------------------------------


    function showLoadingB10() {
        var button = document.getElementById("B10");
            document.getElementById('popupB10').style.display = 'block';
            playAudio();
            setTimeout(function () {
                document.getElementById('popupB10').style.display = 'none';
                aumentarValor();
                trocarDiv('ad10', 'ad11');
            }, 4000);
        }


//---------------------------- BotÃƒÆ’Ã‚Â£o chave PIX ---------------------------
 
 
let activeButton = null;

function toggleButton(buttonNumber) {
  const buttons = document.querySelectorAll('.square-button');

  if (activeButton !== null) {
   buttons[activeButton - 1].classList.remove('active');
  }

  if (activeButton === buttonNumber) {
    activeButton = null;
  } else {
    buttons[buttonNumber - 1].classList.add('active');
    activeButton = buttonNumber;
  }
} 
 
 
    
    
    
    
    
    
    

// Popup SAQUE

function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}  

// Popup LIMITE DIÃƒÆ’Ã‚ÂRIO

function showPopupL() {
  document.getElementById('popupL').style.display = 'block';
}

function closePopupL() {
  document.getElementById('popupL').style.display = 'none';
}  



// POPUP Limite diÃƒÆ’Ã‚Â¡rio quando bate X valor
function verificarValor() {
    if (valor >= 490 && valor < 550) {
        // Popup para valor >= 1362.60 e < 2725.20
        showPopupL();
    } else if (valor >= 940 && valor < 950) {
        // Popup para valor >= 2725.20 e < 4087.8
        showPopupL();
    } else if (valor >= 1400) {
        // Popup para valor >= 4087.8
        showPopupL();
    }
    
}




function fecharPopupEAgendarReaparecimento() {
    var popupButtonContainer = document.querySelector(".popup-buttonL-container");
    popupButtonContainer.style.display = "none"; // Oculta o botÃƒÆ’Ã‚Â£o

    // Define um temporizador para mostrar o botÃƒÆ’Ã‚Â£o apÃƒÆ’Ã‚Â³s 10 segundos
    setTimeout(function() {
        popupButtonContainer.style.display = "block";
    }, 86400000); // 24 horas

    // Aqui vocÃƒÆ’Ã‚Âª tambÃƒÆ’Ã‚Â©m deve adicionar a funÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o para fechar o popup
    closePopupL();
}

// Chama a funÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o para mostrar o botÃƒÆ’Ã‚Â£o apÃƒÆ’Ã‚Â³s 10 segundos (10000 milissegundos)
setTimeout(function() {
    var botaoContainer = document.querySelector(".popup-buttonL-container");
    botaoContainer.style.display = "block";
}, 86400000); // 24 horas


// Script botÃƒÆ’Ã‚Â£o login
function showLoading() {
  var button = document.getElementById("prosseguir-button");
  button.disabled = true; // Desabilitar o botÃƒÆ’Ã‚Â£o enquanto a animaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o ocorre

  button.innerHTML = '<span class="loading-spinner"></span> Carregando...';

  // Simulando um atraso de 3 segundos para a animaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o
  setTimeout(function() {
    // Redirecionar apÃƒÆ’Ã‚Â³s o atraso
    mostrarPagina('inicio');
  }, 2000); // 2 segundos
}




function formatarValor(input) {
  // Remove todos os caracteres nÃƒÆ’Ã‚Â£o numÃƒÆ’Ã‚Â©ricos
  var valor = input.value.replace(/[^0-9]/g, '');
  
  // Divide o valor em parte inteira e decimal
  var parteInteira = valor.slice(0, -2);
  var centavos = valor.slice(-2);
  
  // Reconstroi o valor formatado
  input.value = parteInteira + '.' + centavos;
}

function verificarCampos() {
    var nomeCompleto = document.getElementById('nome').value;

    if (nomeCompleto.trim() === '') {
        alert('Por favor, insira seu nome.');
    } else {
        // Se o campo estiver preenchido, redireciona para a próxima página
        showLoading();
    }

    // Obtem o primeiro nome
  var primeiroNome = nomeCompleto.split(' ')[0];
  
  var primeiroNomeL = nomeCompleto.split(' ')[0];

  // Atualiza o conteÃºdo do parÃ¡grafo com o id 'saudacao'
  var saudacaoElemento = document.getElementById('saudacao');
  saudacaoElemento.textContent = 'Bem-vindo(a) ' + primeiroNome + '!';
  
  var saudacaoElementoL = document.getElementById('saudacaoL');
    saudacaoElementoL.innerHTML = 'Parabens<br>' + primeiroNome + '!';
}


function showPopupInicio() {
    document.getElementById('popupinicio').style.display = 'block';
  }

function closePopupInicio() {
    document.getElementById('popupinicio').style.display = 'none';
}


function in1() {
    closePopupInicio();
    showPopupInicio2();

        // Agendar a exibiÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o do prÃƒÆ’Ã‚Â³ximo apÃƒÆ’Ã‚Â³s 5 segundos
        setTimeout(function() {
            closePopupInicio2();
            showPopupInicio3();
        }, 10000);
}    









function showPopupVideo() {
    document.getElementById('popupvideo').style.display = 'block';
  }

function closePopupVideo() {
    document.getElementById('popupvideo').style.display = 'none';
}

function video() {
    closePopup();
    showPopupVideo();
}   




      
function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");
  
    const allQuestions = document.querySelectorAll(".question");
    allQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        otherQuestion.nextElementSibling.classList.remove("active");
      }
    });
  }
  
  
  
  // ----------------- TESTE ANUNCIO 1 -----------------

  document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.rating-container');
  
    containers.forEach(function (container) {
      const buttons = container.querySelectorAll('.rating-button');
  
      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          // Remove a classe 'active' apenas do conjunto de botÃƒÆ’Ã‚Âµes dentro do mesmo container
          buttons.forEach(function (btn) {
            btn.classList.remove('active');
          });
  
          // Adiciona a classe 'active' apenas ao botÃƒÆ’Ã‚Â£o clicado
          button.classList.add('active');
        });
      });
    });
  });
  
  

  // function toggleCard(clickedElement) {
//     const allCards = document.querySelectorAll('.card__grade');
//     allCards.forEach(card => {
//         card.classList.remove('active');
//     });

//     clickedElement.classList.add('active');
// }

function toggleCard(clickedElement) {
    const allCards = document.querySelectorAll('.card__grade');
    
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Adicione um switch para lidar com diferentes aÃƒÂ§ÃƒÂµes
    switch (clickedElement.id) {
        case 'card__grade1':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade2':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade3':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade4':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade5':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-solid fa-star active', '#ffd700');
            break;
        // Adicione mais casos conforme necessÃƒÂ¡rio
        default:
            // AÃƒÂ§ÃƒÂ£o padrÃƒÂ£o, se nenhum caso corresponder
            console.log("Nenhum caso correspondente");
    }
}

function updateStars(elementId, className, color) {
    const starElement = document.getElementById(elementId);
    if (starElement) {
        starElement.className = className;
        starElement.style.color = color; // Adiciona a cor amarela
    } else {
        console.error("Elemento nÃƒÂ£o encontrado com ID: " + elementId);
    }
}

// Adicione um evento de clique aos elementos que deseja controlar
const cards = document.querySelectorAll('.card__grade');

cards.forEach(card => {
    card.addEventListener('click', function() {
        toggleCard(this); // "this" se refere ao elemento clicado
    });
});