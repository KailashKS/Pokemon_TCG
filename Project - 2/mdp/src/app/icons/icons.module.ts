import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import {
  Slash,
  Info,
  Check,
  Home,
  Smile
  } from 'angular-feather/icons';

const icons = {
  'Slash': Slash, 
  'Info': Info,
  'Check': Check, 
  'Home': Home,
  'Smile' : Smile
};




@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule { }
