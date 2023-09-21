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

  stats = [
    {name: "FORCE", value: ""}, 
    {name:"PERCEPTION", value:""}, 
    {name:"ENDURANCE", value:""}, 
    {name:"CHARISME", value:""},
    {name:"INTELLIGENCE", value:""}, 
    {name:"AGILITE", value: ""}, 
    {name:"CHANCE", value:""}
  ]




  competences: Array<Competence> = [
    {name:["Magie", "INT"], value:"", atout: false},
    {name:["Armes de corps à corps", "FOR"], value:"", atout: false},
    {name:["Armes légères", "AGI"], value:"", atout: false},
    {name:["Armes lourdes", "END"], value:"", atout: false},
    {name:["Athlétisme", "FOR"], value:"", atout: false},
    {name:["Crochetage", "PER"], value:"", atout: false},
    {name:["Discours", "CHR"], value:"", atout: false},
    {name:["Discretion", "AGI"], value:"", atout: false},
    {name:["Explosifs", "PER"], value:"", atout: false},
    {name:["Mains nue", "FOR"], value:"", atout: false},
    {name:["Médecine", "INT"], value:"", atout: false},
    {name:["Armes à distance", "PER"], value:"", atout: false},
    {name:["Projectiles", "AGI"], value:"", atout: false},
    {name:["Foi", "INT"], value:"", atout: false},
    {name:["Sciences", "INT"], value:"", atout: false},
    {name:["Survie", "END"], value:"", atout: false},
    {name:["Troc", "CHR"], value:"", atout: false},
    {name:["Esoterisme", "INT"], value:"", atout: false},
    {name:["Pilotage", "PER"], value:"", atout: false}
  ]
  equipment: Array<Array<Equipement>> = [
    [
      {name:"TETE (1-2)", stats: {phy:"", poi: "", mag: ""}}
    ],
    [
      {name:"BRAS GAUCHE (9-11)", stats: {phy:"", poi: "", mag: ""}}, {name:"BRAS DROIT (12-14)", stats: {phy:"", poi: "", mag: ""}}
    ],
    [
      {name:"BUSTE (3-8)", stats: {phy:"", poi: "", mag: ""}}
    ],
    [
      {name:"JAMBE GAUCHE (15-17)", stats: {phy:"", poi: "", mag: ""}}, {name:"JAMBE DROITE (18-20)", stats: {phy:"", poi: "", mag: ""}}
    ]
  ]

  armes: Array<Arme> = []
  arme_number = 3

  aptitudes: Array<Aptitude> = [
    
  ]
  aptitudes_number = 5

  talismans: Array<Talisman> = []
  talismans_number = 3

  equipment_list: Array<Equipement_List> = [
    
  ]
  equipment_list_number = 10


  constructor(private localStorage: LocalStorageService) { 
    this.nom = this.localStorage.retrieve("nom") || '';
    this.origine = this.localStorage.retrieve("origine") || '';
    this.niveau = this.localStorage.retrieve("niveau") || '';
    this.runes = this.localStorage.retrieve("runes") || '';

    // Stats
    for(let i = 0; i < this.stats.length; i++) {
      this.stats[i].value =  this.localStorage.retrieve(this.stats[i].name) || ''
    }
    this.point_chance = this.localStorage.retrieve("point_chance") || '';

    // Equipement
    this.competences.sort((a: Competence,b: Competence) => {
      if(a["name"][0] > b["name"][0]) return 1
      return -1
    })

    for(let i = 0; i < this.competences.length; i++) {
      this.competences[i].value =  this.localStorage.retrieve(this.competences[i].name[0] + " value") || ''
      this.competences[i].atout =  this.localStorage.retrieve(this.competences[i].name[0] + " atout") || ''
    }

    this.defense = this.localStorage.retrieve("defense") || '';

    for(let i = 0; i < this.equipment.length; i++) {
      for(let j = 0; j < this.equipment[i].length; j++) {
        this.equipment[i][j].stats.phy = this.localStorage.retrieve(this.equipment[i][j].name + " phy") || ''
        this.equipment[i][j].stats.poi = this.localStorage.retrieve(this.equipment[i][j].name + " poi") || ''
        this.equipment[i][j].stats.mag = this.localStorage.retrieve(this.equipment[i][j].name + " mag") || ''
      }
    }

    // Armes
    for(let i = 0; i < this.arme_number; i++) {
      this.armes.push({
        id: i.toString(),
        nom: this.localStorage.retrieve("arme " + i.toString() + " " + "nom") || '',
        competence: this.localStorage.retrieve("arme " + i.toString() + " " + "competence") || '',
        sr: this.localStorage.retrieve("arme " + i.toString() + " " + "sr") || '',
        atout: this.localStorage.retrieve("arme " + i.toString() + " " + "atout") || '',
        degat: this.localStorage.retrieve("arme " + i.toString() + " " + "degat") || '',
        effet: this.localStorage.retrieve("arme " + i.toString() + " " + "effet") || '',
        type: this.localStorage.retrieve("arme " + i.toString() + " " + "type") || '',
        portee: this.localStorage.retrieve("arme " + i.toString() + " " + "portee") || '',
        qualites: this.localStorage.retrieve("arme " + i.toString() + " " + "qualites") || '',
        munitions: this.localStorage.retrieve("arme " + i.toString() + " " + "munitions") || '',
        poids: this.localStorage.retrieve("arme " + i.toString() + " " + "poids") || ''
      })
    }

    for(let i = 0; i < this.aptitudes_number; i++) {
      this.aptitudes.push({
        id: i.toString(),
        nom: this.localStorage.retrieve("aptitude " + i.toString() + " " + "nom") || '',
        rang: this.localStorage.retrieve("aptitude " + i.toString() + " " + "rang") || '',
        effet: this.localStorage.retrieve("aptitude " + i.toString() + " " + "effet") || ''
      })
    }

    for(let i = 0; i < this.talismans_number; i++) {
      this.talismans.push({
        id: i.toString(),
        nom: this.localStorage.retrieve("talisman " + i.toString() + " " + "nom") || '',
        bonus: this.localStorage.retrieve("talisman " + i.toString() + " " + "bonus") || ''
      })
    }

    for(let i = 0; i < this.equipment_list_number; i++) {
      this.equipment_list.push({
        id: i.toString(),
        objet: this.localStorage.retrieve("equipement_list " + i.toString() + " " + "objet") || '',
        nmb: this.localStorage.retrieve("equipement_list " + i.toString() + " " + "nmb") || ''
      })
    }
  }

  ngOnInit(): void {

  }

  nom = ""
  origine = ""
  niveau = ""
  runes = ""
  point_chance = ""
  defense = ""

  save() {
    this.localStorage.store("nom", this.nom);
    this.localStorage.store("origine", this.origine);
    this.localStorage.store("niveau", this.niveau);
    this.localStorage.store("runes", this.runes);

    this.stats.forEach(element =>{
      this.localStorage.store(element.name, element.value)
    })

    this.localStorage.store("point_chance", this.point_chance);

    this.competences.forEach(element =>{
      this.localStorage.store(element.name[0] + " value", element.value)
      this.localStorage.store(element.name[0] + " atout", element.atout)
    })

    this.localStorage.store("defense", this.defense);

    this.equipment.forEach(i =>{
      i.forEach(element =>{
        this.localStorage.store(element.name + " phy", element.stats.phy)
        this.localStorage.store(element.name + " poi", element.stats.poi)
        this.localStorage.store(element.name + " mag", element.stats.mag)
      })
    })

    
    this.armes.forEach(element => {
      this.localStorage.store("arme " + element.id.toString() + " " + "nom", element.nom),
      this.localStorage.store("arme " + element.id.toString() + " " + "competence", element.competence),
      this.localStorage.store("arme " + element.id.toString() + " " + "sr", element.sr),
      this.localStorage.store("arme " + element.id.toString() + " " + "atout", element.atout),
      this.localStorage.store("arme " + element.id.toString() + " " + "degat", element.degat),
      this.localStorage.store("arme " + element.id.toString() + " " + "effet", element.effet),
      this.localStorage.store("arme " + element.id.toString() + " " + "type", element.type),
      this.localStorage.store("arme " + element.id.toString() + " " + "portee", element.portee),
      this.localStorage.store("arme " + element.id.toString() + " " + "qualites", element.qualites),
      this.localStorage.store("arme " + element.id.toString() + " " + "munitions", element.munitions),
      this.localStorage.store("arme " + element.id.toString() + " " + "poids", element.poids)
    })
    
    this.aptitudes.forEach(element => {
      this.localStorage.store("aptitude " + element.id.toString() + " " + "nom", element.nom),
      this.localStorage.store("aptitude " + element.id.toString() + " " + "rang", element.rang),
      this.localStorage.store("aptitude " + element.id.toString() + " " + "effet", element.effet)
    })

    this.talismans.forEach(element => {
      this.localStorage.store("talisman " + element.id.toString() + " " + "nom", element.nom),
      this.localStorage.store("talisman " + element.id.toString() + " " + "bonus", element.bonus)
    })

    this.equipment_list.forEach(element => {
      this.localStorage.store("equipement_list " + element.id.toString() + " " + "objet", element.objet),
      this.localStorage.store("equipement_list " + element.id.toString() + " " + "nmb", element.nmb)
    })


  }


}


type Competence = {
    name: Array<string>,
    value: string,
    atout: boolean
}

type Equipement = {
  name: string,
  stats: {
    phy: string,
    poi: string,
    mag: string
  }
}

type Arme = {
  id: string
  nom: string
  competence: string
  sr: number
  atout: boolean
  degat: number
  effet: string
  type: string
  portee: string
  qualites: string
  munitions: number
  poids: number
}

type Aptitude = {
  id: string,
  nom: string,
  rang: number,
  effet: string
}

type Talisman = {
  id: string,
  nom: string,
  bonus: string
}

type Equipement_List = {
  id: string,
  objet: string,
  nmb: number
}