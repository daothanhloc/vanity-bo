import { Component, OnInit } from '@angular/core';
import { EffectScriptApi } from 'src/app/api';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-script',
  templateUrl: './add-script.component.html',
  styleUrls: ['./add-script.component.scss']
})
export class AddScriptComponent implements OnInit {
  pathImage: string = '';
  iconName: string = '';
  constructor(
    private effectScriptApi: EffectScriptApi,
    private uploadFile: UploadFileService,
    private router: Router
  ) {

  }

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

  addScript(name: string, price: number, description: string, colorPicker: string) {
    const data: string = `{
      "type": "script",
      "name": "${name}",
      "color": "${colorPicker}",
      "icon": "${this.iconName}",
      "price": ${price},
      "description": "${description}",
      "audio": "string",
      "effectUrl": "string"
    }`;
    console.log(data);
    this.effectScriptApi.create(data).subscribe((data) => {
      console.log(data);
      this.router.navigate(['main/script'])
    }, err => {
      console.log(err);
    })
  }
  a(b: string) {
    console.log(b)
  }
}
