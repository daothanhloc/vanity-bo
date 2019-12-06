import { Component, OnInit } from '@angular/core';
import { EffectScriptApi, LoopBackConfig } from 'src/app/api';


@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.scss']
})
export class EffectComponent implements OnInit {
  effects: any;
  isPlaying: Boolean = true;
  player: any;
  duration: any;
  time: any;
  constructor(
    private effectScriptApi: EffectScriptApi
  ) {
    this.player = new Audio();
  }

  ngOnInit() {
    this.getEffect();
  }

  getEffect() {
    this.effectScriptApi.find({
      "where": {
        "type": "effect"
      }
    }).subscribe((data) => {
      this.effects = data;
      console.log(this.effects);
    },
    err => {
      console.log(err);
    })
  }

  deleteEffect(id: Number) {
    this.effectScriptApi.deleteById(id).subscribe(() => {
      console.log('Delete success!');
      this.effects =  this.effects.filter(script => script.id !== id);
    },
    err => {
      console.log(err);
    })
  }

    setAudio(link: string)  {
      const url = `${LoopBackConfig.getPath()}/${LoopBackConfig.getApiVersion()}/Containers/audio/download/${link}`;
      this.player.src = url;
    }

  play()  {
    if(this.isPlaying === true) {
      this.player.play();
      this.isPlaying = false;
      this.player.addEventListener('loadeddata', () => {
        this.duration = this.player.duration;
      });
      this.time = setTimeout(() => {
        this.isPlaying = true;
      }, this.duration * 1000);
    }
    else {
      this.player.pause();
      this.isPlaying = true;
      clearTimeout(this.time);
    }
  }
}
