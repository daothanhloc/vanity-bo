import { Component, OnInit } from '@angular/core';
import { UiSwitchModule } from 'ngx-ui-switch';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { EffectScriptApi } from 'src/app/api';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add-effect',
  templateUrl: './add-effect.component.html',
  styleUrls: ['./add-effect.component.scss']
})
export class AddEffectComponent implements OnInit {
  pathImage: string = '';
  pathAudio: string = '';
  iconName: string = '';
  audioName: string = '';

  constructor(
    private uploadFile: UploadFileService,
    private effectScriptApi: EffectScriptApi,
    private router: Router
  ) { }

  ngOnInit() {
  }

  upload(file: File)  {
    this.uploadFile.uploadImage(file, 'images').subscribe((result) => {
      console.log(result);
      this.pathImage = result.result.files.file[0].name;
      this.iconName = result.result.files.file[0].name;
    }, err => {
      console.log(err);
    });
  }
  
  uploadAudio(file: File) {
    this.uploadFile.uploadAudio(file).subscribe((result) => {
      console.log(result);
      this.pathAudio = result.result.files.file[0].name;
      this.audioName = result.result.files.file[0].name;
    }, 
    err => {
      console.log(err);
    });
  }

  addEffect(name: string, price: number, description: string, colorPicker: string) {
    const data: string = `{
      "type": "effect",
      "name": "${name}",
      "color":"${colorPicker}",
      "icon": "${this.iconName}",
      "price": ${price},
      "description": "${description}",
      "audio": "${this.audioName}",
      "effectUrl": "string"
    }`;
    console.log(data);
    this.effectScriptApi.create(data).subscribe((data) => {
      console.log(data);
      this.router.navigate(['main/effect']);
    }, err => {
      console.log(err);
    })
  }
}
