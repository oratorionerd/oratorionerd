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

  constructor(private _sanitizer: DomSanitizer, private apiService : ApiService) {
    this.apiService.getLatestVideo().subscribe((resp : YoutubeVideo) => {
      this.youtubeVideoObj = resp;
      let videoURL = `https://www.youtube.com/embed/${this.youtubeVideoObj.videoId}`
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
    })
  }

  ngOnInit(): void {
  }

}
