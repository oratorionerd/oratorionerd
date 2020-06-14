import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api/api.service';
import { YoutubeVideo } from 'src/app/models/youtubeVideo';

@Component({
  selector: 'component-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public safeURL : SafeResourceUrl;
  public videoWidth : number;
  public videoHeight : number;
  public youtubeVideoObj : YoutubeVideo;
  public isLoaded : boolean;
  
  constructor(private _sanitizer: DomSanitizer, private apiService : ApiService) {
    this.isLoaded = false;
    this.apiService.getLatestVideo().subscribe((resp : YoutubeVideo) => {
      this.youtubeVideoObj = resp;
      this.isLoaded = true;
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.youtubeVideoObj.videoId}`);
    })
  }

  ngOnInit(): void {
    if(window.innerWidth > 992){
      this.videoWidth = 640;
      this.videoHeight = 480;
    }
    else if(window.innerWidth > 767) {
      this.videoWidth = 480;
      this.videoHeight = 360;
    }
    else {
      this.videoWidth = 320;
      this.videoHeight = 180;
    }

  }

}
