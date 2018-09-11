import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantsProvider {


  /*
  * URL API REST
  */
  public URL: string = "https://swapi.co/api/";

  /*
  * Constantes Ventana Home
  */
  public TITULO_MENU: string = "Menu Principal";
  public BOTON_FILMS: string = "Peliculas";
  public BOTON_STARTSHIPS: string = "Naves Estelares";
  public BOTON_VEHICLES: string = "Vehiculos";

  /*
  * Constantes Ventana Vehicles
  */
  public TITULO_VEHICLES: string = "Vista Vehiculos";
  public LABEL_MODEL: string = "Modelo";
  public LABEL_MANUFACTURER: string = "Fabricante";

  /*
  * Constantes Ventana starships
  */
  public TITULO_STARSHIPS: string = "Vista Naves Estelares";

  /*
  * Constantes Ventana Films
  */
  public TITULO_FILMS: string = "Vista Peliculas";
  public LABEL_DIRECTOR: string = "Director";
  public LABEL_PRODUCER: string = "Productor";
  public LABEL_ACTORS: string = "Actores";

  /*
  * Constantes Ventana People
  */
  public TITULO_PEOPLE: string = "Vista Actor";
  public LABEL_NAME: string = "Nombres";
  public LABEL_HEIGHT: string = "Estatura";
  public LABEL_MASS: string = "Peso";
  public LABEL_HAIR_COLOR: string = "Cabello";
  public LABEL_SKIN_COLOR: string = "Piel";
  public LABEL_EYE_COLOR: string = "Ojos";
  public LABEL_BIRTH_YEAR: string = "Año Nacimiento";
  public LABEL_GENDER: string = "Genero";


  /*
  * MENSAJES DE USUARIO
  */
  public MENSAJE_SIN_REGISTROS: string = "No Se encontraron Registros con los parametros de Busqueda";
  public MENSAJE_SIN_PARAMETROS: string = "Debe Ingresar Parametros de Busqueda";
  public MENSAJE_ESPERA: string = "Espere Por Favor";

  constructor() {

  }

}
