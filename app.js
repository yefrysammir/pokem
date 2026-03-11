// ============================================================
// TYPE CHART
// ============================================================
const TC={fire:{grass:2,ice:2,bug:2,steel:2,water:.5,fire:.5,rock:.5,dragon:.5},water:{fire:2,ground:2,rock:2,water:.5,grass:.5,dragon:.5},grass:{water:2,ground:2,rock:2,fire:.5,grass:.5,poison:.5,flying:.5,bug:.5,dragon:.5,steel:.5},electric:{water:2,flying:2,grass:.5,electric:.5,dragon:.5,ground:0},ice:{grass:2,ground:2,flying:2,dragon:2,fire:.5,water:.5,ice:.5,steel:.5},fighting:{normal:2,ice:2,rock:2,dark:2,steel:2,poison:.5,flying:.5,psychic:.5,bug:.5,ghost:0,fairy:.5},poison:{grass:2,fairy:2,poison:.5,ground:.5,rock:.5,ghost:.5,steel:0},ground:{fire:2,electric:2,poison:2,rock:2,steel:2,grass:.5,bug:.5,flying:0},flying:{grass:2,fighting:2,bug:2,electric:.5,rock:.5,steel:.5},psychic:{fighting:2,poison:2,psychic:.5,steel:.5,dark:0},bug:{grass:2,psychic:2,dark:2,fire:.5,fighting:.5,poison:.5,flying:.5,ghost:.5,steel:.5,fairy:.5},rock:{fire:2,ice:2,flying:2,bug:2,fighting:.5,ground:.5,steel:.5},ghost:{psychic:2,ghost:2,dark:.5,normal:1},dragon:{dragon:2,steel:.5,fairy:0},dark:{psychic:2,ghost:2,fighting:.5,dark:.5,fairy:.5},steel:{ice:2,rock:2,fairy:2,fire:.5,water:.5,electric:.5,steel:.5},fairy:{fighting:2,dragon:2,dark:2,fire:.5,poison:.5,steel:.5},normal:{ghost:0,steel:.5}};
const TCOL={normal:'#a8a77a',fire:'#ee8130',water:'#6390f0',electric:'#f7d02c',grass:'#7ac74c',ice:'#96d9d6',fighting:'#c22e28',poison:'#a33ea1',ground:'#e2bf65',flying:'#a98ff3',psychic:'#f95587',bug:'#a6b91a',rock:'#b6a136',ghost:'#735797',dragon:'#6f35fc',dark:'#705746',steel:'#b7b7ce',fairy:'#d685ad'};

const MOVE={'Latigo Cepa':{type:'grass',power:45,acc:100,fx:null,cat:'physical'},'Placaje':{type:'normal',power:40,acc:100,fx:null,cat:'physical'},'Rayo Solar':{type:'grass',power:120,acc:100,fx:null,cat:'special'},'Tóxico':{type:'poison',power:0,acc:90,fx:'poison',cat:'status'},'Ascuas':{type:'fire',power:40,acc:100,fx:'burn',fxChance:10,cat:'special'},'Arañazo':{type:'normal',power:40,acc:100,fx:null,cat:'physical'},'Lanzallamas':{type:'fire',power:90,acc:100,fx:'burn',fxChance:10,cat:'special'},'Vuelo':{type:'flying',power:90,acc:95,fx:null,cat:'physical'},'Garra Dragón':{type:'dragon',power:80,acc:100,fx:null,cat:'physical'},'Pistola Agua':{type:'water',power:40,acc:100,fx:null,cat:'special'},'Rayo Burbuja':{type:'water',power:65,acc:100,fx:null,cat:'special'},'Hidrobomba':{type:'water',power:110,acc:80,fx:null,cat:'special'},'Cañón de Agua':{type:'water',power:90,acc:100,fx:null,cat:'special'},'Impactrueno':{type:'electric',power:40,acc:100,fx:'paralyze',fxChance:30,cat:'special'},'Rayo':{type:'electric',power:90,acc:100,fx:'paralyze',fxChance:10,cat:'special'},'Trueno':{type:'electric',power:110,acc:70,fx:'paralyze',fxChance:30,cat:'special'},'Canto':{type:'normal',power:0,acc:55,fx:'sleep',fxChance:100,cat:'status'},'Paliza':{type:'normal',power:80,acc:100,fx:null,cat:'physical'},'Hiperrayo':{type:'normal',power:150,acc:90,fx:null,cat:'special'},'Golpe Bajo':{type:'dark',power:65,acc:100,fx:null,cat:'physical'},'Garra Umbría':{type:'dark',power:80,acc:100,fx:null,cat:'physical'},'Bola Sombra':{type:'ghost',power:80,acc:100,fx:null,cat:'special'},'Hipnosis':{type:'psychic',power:0,acc:60,fx:'sleep',fxChance:100,cat:'status'},'Canto Helado':{type:'ice',power:55,acc:95,fx:'freeze',fxChance:10,cat:'special'},'Surf':{type:'water',power:90,acc:100,fx:null,cat:'special'},'Amnesia':{type:'psychic',power:0,acc:100,fx:'buff_spd',fxChance:100,cat:'status'},'Psíquico':{type:'psychic',power:90,acc:100,fx:null,cat:'special'},'Transformación':{type:'normal',power:0,acc:100,fx:null,cat:'status'},'Ventisca':{type:'ice',power:110,acc:70,fx:'freeze',fxChance:10,cat:'special'},'Ventarrón':{type:'flying',power:110,acc:70,fx:null,cat:'special'},'Rayo de Hielo':{type:'ice',power:90,acc:100,fx:'freeze',fxChance:10,cat:'special'}};

// Pokemon Data — con lvR (rango de nivel de aparicion)
const PD={
1:{id:1,n:'Bulbasaur',t:['grass','poison'],mv:['Latigo Cepa','Placaje'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif',bs:{hp:90,atk:118,def:111,spd:80},evo:[2],evLv:16,rar:'común',rs:12,rc:8,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',evItem:null,expY:64,goldY:30,mapT:['grass'],gender:{hasGender:true,maleChance:87},lvR:[2,15]},
2:{id:2,n:'Ivysaur',t:['grass','poison'],mv:['Latigo Cepa','Rayo Solar'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/2.gif',bs:{hp:110,atk:132,def:123,spd:90},evo:[3],evLv:32,rar:'pseudo',rs:5,rc:5,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png',evItem:null,expY:142,goldY:60,mapT:['grass'],gender:{hasGender:true,maleChance:87},lvR:[16,32]},
3:{id:3,n:'Venusaur',t:['grass','poison'],mv:['Rayo Solar','Tóxico'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/3.gif',bs:{hp:160,atk:182,def:153,spd:110},evo:[],evLv:null,rar:'pseudo',rs:2,rc:3,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png',evItem:null,expY:236,goldY:120,mapT:['grass'],gender:{hasGender:true,maleChance:87},lvR:[32,55]},
4:{id:4,n:'Charmander',t:['fire'],mv:['Ascuas','Arañazo'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/4.gif',bs:{hp:78,atk:104,def:78,spd:100},evo:[5],evLv:16,rar:'común',rs:12,rc:8,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png',evItem:null,expY:62,goldY:30,mapT:['fire'],gender:{hasGender:true,maleChance:87},lvR:[2,15]},
5:{id:5,n:'Charmeleon',t:['fire'],mv:['Ascuas','Garra Dragón'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/5.gif',bs:{hp:98,atk:129,def:103,spd:120},evo:[6],evLv:36,rar:'pseudo',rs:5,rc:5,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/5.png',evItem:null,expY:142,goldY:65,mapT:['fire'],gender:{hasGender:true,maleChance:87},lvR:[16,36]},
6:{id:6,n:'Charizard',t:['fire','flying'],mv:['Lanzallamas','Vuelo'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/6.gif',bs:{hp:156,atk:223,def:173,spd:150},evo:[],evLv:null,rar:'pseudo',rs:2,rc:3,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png',evItem:null,expY:240,goldY:130,mapT:['fire'],gender:{hasGender:true,maleChance:87},lvR:[36,60]},
7:{id:7,n:'Squirtle',t:['water'],mv:['Pistola Agua','Placaje'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/7.gif',bs:{hp:88,atk:86,def:120,spd:78},evo:[8],evLv:16,rar:'común',rs:12,rc:8,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png',evItem:null,expY:63,goldY:30,mapT:['water'],gender:{hasGender:true,maleChance:87},lvR:[2,15]},
8:{id:8,n:'Wartortle',t:['water'],mv:['Pistola Agua','Rayo Burbuja'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/8.gif',bs:{hp:108,atk:113,def:145,spd:98},evo:[9],evLv:36,rar:'pseudo',rs:5,rc:5,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/8.png',evItem:null,expY:142,goldY:65,mapT:['water'],gender:{hasGender:true,maleChance:87},lvR:[16,36]},
9:{id:9,n:'Blastoise',t:['water'],mv:['Hidrobomba','Cañón de Agua'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/9.gif',bs:{hp:158,atk:143,def:195,spd:118},evo:[],evLv:null,rar:'pseudo',rs:2,rc:3,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png',evItem:null,expY:239,goldY:130,mapT:['water'],gender:{hasGender:true,maleChance:87},lvR:[36,60]},
25:{id:25,n:'Pikachu',t:['electric'],mv:['Impactrueno','Rayo'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif',bs:{hp:70,atk:112,def:55,spd:120},evo:[26],evLv:null,rar:'común',rs:10,rc:7,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',evItem:101,expY:112,goldY:40,mapT:['electric','normal'],gender:{hasGender:true,maleChance:50},lvR:[3,18]},
26:{id:26,n:'Raichu',t:['electric'],mv:['Rayo','Trueno'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/26.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/26.gif',bs:{hp:110,atk:165,def:105,spd:150},evo:[],evLv:null,rar:'pseudo',rs:3,rc:4,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/26.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/26.png',evItem:null,expY:218,goldY:90,mapT:['electric'],gender:{hasGender:true,maleChance:50},lvR:[20,40]},
52:{id:52,n:'Meowth',t:['normal'],mv:['Arañazo','Golpe Bajo'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/52.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/52.gif',bs:{hp:80,atk:75,def:60,spd:110},evo:[53],evLv:28,rar:'común',rs:14,rc:10,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/52.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/52.png',evItem:null,expY:58,goldY:35,mapT:['normal'],gender:{hasGender:true,maleChance:50},lvR:[2,20]},
53:{id:53,n:'Persian',t:['normal'],mv:['Garra Umbría','Hiperrayo'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/53.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/53.gif',bs:{hp:105,atk:110,def:95,spd:145},evo:[],evLv:null,rar:'pseudo',rs:4,rc:4,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/53.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/53.png',evItem:null,expY:154,goldY:75,mapT:['normal'],gender:{hasGender:true,maleChance:50},lvR:[28,45]},
94:{id:94,n:'Gengar',t:['ghost','poison'],mv:['Bola Sombra','Hipnosis'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/94.gif',bs:{hp:120,atk:204,def:128,spd:178},evo:[],evLv:null,rar:'especial',rs:3,rc:4,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/94.png',evItem:null,expY:225,goldY:115,mapT:['ghost'],gender:{hasGender:true,maleChance:50},lvR:[25,50]},
131:{id:131,n:'Lapras',t:['water','ice'],mv:['Canto Helado','Surf'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/131.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/131.gif',bs:{hp:260,atk:165,def:168,spd:100},evo:[],evLv:null,rar:'especial',rs:3,rc:3,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/131.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/131.png',evItem:null,expY:187,goldY:100,mapT:['water'],gender:{hasGender:true,maleChance:50},lvR:[30,55]},
143:{id:143,n:'Snorlax',t:['normal'],mv:['Amnesia','Hiperrayo'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/143.gif',bs:{hp:320,atk:190,def:130,spd:30},evo:[],evLv:null,rar:'especial',rs:2,rc:3,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/143.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/143.png',evItem:null,expY:189,goldY:105,mapT:['normal'],gender:{hasGender:true,maleChance:87},lvR:[30,60]},
144:{id:144,n:'Articuno',t:['ice','flying'],mv:['Ventisca','Ventarrón'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/144.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/144.gif',bs:{hp:180,atk:198,def:218,spd:130},evo:[],evLv:null,rar:'legendario',rs:1,rc:1,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/144.png',evItem:null,expY:290,goldY:300,mapT:['ice'],gender:{hasGender:false,maleChance:0},lvR:[50,70]},
145:{id:145,n:'Zapdos',t:['electric','flying'],mv:['Trueno','Ventarrón'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/145.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/145.gif',bs:{hp:180,atk:232,def:178,spd:158},evo:[],evLv:null,rar:'legendario',rs:1,rc:1,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/145.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/145.png',evItem:null,expY:290,goldY:300,mapT:['electric'],gender:{hasGender:false,maleChance:0},lvR:[50,70]},
146:{id:146,n:'Moltres',t:['fire','flying'],mv:['Lanzallamas','Vuelo'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/146.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/146.gif',bs:{hp:180,atk:242,def:168,spd:148},evo:[],evLv:null,rar:'legendario',rs:1,rc:1,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/146.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/146.png',evItem:null,expY:290,goldY:300,mapT:['fire'],gender:{hasGender:false,maleChance:0},lvR:[50,70]},
149:{id:149,n:'Dragonite',t:['dragon','flying'],mv:['Garra Dragón','Hiperrayo'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/149.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/149.gif',bs:{hp:182,atk:263,def:198,spd:158},evo:[],evLv:null,rar:'pseudo',rs:1,rc:2,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/149.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/149.png',evItem:null,expY:270,goldY:150,mapT:['dragon'],gender:{hasGender:true,maleChance:50},lvR:[55,75]},
150:{id:150,n:'Mewtwo',t:['psychic'],mv:['Psíquico','Bola Sombra'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/150.gif',bs:{hp:212,atk:300,def:182,spd:212},evo:[],evLv:null,rar:'legendario',rs:1,rc:1,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/150.png',evItem:null,expY:340,goldY:500,mapT:['psychic'],gender:{hasGender:false,maleChance:0},lvR:[65,80]},
151:{id:151,n:'Mew',t:['psychic'],mv:['Psíquico','Transformación'],sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif',spb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/151.gif',bs:{hp:200,atk:220,def:220,spd:220},evo:[],evLv:null,rar:'singular',rs:1,rc:1,shSp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/151.png',shSpb:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/151.png',evItem:null,expY:340,goldY:600,mapT:['psychic'],gender:{hasGender:false,maleChance:0},lvR:[50,80]}
};

const ITEMS={1:{id:1,n:'Poké Ball',cat:'pokeball',bonus:0,price:200,sell:100,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',desc:'Sin bonificación.'},2:{id:2,n:'Súper Ball',cat:'pokeball',bonus:10,price:600,sell:300,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png',desc:'+10% captura.'},3:{id:3,n:'Ultra Ball',cat:'pokeball',bonus:20,price:1200,sell:600,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png',desc:'+20% captura.'},4:{id:4,n:'Master Ball',cat:'pokeball',bonus:100,price:90000,sell:1,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',desc:'Captura garantizada.'},10:{id:10,n:'Poción',cat:'heal',hp:20,price:300,sell:150,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png',desc:'Restaura 20 HP.'},11:{id:11,n:'Súper Poción',cat:'heal',hp:50,price:700,sell:350,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png',desc:'Restaura 50 HP.'},12:{id:12,n:'Hiper Poción',cat:'heal',hp:120,price:1500,sell:750,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png',desc:'Restaura 120 HP.'},13:{id:13,n:'Restaurador',cat:'heal',hp:9999,price:3000,sell:1500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-potion.png',desc:'HP al máximo.'},14:{id:14,n:'Antídoto',cat:'heal',cures:['poison'],price:200,sell:100,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png',desc:'Cura el veneno.'},15:{id:15,n:'Revivir',cat:'revive',pct:50,price:2000,sell:1000,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png',desc:'Revive con 50% HP.'},16:{id:16,n:'Revivir Máx',cat:'revive',pct:100,price:4500,sell:2000,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-revive.png',desc:'Revive HP completo.'},17:{id:17,n:'Despertar',cat:'heal',cures:['sleep'],price:250,sell:100,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/awakening.png',desc:'Cura el sueño.'},18:{id:18,n:'Antihielo',cat:'heal',cures:['freeze'],price:250,sell:100,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-heal.png',desc:'Cura congelación.'},19:{id:19,n:'Paraheal',cat:'heal',cures:['paralyze'],price:250,sell:100,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/parlyz-heal.png',desc:'Cura parálisis.'},20:{id:20,n:'Cura Quemadura',cat:'heal',cures:['burn'],price:250,sell:100,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-heal.png',desc:'Cura quemadura.'},21:{id:21,n:'Cura Total',cat:'heal',hp:9999,cures:['poison','burn','freeze','paralyze','sleep'],price:6000,sell:2500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-heal.png',desc:'Cura HP y estados.'},22:{id:22,n:'Caramelo Raro',cat:'candy',price:3000,sell:500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rare-candy.png',desc:'+1 nivel (máx. 100).'},101:{id:101,n:'Piedra Trueno',cat:'evo',eIds:[25],price:5000,sell:2500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png',desc:'Evoluciona Pikachu → Raichu.'},102:{id:102,n:'Piedra Luna',cat:'evo',eIds:[],price:5000,sell:2500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png',desc:'Piedra lunar.'},103:{id:103,n:'Piedra Fuego',cat:'evo',eIds:[],price:5000,sell:2500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png',desc:'Piedra fuego.'},104:{id:104,n:'Piedra Agua',cat:'evo',eIds:[],price:5000,sell:2500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png',desc:'Piedra agua.'},200:{id:200,n:'Repartir Exp',cat:'held',price:8000,sell:0,maxOwn:1,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/exp-share.png',desc:'Todo el equipo gana 50% EXP extra.'},201:{id:201,n:'MT Fuego',cat:'mt',mv:'Lanzallamas',price:15000,sell:500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-fire.png',desc:'Enseña Lanzallamas.'},202:{id:202,n:'MT Agua',cat:'mt',mv:'Hidrobomba',price:15000,sell:500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-water.png',desc:'Enseña Hidrobomba.'},203:{id:203,n:'MT Eléctrico',cat:'mt',mv:'Trueno',price:15000,sell:500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-electric.png',desc:'Enseña Trueno.'},204:{id:204,n:'MT Psíquico',cat:'mt',mv:'Psíquico',price:15000,sell:500,sp:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-psychic.png',desc:'Enseña Psíquico.'}};

const MAPS={normal:{id:'normal',name:'Ruta Normal',col:'#a8a77a',bg:'linear-gradient(135deg,#d4c89a,#b8a870)',gc:'rgba(168,167,122,.35)',pool:[52,53,25,143],leg:[],legUn:false},fire:{id:'fire',name:'Montaña Volcánica',col:'#ee8130',bg:'linear-gradient(135deg,#ff6b35,#c0392b)',gc:'rgba(238,129,48,.35)',pool:[4,5,6],leg:[146],legUn:false},water:{id:'water',name:'Archipiélago Celeste',col:'#6390f0',bg:'linear-gradient(135deg,#1a6fa8,#0d4f7c)',gc:'rgba(99,144,240,.35)',pool:[7,8,9,131],leg:[144],legUn:false},grass:{id:'grass',name:'Bosque Esmeralda',col:'#7ac74c',bg:'linear-gradient(135deg,#2ecc71,#1a7a40)',gc:'rgba(122,199,76,.35)',pool:[1,2,3],leg:[],legUn:false},electric:{id:'electric',name:'Torre Eléctrica',col:'#f7d02c',bg:'linear-gradient(135deg,#f1c40f,#b7950b)',gc:'rgba(247,208,44,.35)',pool:[25,26],leg:[145],legUn:false},ghost:{id:'ghost',name:'Torre Lavanda',col:'#735797',bg:'linear-gradient(135deg,#2c1654,#4a235a)',gc:'rgba(115,87,151,.35)',pool:[94],leg:[],legUn:false},psychic:{id:'psychic',name:'Ruinas Antiguas',col:'#f95587',bg:'linear-gradient(135deg,#9b59b6,#6c3483)',gc:'rgba(249,85,135,.35)',pool:[94,149],leg:[150,151],legUn:false}};

const MAP_BLOCKS={normal:new Set(['5,3','6,3','5,4','6,4','-5,-3','-6,-3','-5,-4','2,8','3,8','4,8','-3,-8','-4,-8','8,1','8,2','8,0','-8,-1','-8,-2','-8,0','-3,5','-4,5','-3,6','0,9','1,9','0,-9','-1,-9','7,-5','7,-6','8,-5','-7,5','-7,6','-8,5']),fire:new Set(['4,4','5,4','4,5','5,5','-4,-4','-5,-4','-4,-5','7,2','7,3','8,2','-7,-2','-7,-3','2,-7','3,-7','2,-8','-2,7','-3,7','0,6','1,6','0,7','-1,-6','-1,-7','9,-3','9,-2','-9,3']),water:new Set(['3,5','4,5','3,6','4,6','-3,-5','-4,-5','-3,-6','7,1','8,1','7,0','-7,-1','-8,-1','6,-6','7,-6','6,-7','-6,6','-7,6','5,8','6,8','-5,-8','0,-8','1,-8','-1,8','0,8']),grass:new Set(['2,6','3,6','2,7','3,7','-2,-6','-3,-6','-2,-7','6,3','7,3','6,2','-6,-3','-7,-3','5,-5','6,-5','5,-6','-5,5','-6,5','-1,8','0,8','-1,9','4,9','5,9','-4,-9','-5,-9']),electric:new Set(['4,2','5,2','4,3','5,3','-4,-2','-5,-2','-4,-3','7,5','8,5','7,6','-7,-5','-8,-5','3,-8','4,-8','3,-9','-3,8','-4,8','9,0','9,1','-9,0','-9,-1','6,-3','6,-4','-6,3']),ghost:new Set(['3,3','4,3','3,4','4,4','-3,-3','-4,-3','-3,-4','6,1','7,1','6,0','-6,-1','-7,-1','2,-6','3,-6','2,-7','-2,6','-3,6','-2,4','-3,4','0,7','1,7','0,8','-1,-7','5,-8','6,-8','-5,8']),psychic:new Set(['5,2','6,2','5,3','6,3','-5,-2','-6,-2','-5,-3','8,4','9,4','8,5','-8,-4','-9,-4','4,-7','5,-7','4,-8','-4,7','-5,7','-4,6','-7,0','-8,0','0,9','1,9','-1,-9','7,-2','7,-3'])};
function isBlocked(wx,wy){return(MAP_BLOCKS[GS.map.id]||new Set()).has(`${wx},${wy}`);}

const TRAINERS={kanto:{name:'Kanto',col:'#e74c3c',unlockMaps:['fire','water','electric','psychic'],trainers:[
{id:'brock',n:'Líder Brock',icon:'bolt',minLv:12,rew:500,medal:'Medalla Roca',medalCol:'#95a5a6',medalIcon:'🪨',pk:[{id:74,n:'Geodude',lv:12,hp:55,atk:55,def:80,spd:35,mv:['Placaje','Paliza'],t:['rock','ground']},{id:75,n:'Onix',lv:14,hp:50,atk:40,def:120,spd:55,mv:['Placaje','Paliza'],t:['rock','ground']}],def:false},
{id:'misty',n:'Líder Misty',icon:'water_drop',minLv:21,rew:800,medal:'Medalla Cascada',medalCol:'#6390f0',medalIcon:'💧',pk:[{id:120,n:'Staryu',lv:18,hp:75,atk:65,def:70,spd:80,mv:['Pistola Agua','Rayo de Hielo'],t:['water']},{id:121,n:'Starmie',lv:21,hp:85,atk:85,def:85,spd:110,mv:['Pistola Agua','Psíquico'],t:['water','psychic']}],def:false},
{id:'surge',n:'Tte. Surge',icon:'thunderstorm',minLv:24,rew:1000,medal:'Medalla Trueno',medalCol:'#f7d02c',medalIcon:'⚡',pk:[{id:26,n:'Raichu',lv:24,hp:95,atk:100,def:70,spd:115,mv:['Impactrueno','Rayo'],t:['electric']}],def:false},
{id:'erika',n:'Líder Erika',icon:'local_florist',minLv:29,rew:1200,medal:'Medalla Arcoíris',medalCol:'#7ac74c',medalIcon:'🌿',pk:[{id:71,n:'Victreebel',lv:29,hp:105,atk:95,def:60,spd:65,mv:['Latigo Cepa','Tóxico'],t:['grass','poison']}],def:false},
{id:'koga',n:'Koga',icon:'science',minLv:43,rew:2000,medal:'Medalla Alma',medalCol:'#9b59b6',medalIcon:'☠️',pk:[{id:89,n:'Muk',lv:37,hp:140,atk:90,def:65,spd:45,mv:['Tóxico','Paliza'],t:['poison']},{id:110,n:'Weezing',lv:43,hp:115,atk:80,def:110,spd:55,mv:['Tóxico','Bola Sombra'],t:['poison']}],def:false},
{id:'blue',n:'Campeón Blue',icon:'emoji_events',minLv:65,rew:10000,medal:'Medalla Campeón',medalCol:'#d4ac0d',medalIcon:'🏆',pk:[{id:6,n:'Charizard',lv:65},{id:9,n:'Blastoise',lv:63},{id:3,n:'Venusaur',lv:65}],def:false}
]}};

const RARITY_CFG={común:{label:'Común',col:'#95a5a6',cls:'rar-comun'},pseudo:{label:'Pseudo',col:'#2980b9',cls:'rar-pseudo'},especial:{label:'Especial',col:'#8e44ad',cls:'rar-especial'},legendario:{label:'Legendario',col:'#d4ac0d',cls:'rar-legendario'},singular:{label:'Singular',col:'#e74c3c',cls:'rar-singular'}};
const CODES={'POKEFAN2025':{desc:'¡Bienvenido al mundo Pokémon!',rewards:[{t:'gold',v:5000},{t:'item',id:1,q:10},{t:'item',id:2,q:5}]},'MASTERBALL':{desc:'¡Una Master Ball exclusiva!',rewards:[{t:'item',id:4,q:1}]},'LEGENDPOWER':{desc:'Oro y pociones para el campeón.',rewards:[{t:'gold',v:20000},{t:'item',id:13,q:3},{t:'item',id:16,q:2}]},'SHINYHUNTER':{desc:'Pack de Ultra Balls.',rewards:[{t:'item',id:3,q:20}]},'STARTPACK':{desc:'Pack de inicio completo.',rewards:[{t:'gold',v:3000},{t:'item',id:1,q:15},{t:'item',id:10,q:5},{t:'item',id:15,q:2}]},'GIFTGHOST':{desc:'¡Gengar Shiny Lv.50 de regalo!',rewards:[{t:'pokemon',pid:94,variant:'shiny',lv:50}]},'DULCE10':{desc:'10 Caramelos Raros de regalo.',rewards:[{t:'item',id:22,q:10}]}};
const DEFAULT_AVATAR='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif';

// ============================================================
// GAME STATE
// ============================================================
const GS={player:{name:'Entrenador',gold:1000,team:[],pc:[],bag:{},usedCodes:new Set(),defeatedTrainers:new Set(),expShareOn:false,avatar:DEFAULT_AVATAR,steps:0},map:{id:'normal',x:0,y:0},spawns:[],battle:null,screen:'radar',viewMode:'detailed',pcPage:0,pcSearch:''};
const MAP_LIMIT=99;
let lastDir={dx:0,dy:-1};
let _selectedStarterId=null;

// ============================================================
// SAVE / LOAD
// ============================================================
function save(){
  try{
    const d={player:{...GS.player,usedCodes:[...GS.player.usedCodes],defeatedTrainers:[...GS.player.defeatedTrainers]},map:GS.map,legUn:{},trDef:{},viewMode:GS.viewMode};
    Object.keys(MAPS).forEach(k=>d.legUn[k]=MAPS[k].legUn);
    Object.keys(TRAINERS).forEach(r=>d.trDef[r]=TRAINERS[r].trainers.map(t=>t.def));
    localStorage.setItem('pf3_save',JSON.stringify(d));
  }catch(e){}
}
function load(){
  try{
    const raw=localStorage.getItem('pf3_save');if(!raw)return;
    const d=JSON.parse(raw);
    GS.player={...d.player,usedCodes:new Set(d.player.usedCodes||[]),defeatedTrainers:new Set(d.player.defeatedTrainers||[])};
    if(typeof GS.player.steps!=='number')GS.player.steps=0;
    if(!GS.player.avatar)GS.player.avatar=DEFAULT_AVATAR;
    GS.map=d.map||{id:'normal',x:0,y:0};
    GS.viewMode=d.viewMode||'detailed';GS.pcPage=0;GS.pcSearch='';
    if(d.legUn)Object.keys(d.legUn).forEach(k=>{if(MAPS[k])MAPS[k].legUn=d.legUn[k];});
    if(d.trDef)Object.keys(d.trDef).forEach(r=>{if(TRAINERS[r])d.trDef[r].forEach((v,i)=>{if(TRAINERS[r].trainers[i])TRAINERS[r].trainers[i].def=v;});});
  }catch(e){console.warn('Load err',e);}
}

// ============================================================
// UTILS
// ============================================================
let _nt=null;
function notif(msg,type='info',dur=3000){const el=document.getElementById('notif');if(!el)return;el.textContent=msg;el.className='show '+type;if(_nt)clearTimeout(_nt);_nt=setTimeout(()=>{el.className='';},dur);}
function hpCol(pct){return pct>50?'#2ecc71':pct>25?'#f39c12':'#e74c3c';}
function hpPct(p){return p&&p.maxHp?Math.max(0,Math.round(p.currentHp/p.maxHp*100)):0;}
function typeEff(atType,defTypes){let m=1;const chart=TC[atType]||{};(defTypes||['normal']).forEach(dt=>{const v=chart[dt];if(v!==undefined)m*=v;});return m;}
function typeBadges(types){return(types||['normal']).map(t=>`<span class="tbadge" style="background:${TCOL[t]||'#777'}">${t}</span>`).join('');}
function calcHP(base,lv){return Math.floor(2*base*lv/100+lv+10);}
function calcStat(base,lv){return Math.floor(2*base*lv/100+5);}
function expReq(lv){return Math.floor(100*Math.pow(lv,1.5));}
function rollGender(pid){const g=PD[pid]?.gender;if(!g||!g.hasGender)return null;return Math.random()*100<g.maleChance?'M':'F';}
function genderTag(g){if(g==='M')return`<span style="color:#6db4ff;font-size:11px;font-weight:700">♂</span>`;if(g==='F')return`<span style="color:#ff8fb3;font-size:11px;font-weight:700">♀</span>`;return'';}
function getSprite(pkm){const b=PD[pkm.pid];return pkm.variant==='shiny'?(b?.shSp||b?.sp||''):(b?.sp||'');}
function getBack(pkm){const b=PD[pkm.pid];return pkm.variant==='shiny'?(b?.shSpb||b?.spb||b?.sp||''):(b?.spb||b?.sp||'');}
function addGold(n){GS.player.gold+=n;updateHUD();}
function spendGold(n){if(GS.player.gold<n)return false;GS.player.gold-=n;updateHUD();return true;}
function addBag(id,q=1){id=+id;GS.player.bag[id]=(GS.player.bag[id]||0)+q;}
function useBag(id,q=1){id=+id;if((GS.player.bag[id]||0)<q)return false;GS.player.bag[id]-=q;if(!GS.player.bag[id])delete GS.player.bag[id];return true;}
function cntBag(id){return GS.player.bag[+id]||0;}
function getSellPrice(pkm){const b=PD[pkm.pid];let p=(b?.goldY||20)*pkm.lv;if(pkm.variant==='dark')p*=2;if(pkm.variant==='shiny')p*=3;return Math.floor(p);}
function dname(pkm){return pkm.nickname||pkm.name;}

// Variant visual — GLOBAL (icono + color + filtro)
function variantLabel(v){
  if(v==='shiny')return`<span class="ms v-shiny" title="Shiny ✨">auto_awesome</span>`;
  if(v==='dark')return`<span class="ms v-dark" title="Dark 🌑">dark_mode</span>`;
  return'';
}
function variantName(name,v){
  if(v==='shiny')return`<span class="vname-shiny">${name}</span>`;
  if(v==='dark')return`<span class="vname-dark">${name}</span>`;
  return name;
}
function displayName(pkm){
  const name=pkm.nickname||pkm.name;
  if(pkm.variant==='shiny')return`<span class="vname-shiny">${name}</span>`;
  if(pkm.variant==='dark')return`<span class="vname-dark">${name}</span>`;
  return name;
}
function variantFilter(v,fainted){
  if(fainted)return'filter:grayscale(1) opacity(0.3)';
  if(v==='dark')return'filter:grayscale(1) brightness(0.3)';
  return'';
}
const STATUS_TAG={poison:'VEN',burn:'QUE',freeze:'CON',sleep:'DOR',paralyze:'PAR'};
const STATUS_COL={poison:'#a33ea1',burn:'#ee8130',freeze:'#96d9d6',sleep:'#6390f0',paralyze:'#f7d02c'};
function statusTag(s){if(!s)return'';return`<span class="stag" style="background:${STATUS_COL[s]||'#888'}">${STATUS_TAG[s]||s.slice(0,3).toUpperCase()}</span>`;}

// Searchable picker helper (para selección con búsqueda)
function showSearchablePicker(title,items){
  const html=items.map(it=>`<div class="heal-pick-item picker-row" data-search="${(it.name||'').toLowerCase()}" onclick="${it.onclick}">
    ${it.sp?`<img src="${it.sp}" style="width:36px;height:36px;image-rendering:pixelated;object-fit:contain" onerror="this.style.display='none'">` :''}
    <div><b>${it.name}</b>${it.sub?`<br><small style="color:var(--dim)">${it.sub}</small>`:''}</div>
  </div>`).join('');
  showOv('enc-ov',`<div class="obox">
    <div class="otitle">${title}</div>
    <div class="picker-search-wrap"><span class="ms" style="color:var(--dim);font-size:18px">search</span>
      <input class="picker-search-in" type="text" placeholder="Buscar..." oninput="filterPicker(this.value)">
    </div>
    <div id="picker-items" style="width:100%;display:flex;flex-direction:column;gap:6px">${html||'<p style="color:var(--dim)">Sin opciones.</p>'}</div>
    <button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')"><span class="ms">close</span>Cancelar</button>
  </div>`);
}
function filterPicker(q){document.querySelectorAll('.picker-row').forEach(el=>{el.style.display=(q&&!el.dataset.search.includes(q.toLowerCase()))?'none':'flex';});}

// ============================================================
// POKEMON INSTANCE
// ============================================================
function applyVariantStats(bs,variant){
  if(variant==='shiny')return{hp:Math.floor(bs.hp*1.15),atk:Math.floor(bs.atk*1.1),def:Math.floor(bs.def*1.1),spd:Math.floor(bs.spd*1.1)};
  if(variant==='dark')return{hp:bs.hp,atk:Math.floor(bs.atk*1.1),def:bs.def,spd:bs.spd};
  return{...bs};
}
function mkPkm(pid,variant='normal',lv=5){
  const b=PD[pid];if(!b)return null;
  const vbs=applyVariantStats(b.bs,variant);const hp=calcHP(vbs.hp,lv);
  return{uid:Math.random().toString(36).slice(2,9),pid,name:b.n,nickname:null,types:[...b.t],variant,lv,exp:0,expNext:expReq(lv),gender:rollGender(pid),currentHp:hp,maxHp:hp,atk:calcStat(vbs.atk,lv),def:calcStat(vbs.def,lv),spd:calcStat(vbs.spd,lv),moves:[...b.mv],thirdMove:null,status:null,sleepTurns:0,rar:b.rar,evoPending:null,transformed:false,originalPid:null,_origMoves:null,_origTypes:null,_origAtk:0,_origDef:0,_origSpd:0};
}
function statUp(pkm){
  const b=PD[pkm.pid];const vbs=applyVariantStats(b.bs,pkm.variant);const nh=calcHP(vbs.hp,pkm.lv);
  pkm.currentHp=Math.min(pkm.currentHp+(nh-pkm.maxHp),nh);pkm.maxHp=nh;pkm.atk=calcStat(vbs.atk,pkm.lv);pkm.def=calcStat(vbs.def,pkm.lv);pkm.spd=calcStat(vbs.spd,pkm.lv);
}
function clearBattleStatus(pkm){pkm.status=null;pkm.sleepTurns=0;}
function giveExp(pkm,exp){
  pkm.exp+=exp;let levs=0;
  while(pkm.exp>=pkm.expNext&&pkm.lv<100){pkm.exp-=pkm.expNext;pkm.lv++;pkm.expNext=expReq(pkm.lv);statUp(pkm);levs++;}
  if(levs>0)notif(`¡${dname(pkm)} subió al nivel ${pkm.lv}!`,'ok',3500);
  checkEvo(pkm);return levs;
}
function checkEvo(pkm){
  const b=PD[pkm.pid];if(!b.evo||!b.evo.length||pkm.evoPending||b.evItem)return;
  if(b.evLv&&pkm.lv>=b.evLv){pkm.evoPending=b.evo[0];setTimeout(()=>showEvoPrompt(pkm),800);}
}
function doEvolve(uid){
  const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);if(!pkm||!pkm.evoPending)return;
  const tb=PD[pkm.evoPending];if(!tb)return;
  const old=dname(pkm);pkm.pid=pkm.evoPending;pkm.name=tb.n;pkm.types=[...tb.t];pkm.moves=[...tb.mv];pkm.rar=tb.rar;pkm.evoPending=null;statUp(pkm);
  document.getElementById('evo-ov').style.display='none';
  notif(`¡${old} evolucionó a ${tb.n}!`,'ok',5000);save();renderCurrent();
}
function skipEvo(uid){const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);if(pkm)pkm.evoPending=null;document.getElementById('evo-ov').style.display='none';}
function showEvoPrompt(pkm){
  const tid=pkm.evoPending;const tb=PD[tid];if(!tb)return;
  const ov=document.getElementById('evo-ov');
  ov.innerHTML=`<div class="evo-box"><div class="evo-glow"></div>
    <div style="font-family:'Orbitron',sans-serif;font-size:14px;font-weight:700;color:var(--gold)">¡Evolución!</div>
    <div class="evo-row"><img class="evo-spr" src="${getSprite(pkm)}" onerror="this.style.display='none'"><div class="evo-arrow">→</div><img class="evo-spr" src="${tb.sp||''}" onerror="this.style.display='none'"></div>
    <p style="font-size:13px;text-align:center"><b>${dname(pkm)}</b> → <b>${tb.n}</b></p>
    <div class="evo-btns"><button class="btn-do-evo" onclick="doEvolve('${pkm.uid}')">Evolucionar</button><button class="btn-skip-evo" onclick="skipEvo('${pkm.uid}')">Ahora no</button></div></div>`;
  ov.style.display='flex';
}

// Rare Candy
function useRareCandy(id){
  if(!cntBag(id)){notif('Sin Caramelos Raros.','err');return;}
  const all=[...GS.player.team,...GS.player.pc].filter(p=>p.lv<100);
  if(!all.length){notif('Todos tus Pokémon son nivel 100.','warn');return;}
  showSearchablePicker(`<span class="ms" style="color:var(--gold)">star</span> Caramelo Raro`,all.map(p=>({sp:getSprite(p),name:dname(p),sub:`Lv.${p.lv} → <span style="color:var(--green)">Lv.${Math.min(100,p.lv+1)}</span>`,onclick:`doRareCandy('${p.uid}',${id})`})));
}
function doRareCandy(uid,itemId){
  closeOv('enc-ov');const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);
  if(!pkm||pkm.lv>=100){notif('Ya está en nivel 100.','warn');return;}
  if(!useBag(itemId)){notif('Sin Caramelos Raros.','err');return;}
  pkm.lv=Math.min(100,pkm.lv+1);pkm.exp=0;pkm.expNext=expReq(pkm.lv);statUp(pkm);notif(`¡${dname(pkm)} subió al nivel ${pkm.lv}!`,'ok',3000);checkEvo(pkm);save();renderCurrent();
}

// Rename / Apodo
function openRename(uid){
  const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);if(!pkm)return;
  showOv('enc-ov',`<div class="obox">
    <div class="otitle"><span class="ms" style="font-size:16px;color:var(--blue)">edit</span> Cambiar apodo</div>
    <div style="text-align:center;font-size:12px;color:var(--dim)">Pokémon: <b>${pkm.name}</b></div>
    <input id="rename-in" class="prof-in" value="${pkm.nickname||''}" placeholder="${pkm.name}" maxlength="20" style="width:100%" onkeydown="if(event.key==='Enter')doRename('${uid}')">
    <div style="display:flex;gap:8px;width:100%">
      <button class="ebtn ebtn-catch" style="flex:1" onclick="doRename('${uid}')"><span class="ms">check</span>Guardar</button>
      <button class="ebtn" style="background:rgba(231,76,60,.1);color:var(--acc);border:1px solid rgba(231,76,60,.3)" onclick="clearNickname('${uid}')"><span class="ms">clear</span>Quitar</button>
      <button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')"><span class="ms">close</span></button>
    </div>
  </div>`);
  setTimeout(()=>{const el=document.getElementById('rename-in');if(el){el.focus();el.select();}},60);
}
function doRename(uid){
  const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);if(!pkm)return;
  const el=document.getElementById('rename-in');if(!el)return;
  const nn=el.value.trim().slice(0,20);pkm.nickname=nn||null;
  closeOv('enc-ov');save();renderCurrent();notif(nn?`Apodo "${nn}" guardado.`:'Apodo eliminado.','ok');
}
function clearNickname(uid){const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);if(!pkm)return;pkm.nickname=null;closeOv('enc-ov');save();renderCurrent();notif('Apodo eliminado.','info');}

// ============================================================
// RADAR
// ============================================================
const CELL=30,GRID=11,HALF=5,ENCOUNTER_RANGE=2;
let spawnLoop=null;
const _sprCache={};
function loadSpr(url,cb){if(!url)return;if(_sprCache[url]){cb&&cb(_sprCache[url]);return;}const img=new Image();img.crossOrigin='anonymous';img.onload=()=>{_sprCache[url]=img;cb&&cb(img);};img.onerror=()=>{};img.src=url;}
function getPool(){const m=MAPS[GS.map.id];let p=[...m.pool];if(m.legUn&&m.leg.length)p=p.concat(m.leg);return p;}
function rollSpawn(){
  const pool=getPool();if(!pool.length||GS.spawns.length>=10)return;
  const pid=pool[Math.floor(Math.random()*pool.length)];const b=PD[pid];if(!b)return;
  const ns=b.rs,ds=ns*0.5,ss=ns*0.1;const r=Math.random()*100;
  let variant=null;
  if(r<ss)variant='shiny';else if(r<ss+ds)variant='dark';else if(r<ss+ds+ns)variant='normal';
  if(!variant)return;
  let attempts=0,wx,wy;
  do{const angle=Math.random()*Math.PI*2;const dist=3+Math.floor(Math.random()*4);wx=Math.round(GS.map.x+Math.cos(angle)*dist);wy=Math.round(GS.map.y+Math.sin(angle)*dist);attempts++;}
  while(attempts<10&&(Math.abs(wx)>MAP_LIMIT||Math.abs(wy)>MAP_LIMIT||GS.spawns.some(s=>s.wx===wx&&s.wy===wy)||isBlocked(wx,wy)));
  if(Math.abs(wx)>MAP_LIMIT||Math.abs(wy)>MAP_LIMIT||isBlocked(wx,wy))return;
  const lvR=b.lvR||[3,18];
  const lv=Math.max(1,Math.floor(Math.random()*(lvR[1]-lvR[0]+1))+lvR[0]);
  GS.spawns.push({uid:Math.random().toString(36).slice(2,9),pid,variant,wx,wy,lv,gender:rollGender(pid),timer:30,timerMax:30});
  preloadSpawnSprites();renderSpawnList();renderRadarCanvas();
}
function preloadSpawnSprites(){GS.spawns.forEach(s=>{const b=PD[s.pid];if(b){const url=s.variant==='shiny'?b.shSp:b.sp;loadSpr(url,()=>renderRadarCanvas());}});}
function tickSpawns(){GS.spawns=GS.spawns.filter(s=>{s.timer--;return s.timer>0;});rollSpawn();renderSpawnList();renderRadarCanvas();}
function playerDist(s){return Math.max(Math.abs(s.wx-GS.map.x),Math.abs(s.wy-GS.map.y));}

function renderRadarCanvas(){
  const cv=document.getElementById('radar-canvas');if(!cv)return;
  const ctx=cv.getContext('2d');const W=GRID*CELL;cv.width=W;cv.height=W;
  const m=MAPS[GS.map.id];
  const g=ctx.createLinearGradient(0,0,W,W);g.addColorStop(0,m.col+'cc');g.addColorStop(1,m.col+'44');
  ctx.fillStyle=g;ctx.fillRect(0,0,W,W);
  ctx.strokeStyle=m.gc;ctx.lineWidth=0.5;
  for(let i=0;i<=GRID;i++){ctx.beginPath();ctx.moveTo(i*CELL,0);ctx.lineTo(i*CELL,W);ctx.stroke();ctx.beginPath();ctx.moveTo(0,i*CELL);ctx.lineTo(W,i*CELL);ctx.stroke();}
  const blocks=MAP_BLOCKS[GS.map.id]||new Set();
  blocks.forEach(key=>{const[bx,by]=key.split(',').map(Number);const relX=bx-GS.map.x,relY=by-GS.map.y;if(Math.abs(relX)>HALF||Math.abs(relY)>HALF)return;const sx=(relX+HALF)*CELL,sy=(relY+HALF)*CELL;ctx.save();ctx.fillStyle='rgba(80,80,130,0.55)';ctx.fillRect(sx,sy,CELL,CELL);ctx.strokeStyle='rgba(160,160,220,0.7)';ctx.lineWidth=1.5;ctx.strokeRect(sx+1,sy+1,CELL-2,CELL-2);ctx.restore();});
  ctx.save();ctx.strokeStyle='rgba(255,255,255,.12)';ctx.lineWidth=1;ctx.beginPath();ctx.arc(W/2,W/2,ENCOUNTER_RANGE*CELL,0,Math.PI*2);ctx.stroke();ctx.restore();
  GS.spawns.forEach(s=>{
    const relX=s.wx-GS.map.x,relY=s.wy-GS.map.y;
    if(Math.abs(relX)>HALF+1||Math.abs(relY)>HALF+1)return;
    const sx=(relX+HALF)*CELL,sy=(relY+HALF)*CELL;const cx2=sx+CELL/2,cy2=sy+CELL/2;
    const near=playerDist(s)<=ENCOUNTER_RANGE;const pct=s.timer/s.timerMax;
    const col=s.variant==='shiny'?'#f7d02c':s.variant==='dark'?'#e74c3c':'#ffffff';
    ctx.save();ctx.beginPath();ctx.arc(cx2,cy2,CELL/2-2,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);ctx.strokeStyle=col+'66';ctx.lineWidth=2;ctx.stroke();ctx.restore();
    ctx.save();if(near){ctx.shadowColor=col;ctx.shadowBlur=10;}
    const b=PD[s.pid];const sprUrl=s.variant==='shiny'?b.shSp:b.sp;
    if(!_sprCache[sprUrl])loadSpr(sprUrl,()=>renderRadarCanvas());
    const cachedImg=_sprCache[sprUrl];
    if(cachedImg){const sz=near?26:22;if(s.variant==='dark')ctx.filter='grayscale(1) brightness(0.25)';ctx.drawImage(cachedImg,cx2-sz/2,cy2-sz/2,sz,sz);}
    else{ctx.beginPath();ctx.arc(cx2,cy2,near?6:4,0,Math.PI*2);ctx.fillStyle=col+(near?'ff':'88');ctx.fill();}
    ctx.restore();
    if(near){ctx.save();ctx.strokeStyle='#39ff14';ctx.lineWidth=1.5;ctx.setLineDash([3,3]);ctx.strokeRect(cx2-15,cy2-15,30,30);ctx.restore();}
    // Variant indicator on canvas
    if(s.variant!=='normal'){ctx.save();ctx.font='bold 9px sans-serif';ctx.fillStyle=col;ctx.fillText(s.variant==='shiny'?'★':'◆',cx2+7,cy2-10);ctx.restore();}
  });
  const pcx=HALF*CELL+CELL/2,pcy=HALF*CELL+CELL/2,pR=13;
  ctx.save();ctx.shadowColor='#3498db';ctx.shadowBlur=18;ctx.beginPath();ctx.arc(pcx,pcy,pR,0,Math.PI*2);ctx.fillStyle='rgba(52,152,219,.3)';ctx.fill();ctx.strokeStyle='#3498db';ctx.lineWidth=2.5;ctx.stroke();ctx.restore();
  const avUrl=GS.player.avatar;
  if(avUrl&&_sprCache[avUrl]){ctx.save();ctx.beginPath();ctx.arc(pcx,pcy,pR-1,0,Math.PI*2);ctx.clip();ctx.drawImage(_sprCache[avUrl],pcx-(pR-1),pcy-(pR-1),(pR-1)*2,(pR-1)*2);ctx.restore();}
  if(lastDir.dx!==0||lastDir.dy!==0){const angle=Math.atan2(lastDir.dy,lastDir.dx);const r=pR+7;const ax=pcx+Math.cos(angle)*r,ay=pcy+Math.sin(angle)*r;ctx.save();ctx.translate(ax,ay);ctx.rotate(angle);ctx.shadowColor='#3498db';ctx.shadowBlur=6;ctx.fillStyle='#3498db';ctx.beginPath();ctx.moveTo(6,0);ctx.lineTo(-4,-4);ctx.lineTo(-4,4);ctx.closePath();ctx.fill();ctx.restore();}
  document.getElementById('radar-coords').textContent=`X:${GS.map.x} Y:${GS.map.y}  |  ${MAPS[GS.map.id].name}`;
}

function renderSpawnList(){
  const el=document.getElementById('spawn-list');if(!el)return;
  if(!GS.spawns.length){el.innerHTML='<div class="no-spawn">Explora el mapa para encontrar Pokémon...</div>';return;}
  el.innerHTML=GS.spawns.map(s=>{
    const b=PD[s.pid];const d=playerDist(s);const near=d<=ENCOUNTER_RANGE;
    const pct=Math.round(s.timer/s.timerMax*100);const timerCol=s.timer<8?'#e74c3c':s.timer<20?'#f39c12':'#2ecc71';
    const dkSt=s.variant==='dark'?'filter:grayscale(1) brightness(0.3)':'';
    const sprUrl=s.variant==='shiny'?b.shSp:b.sp;const lvR=b.lvR||[3,18];
    return`<div class="spawn-item ${s.variant==='shiny'?'spawn-shiny':s.variant==='dark'?'spawn-dark':''}" onclick="onSpawnListClick('${s.uid}')" style="${near?'border-color:rgba(57,255,20,.4);':''}">
      <img class="spawn-img" src="${sprUrl}" style="${dkSt}" onerror="this.style.display='none'">
      <div class="spawn-info">
        <div class="spawn-name">${variantLabel(s.variant)} ${variantName(b.n,s.variant)} ${genderTag(s.gender)} <span style="color:var(--dim);font-size:10px">Lv.${s.lv}</span></div>
        <div class="spawn-meta">${typeBadges(b.t)} <span class="lvr-badge">Nv.${lvR[0]}-${lvR[1]}</span></div>
        <div class="spawn-timer"><div class="spawn-timer-fill" style="width:${pct}%;background:${timerCol}"></div></div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px">
        ${near?`<span style="color:#39ff14;font-weight:700;font-size:10px">CERCA</span>`:`<span style="font-size:10px">${d} cel.</span>`}
        <span style="font-size:9px;color:var(--dim)">(${s.wx>0?'+':''}${s.wx},${s.wy>0?'+':''}${s.wy})</span>
      </div>
    </div>`;
  }).join('');
}
function onSpawnListClick(uid){const s=GS.spawns.find(x=>x.uid===uid);if(!s)return;if(playerDist(s)<=ENCOUNTER_RANGE)openEncounter(s);else notif(`${PD[s.pid].n} está a ${playerDist(s)} celdas.`,'info',2000);}
function setupCanvasClick(){
  const cv=document.getElementById('radar-canvas');if(!cv)return;
  cv.onclick=function(e){const rect=cv.getBoundingClientRect();const mx=Math.floor((e.clientX-rect.left)/CELL),my=Math.floor((e.clientY-rect.top)/CELL);const wx=mx-HALF+GS.map.x,wy=my-HALF+GS.map.y;const hit=GS.spawns.find(s=>s.wx===wx&&s.wy===wy);if(hit){if(playerDist(hit)<=ENCOUNTER_RANGE)openEncounter(hit);else notif(`Muévete más cerca (${playerDist(hit)} celdas).`,'warn');}};
}
function startLoop(){if(spawnLoop)clearInterval(spawnLoop);spawnLoop=setInterval(()=>{tickSpawns();},1000);}
function move(dx,dy){
  const nx=Math.max(-MAP_LIMIT,Math.min(MAP_LIMIT,GS.map.x+dx));const ny=Math.max(-MAP_LIMIT,Math.min(MAP_LIMIT,GS.map.y+dy));
  if(isBlocked(nx,ny)){notif('¡Camino bloqueado!','warn',800);return;}
  if(nx===GS.map.x&&ny===GS.map.y)return;
  GS.map.x=nx;GS.map.y=ny;GS.player.steps=(GS.player.steps||0)+1;
  if(dx!==0||dy!==0)lastDir={dx,dy};
  save();renderRadarCanvas();renderSpawnList();
}

// Map Info Bubble
function openMapInfo(){
  const m=MAPS[GS.map.id];
  const poolHTML=m.pool.map(pid=>{const b=PD[pid];const lvR=b.lvR||[3,18];const dkSt=b.rs<3?'filter:grayscale(.3)':'';
    return`<div class="map-info-pkm"><img src="${b.sp}" style="width:40px;height:40px;image-rendering:pixelated;${dkSt}" onerror="this.style.display='none'">
      <div><div style="font-size:11px;font-weight:700">${b.n}</div><div style="font-size:9px;color:var(--dim)">Spawn: ${b.rs}% | Nv.${lvR[0]}-${lvR[1]}</div><div>${typeBadges(b.t)}</div></div></div>`;}).join('');
  const legHTML=m.leg.length?m.leg.map(pid=>{const b=PD[pid];const lvR=b.lvR||[50,70];const un=m.legUn;
    return`<div class="map-info-pkm"><img src="${b.sp}" style="width:40px;height:40px;image-rendering:pixelated;${un?'':'filter:grayscale(1) opacity(.3)'}" onerror="this.style.display='none'">
      <div><div style="font-size:11px;font-weight:700;color:${un?'#d4ac0d':'var(--dim)'}">${un?b.n:'???'}</div><div style="font-size:9px;color:${un?'var(--gold)':'var(--dim)'};">${un?`Spawn: ${b.rs}% | Nv.${lvR[0]}-${lvR[1]}`:'Completa Gyms de Kanto'}</div></div></div>`;}).join('')
    :'<div style="font-size:11px;color:var(--dim)">Sin legendarios aquí.</div>';
  showOv('enc-ov',`<div class="obox" style="max-width:360px">
    <div class="otitle"><span class="ms" style="color:${m.col}">explore</span> ${m.name}</div>
    <div style="width:100%"><div style="font-size:10px;font-weight:700;color:var(--dim);text-transform:uppercase;margin-bottom:6px">Encuentros</div><div class="map-info-list">${poolHTML}</div></div>
    ${m.leg.length?`<div style="width:100%;margin-top:8px"><div style="font-size:10px;font-weight:700;color:var(--gold);text-transform:uppercase;margin-bottom:6px">⭐ Legendarios</div><div class="map-info-list">${legHTML}</div></div>`:''}
    <button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')" style="margin-top:4px"><span class="ms">close</span>Cerrar</button>
  </div>`);
}

// ============================================================
// ENCOUNTER
// ============================================================
function openEncounter(s){
  const b=PD[s.pid];const rc=RARITY_CFG[b.rar||'común'];
  const dkSt=s.variant==='dark'?'filter:grayscale(1) brightness(0.3)':'';
  const sprUrl=s.variant==='shiny'?b.shSp:b.sp;
  showOv('enc-ov',`<div class="obox">
    <div class="otitle">${variantLabel(s.variant)} ${variantName(b.n,s.variant)} ${genderTag(s.gender)} <span style="color:var(--dim);font-size:12px">Lv.${s.lv}</span></div>
    <img class="enc-sprite" src="${sprUrl}" style="${dkSt}" onerror="this.style.display='none'">
    <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center">${typeBadges(b.t)} <span class="rtag ${rc.cls}">${rc.label}</span></div>
    <div class="enc-btns">
      <button class="ebtn ebtn-catch" onclick="quickCatch('${s.uid}')"><span class="ms" style="font-size:18px">catching_pokemon</span>Atrapar</button>
      <button class="ebtn ebtn-fight" onclick="startWild('${s.uid}')"><span class="ms" style="font-size:18px">swords</span>Luchar</button>
      <button class="ebtn ebtn-flee" onclick="fleeEnc('${s.uid}')"><span class="ms" style="font-size:18px">directions_run</span>Huir</button>
    </div></div>`);
}
function quickCatch(uid){closeOv('enc-ov');selectBall(uid,0);}
function selectBall(uid,dmgPct){
  const balls=Object.values(ITEMS).filter(i=>i.cat==='pokeball'&&cntBag(i.id)>0);
  if(!balls.length){notif('Sin Poké Balls. Compra en la Tienda.','err');return;}
  showOv('enc-ov',`<div class="obox"><div class="otitle">Elige una Poké Ball</div>
    <div class="ball-grid">${balls.map(b=>`<div class="ball-item" onclick="doCatch('${uid}',${b.id},${dmgPct})">
      <img src="${b.sp}" onerror="this.style.display='none'"><span>${b.n}</span><span class="ball-cnt">x${cntBag(b.id)}</span>
    </div>`).join('')}</div>
    <button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')" style="margin-top:4px"><span class="ms">close</span>Cancelar</button></div>`);
}
function doCatch(uid,ballId,dmgPct=0){
  closeOv('enc-ov');const s=GS.spawns.find(x=>x.uid===uid);if(!s){notif('El Pokémon escapó.','err');return;}
  const ball=ITEMS[+ballId];if(!ball||!useBag(ballId)){notif('Sin esa Poké Ball.','err');return;}
  const b=PD[s.pid];if(ball.bonus===100){catchPkm(s);save();return;}
  let rate=b.rc+(dmgPct/100)*b.rc+(b.rc*ball.bonus/100);rate=Math.min(rate,95);
  if(Math.random()*100<rate)catchPkm(s);else notif(`${b.n} escapó de la ${ball.n}!`,'err');
  save();
}
function catchPkm(s){
  const pkm=mkPkm(s.pid,s.variant,s.lv);if(!pkm)return;pkm.gender=s.gender;
  GS.spawns=GS.spawns.filter(x=>x.uid!==s.uid);
  if(GS.player.team.length<3)GS.player.team.push(pkm);
  else{GS.player.pc.push(pkm);notif(`${s.variant!=='normal'?s.variant.toUpperCase()+' ':''}${pkm.name} Lv.${s.lv} al PC.`,'info');}
  notif(`¡${s.variant!=='normal'?s.variant.toUpperCase()+' ':''}${pkm.name} Lv.${s.lv} capturado!`,'ok',4000);
  save();updateHUD();renderRadarCanvas();renderSpawnList();
}
function startWild(uid){
  closeOv('enc-ov');const s=GS.spawns.find(x=>x.uid===uid);if(!s)return;
  if(!GS.player.team.some(p=>p.currentHp>0)){notif('Todos tus Pokémon están debilitados.','err');return;}
  const enemy=mkPkm(s.pid,s.variant,s.lv);if(!enemy)return;enemy.gender=s.gender;
  initBattle({playerTeam:[...GS.player.team],enemy,spawnUid:s.uid,isWild:true,trainer:null});
}
function fleeEnc(uid){closeOv('enc-ov');GS.spawns=GS.spawns.filter(x=>x.uid!==uid);notif('Escapaste.','info');renderRadarCanvas();renderSpawnList();}

// ============================================================
// BATTLE
// ============================================================
function initBattle(cfg){
  const fi=cfg.playerTeam.findIndex(p=>p.currentHp>0);if(fi<0){notif('Sin Pokémon vivos.','err');return;}
  GS.battle={team:cfg.playerTeam.map(p=>({...p,sleepTurns:p.sleepTurns||0,transformed:p.transformed||false,originalPid:p.originalPid||null,_origMoves:p._origMoves||null,_origTypes:p._origTypes||null,_origAtk:p._origAtk||0,_origDef:p._origDef||0,_origSpd:p._origSpd||0})),
    enemy:{...cfg.enemy,sleepTurns:0,transformed:false,originalPid:null},
    idx:fi,isWild:cfg.isWild,spawnUid:cfg.spawnUid||null,trainer:cfg.trainer||null,
    trainerQueue:(cfg.trainerQueue||[]).map(p=>({...p})),log:[],turn:'player',dmgDealt:0,over:false,goldGiven:false};
  goTo('battle');
}
function activeP(){return GS.battle?.team[GS.battle.idx];}
function calcDmg(atk,def,mvName){
  const mv=MOVE[mvName];if(!mv||mv.power===0)return 0;
  const stab=(atk.types||atk.t||['normal']).includes(mv.type)?1.5:1;
  const eff=typeEff(mv.type,def.types||def.t||['normal']);if(eff===0)return 0;
  const burnMod=(atk.status==='burn'&&mv.cat==='physical')?0.5:1;
  let d=Math.floor(((2*atk.lv/5+2)*mv.power*(atk.atk||50)/(def.def||50))/50+2);
  d=Math.floor(d*stab*eff*burnMod*(0.85+Math.random()*0.15));return Math.max(1,d);
}
function tryApplyStatus(mv,target){
  if(!mv.fx||mv.fx==='buff_spd')return;if(target.status)return;if(target.currentHp<=0)return;
  const chance=mv.fxChance||100;if(Math.random()*100>=chance)return;
  if(mv.fx==='poison'&&(target.types||['normal']).some(t=>t==='poison'||t==='steel'))return;
  if(mv.fx==='burn'&&(target.types||['normal']).includes('fire'))return;
  if(mv.fx==='paralyze'&&(target.types||['normal']).some(t=>t==='electric'||t==='ground'))return;
  if(mv.fx==='freeze'&&(target.types||['normal']).includes('ice'))return;
  target.status=mv.fx;if(mv.fx==='sleep')target.sleepTurns=1+Math.floor(Math.random()*5);
  const names={poison:'¡Envenenado!',burn:'¡Quemado!',paralyze:'¡Paralizado!',freeze:'¡Congelado!',sleep:'¡Dormido!'};
  bLog(`${target.name}: ${names[mv.fx]||mv.fx}`);
}
function processStatusTurn(pkm){
  if(!pkm.status)return true;
  if(pkm.status==='sleep'){pkm.sleepTurns--;if(pkm.sleepTurns<=0){pkm.status=null;pkm.sleepTurns=0;bLog(`${pkm.name} se despertó.`);return true;}bLog(`${pkm.name} está dormido.`);return false;}
  if(pkm.status==='freeze'){if(Math.random()<0.20){pkm.status=null;bLog(`${pkm.name} se descongeló.`);return true;}bLog(`${pkm.name} está congelado.`);return false;}
  if(pkm.status==='paralyze'){if(Math.random()<0.25){bLog(`${pkm.name} está paralizado.`);return false;}return true;}
  return true;
}
function applyStatusDamage(pkm){
  if(pkm.status==='poison'){const dmg=Math.max(1,Math.floor(pkm.maxHp/8));pkm.currentHp=Math.max(0,pkm.currentHp-dmg);bLog(`${pkm.name} sufrió ${dmg} por veneno.`);}
  if(pkm.status==='burn'){const dmg=Math.max(1,Math.floor(pkm.maxHp/16));pkm.currentHp=Math.max(0,pkm.currentHp-dmg);bLog(`${pkm.name} sufrió ${dmg} por quemadura.`);}
}
function bLog(msg){
  if(!GS.battle)return;GS.battle.log.unshift(msg);if(GS.battle.log.length>8)GS.battle.log.pop();
  const el=document.getElementById('b-log');if(el)el.innerHTML=GS.battle.log.map((l,i)=>`<div class="log-line" style="opacity:${Math.max(0.15,1-i*0.12)}">${l}</div>`).join('');
}
function playerAttack(mv){
  const bs=GS.battle;if(!bs||bs.turn!=='player'||bs.over)return;
  const p=activeP();const e=bs.enemy;if(!p||p.currentHp<=0)return;
  if(!processStatusTurn(p)){applyStatusDamage(p);renderBattle();if(p.currentHp<=0){setTimeout(()=>handlePlayerFaint(),600);return;}bs.turn='enemy';renderBattle();setTimeout(()=>enemyTurn(),1100);return;}
  if(mv==='Transformación'){applyTransformation(p,e);applyStatusDamage(p);renderBattle();if(p.currentHp<=0){bLog(`¡${p.name} fue derrotado!`);setTimeout(()=>handlePlayerFaint(),600);}else{bs.turn='enemy';renderBattle();setTimeout(()=>enemyTurn(),1100);}return;}
  const mvData=MOVE[mv];
  if(mvData&&mvData.acc&&Math.random()*100>mvData.acc){bLog(`¡${p.name} falló!`);applyStatusDamage(p);renderBattle();if(p.currentHp<=0){setTimeout(()=>handlePlayerFaint(),600);return;}bs.turn='enemy';renderBattle();setTimeout(()=>enemyTurn(),1100);return;}
  const dmg=calcDmg(p,e,mv);
  if(dmg>0){const eff=typeEff(mvData?.type||'normal',e.types||['normal']);e.currentHp=Math.max(0,e.currentHp-dmg);bs.dmgDealt+=dmg;const effTxt=eff>=2?' ¡Muy efectivo!':eff>0&&eff<1?' Poco efectivo…':eff===0?' ¡No afecta!':'';bLog(`${p.name} usó ${mv}. (${dmg})${effTxt}`);}
  else if(mvData&&mvData.power===0){bLog(`${p.name} usó ${mv}.`);}
  if(mvData)tryApplyStatus(mvData,e);applyStatusDamage(p);renderBattle();
  if(p.currentHp<=0){bLog(`¡${p.name} fue derrotado!`);setTimeout(()=>handlePlayerFaint(),600);}
  else if(e.currentHp<=0){bLog(`¡${e.name} fue derrotado!`);setTimeout(()=>handleEnemyFaint(),600);}
  else{bs.turn='enemy';renderBattle();setTimeout(()=>enemyTurn(),1100);}
}
function enemyTurn(){
  const bs=GS.battle;if(!bs||bs.over)return;const e=bs.enemy;const p=activeP();if(!p||!e)return;
  if(!processStatusTurn(e)){applyStatusDamage(e);renderBattle();if(e.currentHp<=0){bLog(`¡${e.name} fue derrotado!`);setTimeout(()=>handleEnemyFaint(),600);return;}bs.turn='player';renderBattle();return;}
  const mvs=e.mv||e.moves||['Placaje'];const mv=mvs[Math.floor(Math.random()*mvs.length)];const mvData=MOVE[mv];
  if(mvData&&mvData.acc&&Math.random()*100>mvData.acc){bLog(`¡${e.name} falló!`);applyStatusDamage(e);renderBattle();if(e.currentHp<=0){setTimeout(()=>handleEnemyFaint(),600);return;}bs.turn='player';renderBattle();return;}
  const dmg=calcDmg(e,p,mv);
  if(dmg>0){const eff=typeEff(mvData?.type||'normal',p.types||['normal']);p.currentHp=Math.max(0,p.currentHp-dmg);const effTxt=eff>=2?' ¡Muy efectivo!':eff>0&&eff<1?' Poco efectivo…':eff===0?' ¡No afecta!':'';bLog(`${e.name} usó ${mv}. (${dmg})${effTxt}`);}
  else if(mvData&&mvData.power===0){bLog(`${e.name} usó ${mv}.`);}
  if(mvData)tryApplyStatus(mvData,p);applyStatusDamage(e);renderBattle();
  if(p.currentHp<=0){bLog(`¡${p.name} fue derrotado!`);setTimeout(()=>handlePlayerFaint(),600);}
  else if(e.currentHp<=0){bLog(`¡${e.name} fue derrotado!`);setTimeout(()=>handleEnemyFaint(),600);}
  else{bs.turn='player';renderBattle();}
}
function _endBattleCleanup(bs){bs.team.forEach(t=>{revertTransformation(t);clearBattleStatus(t);});}
function handleEnemyFaint(){
  const bs=GS.battle;if(!bs||bs.over)return;
  if(!bs.isWild&&bs.trainerQueue&&bs.trainerQueue.length>0){
    const nxt=bs.trainerQueue.shift();
    bs.enemy={...nxt,pid:nxt.pid||nxt.id,currentHp:nxt.currentHp||nxt.maxHp||nxt.hp||100,maxHp:nxt.maxHp||nxt.hp||100,status:null,sleepTurns:0,types:nxt.types||PD[nxt.pid||nxt.id]?.t||nxt.t||['normal'],mv:nxt.mv||nxt.moves||['Placaje'],moves:nxt.mv||nxt.moves||['Placaje'],variant:'normal',name:nxt.name||nxt.n,transformed:false,originalPid:null};
    bLog(`${bs.trainer?.n||'Entrenador'} sacó a ${bs.enemy.name}!`);bs.turn='player';renderBattle();return;
  }
  const expG=Math.floor((PD[bs.enemy.pid]?.expY||50)*(bs.enemy.lv||5));
  const p=activeP();if(p)giveExp(p,expG);
  if(GS.player.expShareOn)bs.team.forEach((t,i)=>{if(i!==bs.idx&&t.currentHp>0)giveExp(t,Math.floor(expG*0.5));});
  if(!bs.goldGiven){bs.goldGiven=true;
    if(bs.isWild){const g=Math.floor((PD[bs.enemy.pid]?.goldY||20)*(bs.enemy.lv/5));addGold(g);notif(`+${g} Oro`,'ok');}
    else if(bs.trainer){addGold(bs.trainer.rew);notif(`¡Victoria! +${bs.trainer.rew} Oro`,'ok',4000);bs.trainer.def=true;GS.player.defeatedTrainers.add(bs.trainer.id);checkLegUnlocks();}
  }
  bs.over=true;_endBattleCleanup(bs);syncTeam();save();renderBattle();
  setTimeout(()=>{if(bs.isWild)GS.spawns=GS.spawns.filter(x=>x.uid!==bs.spawnUid);GS.battle=null;goTo('radar');},1500);
}
function showForcedSwitch(){
  const bs=GS.battle;if(!bs)return;
  showOv('enc-ov',`<div class="obox"><div style="font-size:28px">💔</div>
    <div class="otitle" style="color:var(--acc)">¡${bs.team[bs.idx].name} fue derrotado!</div>
    <p style="font-size:12px;color:var(--dim);text-align:center">Elige tu siguiente Pokémon:</p>
    ${bs.team.map((p,i)=>{if(p.currentHp<=0)return'';return`<div class="switch-row" onclick="forcedSwitch(${i})">
      <img src="${getSprite(p)}" style="width:38px;image-rendering:pixelated" onerror="this.style.display='none'">
      <div><b>${dname(p)}</b> Lv.${p.lv} ${statusTag(p.status)}<br><small style="color:var(--dim)">${p.currentHp}/${p.maxHp} HP</small></div>
      <span class="ms" style="color:var(--green);font-size:20px;margin-left:auto">chevron_right</span>
    </div>`;}).join('')}
  </div>`);
}
function forcedSwitch(idx){const ov=document.getElementById('enc-ov');if(ov)ov.onclick=function(e){if(e.target===this)closeOv('enc-ov');};closeOv('enc-ov');const bs=GS.battle;if(!bs)return;bs.idx=idx;bs.turn='player';bLog(`¡Vamos, ${bs.team[idx].name}!`);renderBattle();}
function handlePlayerFaint(){
  const bs=GS.battle;if(!bs||bs.over)return;
  const next=bs.team.findIndex((p,i)=>i!==bs.idx&&p.currentHp>0);
  if(next<0){bs.over=true;bLog('¡Todos tus Pokémon fueron derrotados!');bs.team.forEach((p,i)=>{revertTransformation(p);clearBattleStatus(p);if(i===bs.idx)p.currentHp=Math.max(1,Math.floor(p.maxHp*0.20));else p.currentHp=0;});syncTeam();save();renderBattle();setTimeout(()=>{GS.battle=null;goTo('radar');},2000);}
  else{showForcedSwitch();}
}
function battleFlee(){
  const bs=GS.battle;if(!bs)return;if(!bs.isWild){notif('No puedes huir de un combate de entrenador.','err');return;}
  if(Math.random()*100<Math.max(30,75-(bs.enemy.lv-(activeP()?.lv||1))*5)){bLog('¡Escapaste!');bs.over=true;_endBattleCleanup(bs);syncTeam();save();renderBattle();setTimeout(()=>{GS.battle=null;goTo('radar');},800);}
  else{bLog('No pudiste escapar.');bs.turn='enemy';renderBattle();setTimeout(()=>enemyTurn(),1000);}
}
function battleSwitch(idx){const bs=GS.battle;if(!bs)return;if(idx===bs.idx){closeOv('enc-ov');return;}if(bs.team[idx].currentHp<=0){notif('Ese Pokémon está debilitado.','err');return;}bLog(`Cambiaste a ${bs.team[idx].name}.`);bs.idx=idx;bs.turn='enemy';closeOv('enc-ov');renderBattle();setTimeout(()=>enemyTurn(),1000);}
function battleCatch(){
  const bs=GS.battle;if(!bs||!bs.isWild){notif('No puedes atrapar Pokémon de entrenadores.','err');return;}
  const balls=Object.values(ITEMS).filter(i=>i.cat==='pokeball'&&cntBag(i.id)>0);if(!balls.length){notif('Sin Poké Balls.','err');return;}
  showOv('enc-ov',`<div class="obox"><div class="otitle">Elige una Poké Ball</div>
    <div class="ball-grid">${balls.map(b=>`<div class="ball-item" onclick="battleDoCatch(${b.id})"><img src="${b.sp}" onerror="this.style.display='none'"><span>${b.n}</span><span class="ball-cnt">x${cntBag(b.id)}</span></div>`).join('')}</div>
    <button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')"><span class="ms">close</span></button></div>`);
}
function battleDoCatch(ballId){
  closeOv('enc-ov');const bs=GS.battle;if(!bs||!bs.isWild)return;
  const ball=ITEMS[+ballId];if(!ball||!useBag(ballId)){notif('Sin esa Poké Ball.','err');return;}
  const s={uid:bs.spawnUid,pid:bs.enemy.pid,variant:bs.enemy.variant,lv:bs.enemy.lv,gender:bs.enemy.gender};
  if(ball.bonus===100){bs.over=true;_endBattleCleanup(bs);catchPkm(s);syncTeam();save();setTimeout(()=>{GS.battle=null;goTo('radar');},800);return;}
  const b=PD[bs.enemy.pid];const dmgPct=((bs.enemy.maxHp-(bs.enemy.currentHp||0))/bs.enemy.maxHp)*100;
  let rate=b.rc+(dmgPct/100)*b.rc+(b.rc*ball.bonus/100);rate=Math.min(rate,95);
  if(Math.random()*100<rate){bs.over=true;_endBattleCleanup(bs);catchPkm(s);syncTeam();save();setTimeout(()=>{GS.battle=null;goTo('radar');},800);}
  else{bLog(`${bs.enemy.name} escapó de la ${ball.n}!`);bs.turn='enemy';renderBattle();setTimeout(()=>enemyTurn(),1000);}
}
function battleShowSwitch(){
  const bs=GS.battle;if(!bs)return;
  showOv('enc-ov',`<div class="obox"><div class="otitle">¿Con quién cambias?</div>
    ${bs.team.map((p,i)=>`<div class="switch-row ${p.currentHp<=0?'sw-faint':''} ${i===bs.idx?'sw-active':''}" onclick="${p.currentHp>0&&i!==bs.idx?`battleSwitch(${i})`:''}" style="cursor:${p.currentHp>0&&i!==bs.idx?'pointer':'not-allowed'}">
      <img src="${getSprite(p)}" style="width:38px;image-rendering:pixelated" onerror="this.style.display='none'">
      <div><b>${dname(p)}</b> Lv.${p.lv} ${statusTag(p.status)}<br><small style="color:var(--dim)">${p.currentHp}/${p.maxHp} HP${p.currentHp<=0?' — DEBILITADO':''}</small></div>
    </div>`).join('')}
    <button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')" style="margin-top:4px"><span class="ms">close</span>Cancelar</button></div>`);
}
// BATTLE BAG — con revivir para debilitados dentro de batalla
function battleBag(){
  const healIs=[21,13,12,11,10,14,17,18,19,20,15,16].filter(id=>cntBag(id)>0);
  showOv('enc-ov',`<div class="obox"><div class="otitle"><span class="ms" style="font-size:16px">backpack</span> Mochila</div>
    ${healIs.length?healIs.map(id=>{const it=ITEMS[id];return`<div class="heal-pick-item" onclick="battleSelectItem(${id})">
      <img src="${it.sp}" onerror="this.style.display='none'"><div><b>${it.n}</b> x${cntBag(id)}<br><small style="color:var(--dim)">${it.desc}</small></div>
    </div>`;}).join(''):'<p style="color:var(--dim);font-size:12px">Sin ítems.</p>'}
    <button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')" style="margin-top:4px"><span class="ms">close</span>Cerrar</button></div>`);
}
function battleSelectItem(id){
  const bs=GS.battle;if(!bs)return;const it=ITEMS[+id];if(!it)return;
  if(it.cat==='revive'){
    const fainted=bs.team.filter(p=>p.currentHp<=0);
    if(!fainted.length){notif('No hay Pokémon debilitados.','warn');return;}
    showOv('enc-ov',`<div class="obox"><div class="otitle">¿Revivir a quién? (${it.n})</div>
      ${fainted.map(p=>`<div class="heal-pick-item" onclick="battleDoRevive('${p.uid}',${id})">
        <img src="${getSprite(p)}" style="width:36px;image-rendering:pixelated;filter:grayscale(1) opacity(.5)" onerror="this.style.display='none'">
        <div><b>${dname(p)}</b> Lv.${p.lv}<br><small style="color:var(--acc)">0/${p.maxHp} HP — Debilitado</small></div>
      </div>`).join('')}
      <button class="ebtn ebtn-flee" onclick="battleBag()"><span class="ms">arrow_back</span>Volver</button>
    </div>`);
  }else{closeOv('enc-ov');battleUseHeal(id);}
}
function battleDoRevive(uid,itemId){
  closeOv('enc-ov');const bs=GS.battle;if(!bs)return;
  const it=ITEMS[+itemId];if(!it||!useBag(itemId)){notif('Sin ese ítem.','err');return;}
  const pkm=bs.team.find(p=>p.uid===uid);if(!pkm||pkm.currentHp>0){notif('Error al revivir.','err');useBag(itemId,-1);return;}
  pkm.currentHp=Math.floor(pkm.maxHp*(it.pct/100));pkm.status=null;pkm.sleepTurns=0;
  notif(`¡${dname(pkm)} revivió con ${pkm.currentHp} HP!`,'ok',3000);syncTeam();save();renderBattle();
  if(!bs.over){bs.turn='enemy';renderBattle();setTimeout(()=>enemyTurn(),1000);}
}
function battleUseHeal(id){
  const bs=GS.battle;if(!bs)return;const it=ITEMS[+id];const p=activeP();if(!it||!p)return;
  if(!useBag(id)){notif('Sin ese ítem.','err');return;}
  if(it.cat==='heal'){
    if(p.currentHp<=0){notif('Usa un Revivir primero.','err');useBag(id,-1);return;}
    if(it.hp)p.currentHp=Math.min(p.maxHp,p.currentHp+(it.hp>=9999?p.maxHp:it.hp));
    if(it.cures&&p.status&&it.cures.includes(p.status)){p.status=null;p.sleepTurns=0;}
  }
  notif(`${it.n} usada.`,'ok');save();renderBattle();
  if(!bs.over){bs.turn='enemy';renderBattle();setTimeout(()=>enemyTurn(),1000);}
}
function syncTeam(){
  if(!GS.battle)return;
  GS.battle.team.forEach((bp,i)=>{if(GS.player.team[i])Object.assign(GS.player.team[i],{currentHp:bp.currentHp,lv:bp.lv,exp:bp.exp,expNext:bp.expNext,maxHp:bp.maxHp,atk:bp.atk,def:bp.def,spd:bp.spd,status:bp.status,sleepTurns:bp.sleepTurns,evoPending:bp.evoPending,thirdMove:bp.thirdMove,pid:bp.pid,types:bp.types,moves:bp.moves,transformed:false,originalPid:null});});
}
function mkTrainerPkm(pk){
  if(PD[pk.id||pk.pid]){const p=mkPkm(pk.id||pk.pid,'normal',pk.lv);if(p){p.moves=pk.mv||p.moves;p.mv=p.moves;return p;}}
  const hp=pk.hp||100;return{uid:Math.random().toString(36).slice(2,9),pid:pk.id||pk.pid||0,name:pk.n||pk.name,types:pk.t||['normal'],variant:'normal',lv:pk.lv,exp:0,expNext:expReq(pk.lv),gender:null,currentHp:hp,maxHp:hp,atk:pk.atk||50,def:pk.def||50,spd:pk.spd||50,moves:pk.mv||['Placaje'],mv:pk.mv||['Placaje'],thirdMove:null,status:null,sleepTurns:0,rar:'normal',evoPending:null,transformed:false,originalPid:null};
}
function startTrainerBattle(region,tid){
  const tr=TRAINERS[region]?.trainers.find(t=>t.id===tid);if(!tr||tr.def){notif('Ya derrotaste a este entrenador.','warn');return;}
  const maxLv=Math.max(...GS.player.team.map(p=>p.lv),1);if(maxLv<tr.minLv){notif(`Necesitas Lv.${tr.minLv}+.`,'err');return;}
  if(!GS.player.team.some(p=>p.currentHp>0)){notif('Todos tus Pokémon están debilitados.','err');return;}
  const[first,...rest]=tr.pk;
  initBattle({playerTeam:[...GS.player.team],enemy:mkTrainerPkm(first),isWild:false,trainer:tr,trainerQueue:rest.map(mkTrainerPkm)});
}
// Legendarios se desbloquean por región completada
function checkLegUnlocks(){
  Object.keys(TRAINERS).forEach(r=>{
    const rd=TRAINERS[r];
    if(rd.trainers.every(t=>t.def)){
      (rd.unlockMaps||[]).forEach(mapId=>{if(MAPS[mapId]&&!MAPS[mapId].legUn){MAPS[mapId].legUn=true;notif(`¡Legendarios de ${MAPS[mapId].name} desbloqueados!`,'ok',5000);}});
    }
  });save();
}
function applyTransformation(attacker,target){
  if(!attacker.transformed){attacker.originalPid=attacker.pid;attacker._origMoves=[...(attacker.moves||[])];attacker._origTypes=[...attacker.types];attacker._origAtk=attacker.atk;attacker._origDef=attacker.def;attacker._origSpd=attacker.spd;attacker.pid=target.pid;attacker.types=[...(target.types||target.t||['normal'])];attacker.moves=[...(target.moves||target.mv||['Placaje'])];attacker.atk=target.atk;attacker.def=target.def;attacker.spd=target.spd;attacker.transformed=true;bLog(`¡${attacker.name} se transformó en ${target.name}!`);}
  else{revertTransformation(attacker);bLog(`${attacker.name} revirtió la Transformación.`);}
}
function revertTransformation(pkm){if(!pkm||!pkm.originalPid)return;pkm.pid=pkm.originalPid;if(pkm._origTypes)pkm.types=pkm._origTypes;if(pkm._origMoves)pkm.moves=pkm._origMoves;if(pkm._origAtk)pkm.atk=pkm._origAtk;if(pkm._origDef)pkm.def=pkm._origDef;if(pkm._origSpd)pkm.spd=pkm._origSpd;pkm.originalPid=null;pkm.transformed=false;pkm._origMoves=null;pkm._origTypes=null;}

// ============================================================
// RENDER BATTLE
// ============================================================
function renderBattle(){
  const sc=document.getElementById('screen-battle');if(!sc||!GS.battle)return;
  const bs=GS.battle;const p=activeP();const e=bs.enemy;if(!p||!e){sc.innerHTML='';return;}
  const pp=hpPct(p);const emaxHp=e.maxHp||e.hp||100;const ep=Math.max(0,Math.round((e.currentHp/emaxHp)*100));
  const eSp=e.variant==='shiny'?PD[e.pid]?.shSp:(PD[e.pid]?.sp||`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.pid||1}.png`);
  const pSp=getBack(p);const expPct=Math.round(p.exp/p.expNext*100);
  const eDark=e.variant==='dark'?'filter:grayscale(1) brightness(0.3)':'';
  const pDark=p.variant==='dark'?'filter:grayscale(1) brightness(0.3)':'';
  const tfTag=p.transformed?`<span style="color:var(--gold);font-size:9px;font-weight:700;background:rgba(247,208,44,.15);border:1px solid rgba(247,208,44,.4);border-radius:4px;padding:1px 4px">★ TRANSFORM</span>`:'';
  sc.innerHTML=`<div class="battle-wrap">
  <div class="battle-enemy-side">
    <div class="binfo">
      <div class="bname">${variantLabel(e.variant||'normal')} ${variantName(e.name,e.variant||'normal')} ${genderTag(e.gender)} <span class="blvl">Lv.${e.lv}</span> ${statusTag(e.status)}</div>
      <div class="bhpbar"><div class="bhpbar-fill" style="width:${ep}%;background:${hpCol(ep)}"></div></div>
      <div class="bhptxt">${e.currentHp}/${emaxHp} HP</div>
      <div class="btypes">${typeBadges(e.types||['normal'])}</div>
    </div>
    <img class="b-sprite enemy-spr" src="${eSp}" style="${eDark}" onerror="this.style.display='none'">
  </div>
  <div class="battle-player-side">
    <img class="b-sprite player-spr" src="${pSp}" style="${pDark}" onerror="this.style.display='none'">
    <div class="binfo">
      <div class="bname">${dname(p)} ${genderTag(p.gender)} <span class="blvl">Lv.${p.lv}</span> ${statusTag(p.status)} ${tfTag}</div>
      <div class="bhpbar"><div class="bhpbar-fill" style="width:${pp}%;background:${hpCol(pp)}"></div></div>
      <div class="bhptxt">${p.currentHp}/${p.maxHp} HP</div>
      <div class="bexpbar"><div class="bexpbar-fill" style="width:${expPct}%"></div></div>
      <div style="font-size:9px;color:var(--dim);margin-top:1px">EXP: ${p.exp}/${p.expNext}</div>
    </div>
  </div>
  <div id="b-log" class="battle-log">${bs.log.map((l,i)=>`<div class="log-line" style="opacity:${Math.max(0.15,1-i*0.12)}">${l}</div>`).join('')}</div>
  <div class="battle-ctrl">
    ${bs.over?`<div class="battle-waiting"><span class="ms">hourglass_top</span> Finalizando...</div>`:
    bs.turn==='player'?`
    <div class="bmoves">
      ${(p.moves||[]).map(mv=>{const md=MOVE[mv];return`<button class="mbtn" style="border-color:${TCOL[md?.type||'normal']||'#777'}" onclick="playerAttack('${mv}')">
        <span class="mtype-dot" style="background:${TCOL[md?.type||'normal']||'#777'}"></span>${mv}<small style="opacity:.7;font-size:9px">${md?.power||'—'}</small></button>`;}).join('')}
      ${p.thirdMove?`<button class="mbtn" style="border-color:${TCOL[MOVE[p.thirdMove]?.type||'normal']||'#777'};outline:1px solid var(--gold)" onclick="playerAttack('${p.thirdMove}')">
        <span class="mtype-dot" style="background:${TCOL[MOVE[p.thirdMove]?.type||'normal']||'#777'}"></span>${p.thirdMove}<small style="opacity:.7;font-size:9px">${MOVE[p.thirdMove]?.power||'—'}</small></button>`:''}
    </div>
    <div class="bactions">
      ${bs.isWild?`<button class="abtn abtn-catch" onclick="battleCatch()"><span class="ms" style="font-size:16px">catching_pokemon</span>Atrapar</button>`:''}
      <button class="abtn abtn-switch" onclick="battleShowSwitch()"><span class="ms" style="font-size:16px">swap_horiz</span>Cambiar</button>
      <button class="abtn abtn-bag" onclick="battleBag()"><span class="ms" style="font-size:16px">backpack</span>Mochila</button>
      ${bs.isWild?`<button class="abtn abtn-flee" onclick="battleFlee()"><span class="ms" style="font-size:16px">directions_run</span>Huir</button>`:''}
    </div>`:`<div class="battle-waiting"><span class="ms">hourglass_top</span> Turno del enemigo...</div>`}
  </div>
  <div class="battle-strip">
    ${bs.team.map((t,i)=>`<div class="strip-slot ${i===bs.idx?'active':''} ${t.currentHp<=0?'fainted':''}" onclick="battleShowSwitch()">
      <img src="${getSprite(t)}" style="${t.variant==='dark'?'filter:grayscale(1) brightness(.4)':''}" onerror="this.style.display='none'">
      ${statusTag(t.status)}
      <div class="strip-hp"><div class="strip-hp-fill" style="width:${hpPct(t)}%;background:${hpCol(hpPct(t))}"></div></div>
    </div>`).join('')}
  </div></div>`;
}

// ============================================================
// NAVIGATION — bloqueo en batalla
// ============================================================
function goTo(screen){
  if(GS.battle&&!GS.battle.over&&screen!=='battle'){
    notif('No disponible en batalla.','err',2500);return;
  }
  GS.screen=screen;
  document.querySelectorAll('.screen').forEach(s=>s.style.display='none');
  const sc=document.getElementById('screen-'+screen);
  if(sc){sc.style.display='flex';sc.style.flexDirection='column';}
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.s===screen));
  renderCurrent();
}
function renderCurrent(){
  switch(GS.screen){
    case 'radar':renderRadarCanvas();renderSpawnList();if(!spawnLoop)startLoop();break;
    case 'battle':renderBattle();break;
    case 'team':renderTeam();break;
    case 'pc':renderPC();break;
    case 'shop':renderShop();break;
    case 'inventory':renderInventory();break;
    case 'trainers':renderTrainers();break;
    case 'codes':renderCodes();break;
    case 'profile':renderProfile();break;
  }
  updateHUD();
}
function updateHUD(){
  const g=document.getElementById('hud-gold');if(g)g.textContent=GS.player.gold.toLocaleString();
  const av=document.getElementById('hud-avatar-img');if(av){av.src=GS.player.avatar||'';av.style.display=GS.player.avatar?'block':'none';}
  const inBattle=!!(GS.battle&&!GS.battle.over);
  document.querySelectorAll('.nav-btn').forEach(b=>{
    const isBattle=b.dataset.s==='battle';
    b.classList.toggle('nav-battle-lock',inBattle&&!isBattle);
    if(inBattle&&!isBattle)b.title='No disponible en batalla';else b.title='';
  });
  const t=document.getElementById('hud-team');if(!t)return;
  t.innerHTML=GS.player.team.map(p=>{
    const faintSt=p.currentHp<=0?'filter:grayscale(1) opacity(.3)':'';
    const dkSt=p.variant==='dark'&&p.currentHp>0?'filter:grayscale(1) brightness(.5)':'';
    const vClass=p.variant==='shiny'?'hud-slot-shiny':p.variant==='dark'?'hud-slot-dark':'';
    return`<div class="hud-slot ${vClass}" title="${dname(p)} Lv.${p.lv}${p.currentHp<=0?' [KO]':''}${p.variant!=='normal'?' ['+p.variant.toUpperCase()+']':''}">
      <img src="${getSprite(p)}" style="${faintSt||dkSt}" onerror="this.style.display='none'">
    </div>`;
  }).join('')+Array(Math.max(0,3-GS.player.team.length)).fill('<div class="hud-slot empty"><span class="ms" style="font-size:12px;color:var(--dim)">catching_pokemon</span></div>').join('');
  if(GS.player.avatar)loadSpr(GS.player.avatar,()=>renderRadarCanvas());
}

// ============================================================
// TEAM & PC — vista simple/detallada + apodo + al PC si fainted
// ============================================================
function renderTeam(){
  const sc=document.getElementById('screen-team');if(!sc)return;
  sc.innerHTML=`<div class="sec-hdr"><h2>Equipo</h2><p>Máximo 3 Pokémon activos</p></div>
  <div class="view-mode-bar">
    <button class="vm-btn ${GS.viewMode==='detailed'?'active':''}" onclick="GS.viewMode='detailed';save();renderTeam()"><span class="ms" style="font-size:14px">dashboard</span>Detallado</button>
    <button class="vm-btn ${GS.viewMode==='simple'?'active':''}" onclick="GS.viewMode='simple';save();renderTeam()"><span class="ms" style="font-size:14px">view_list</span>Simple</button>
  </div>
  <div class="pkm-cards">${GS.player.team.length?GS.player.team.map((p,i)=>pkmCard(p,i,'team')).join(''):'<div class="empty-state">Captura Pokémon en el radar.</div>'}</div>
  <div class="toggle-wrap" onclick="toggleES()">
    <div class="tog ${GS.player.expShareOn?'on':''}"></div>
    <span>Repartir EXP ${GS.player.expShareOn?'<span style="color:var(--green);font-size:10px;margin-left:4px">● Activo</span>':cntBag(200)?'':'(necesitas el ítem)'}</span>
  </div>`;
}
function toggleES(){if(!GS.player.expShareOn&&!cntBag(200)){notif('Necesitas el ítem Repartir Exp.','err');return;}GS.player.expShareOn=!GS.player.expShareOn;save();renderTeam();}

function renderPC(){
  const sc=document.getElementById('screen-pc');if(!sc)return;
  const PAGE_SIZE=20;const search=GS.pcSearch||'';const page=GS.pcPage||0;
  let filtered=GS.player.pc;
  if(search){const q=search.toLowerCase();filtered=filtered.filter(p=>(p.nickname||p.name).toLowerCase().includes(q)||p.types.some(t=>t.toLowerCase().includes(q))||(RARITY_CFG[p.rar]?.label||'').toLowerCase().includes(q)||p.variant.includes(q));}
  const totalPages=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));
  const cp=Math.min(page,totalPages-1);
  const pageData=filtered.slice(cp*PAGE_SIZE,(cp+1)*PAGE_SIZE);
  sc.innerHTML=`
    <div class="sec-hdr"><h2>PC de Bill</h2><p>${GS.player.pc.length} Pokémon guardados</p></div>
    <div class="pc-controls">
      <div class="pc-search-wrap">
        <span class="ms" style="color:var(--dim);font-size:18px">search</span>
        <input class="pc-search-in" type="text" placeholder="Buscar nombre, tipo, rareza..." value="${search.replace(/"/g,'&quot;')}" oninput="GS.pcSearch=this.value;GS.pcPage=0;renderPC()">
        ${search?`<button class="pc-clear-search" onclick="GS.pcSearch='';GS.pcPage=0;renderPC()"><span class="ms" style="font-size:16px">close</span></button>`:''}
      </div>
      <div class="view-mode-bar" style="margin:0">
        <button class="vm-btn ${GS.viewMode==='detailed'?'active':''}" onclick="GS.viewMode='detailed';save();renderPC()"><span class="ms" style="font-size:14px">dashboard</span>Det.</button>
        <button class="vm-btn ${GS.viewMode==='simple'?'active':''}" onclick="GS.viewMode='simple';save();renderPC()"><span class="ms" style="font-size:14px">view_list</span>Simple</button>
      </div>
    </div>
    <div class="pkm-cards">${pageData.length?pageData.map((p,i)=>pkmCard(p,cp*PAGE_SIZE+i,'pc')).join(''):`<div class="empty-state">${search?'Sin resultados.':'El PC está vacío.'}</div>`}</div>
    ${totalPages>1?`<div class="pc-pagination">
      <button class="page-btn" onclick="GS.pcPage=${Math.max(0,cp-1)};renderPC()" ${cp===0?'disabled':''}><span class="ms">chevron_left</span></button>
      <span class="page-info">${cp+1} / ${totalPages}</span>
      <button class="page-btn" onclick="GS.pcPage=${Math.min(totalPages-1,cp+1)};renderPC()" ${cp===totalPages-1?'disabled':''}><span class="ms">chevron_right</span></button>
    </div>`:''}`;
}

// POKEMON CARD — Simple/Detailed, rename, al PC para fainted
function pkmCard(pkm,idx,src){
  const b=PD[pkm.pid];const pp=hpPct(pkm);const rc=RARITY_CFG[pkm.rar||'común']||RARITY_CFG['común'];
  const isFainted=pkm.currentHp<=0;const isFullHp=pkm.currentHp>=pkm.maxHp;
  const imgSt=variantFilter(pkm.variant,isFainted);
  const evoRef=src==='team'?`GS.player.team[${idx}]`:`GS.player.pc[${idx}]`;
  const isSimple=GS.viewMode==='simple';
  const cardClass=pkm.variant==='shiny'?'card-shiny':pkm.variant==='dark'?'card-dark':'';
  return`<div class="pkm-card ${isFainted?'fainted':''} ${cardClass}">
    <div class="pkm-card-hdr">
      <img class="pkm-spr" src="${getSprite(pkm)}" style="${imgSt}" onerror="this.style.display='none'">
      <div class="pkm-title">
        <div class="pkm-name">${variantLabel(pkm.variant)} ${displayName(pkm)} ${genderTag(pkm.gender)}${pkm.nickname?`<span class="pkm-species">${pkm.name}</span>`:''}</div>
        <div class="pkm-lv">Lv.${pkm.lv}${pkm.lv>=100?' <span style="color:var(--gold);font-size:9px">MAX</span>':''}</div>
        <div class="pkm-simple-meta">
          <span class="rtag ${rc.cls}">${rc.label}</span>
          ${typeBadges(pkm.types||b.t)}
          ${statusTag(pkm.status)}
          ${isFainted?`<span class="faint-tag"><span class="ms" style="font-size:12px">heart_broken</span>KO</span>`:''}
        </div>
      </div>
    </div>
    ${pkm.evoPending&&!isFainted?`<div class="evo-ready-tag" onclick="showEvoPrompt(${evoRef})">⭐ Puede Evolucionar</div>`:''}
    <div class="exprow">EXP <div class="exprow-bar"><div class="exprow-fill" style="width:${Math.round(pkm.exp/pkm.expNext*100)}%"></div></div><span style="font-size:9px">${pkm.exp}/${pkm.expNext}</span></div>
    ${isFainted?`
      <div style="text-align:center;color:var(--dim);font-size:11px;padding:4px 0">Este Pokémon está debilitado</div>
      <div class="card-acts">
        ${src==='team'?`<button class="cact cact-pc" onclick="toPC(${idx})"><span class="ms" style="font-size:14px">computer</span>Al PC</button>`:''}
        <button class="cact cact-revive" onclick="revivePkm('${pkm.uid}','${src}',${idx})"><span class="ms" style="font-size:14px">healing</span>Revivir</button>
        <button class="cact cact-sell" onclick="sellPkm('${pkm.uid}','${src}',${idx})"><span class="ms" style="font-size:14px">sell</span>${getSellPrice(pkm)}G</button>
      </div>`:`
    ${!isSimple?`
    <div class="statrow"><span>HP</span><div class="statbar"><div class="statbar-fill" style="width:${pp}%;background:${hpCol(pp)}"></div></div><span>${pkm.currentHp}/${pkm.maxHp}</span></div>
    <div class="statrow"><span>ATK</span><div class="statbar"><div class="statbar-fill" style="width:${Math.min(100,pkm.atk/3)}%;background:#e74c3c"></div></div><span>${pkm.atk}</span></div>
    <div class="statrow"><span>DEF</span><div class="statbar"><div class="statbar-fill" style="width:${Math.min(100,pkm.def/3)}%;background:#3498db"></div></div><span>${pkm.def}</span></div>
    <div class="statrow"><span>VEL</span><div class="statbar"><div class="statbar-fill" style="width:${Math.min(100,pkm.spd/3)}%;background:#f39c12"></div></div><span>${pkm.spd}</span></div>
    <div class="moves-row">${(pkm.moves||[]).map(m=>`<span class="mtag" style="background:${TCOL[MOVE[m]?.type||'normal']||'#777'}">${m}</span>`).join('')}${pkm.thirdMove?`<span class="mtag mtag-extra" style="background:${TCOL[MOVE[pkm.thirdMove]?.type||'normal']||'#777'}">${pkm.thirdMove}</span>`:''}</div>`
    :`<div class="statrow-mini"><span style="font-size:10px;color:var(--dim)">HP ${pkm.currentHp}/${pkm.maxHp}</span><div class="statbar" style="flex:1"><div class="statbar-fill" style="width:${pp}%;background:${hpCol(pp)}"></div></div></div>`}
    <div class="card-acts">
      ${pkm.evoPending?`<button class="cact cact-evo" onclick="showEvoPrompt(${evoRef})"><span class="ms" style="font-size:14px">star</span>Evo</button>`:''}
      <button class="cact cact-rename" onclick="openRename('${pkm.uid}')"><span class="ms" style="font-size:14px">edit</span>${pkm.nickname?'Apodo':'Nombrar'}</button>
      ${src==='team'?`<button class="cact cact-pc" onclick="toPC(${idx})"><span class="ms" style="font-size:14px">computer</span>PC</button>`:`<button class="cact cact-team" onclick="toTeam(${idx})"><span class="ms" style="font-size:14px">swords</span>Equipo</button>`}
      ${!isFullHp?`<button class="cact cact-heal" onclick="healPkm('${pkm.uid}','${src}',${idx})"><span class="ms" style="font-size:14px">medication</span>Curar</button>`:''}
      ${pkm.status?`<button class="cact" style="background:rgba(255,100,100,.1);color:#ff8888;border:1px solid rgba(255,100,100,.3)" onclick="cureStatus('${pkm.uid}','${src}',${idx})"><span class="ms" style="font-size:14px">medication</span>${STATUS_TAG[pkm.status]||''}</button>`:''}
      ${pkm.lv<100&&!pkm.thirdMove&&Object.values(ITEMS).some(i=>i.cat==='mt'&&cntBag(i.id))?`<button class="cact" style="background:rgba(155,89,182,.15);color:#bb8fce;border:1px solid rgba(155,89,182,.3)" onclick="openMTForPkm('${pkm.uid}')"><span class="ms" style="font-size:14px">library_add</span>MT</button>`:''}
      <button class="cact cact-sell" onclick="sellPkm('${pkm.uid}','${src}',${idx})"><span class="ms" style="font-size:14px">sell</span>${getSellPrice(pkm)}G</button>
    </div>`}
  </div>`;
}

function toPC(i){const p=GS.player.team.splice(i,1)[0];GS.player.pc.push(p);save();notif(`${dname(p)} al PC.`,'info');renderTeam();updateHUD();}
function toTeam(i){if(GS.player.team.length>=3){notif('Equipo lleno. Máximo 3.','err');return;}const p=GS.player.pc.splice(i,1)[0];GS.player.team.push(p);save();notif(`${dname(p)} al equipo.`,'ok');renderPC();updateHUD();}
function cureStatus(uid,src,idx){
  const list=src==='team'?GS.player.team:GS.player.pc;const pkm=list[idx];if(!pkm||!pkm.status)return;
  const cureItems={poison:[14,21],sleep:[17,21],freeze:[18,21],paralyze:[19,21],burn:[20,21]};
  const available=(cureItems[pkm.status]||[]).filter(id=>cntBag(id)>0);
  if(!available.length){notif(`Sin ítem para curar.`,'err');return;}
  showOv('enc-ov',`<div class="obox"><div class="otitle">Curar ${STATUS_TAG[pkm.status]} de ${dname(pkm)}</div>
    ${available.map(id=>{const it=ITEMS[id];return`<div class="heal-pick-item" onclick="doCureStatus('${uid}','${src}',${idx},${id})"><img src="${it.sp}" onerror="this.style.display='none'"><div><b>${it.n}</b> x${cntBag(id)}<br><small style="color:var(--dim)">${it.desc}</small></div></div>`;}).join('')}
    <button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')"><span class="ms">close</span>Cancelar</button></div>`);
}
function doCureStatus(uid,src,idx,itemId){closeOv('enc-ov');const list=src==='team'?GS.player.team:GS.player.pc;const pkm=list[idx];if(!pkm)return;const it=ITEMS[+itemId];if(!it||!useBag(itemId)){notif('Sin ese ítem.','err');return;}if(it.cures&&pkm.status&&it.cures.includes(pkm.status)){pkm.status=null;pkm.sleepTurns=0;}if(it.hp)pkm.currentHp=Math.min(pkm.maxHp,pkm.currentHp+(it.hp>=9999?pkm.maxHp:it.hp));notif(`${it.n} curó a ${dname(pkm)}.`,'ok');save();renderCurrent();}
function healPkm(uid,src,idx){
  const list=src==='team'?GS.player.team:GS.player.pc;const pkm=list[idx];
  if(!pkm||pkm.currentHp<=0){notif('Usa Revivir para Pokémon debilitados.','err');return;}
  if(pkm.currentHp>=pkm.maxHp){notif(`${dname(pkm)} ya tiene HP completo.`,'warn');return;}
  const healIs=[21,13,12,11,10].filter(id=>cntBag(id)>0);if(!healIs.length){notif('Sin ítems de curación.','err');return;}
  showOv('enc-ov',`<div class="obox"><div class="otitle">Curar ${dname(pkm)} (${pkm.currentHp}/${pkm.maxHp})</div>
    ${healIs.map(id=>{const it=ITEMS[id];return`<div class="heal-pick-item" onclick="doHealPkm('${uid}','${src}',${idx},${id})"><img src="${it.sp}" onerror="this.style.display='none'"><div><b>${it.n}</b> x${cntBag(id)}<br><small style="color:var(--dim)">${it.desc}</small></div></div>`;}).join('')}
    <button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')"><span class="ms">close</span>Cancelar</button></div>`);
}
function doHealPkm(uid,src,idx,itemId){closeOv('enc-ov');const list=src==='team'?GS.player.team:GS.player.pc;const pkm=list[idx];if(!pkm||pkm.currentHp<=0)return;const it=ITEMS[+itemId];if(!it||!useBag(itemId))return;pkm.currentHp=Math.min(pkm.maxHp,pkm.currentHp+(it.hp>=9999?pkm.maxHp:it.hp||0));if(it.cures&&pkm.status&&it.cures.includes(pkm.status)){pkm.status=null;pkm.sleepTurns=0;}notif(`${it.n} en ${dname(pkm)}.`,'ok');save();renderCurrent();}
function revivePkm(uid,src,idx){
  const list=src==='team'?GS.player.team:GS.player.pc;const pkm=list[idx];
  if(!pkm||pkm.currentHp>0){notif('Solo para Pokémon debilitados.','err');return;}
  const revIs=[16,15].filter(id=>cntBag(id)>0);if(!revIs.length){notif('Sin Revivir. Cómpralo en Tienda.','err');return;}
  showOv('enc-ov',`<div class="obox"><div class="otitle">Revivir a ${dname(pkm)}</div>
    ${revIs.map(id=>{const it=ITEMS[id];return`<div class="heal-pick-item" onclick="doRevive('${uid}','${src}',${idx},${id})"><img src="${it.sp}" onerror="this.style.display='none'"><div><b>${it.n}</b> x${cntBag(id)}<br><small style="color:var(--dim)">${it.desc}</small></div></div>`;}).join('')}
    <button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')"><span class="ms">close</span>Cancelar</button></div>`);
}
function doRevive(uid,src,idx,itemId){closeOv('enc-ov');const list=src==='team'?GS.player.team:GS.player.pc;const pkm=list[idx];if(!pkm||pkm.currentHp>0)return;const it=ITEMS[+itemId];if(!it||!useBag(itemId))return;pkm.currentHp=Math.floor(pkm.maxHp*(it.pct/100));pkm.status=null;pkm.sleepTurns=0;notif(`¡${dname(pkm)} revivió!`,'ok');save();renderCurrent();}
function sellPkm(uid,src,idx){const list=src==='team'?GS.player.team:GS.player.pc;const pkm=list[idx];if(!pkm)return;const price=getSellPrice(pkm);if(!confirm(`¿Vender ${dname(pkm)} por ${price}G?`))return;list.splice(idx,1);addGold(price);notif(`Vendiste ${dname(pkm)} por ${price}G.`,'ok');save();renderCurrent();updateHUD();}
function openMTForPkm(uid){const mts=Object.values(ITEMS).filter(i=>i.cat==='mt'&&cntBag(i.id)>0);if(!mts.length)return;const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);if(!pkm)return;showOv('enc-ov',`<div class="obox"><div class="otitle">MT para ${dname(pkm)}</div>${mts.map(it=>`<div class="heal-pick-item" onclick="doTeachMT(${it.id},'${uid}')"><img src="${it.sp}" onerror="this.style.display='none'"><div><b>${it.n}</b> — ${it.mv}<br><small style="color:var(--dim)">${it.desc}</small></div></div>`).join('')}<button class="ebtn ebtn-flee" onclick="closeOv('enc-ov')"><span class="ms">close</span>Cancelar</button></div>`);}
function doTeachMT(id,uid){closeOv('enc-ov');const it=ITEMS[+id];const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);if(!pkm||!it||!useBag(id))return;pkm.thirdMove=it.mv;notif(`${dname(pkm)} aprendió ${it.mv}!`,'ok');save();renderCurrent();}

// ============================================================
// SHOP
// ============================================================
function renderShop(){
  const sc=document.getElementById('screen-shop');if(!sc)return;
  const cats=[['pokeball','Poké Balls','catching_pokemon'],['candy','Caramelos Raros','star'],['heal','Curación y Estado','medication'],['revive','Revivir','healing'],['evo','Evolución (uso manual)','auto_awesome'],['held','Held Items','backpack'],['mt','MTs','library_add']];
  sc.innerHTML=`<div class="sec-hdr"><h2>Tienda</h2><p>${GS.player.gold.toLocaleString()} Oro disponible</p></div>
  ${cats.map(([cat,label,icon])=>{
    const its=Object.values(ITEMS).filter(i=>i.cat===cat);if(!its.length)return'';
    return`<div class="shop-cat"><h3><span class="ms" style="font-size:16px;color:#f39c12">${icon}</span> ${label}</h3><div class="shop-list">
      ${its.map(it=>{
        const owned=cntBag(it.id);const maxReached=it.maxOwn&&owned>=it.maxOwn;const isActive=it.id===200&&GS.player.expShareOn;
        return`<div class="shop-item"><img src="${it.sp||''}" onerror="this.style.display='none'">
          <div class="shop-item-info"><span class="shop-item-name">${it.n}</span><span class="shop-item-desc">${it.desc}</span>
            <span class="shop-item-own">Mochila: x${owned}${isActive?' <span style="color:var(--green);font-size:10px">● Activo</span>':''}</span></div>
          <div class="shop-actions"><span class="shop-price">${it.price>=99999?'∞':it.price.toLocaleString()}G</span>
            ${it.price<99999&&!maxReached&&!isActive?`<button class="btn-buy" onclick="buyItem(${it.id})">Comprar</button>`:isActive?`<button class="btn-buy" disabled style="opacity:.4">Activo</button>`:maxReached?`<button class="btn-buy" disabled style="opacity:.4">Máx.</button>`:''}
            ${it.sell>0?`<button class="btn-sell-item" onclick="sellItem(${it.id})">Vender ${it.sell}G</button>`:''}</div></div>`;}).join('')}
    </div></div>`;}).join('')}`;
}
function buyItem(id){
  const it=ITEMS[+id];if(!it)return;
  if(it.maxOwn&&cntBag(id)>=it.maxOwn){notif(`Ya tienes el máximo de ${it.n}.`,'warn');return;}
  if(GS.player.gold<it.price){notif(`Necesitas ${it.price.toLocaleString()}G.`,'err');return;}
  GS.player.gold-=it.price;addBag(id,1);save();updateHUD();notif(`Compraste ${it.n}.`,'ok');renderShop();
}
function sellItem(id){const it=ITEMS[+id];if(!it||!it.sell||!cntBag(id)){notif('No tienes ese ítem.','err');return;}useBag(id);addGold(it.sell);notif(`Vendiste ${it.n} por ${it.sell}G.`,'ok');save();renderShop();}

// ============================================================
// INVENTORY — con búsqueda para items de curación/uso
// ============================================================
function renderInventory(){
  const sc=document.getElementById('screen-inventory');if(!sc)return;
  const bag=Object.keys(GS.player.bag).map(id=>({...ITEMS[+id],qty:GS.player.bag[+id]})).filter(x=>x&&x.n);
  sc.innerHTML=`<div class="sec-hdr"><h2>Inventario</h2><p>${bag.length} tipos de ítems</p></div>
  ${bag.length?`<div class="inv-grid">${bag.map(it=>{
    const isExpShare=it.id===200;const isActive=isExpShare&&GS.player.expShareOn;
    return`<div class="inv-item ${isActive?'inv-item-active':''}">
      <img src="${it.sp||''}" onerror="this.style.display='none'">
      <span class="inv-item-name">${it.n}</span><span class="inv-item-qty">x${it.qty}</span>
      <div style="font-size:9px;color:var(--dim);text-align:center;padding:0 4px">${it.desc||''}</div>
      <div class="inv-item-acts">
        ${it.cat==='candy'?`<button class="inv-use-btn" onclick="useRareCandy(${it.id})">Usar</button>`:''}
        ${it.cat==='evo'?`<button class="inv-use-btn" onclick="useEvoItem(${it.id})">Usar</button>`:''}
        ${it.cat==='mt'?`<button class="inv-use-btn" onclick="openMTItem(${it.id})">Enseñar</button>`:''}
        ${isExpShare?`<button class="inv-use-btn ${isActive?'inv-active-btn':''}" ${isActive?'disabled':''} onclick="${isActive?'':' activateHeld('+it.id+')'}">${isActive?'✓ Activo':'Activar'}</button>`:''}
        ${it.cat==='heal'?`<button class="inv-use-btn" onclick="useHealFromInv(${it.id})">Usar</button>`:''}
        ${it.cat==='revive'?`<button class="inv-use-btn" onclick="useReviveFromInv(${it.id})">Revivir</button>`:''}
        ${it.sell>0?`<button class="inv-sell-btn" onclick="sellItem(${it.id});renderInventory()">Vender</button>`:''}
      </div></div>`;}).join('')}</div>`:'<div class="empty-state">Tu inventario está vacío.</div>'}`;
}
function useHealFromInv(id){
  const it=ITEMS[+id];if(!it||!cntBag(id))return;
  const targets=[...GS.player.team,...GS.player.pc].filter(p=>p.currentHp>0&&(p.currentHp<p.maxHp||(it.cures&&it.cures.includes(p.status))));
  if(!targets.length){notif('Ningún Pokémon necesita curación.','warn');return;}
  showSearchablePicker(`Usar ${it.n}`,targets.map(p=>({sp:getSprite(p),name:dname(p),sub:`${p.currentHp}/${p.maxHp} HP ${statusTag(p.status)}`,onclick:`doUseHealOnPkm('${p.uid}',${id})`})));
}
function useReviveFromInv(id){
  const it=ITEMS[+id];if(!it||!cntBag(id))return;
  const targets=GS.player.team.filter(p=>p.currentHp<=0);
  if(!targets.length){notif('No hay Pokémon debilitados en el Equipo.','warn');return;}
  showSearchablePicker(`Revivir con ${it.n}`,targets.map(p=>({sp:getSprite(p),name:dname(p),sub:`0/${p.maxHp} HP — KO`,onclick:`doUseReviveOnPkm('${p.uid}',${id})`})));
}
function doUseHealOnPkm(uid,itemId){closeOv('enc-ov');const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);const it=ITEMS[+itemId];if(!pkm||!it||pkm.currentHp<=0)return;if(!useBag(itemId))return;pkm.currentHp=Math.min(pkm.maxHp,pkm.currentHp+(it.hp>=9999?pkm.maxHp:it.hp||0));if(it.cures&&pkm.status&&it.cures.includes(pkm.status)){pkm.status=null;pkm.sleepTurns=0;}notif(`${it.n} en ${dname(pkm)}.`,'ok');save();renderInventory();}
function doUseReviveOnPkm(uid,itemId){closeOv('enc-ov');const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);const it=ITEMS[+itemId];if(!pkm||!it||pkm.currentHp>0)return;if(!useBag(itemId))return;pkm.currentHp=Math.floor(pkm.maxHp*(it.pct/100));pkm.status=null;pkm.sleepTurns=0;notif(`¡${dname(pkm)} revivió!`,'ok');save();renderInventory();}
// Evo manual desde inventario
function useEvoItem(id){
  const it=ITEMS[+id];if(!it||!cntBag(id))return;
  const eligible=[...GS.player.team,...GS.player.pc].filter(p=>it.eIds&&it.eIds.includes(p.pid));
  if(!eligible.length){notif('Ningún Pokémon puede usar este ítem.','warn');return;}
  showSearchablePicker(`Usar ${it.n}`,eligible.map(p=>({sp:getSprite(p),name:dname(p),sub:`${p.name} Lv.${p.lv} → ${PD[PD[p.pid]?.evo?.[0]]?.n||'?'}`,onclick:`doUseEvoOnPkm('${p.uid}',${id})`})));
}
function doUseEvoOnPkm(uid,itemId){closeOv('enc-ov');const pkm=[...GS.player.team,...GS.player.pc].find(p=>p.uid===uid);if(!pkm)return;const it=ITEMS[+itemId];const b=PD[pkm.pid];if(!it||!b||!b.evo||!b.evo.length){notif('Error al evolucionar.','err');return;}if(!useBag(itemId)){notif('Sin ese ítem.','err');return;}pkm.evoPending=b.evo[0];save();showEvoPrompt(pkm);}
function openMTItem(id){
  const it=ITEMS[+id];if(!it||!cntBag(id))return;
  const pkmList=[...GS.player.team,...GS.player.pc];
  showSearchablePicker(`Enseñar ${it.mv}`,pkmList.map(p=>({sp:getSprite(p),name:dname(p),sub:`Lv.${p.lv}${p.thirdMove?` (ya sabe ${p.thirdMove})`:''}`,onclick:`doTeachMT(${id},'${p.uid}')`})));
}
function activateHeld(id){if(+id===200){if(GS.player.expShareOn){notif('Ya está activo.','warn');return;}GS.player.expShareOn=true;notif('¡Repartir Exp activado!','ok');}save();renderInventory();}

// ============================================================
// TRAINERS — con medallas visuales
// ============================================================
function renderTrainers(){
  const sc=document.getElementById('screen-trainers');if(!sc)return;
  const maxLv=GS.player.team.length?Math.max(...GS.player.team.map(p=>p.lv)):1;
  sc.innerHTML=`<div class="sec-hdr"><h2>Gyms</h2><p>Tu nivel máximo: ${maxLv}</p></div>
  ${Object.entries(TRAINERS).map(([region,data])=>{
    const defCount=data.trainers.filter(t=>t.def).length;const allDef=defCount===data.trainers.length;
    return`<div class="region-block">
      <div class="region-hdr" style="border-color:${data.col}">
        <span style="font-weight:700;font-size:14px">${data.name}</span>
        <span style="font-size:12px">${defCount}/${data.trainers.length} derrotados</span>
        ${allDef?`<span style="color:var(--gold);font-size:10px">★ Legendarios desbloqueados</span>`:''}
      </div>
      <div class="trainer-list">${data.trainers.map(t=>{const can=maxLv>=t.minLv;
        return`<div class="trainer-card ${t.def?'defeated':''} ${!can?'locked':''}">
          <div class="t-icon">${t.def
            ?`<div class="medal-icon" style="background:${t.medalCol||'#d4ac0d'};box-shadow:0 0 12px ${t.medalCol||'#d4ac0d'}88">${t.medalIcon||'🏅'}</div>`
            :`<span class="ms" style="font-size:28px;color:${can?'var(--gold)':'var(--dim)'}">${t.icon}</span>`
          }</div>
          <div class="t-info"><span class="t-name">${t.n}</span><span class="t-lv">Mín. Lv.${t.minLv}</span><span class="t-reward">+${t.rew.toLocaleString()}G</span>
            ${t.def?`<span class="medal-label" style="color:${t.medalCol||'var(--gold)'}">${t.medal||'Medalla'}</span>`:''}
            <div class="t-team">${t.pk.map(pk=>`<span class="t-pkm"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pk.id}.png" onerror="this.style.display='none'"><span>Lv.${pk.lv}</span></span>`).join('')}</div>
          </div>
          <div>${t.def?`<span class="def-badge"><span class="ms" style="font-size:20px;color:var(--green)">check_circle</span></span>`:!can?`<span class="lock-badge"><span class="ms" style="font-size:20px">lock</span></span>`:`<button class="fight-btn" onclick="startTrainerBattle('${region}','${t.id}')">Luchar</button>`}</div>
        </div>`;}).join('')}</div>
    </div>`;}).join('')}
  ${Object.keys(MAPS).some(k=>MAPS[k].legUn)?`<div class="leg-unlock-msg"><span class="ms">stars</span> ¡Legendarios desbloqueados! Explora mapas.</div>`:''}`;
}

// ============================================================
// CODES
// ============================================================
function renderCodes(){
  const sc=document.getElementById('screen-codes');if(!sc)return;
  sc.innerHTML=`<div class="sec-hdr"><h2>Código Especial</h2></div>
  <div class="code-form"><input id="code-in" class="code-input" type="text" placeholder="TU-CÓDIGO-AQUÍ" maxlength="20"><button class="code-submit" onclick="redeemCode()"><span class="ms" style="font-size:18px">redeem</span>Canjear</button></div>
  <div class="used-codes"><h3>Usados</h3>${[...GS.player.usedCodes].map(c=>`<span class="used-badge">${c}</span>`).join('')||'<span style="color:var(--dim);font-size:12px">Ninguno.</span>'}</div>
  <div class="codes-hint"><h3><span class="ms" style="font-size:16px">lightbulb</span> Códigos</h3>${Object.entries(CODES).map(([k,v])=>`<div class="code-li"><b>${k}</b> — ${v.desc}</div>`).join('')}</div>`;
}
function redeemCode(){
  const inp=document.getElementById('code-in');if(!inp)return;const code=inp.value.trim().toUpperCase();
  if(!code){notif('Escribe un código.','warn');return;}if(GS.player.usedCodes.has(code)){notif('Código ya utilizado.','err');return;}
  const entry=CODES[code];if(!entry){notif('Código no válido.','err');return;}
  entry.rewards.forEach(r=>{if(r.t==='gold')addGold(r.v);else if(r.t==='item')addBag(r.id,r.q);else if(r.t==='pokemon'){const pkm=mkPkm(r.pid,r.variant||'normal',r.lv||5);if(pkm){if(GS.player.team.length<3)GS.player.team.push(pkm);else GS.player.pc.push(pkm);}}});
  GS.player.usedCodes.add(code);inp.value='';save();notif(`¡${entry.desc}`,'ok',5000);renderCodes();updateHUD();
}

// ============================================================
// PROFILE — con sección de medallas de Gyms
// ============================================================
function renderProfile(){
  const sc=document.getElementById('screen-profile');if(!sc)return;
  const total=GS.player.team.length+GS.player.pc.length;
  const allTrainers=Object.values(TRAINERS).flatMap(rd=>rd.trainers);
  const defeatedCount=allTrainers.filter(t=>GS.player.defeatedTrainers.has(t.id)).length;

  const badgesHTML=Object.entries(TRAINERS).map(([region,rd])=>{
    const trainers=rd.trainers;const regionDef=trainers.filter(t=>GS.player.defeatedTrainers.has(t.id)).length;
    return`<div class="badges-region">
      <div class="badges-region-title" style="color:${rd.col}">${rd.name} <span style="font-size:10px;color:var(--dim)">${regionDef}/${trainers.length}</span></div>
      <div class="badges-flex">${trainers.map(t=>{const won=GS.player.defeatedTrainers.has(t.id)||t.def;
        return`<div class="badge-cell ${won?'badge-earned':'badge-locked'}">
          <div class="badge-icon" style="${won?`background:${t.medalCol||'#d4ac0d'};box-shadow:0 0 10px ${t.medalCol||'#d4ac0d'}77`:'background:var(--card2);filter:grayscale(1)'}">
            <span style="font-size:20px">${t.medalIcon||'🏅'}</span>
          </div>
          <span class="badge-name" style="color:${won?t.medalCol:'var(--dim)'}">${t.medal||'Medalla'}</span>
          <span class="badge-trainer" style="color:var(--dim)">${t.n}</span>
        </div>`;}).join('')}
      </div>
    </div>`;}).join('');

  sc.innerHTML=`<div class="sec-hdr"><h2>Perfil</h2></div>
  <div class="profile-card">
    <div class="prof-avatar-wrap"><img class="prof-avatar-img" id="prof-av" src="${GS.player.avatar||DEFAULT_AVATAR}" onerror="this.src='${DEFAULT_AVATAR}'" alt="Avatar"></div>
    <div class="prof-name-row"><input id="pname" class="prof-in" value="${GS.player.name}" maxlength="20" placeholder="Tu nombre..."><button class="prof-save-btn" onclick="saveName()"><span class="ms">save</span></button></div>
    <span class="url-label">Foto de perfil (URL):</span>
    <div style="display:flex;gap:7px;width:100%">
      <input id="pavatar" class="prof-in" value="${GS.player.avatar||DEFAULT_AVATAR}" placeholder="https://..." style="flex:1">
      <button class="prof-save-btn" onclick="saveAvatar()"><span class="ms">image</span></button>
    </div>
    <div class="prof-stats">
      <div class="pstat"><span>Oro</span><strong>${GS.player.gold.toLocaleString()}</strong></div>
      <div class="pstat"><span>Pokémon</span><strong>${total}</strong></div>
      <div class="pstat"><span><span class="ms" style="font-size:13px">directions_walk</span> Pasos</span><strong>${(GS.player.steps||0).toLocaleString()}</strong></div>
      <div class="pstat"><span>Códigos</span><strong>${GS.player.usedCodes.size}</strong></div>
      <div class="pstat"><span>Mapa</span><strong style="font-size:10px">${MAPS[GS.map.id]?.name||''}</strong></div>
      <div class="pstat"><span>Posición</span><strong style="font-size:10px">${GS.map.x},${GS.map.y}</strong></div>
    </div>
  </div>
  <div class="gym-medals-section">
    <div class="medals-header">
      <span class="ms" style="font-size:18px;color:var(--gold)">military_tech</span>
      <span style="font-family:'Orbitron',sans-serif;font-size:13px;font-weight:700">Medallas de Gym</span>
      <span class="medals-counter">${defeatedCount}/${allTrainers.length}</span>
    </div>
    ${badgesHTML}
  </div>
  <div class="danger-zone"><h3><span class="ms" style="font-size:16px">warning</span> Zona de peligro</h3>
    <button class="danger-btn" onclick="resetGame()"><span class="ms" style="font-size:14px">delete_forever</span>Borrar partida</button>
  </div>`;
}
function saveName(){const i=document.getElementById('pname');if(i){GS.player.name=i.value.trim()||'Entrenador';save();notif('Nombre guardado.','ok');}}
function saveAvatar(){
  const i=document.getElementById('pavatar');if(!i)return;GS.player.avatar=i.value.trim()||DEFAULT_AVATAR;save();
  const pr=document.getElementById('prof-av');if(pr){pr.src=GS.player.avatar;pr.style.display='block';}
  if(GS.player.avatar){delete _sprCache[GS.player.avatar];loadSpr(GS.player.avatar,()=>{updateHUD();renderRadarCanvas();});}
  notif('Avatar actualizado.','ok');
}
function resetGame(){if(confirm('¿Borrar TODA la partida?')){localStorage.clear();location.reload();}}

// ============================================================
// MAP SELECT
// ============================================================
function openMapSelect(){
  showOv('map-ov',`<div class="obox" style="max-width:460px">
    <div class="otitle">Seleccionar Mapa</div>
    <div class="map-grid">${Object.values(MAPS).map(m=>`
      <div class="map-opt ${GS.map.id===m.id?'active':''}" style="background:${m.bg}" onclick="changeMap('${m.id}')">
        <div class="map-opt-name">${m.name}</div>
        ${m.legUn?'<div class="leg-badge">★ Legendarios</div>':''}
      </div>`).join('')}
    </div>
    <button class="ebtn ebtn-flee" onclick="closeOv('map-ov')"><span class="ms">close</span>Cerrar</button></div>`);
}
function changeMap(id){GS.map.id=id;GS.map.x=0;GS.map.y=0;GS.spawns=[];closeOv('map-ov');save();notif(`Bienvenido a ${MAPS[id].name}!`,'info');preloadSpawnSprites();goTo('radar');}
function showOv(id,html){const el=document.getElementById(id);if(!el)return;el.innerHTML=html;el.style.display='flex';}
function closeOv(id){const el=document.getElementById(id);if(el){el.style.display='none';if(id==='enc-ov')el.onclick=function(e){if(e.target===this)closeOv('enc-ov');};}}

// ============================================================
// INTRO SCREEN — campos obligatorios, validación, avatar default
// ============================================================
function showIntro(){
  const ov=document.getElementById('intro-ov');if(!ov)return;
  const isNew=!localStorage.getItem('pf3_save');
  if(isNew){
    _selectedStarterId=null;
    ov.innerHTML=`<div class="intro-box">
      <div class="intro-logo">POKEM</div>
      <div class="intro-sub">Tu aventura te espera</div>
      <div style="width:100%;display:flex;flex-direction:column;gap:10px;margin-top:4px">
        <label class="intro-label">Tu apodo de entrenador <span style="color:var(--acc)">*</span></label>
        <input id="intro-name" class="prof-in intro-field" placeholder="Ash, Misty, Red..." maxlength="20" style="width:100%" oninput="this.classList.remove('field-error')">
        <label class="intro-label">Foto de perfil <span style="color:var(--dim);font-size:10px">(URL opcional)</span></label>
        <input id="intro-avatar" class="prof-in" value="${DEFAULT_AVATAR}" style="width:100%">
        <div id="intro-av-preview" style="display:flex;justify-content:center;margin:4px 0">
          <img src="${DEFAULT_AVATAR}" style="width:64px;height:64px;border-radius:50%;border:2px solid var(--blue);object-fit:cover" onerror="this.style.display='none'" id="intro-av-img">
        </div>
      </div>
      <div style="font-size:12px;color:var(--dim);margin-top:4px;text-align:center">¿Con quién empiezas? <span style="color:var(--acc)">*</span></div>
      <div id="starter-error" style="font-size:10px;color:var(--acc);display:none">Selecciona un Pokémon inicial</div>
      <div class="starter-grid">
        ${[1,4,7,25].map(pid=>{const b=PD[pid];
          return`<div class="starter-opt" id="st-${pid}" onclick="selectStarter(${pid})">
            <img src="${b.sp}" style="width:52px;height:52px;image-rendering:pixelated" onerror="this.style.display='none'">
            <span style="font-size:10px;font-weight:700">${b.n}</span>
            <div>${typeBadges(b.t)}</div>
          </div>`;}).join('')}
      </div>
      <button class="intro-start-btn" onclick="startAdventure()">
        <span class="ms" style="font-size:20px">catching_pokemon</span>¡Empezar Aventura!
      </button>
    </div>`;
  // Actualizar preview al cambiar URL
  setTimeout(()=>{
    const avIn=document.getElementById('intro-avatar');
    const avImg=document.getElementById('intro-av-img');
    if(avIn&&avImg){avIn.oninput=()=>{avImg.src=avIn.value||DEFAULT_AVATAR;};}
  },50);
  }else{
    const av=GS.player.avatar||DEFAULT_AVATAR;
    ov.innerHTML=`<div class="intro-box" style="max-width:300px;gap:14px">
      <div class="intro-logo">POKEM</div>
      ${av?`<img src="${av}" style="width:90px;height:90px;border-radius:50%;border:3px solid var(--blue);object-fit:cover" onerror="this.style.display='none'">`:''}
      <div style="font-family:'Orbitron',sans-serif;font-size:20px;font-weight:700;color:var(--text);text-align:center">${GS.player.name}</div>
      <div style="font-size:12px;color:var(--dim);text-align:center">
        <span class="ms" style="font-size:13px;vertical-align:middle">directions_walk</span> ${(GS.player.steps||0).toLocaleString()} pasos &nbsp;·&nbsp;
        <span class="ms" style="font-size:13px;vertical-align:middle">catching_pokemon</span> ${GS.player.team.length+GS.player.pc.length} Pokémon
      </div>
      <button class="intro-start-btn" onclick="continueAdventure()" style="background:linear-gradient(135deg,#1a6fa8,#3498db)">
        <span class="ms" style="font-size:20px">play_arrow</span>Continuar Partida
      </button>
    </div>`;
  }
  ov.style.display='flex';
}
function selectStarter(pid){
  _selectedStarterId=pid;
  document.querySelectorAll('.starter-opt').forEach(el=>el.classList.remove('selected'));
  const el=document.getElementById('st-'+pid);if(el)el.classList.add('selected');
  const se=document.getElementById('starter-error');if(se)se.style.display='none';
}
function startAdventure(){
  const nameIn=document.getElementById('intro-name');
  const name=(nameIn?.value||'').trim();
  let hasError=false;
  if(!name){if(nameIn){nameIn.classList.add('field-error');nameIn.focus();}hasError=true;}
  if(!_selectedStarterId){const se=document.getElementById('starter-error');if(se)se.style.display='block';hasError=true;}
  if(hasError){notif('Completa los campos requeridos.','err');return;}
  const avatar=(document.getElementById('intro-avatar')?.value.trim()||DEFAULT_AVATAR);
  GS.player.name=name.slice(0,20);GS.player.avatar=avatar;
  const starter=mkPkm(_selectedStarterId,'normal',5);if(starter)GS.player.team.push(starter);
  addBag(1,5);addBag(10,3);save();closeIntro();
  notif(`¡${GS.player.name}, comienza tu aventura!`,'ok',4000);
}
function continueAdventure(){closeIntro();}
function closeIntro(){
  const ov=document.getElementById('intro-ov');
  if(ov){ov.style.opacity='0';ov.style.transition='opacity 0.4s';setTimeout(()=>{ov.style.display='none';ov.style.opacity='1';},400);}
  updateHUD();if(GS.player.avatar)loadSpr(GS.player.avatar,()=>{updateHUD();renderRadarCanvas();});
}

// ============================================================
// INIT
// ============================================================
window.addEventListener('DOMContentLoaded',()=>{
  load();
  showIntro();
  if(GS.player.avatar)loadSpr(GS.player.avatar,()=>{updateHUD();renderRadarCanvas();});
  updateHUD();setupCanvasClick();renderRadarCanvas();renderSpawnList();startLoop();
  document.addEventListener('keydown',e=>{
    if(GS.screen!=='radar')return;
    const mp={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0],w:[0,-1],s:[0,1],a:[-1,0],d:[1,0]};
    const v=mp[e.key];if(v){move(v[0],v[1]);e.preventDefault();}
  });
  let ts=null;
  const cv=document.getElementById('radar-canvas');
  if(cv){
    cv.addEventListener('touchstart',e=>{ts={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
    cv.addEventListener('touchend',e=>{if(!ts)return;const dx=e.changedTouches[0].clientX-ts.x,dy=e.changedTouches[0].clientY-ts.y;ts=null;if(Math.max(Math.abs(dx),Math.abs(dy))<20)return;move(Math.abs(dx)>Math.abs(dy)?Math.sign(dx):0,Math.abs(dy)>Math.abs(dx)?Math.sign(dy):0);},{passive:true});
  }
});
