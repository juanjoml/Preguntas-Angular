import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from '../../services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPregunta: Pregunta[];

  constructor(public preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas();
  }

  obtenerPregunta(){
    return this.listPregunta[this.preguntaService.indexPregunta].descripcionPregunta;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexResp: number){
    if(this.preguntaService.respConfirmada === true){
      return;
    }
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false;
    this.preguntaService.indexRespuesta = indexResp;
  }

  AddClassOption(respuesta: Respuesta){
    if(respuesta === this.preguntaService.opcionSeleccionada && !this.preguntaService.respConfirmada){
      return 'active text-light';
    }

    if(respuesta === this.preguntaService.opcionSeleccionada && this.preguntaService.respConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta==1){
        return 'list-group-item-success';
    }
    if(respuesta === this.preguntaService.opcionSeleccionada && this.preguntaService.respConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta==0){
      return 'list-group-item-danger';
    }
  }

  iconCorrecta(respuesta: Respuesta){
    if(respuesta === this.preguntaService.opcionSeleccionada && this.preguntaService.respConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta==1){
      return true;
    }else{
      return false;
    }
  }

  iconInCorrecta(respuesta: Respuesta){
    if(respuesta === this.preguntaService.opcionSeleccionada && this.preguntaService.respConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta==0){
      return true;
    }else{
      return false;
    }
  }

}
