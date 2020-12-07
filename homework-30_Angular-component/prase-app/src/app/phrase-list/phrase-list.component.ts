import { Component, OnInit } from '@angular/core';
import { phrases as GREETS } from '../core/data';

import { Phrase } from '../core/models';

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})

export class PhraseListComponent implements OnInit {
  phrases: Phrase[] = GREETS.slice();
  newPhrase: string;
  newLang: string;

  constructor() { }

  addNewPhrase() {
    this.phrases.push({value: this.newPhrase, language: this.newLang})
  }

  ngOnInit(): void {
  }
}
