import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {EmojiUtil} from './util/util';
import {EmojiInputComponent} from './input/input';
import {EmojiButtonComponent} from './button/button';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [EmojiInputComponent, EmojiButtonComponent],
  providers: [EmojiUtil],
  declarations: [EmojiInputComponent, EmojiButtonComponent]
})
export class EmojiModule { }
