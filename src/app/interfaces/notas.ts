export interface Notas {
    titulo:string;
    estado:number;
    descripcion: string;
}
// Estado 0 Cerrado 
// Estado 1 Abierto 
// Estado 2 en Proceso 
export const listaNotas:Array<Notas>=
[
    {   
        titulo:"TareaCerrada",
        estado:0,
        descripcion:"Esta es la descripcion"
    },
    {
        titulo:"TareaAbierta",
        estado:1,
        descripcion:"Esta es la descripcion"
    },
    {
        titulo:"TareaEnProceso",
        estado:2,
        descripcion:"Esta es la descripcion"
    },
    {   
        titulo:"TareaCerrada",
        estado:0,
        descripcion:"Esta es la descripcion"
    },
    
];

