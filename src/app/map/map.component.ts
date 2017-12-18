import {Component} from '@angular/core';

@Component({
    selector:'map',
    templateUrl:'map.component.html',
    styleUrls:['map.component.css']
})

export class MapComponent{
     cityArray:string[]=["Бориспіль",'Бровари','Вишгород','Вишневе','Ірпінь','Коцюбинське','Обухів','Українка'];
     regionArray:string[]=['Дніпро','Черкаси','Запоріжжя'];
}