

export class Impuesto{
    #montoBrutoAnual;
    #deducciones;

    constructor(montoBrutoAnual,deducciones){
        this.#montoBrutoAnual = montoBrutoAnual;
        this.#deducciones = deducciones;
    }

    //GET
    get getMontoBrutoAnual(){
        return this.#montoBrutoAnual
    }
    get getDeducciones(){
        return this.#deducciones;
    }
    set setMontoBrutoAnual(value){
        this.#montoBrutoAnual = value;
    }
    set setDeducciones(value){
        this.#deducciones = value;
    }
}

