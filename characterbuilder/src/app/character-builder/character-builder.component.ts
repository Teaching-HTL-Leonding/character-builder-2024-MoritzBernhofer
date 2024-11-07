import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CharacterAPIService, URL} from '../character-api.service';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-character-builder',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './character-builder.component.html',
  styleUrl: './character-builder.component.css'
})
export class CharacterBuilderComponent {

  private characterAPIService = inject(CharacterAPIService);

  eyeType = signal<string>('NoEye');
  hasHammer = signal<boolean>(false);
  mouthType = signal<string>('NoMouth');
  rightHand = signal<string>('NoHand');
  hasTail = signal<boolean>(false);

  imageSrc = signal<string>('');

  ngOnInit(){
    this.buildImage().then();
  }

  async buildImage() {
    const imgURL: URL = await this.characterAPIService.getCharacterImageURL({
      eye: this.eyeType(),
      hasHammer: this.hasHammer(),
      mouth: this.mouthType(),
      rightHand: this.rightHand(),
      hasTail: this.hasTail()
    });

    this.imageSrc.set(imgURL.url);
  }
}
