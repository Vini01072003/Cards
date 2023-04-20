'use strict'
class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.nome = "Nome Aluno"



    }
    static get observedAttributes() {

        return ['nome', 'foto']
    }

    attributesChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles() {
        const css = document.createElement('style')
        css.textContent = `
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            .card{
                width: 200px;
                height: 300px;
                display: grid;
                grid-templates-rows: 20% 60% 20%;
                place-items: center;
                background-color: #FF1493;
               
            }

            .card__text{
                color: #fff;
                font-size: 1.5 rem
                font-weight: 600;
            }

            .card__imagem{
                border-radius: 50%;
                width: 50px;
                height: 50px;
                background-color: #fff:
                background-image: url(${this.foto})
                background-size: cover;


                

            }


        `


        return css
    }



    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const nome = document.createElement('div')
        nome.classList.add('card__text')
        nome.textContent = this.nome

        const imagem = document.createElement('div')
        imagem.classList.add('card__imagem')

        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = 'DS2M'
        card.append(nome, imagem, turma)

        return card
    }
}

customElements.define('card-vini', card)