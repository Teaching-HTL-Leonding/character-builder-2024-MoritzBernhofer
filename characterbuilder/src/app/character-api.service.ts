import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

 type CharacterOption = {
  eye: string,
  hasHammer: boolean,
  mouth: string,
  rightHand: string,
  hasTail: boolean
}

export type URL = {
   url: string
}

@Injectable({
  providedIn: 'root'
})
export class CharacterAPIService {

  private httpClient = inject(HttpClient);
  private readonly BASE_URL: string = "http://localhost:5110/"

  getCharacterImageURL(characterOption: CharacterOption) {
    return firstValueFrom(this.httpClient.post<URL>(this.BASE_URL + "build-image-url", characterOption));
  }

  getRandomImageOption(){
    return firstValueFrom(this.httpClient.get<CharacterOption>(this.BASE_URL + "get-random-image-options"));
  }
}
