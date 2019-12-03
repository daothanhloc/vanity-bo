import { Injectable } from '@angular/core';
import { Ng2ImgMaxModule, Ng2ImgMaxService } from 'ng2-img-max';
import { LoopBackConfig } from '../api';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

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
}
