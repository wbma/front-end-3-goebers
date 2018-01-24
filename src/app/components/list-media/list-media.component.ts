import { Component, OnInit } from '@angular/core';
import { MediaService } from "../../services/media.service";
import { DigitransitService } from '../../services/digitransit.service';


@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  constructor(private mediaService: MediaService, private digiTransitService: DigitransitService) { }

  busStop;

  stopName: string;

  mediaArray: any;

  digiArray: string[]; // digitransit

  ngOnInit() {

    // this.digiTransitService.buses('herttoniemi');

    console.log(this.mediaService.getAllMedia());

    this.mediaService.getAllMedia().subscribe(data => {
      console.log(data);
      this.mediaArray = data;
    });
  }

  getAllBuses() {

    

    this.digiTransitService.buses(this.stopName).subscribe(response => {
      console.log(response);
      this.digiArray = response['data']['stops'];
    })
  }

  thumbnailer(filename: string): string {
    let i = filename.indexOf('.');
    let tmp = filename.slice(0,i);
    return tmp + '-tn320.png';
  }

}
