import { Component, OnInit } from '@angular/core';
import { EffectScriptApi, EffectScript } from 'src/app/api';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.scss']
})
export class ScriptComponent implements OnInit {
  scripts: any;
  constructor(
    private effectScriptApi: EffectScriptApi
  ) {}

  ngOnInit() {
    this.getScript();
  }

  getScript() {
    this.effectScriptApi.find({
      "where": {
        "type": "script"
      }
    }).subscribe((data) => {
      this.scripts = data;
      console.log(this.scripts);
    },
    err => {
      console.log(err);
    })
  }

  deleteScript(id: Number) {
    this.effectScriptApi.deleteById(id).subscribe(() => {
      console.log('Delete success!');
      this.scripts =  this.scripts.filter(script => script.id !== id);
    },
    err => {
      console.log(err);
    })
  }
}
