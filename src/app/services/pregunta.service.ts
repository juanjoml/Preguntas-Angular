import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSeleccionada: Respuesta | null;
  deshabilitarBtn = true;
  respConfirmada = false;
  indexRespuesta: number;
  respuestasUsuario: Array<number> = [];

  public preguntas: Pregunta[] = [
    new Pregunta('¿Cuál es la capital de Argentina?', [
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Montevideo', 0),
      new Respuesta('Santiago', 0),
      new Respuesta('Lima', 0)
    ]),
    new Pregunta('¿Cuál es la capital de Francia?', [
      new Respuesta('Roma', 0),
      new Respuesta('París', 1),
      new Respuesta('Madrid', 0),
      new Respuesta('Atenas', 0)
    ]),
    new Pregunta('¿Cuál es la capital de Egipto?', [
      new Respuesta('Londres', 0),
      new Respuesta('Berlín', 0),
      new Respuesta('El Cairo', 1),
      new Respuesta('Casablanca', 0)
    ]),
    new Pregunta('¿Cuál es la capital de España?', [
      new Respuesta('Madrid', 1),
      new Respuesta('Lisboa', 0),
      new Respuesta('Milán', 0),
      new Respuesta('Praga', 0)
    ]),
    new Pregunta('¿Cuál es la capital de Finlandia?', [
      new Respuesta('Estocolmo', 0),
      new Respuesta('Oslo', 0),
      new Respuesta('Reykjavík', 0),
      new Respuesta('Helsinki', 1)
    ]),
    new Pregunta('¿Cuál es la capital de Rusia?', [
      new Respuesta('Kiev', 0),
      new Respuesta('Riga', 0),
      new Respuesta('Moscú', 1),
      new Respuesta('Tiflis', 0)
    ]),
    new Pregunta('¿Cuál es la capital de México?', [
      new Respuesta('La Habana', 0),
      new Respuesta('Ciudad de México', 1),
      new Respuesta('Quito', 0),
      new Respuesta('Caracas', 0)
    ]),
    new Pregunta('¿Cuál es la capital de Ucrania?', [
      new Respuesta('Minsk', 0),
      new Respuesta('Zagreb', 0),
      new Respuesta('Bratislava', 0),
      new Respuesta('Kiev', 1)
    ]),
    new Pregunta('¿Cuál es la capital de Alemania?', [
      new Respuesta('Viena', 0),
      new Respuesta('Berlín', 1),
      new Respuesta('Sofía', 0),
      new Respuesta('Berna ', 0)
    ]),
    new Pregunta('¿Cuál es la capital de Estonia?', [
      new Respuesta('Liubliana', 0),
      new Respuesta('Tallin', 1),
      new Respuesta('Riga', 0),
      new Respuesta('Vilna ', 0)
    ]),
  ]

  constructor() { }

  getPreguntas(){
    return this.preguntas.slice();
  }
}
