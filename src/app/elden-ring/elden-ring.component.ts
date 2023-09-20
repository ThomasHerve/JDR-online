import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-elden-ring',
  templateUrl: './elden-ring.component.html',
  styleUrls: ['./elden-ring.component.css']
})
export class EldenRingComponent implements OnInit {

  TODO = "0"
  TODO_NUMBER = 0
  TODO_CHEKBOX = false

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
  equipment = [
    [
      "TETE (1-2)"
    ],
    [
      "BRAS GAUCHE (9-11)", "BRAS DROIT (12-14)"
    ],
    [
      "BUSTE (3-8)"
    ],
    [
      "JAMBE GAUCHE (15-17)", "JAMBE DROITE (18-20)"
    ]
  ]

  armes = [
    1,2,3
  ]

  aptitudes = [
    1,2,3,4,5,6,7,8,9,10,11,12,13
  ]

  talismans = [1,2,3,4,5,6,7,8]


  constructor(private localStorage: LocalStorageService) { 
    this.nom = this.localStorage.retrieve("nom") || '';
    this.origine = this.localStorage.retrieve("origine") || '';
    this.niveau = this.localStorage.retrieve("niveau") || '';
    this.force = this.localStorage.retrieve("force") || '';
    this.perception = this.localStorage.retrieve("perception") || '';
    this.endurance = this.localStorage.retrieve("endurance") || '';
    this.charisme = this.localStorage.retrieve("charisme") || '';
    this.intelligence = this.localStorage.retrieve("intelligence") || '';
    this.agilite = this.localStorage.retrieve("agilite") || '';
    this.chance = this.localStorage.retrieve("chance") || '';
    this.point_chance = this.localStorage.retrieve("point_chance") || '';
  }

  ngOnInit(): void {

  }

  nom = ""
  origine = ""
  niveau = ""
  force = ""
  perception = ""
  endurance = ""
  charisme = ""
  intelligence = ""
  agilite = ""
  chance = ""
  point_chance = ""

  save() {
    this.localStorage.store("nom", this.nom);
    this.localStorage.store("origine", this.origine);
    this.localStorage.store("niveau", this.niveau);
    this.localStorage.store("force", this.force);
    this.localStorage.store("perception", this.perception);
    this.localStorage.store("endurance", this.endurance);
    this.localStorage.store("charisme", this.charisme);
    this.localStorage.store("intelligence", this.intelligence);
    this.localStorage.store("agilite", this.agilite);
    this.localStorage.store("chance", this.chance);
    this.localStorage.store("point_chance", this.point_chance);

  }


}
