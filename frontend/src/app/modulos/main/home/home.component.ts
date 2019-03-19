import { AlbumService } from './../../../servicios/Album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/modelos/Album.model';
import { FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  providers: [AlbumService]
})
export class HomeComponent implements OnInit {

  
  albunes = [];
  album: Album;
  albumId: string;
  bandera: boolean = true;
  estadoControl = new FormControl();
  albumFiltrado: Observable<any[]>;

  constructor(private albumService: AlbumService) { 
    this.albumFiltrado = this.estadoControl.valueChanges.pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.albunes.slice())
    );
  }

  private _filterStates(value: string): Album[] {
    const valorFiltrado = value.toLowerCase();

    return this.albunes.filter(album => album.nombre.toLowerCase().indexOf(valorFiltrado) === 0);
  }

  ngOnInit() {
    this.buscarAlbumes();
    this.albumId = "";
  }

  buscarAlbum(){
    console.log(this.albumId);
    if(this.albumId == ""){
      console.log("Campo vacio");
      this.bandera = true;
      console.log(this.bandera);
    }else{
      this.albumService.buscarAlbum(this.albumId).subscribe(
        respuesta => {
          this.album = respuesta;
        }
      )
      console.log("Campo lleno");
      this.bandera = false;
      console.log(this.bandera);
    }
    
  }

  buscarAlbumes(){
      this.albumService.buscarTodosAlbumes().subscribe(albunes => {
        this.albunes = albunes;
      })
  }

}
