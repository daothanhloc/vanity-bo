import { Injectable, OnInit } from '@angular/core';
import { Ng2ImgMaxModule, Ng2ImgMaxService } from 'ng2-img-max';
import { LoopBackConfig } from '../api';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  uploadedAudio: any;
  isLoading: Boolean;
  audioName = '';
  listAudios: any [] = [];
  isLoadingAudio = false;

  constructor(
    private ng2ImgMaxService: Ng2ImgMaxService,
    private httpClient: HttpClient
    ) {}
    
    uploadImage(file, containerId: string): Observable<any> {
      const url = `${LoopBackConfig.getPath()}/${LoopBackConfig.getApiVersion()}/Containers/` + containerId + '/upload';
      return Observable.create((obs) => {
        this.ng2ImgMaxService.resizeImage(file, 400, 300)
          .pipe(flatMap((blob => {
            const formData = new FormData();
            formData.append('file', blob);
            formData.append('fileName', file.name);
            formData.append('size', file.size);
            formData.append('type', file.type);
            return this.httpClient.post(url, formData);
          })))
          .subscribe((result: any) => {
              obs.next(result);
            },
            error => {
              obs.error(error);
            });
      });
    }
    uploadAudio(file: any)  {
      const url = `${LoopBackConfig.getPath()}/${LoopBackConfig.getApiVersion()}/Containers/audio/upload`;
      return Observable.create((obs) => {
        const formData = new FormData();
        formData.append('file', file);
        return this.httpClient.post(url, formData).subscribe((result: any) => {
          obs.next(result);
        },
        err => {
          obs.next(err);
        });
      });
  }
}
