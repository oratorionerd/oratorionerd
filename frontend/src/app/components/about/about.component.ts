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
  public youtubeVideoObj : YoutubeVideo;
  public isLoaded : boolean;

  constructor(private _sanitizer: DomSanitizer, private apiService : ApiService) {
    this.isLoaded = false;
    this.apiService.getLatestVideo().subscribe((resp : YoutubeVideo) => {
      this.youtubeVideoObj = resp;
      this.isLoaded = true;
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.youtubeVideoObj.videoId}`);
    })
    //this.youtubeVideoObj = {
    //  title: "Messa del Patrono",
    //  description : "Messa delle ore 18:30",
    //  videoId : "rVwPMOMKwSQ"
    //}
  }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    
  }

}
