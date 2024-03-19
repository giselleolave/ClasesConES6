
export class Cliente{
    #nombre;
    #impuesto;

    constructor(nombre,impuesto){
        this.#nombre = nombre;
        this.#impuesto = impuesto;
    }

    //GET
    get getNombre(){
        return this.#nombre;
    }
    //SET
    set setNombre(value){
        this.#nombre = value;
    }
    set setImpuesto(value) {
        this.#impuesto = value;
    }

    calcularImpuesto(){
        const impuestoCalculado = ((this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones) * 0.21);
        return impuestoCalculado;

    }
}