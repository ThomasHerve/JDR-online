import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elden-ring',
  templateUrl: './elden-ring.component.html',
  styleUrls: ['./elden-ring.component.css']
})
export class EldenRingComponent implements OnInit {

  stats = ["FORCE", "PERCEPTION", "ENDURANCE", "CHARISME", "INTELLIGENCE", "AGILITE", "CHANCE"]
  competences = [
    ["Magie", "INT"],
    ["Armes de corps à corps", "FOR"],
    ["Armes légères", "AGI"],
    ["Armes lourdes", "END"],
    ["Athlétisme", "FOR"],
    ["Crochetage", "PER"],
    ["Discours", "CHR"],
    ["Discretion", "AGI"],
    ["Explosifs", "PER"],
    ["Mains nue", "FOR"],
    ["Médecine", "INT"],
    ["Armes à distance", "PER"],
    ["Projectiles", "AGI"],
    ["Foi", "INT"],
    ["Sciences", "INT"],
    ["Survie", "END"],
    ["Troc", "CHR"],
    ["Esoterisme", "INT"],
    ["Pilotage", "PER"]
  ]


  constructor() { }

  ngOnInit(): void {
  }

}