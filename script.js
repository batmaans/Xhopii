function selecionarImgProduto(imgMiniaturaEscolhida){
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

function mudarPreco(botaoEscolhido) {
    const imagensModelos = {
        "btnModeloPreto": "img/produto1.png",
        "btnModeloAzul": "img/produto2.png",
        "btnModeloVerde": "img/produto3.png",
        "btnModeloCinza": "img/produto4.png",
        "btnModeloRosa": "img/produto5.png"
    };

    // Troca a imagem principal
    document.getElementById("imgPrincipal").src = imagensModelos[botaoEscolhido.id];

    // Atualiza preço e quantidade conforme modelo
    if(botaoEscolhido.id == "btnModeloPreto"){
        document.getElementById("precoProduto").innerHTML = "R$ 56,90";
        document.getElementById("qtdDisponivel").innerHTML = "171 peças disponíveis";
    } else if(botaoEscolhido.id == "btnModeloAzul"){
        document.getElementById("precoProduto").innerHTML = "R$ 56,90";
        document.getElementById("qtdDisponivel").innerHTML = "152 peças disponíveis";
    } else if(botaoEscolhido.id == "btnModeloVerde"){
        document.getElementById("precoProduto").innerHTML = "R$ 49,90";
        document.getElementById("qtdDisponivel").innerHTML = "213 peças disponíveis";
    } else if(botaoEscolhido.id == "btnModeloCinza"){
        document.getElementById("precoProduto").innerHTML = "R$ 69,90";
        document.getElementById("qtdDisponivel").innerHTML = "353 peças disponíveis";
    } else if(botaoEscolhido.id == "btnModeloRosa"){
        document.getElementById("precoProduto").innerHTML = "R$ 69,90";
        document.getElementById("qtdDisponivel").innerHTML = "319 peças disponíveis";
    }
}

function tamanhoSelecionado(tamanhoEscolhido){
    if(tamanhoEscolhido.id == "btnTamanhoP"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: P";
    }
    else if(tamanhoEscolhido.id == "btnTamanhoM"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: M";
    }
    else if(tamanhoEscolhido.id == "btnTamanhoG"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: G";
    }
    else if(tamanhoEscolhido.id == "btnTamanhoGG"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: GG";
    }
}

const carousel = new bootstrap.Carousel('#myCarousel')
document.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('#carouselExampleAutoplaying');
    if (el && typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
        // opções: interval em ms (ex: 3000), wrap true/false, ride 'carousel' ou false
        const carousel = new bootstrap.Carousel(el, {
            interval: 3000,
            ride: 'carousel',
            pause: 'hover',
            wrap: true
        });
    }
});