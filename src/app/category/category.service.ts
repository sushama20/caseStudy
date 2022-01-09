import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  products: Item[] = [
    {
      name :'Pillow',
      imgPath: 'assets/images/pillow.jpg',
      price :200,
      description: "Polyester 2-Piece Bed Pillow Set"
     },
    {
      name :'Comforter',
      imgPath: 'assets/images/sofa.jpg',
      price :6000,
      description: "Reversible Comforter, Single Aqua"
    },
    {
      name :'Towel Set',
      imgPath: 'assets/images/towel.jpg',
      price :350,
      description: "Cotton Two Piece Bath Towel Set"
    },
    {
      name :'Candles',
      imgPath: 'assets/images/candles.jpg',
      price :180,
      description: "Colored Wax Tealight Candles set"
    },
    {
      name :'Quilt',
      imgPath: 'assets/images/queenBed.jpg',
      price :200,
      description: "Quilt Duvet Comforter Cover Set "
    },
    {
      name :'Towel Set',
      imgPath: 'assets/images/cottonTowel.jpg',
      price :1200,
      description: "Cotton 2 Piece Bath Towel Set"
    },
    {
      name :'Home Decor',
      imgPath: 'assets/images/decor.jpg',
      price :150,
      description: "Home Decor Butterfly Sticking Pad"
    },
    {
      name :'Towel Set',
      imgPath: 'assets/images/towelSet.jpg',
      price :300,
      description: "Cotton 2 Piece Bath Towel Set"
    },
    {
      name :'Bedsheet',
      imgPath: 'assets/images/largeBed.jpg',
      price :300,
      description: "Cotton Double Bedsheet with Pillow"
    },
    {
      name :'Comforter',
      imgPath: 'assets/images/comforter.jpg',
      price :150,
      description: "Reversible Comforter, Single Aqua"
     },
     {
      name :'Pillow',
      imgPath: 'assets/images/pillow.jpg',
      price :230,
      description: "Polyester 2-Piece Bed Pillow Set"
     },
    {
      name :'Comforter',
      imgPath: 'assets/images/sofa.jpg',
      price :7000,
      description: "Reversible Comforter, Single Aqua"
    }
  ];

}
