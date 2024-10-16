function iniciar() {
    mostrarPrompt();
}

function mostrarPrompt() {
    let num = prompt('Digite o número de lados que a sua forma tem: ');
    const formaS = parseInt(num);
    
    formasGPagina(formaS); 
    
}
function formasGPagina(a) {
    let forma, area, perimetro, imagemUrl;

    
    switch (a) {
        case 1:
        case 2:
            alert("Esta forma não existe.")
            break;
        case 3:
            forma = 'Triângulo';
            area = 'A = b * h / 2';
            perimetro = 'P = a + b + c';
            imagemUrl = 'imagens/triangulo.png';
            break;
        case 4:
            forma = 'Quadrado';
            area = 'A = L²';
            perimetro = 'P = L * 4';
            imagemUrl = 'imagens/quadrado.png';
            break;
        case 5:
            forma = 'Pentágono';
            area = 'A = 3L² √3 / 2';
            perimetro = 'P = 5 * L';
            imagemUrl = 'imagens/pentagono.png';
            break;
        case 6:
            forma = 'Hexágono';
            area = 'A = (3√3 / 2) * L²';
            perimetro = 'P = 6 * L';
            imagemUrl = 'imagens/hexagono.png';
            break;
        case 7:
            forma = 'Heptágono';
            area = 'A = (7 / 4) * L² * cot(π / 7)';
            perimetro = 'P = 7 * L';
            imagemUrl = 'imagens/heptagono.png'; 
            break;
        case 8:
            forma = 'Octágono';
            area = 'A = 2 * (1 + √2) * L²';
            perimetro = 'P = 8 * L';
            imagemUrl = 'imagens/octagono.png'; 
            break;
        case 9:
            forma = 'Eneágono';
            area = 'A = (9 / 4) * L² * cot(π / 9)';
            perimetro = 'P = 9 * L';
            imagemUrl = 'imagens/eneagono.png'; 
            break;
        case 10:
            forma = 'Decágono';
            area = 'A = (5 / 2) * L² * √(5 + 2√5)';
            perimetro = 'P = 10 * L';
            imagemUrl = 'imagens/decagono.png';
            break;
        default:
            console.log('Forma Geométrica não implementada');
            return; 
    }
 
    mostrarForma(forma, area, perimetro, imagemUrl);

}

function mostrarForma(forma, area, perimetro, imagemUrl) {
    document.getElementById('formaNome').innerText = forma;
    document.getElementById('areaCalculo').innerText = `Como calcular a Área: ${area}`;
    document.getElementById('perimetroCalculo').innerText = `Como calcular o Perímetro: ${perimetro}`;
    document.getElementById('lord').src = imagemUrl;
}

