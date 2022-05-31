import { Component } from '@angular/core';
import { BasePoints } from 'src/app/points.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onBannerLegendary: number = 0;
  shimmerLegendary: number = 0;
  legendary: number = 0;
  shimmerEpic: number = 0;
  epic: number = 0;
  shimmerRare: number = 0;
  rare: number = 0;
  poseidon: number = 0;

  tableData: { label: string, value: number }[] = [
    { label: "Légendaire de la bannière", value: BasePoints.ON_BANNER},
    { label: "Légendaire scintillant", value: BasePoints.SC_LEGENDARY},
    { label: "Légendaire", value: BasePoints.LEGENDARY},
    { label: "Epique scintillant", value: BasePoints.SC_EPIC},
    { label: "Epique", value: BasePoints.EPIC},
    { label: "Rare scintillant", value: BasePoints.SC_RARE},
    { label: "Rare", value: BasePoints.RARE},
    { label: "Poseidon", value: BasePoints.POSEIDON},
  ];

  displayedColumns: string[] = ['label', 'value'];

  summonPointSum(): number {
    return this.onBannerLegendary * BasePoints.ON_BANNER +
    this.shimmerLegendary * BasePoints.SC_LEGENDARY +
    this.legendary * BasePoints.LEGENDARY +
    this.shimmerEpic * BasePoints.SC_EPIC +
    this.epic * BasePoints.EPIC +
    this.shimmerRare * BasePoints.SC_RARE +
    this.rare * BasePoints.RARE +
    this.poseidon * BasePoints.POSEIDON
  }
}
