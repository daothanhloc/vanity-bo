import { Component, OnInit } from '@angular/core';
import { EffectScriptApi } from 'src/app/api';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-add-script',
  templateUrl: './add-script.component.html',
  styleUrls: ['./add-script.component.scss']
})
export class AddScriptComponent implements OnInit {
  pathImage: string = '';
  constructor(
    private effectScriptApi: EffectScriptApi,
    private uploadFile: UploadFileService
  ) {

  }

  ngOnInit() {

  }

  upload(file: File)  {
    this.uploadFile.uploadImage(file, 'images').subscribe((result) => {
      console.log(result);
      this.pathImage = result.result.files.file[0].name;
      console.log(this.pathImage);
    }, err => {
      console.log(err);
    });
  }

  addScript(name: string, price: number, description: string) {
    const data: string = `{
      "type": "script",
      "name": "${ name }",
      "price": ${price},
      "description": "${ description }",
      "audio": "a",
      "effectUrl": "a"
    }`;
    this.effectScriptApi.create(data).subscribe((data) => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
}
