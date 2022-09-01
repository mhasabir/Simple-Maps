import { Component } from '@angular/core';
import { AppMapData } from './app.mapdata';
import { MapHelper } from './map.helper';
declare var simplemaps_usmap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-maps';
  MapOverview: any[] = [{ "State": "MN", "Total": 8, "Year": 0, "Month": 0, "County": null }, { "State": "NM", "Total": 5, "Year": 0, "Month": 0, "County": null }, { "State": "VA", "Total": 4, "Year": 0, "Month": 0, "County": null }, { "State": "SC", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "OH", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "OR", "Total": 8, "Year": 0, "Month": 0, "County": null }, { "State": "NC", "Total": 2, "Year": 0, "Month": 0, "County": null }, { "State": "NY", "Total": 3, "Year": 0, "Month": 0, "County": null }, { "State": "NE", "Total": 3, "Year": 0, "Month": 0, "County": null }, { "State": "TX", "Total": 4, "Year": 0, "Month": 0, "County": null }, { "State": "WY", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "VT", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "CA", "Total": 35, "Year": 0, "Month": 0, "County": null }, { "State": "NJ", "Total": 4, "Year": 0, "Month": 0, "County": null }, { "State": "KS", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "AK", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "NV", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "FL", "Total": 3, "Year": 0, "Month": 0, "County": null }, { "State": "AZ", "Total": 27208, "Year": 0, "Month": 0, "County": null }, { "State": "PA", "Total": 3, "Year": 0, "Month": 0, "County": null }, { "State": "MI", "Total": 4, "Year": 0, "Month": 0, "County": null }, { "State": "OK", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "IN", "Total": 3, "Year": 0, "Month": 0, "County": null }, { "State": "MT", "Total": 2, "Year": 0, "Month": 0, "County": null }, { "State": "MS", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "MO", "Total": 3, "Year": 0, "Month": 0, "County": null }, { "State": "WA", "Total": 13, "Year": 0, "Month": 0, "County": null }, { "State": "IA", "Total": 2, "Year": 0, "Month": 0, "County": null }, { "State": "CO", "Total": 9, "Year": 0, "Month": 0, "County": null }, { "State": "ID", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "GA", "Total": 3, "Year": 0, "Month": 0, "County": null }, { "State": "MD", "Total": 1, "Year": 0, "Month": 0, "County": null }, { "State": "UT", "Total": 2, "Year": 0, "Month": 0, "County": null }, { "State": "MA", "Total": 2, "Year": 0, "Month": 0, "County": null }, { "State": "TN", "Total": 2, "Year": 0, "Month": 0, "County": null }, { "State": "IL", "Total": 5, "Year": 0, "Month": 0, "County": null }, { "State": "WI", "Total": 3, "Year": 0, "Month": 0, "County": null }];
  totalCount: number = 0;
  constructor() {

  }
  ngOnInit(): void {
    this.mapInit();
  }
  ngAfterViewInit(): void {
    // // Called after ngAfterContentInit when the components view has been initialized.
    // //  Applies to components only.
    // //  Add 'implements AfterViewInit' to the class.
    // this.enrolmentMonitorService.getMapVewData({}).subscribe((centers: CenterMarker[]) => {
    //   this.noData = centers.length === 0; for (let i = 0; i < centers.length; i++) {
    //     const center = centers[i]; simplemaps_countrymap_mapdata.locations[i] =
    //     {
    //       name: center.name, lat: center.latitude, lng: center.longitude,
    //       description: `Location: ${center.location}`
    //     };
    //   } this.loading = false;
    //   simplemaps_countrymap.load();
    // });
  }
  private mapInit(): void {
    let stateOverview: any[] = [];
    setTimeout(() => {
      simplemaps_usmap.mapdata = AppMapData;
      simplemaps_usmap.load();
      simplemaps_usmap.hooks.click_state = function (id: any) {
        if (AppMapData.state_specific[id].name != undefined) {
          let State = AppMapData.state_specific[id].name;
        }
      };
    }, 1000);
    for (var i = 0; i < this.MapOverview.length; i++) {
      var stateFound = false;
      for (var j = 0; j < stateOverview.length; j++) {
        if (this.MapOverview[i].State == stateOverview[j].State) {
          this.MapOverview[j].Total += this.MapOverview[i].Total;
          stateFound = true;
          break;
        }
      }
      if (stateOverview.length == 0 || stateFound == false) {
        let temp: any = {};
        temp.State = this.MapOverview[i].State;
        temp.TotalMember = this.MapOverview[i].Total;
        this.totalCount += temp.TotalMember;
        stateOverview.push(temp);
      }
    }
    for (var i = 0; i < stateOverview.length; i++) {
      if (AppMapData.state_specific[stateOverview[i].State] !== undefined) {
        AppMapData.state_specific[stateOverview[i].State].description = 'Total: ' + MapHelper.getShortTooltipNumber(stateOverview[i].TotalMember);
        AppMapData.state_specific[stateOverview[i].State].color = '#649F11';
      }
    }
  }
}
