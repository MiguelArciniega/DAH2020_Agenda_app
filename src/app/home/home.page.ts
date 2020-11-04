import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts = [];

  constructor() {
    // consulta remota
    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'EDWIN ANTONIO ARELLANO MATA',
      cel: '311 118 0994',
      status: 'Lo que llamamos \"amor\" es solo una reacción química..'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'JOSE MANUEL MARTINEZ ALMEJO',
      cel: '311 300 1816',
      status: 'Stay Hungry. Stay Foolish'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'ADRIANA FLORES RAMIREZ',
      cel: '311 235 8516',
      status: 'SARANG'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'DANIEL ENRIQUE HIGH MENDOZA',
      cel: '311 122 6348',
      status: 'I\'m back and forth, I think i\'m going crazy..'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'MISSAEL LOPEZ ALVARADO',
      cel: '311 263 6307',
      status: 'Lo que llamamos \"reacción quimica\" es amor..'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'DAVID SAUL FLORES MEDRANO',
      cel: '311 184 3407',
      status: 'Hey i\'m ussing whatsapp'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'ANDRÉS MITCHEL HARO SILVA',
      cel: '311 165 6715',
      status: 'Hey i\'m ussing whatsapp'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'DIANA GUADALUPE HERNANDEZ CASTAÑEDA',
      cel: '311 118 0994',
      status: 'Hey i\'m ussing whatsapp'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'DANIELA ITZEL HERNANDEZ MUÑOZ',
      cel: '311 143 6719',
      status: 'Hey i\'m ussing whatsapp'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'MARTÍN ALEJANDRO JIMÉNEZ DÍAZ',
      cel: '311 156 3507',
      status: 'Hey i\'m ussing whatsapp'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'MARTÍN ALEJANDRO LÓPEZ BÁEZ',
      cel: '687 194 1615',
      status: 'Hey i\'m ussing whatsapp'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'JONATHAN ISRAEL LÓPEZ SÁNCHEZ',
      cel: '311 350 1207',
      status: 'Hey i\'m ussing whatsapp'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'ORTIZ LORA ENRIQUE',
      cel: '311 257 6460',
      status: 'Hey i\'m ussing whatsapp'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p64x64/118770887_162321042162433_1109738262675228924_n.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=jo56OgSSJGgAX-UeLxm&_nc_ht=scontent.ftpq1-1.fna&tp=3&oh=e383ccde73da17cee18c84071f934ed0&oe=5FC6CEAB',
      name: 'OSCAR NAVARRO',
      cel: '311 162 8786',
      status: 'Hey i\'m ussing whatsapp'
    });
  }
}
