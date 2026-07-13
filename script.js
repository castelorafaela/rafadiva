const inicio = document.getElementById("inicio");
const escolhas = document.getElementById("escolhas");
const finalTela = document.getElementById("final");

const dataSelect = document.getElementById("data");
const horaSelect = document.getElementById("hora");
const textoFinal = document.getElementById("textoFinal");
const music = document.getElementById("music");
const hearts = document.getElementById("hearts");
const btnNao = document.getElementById("nao");

function abrirEscolha(){

    inicio.style.display="none";
    escolhas.style.display="block";

    preencherDatas();
    preencherHorarios();

}

function preencherDatas(){

    if(dataSelect.options.length>0) return;

    const inicioData = new Date();
    const fim = new Date(2026,7,31);

    while(inicioData<=fim){

        if(inicioData.getDay()===6){

            const op=document.createElement("option");

            op.value=inicioData.toLocaleDateString("pt-BR");

            op.textContent="Sábado - "+inicioData.toLocaleDateString("pt-BR");

            dataSelect.appendChild(op);

        }

        inicioData.setDate(inicioData.getDate()+1);

    }

}

function preencherHorarios(){

    if(horaSelect.options.length>0) return;

    for(let h=18;h<=22;h++){

        for(let m=0;m<60;m+=30){

            if(h===22 && m===30) continue;

           const hora = String(h).padStart(2, "0");
const minuto = String(m).padStart(2, "0");

const op = document.createElement("option");

op.textContent = hora + ":" + minuto;
op.value = hora + ":" + minuto;

            horaSelect.appendChild(op);

        }

    }

}

function confirmarEncontro(){

    escolhas.style.display="none";

    finalTela.style.display="block";

    music.play().catch(()=>{});

    chuvaDeCoracoes();

    const bar=document.getElementById("bar").value;

    textoFinal.innerHTML=`
    ❤️<br><br>

    Parabéns, <b>Matheus gostosão</b>. 😏<br><br>

    Você acabou de aceitar um encontro com a garota mais linda do mundo.<br><br>

    <b>Data:</b> ${dataSelect.value}<br>

    <b>Horário:</b> ${horaSelect.value}<br>

    <b>Local:</b> ${bar}<br><br>

    A Rafa Castelo já está contando os dias para esse momento. ❤️<br><br>

    Agora só falta aparecer bonito, dar muitos beijos nela e aproveitar uma noite incrível. 🍻❤️
    `;

}

btnNao.addEventListener("mouseover",()=>{

    const largura=window.innerWidth-150;
    const altura=window.innerHeight-80;

    btnNao.style.position="fixed";
    btnNao.style.left=Math.random()*largura+"px";
    btnNao.style.top=Math.random()*altura+"px";

});

function chuvaDeCoracoes(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=["❤️","💖","💕","💘","💝"][Math.floor(Math.random()*5)];

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        heart.style.animationDuration=(3+Math.random()*4)+"s";

        hearts.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },7000);

    },180);

}