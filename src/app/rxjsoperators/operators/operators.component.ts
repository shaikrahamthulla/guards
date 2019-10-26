import { Component, OnInit } from '@angular/core';
import { of, throwError, interval, fromEvent } from 'rxjs';
import { mergeMap, delay, map, catchError, switchMap, concatMap, exhaustMap, retry, debounceTime, filter } from 'rxjs/operators';


@Component({
  selector: 'app-operators',
  template: `
    <div>
        <form #newForm = "ngForm">
            <input type = 'text' name = "name" ngModel #name = "ngModel" />
        </form>

        <div id = "box"></div>
      
    </div>
  `,
  styles: [`#box {width:100px; height: 100px; border: 1px solid red;}` ]
})
export class OperatorsComponent implements OnInit {

  

  constructor() { }

  

  ngOnInit() {

    
    fromEvent(document.getElementById('box'), 'mousemove')
    .pipe( debounceTime(1000),  map(data => data.srcElement) )
    .subscribe(res => console.log(res));

    //this.mergemap();
    //this.mergeMapCatchError();
    //this.switchmap();
    //this.concatmap();
    //this.exhaustmap();
    //this.throwerror();
    //this.throwErrorInterval();
    //this.throwRetryCatch();
    this.filterOperator();
  }

  filterOperator(){
      of(1,2,3,4,5,6,7,8,9).pipe(filter( num => (num%2) === 0  )).subscribe(res => console.log(res));
  }
  
  //mergeMap
  mergemap(){
      of('x', 'y', 'z').pipe( mergeMap(el => of(1, 2).pipe( delay(2000), map( num => el+num ) )  ))
        .subscribe(res => console.log(res) );
  }


  //mergeMap with catchError
  mergeMapCatchError(){
      of('x', 'y', 'z').pipe(
              mergeMap( element => of(1,2,3,4,5).pipe( delay(3000), map(x => element + x) )),
              catchError(error => {
                  console.error(error.message); 
                  return of(11,22,33,44);
                })
              
              )
        .subscribe(num => console.log(num) );
  }

  //gives the latest observable element of input merged with inner observable
  switchmap(){
      of('x', 'y', 'z', 'a').pipe(switchMap( ele => of(1, 2).pipe(delay(2000), map(x => ele + x))))
        .subscribe(res => console.log(res));
  }

  //gives the old observable element of input merged with inner observable
  exhaustmap(){
    of('x', 'y', 'z', 'a').pipe(exhaustMap( ele => of(1, 2).pipe(delay(2000), map(x => ele + x))))
      .subscribe(res => console.log(res));
}

  //same as merge additionally it concats the output and keeps the order
  concatmap(){
    of('x', 'y', 'z').pipe(concatMap(ele => of(1,2).pipe(delay(3000), map(x => ele + x))))
      .subscribe(res => console.log(res));
  }

  //throwError delay mergemap
  throwerror(){
    of(1,2,3,4,5).pipe(delay(2000), mergeMap(num => {      
      if(num === 3){
        return throwError("Error occured for number : "+ num);
      }
      return of(num);
    })).subscribe(res => console.log(res), err => console.log(err));
  };

  //throwError interval mergemap
  throwErrorInterval(){
    interval(2000).pipe(mergeMap( num => num === 9 ? throwError("Error at num : "+num) : of(num)  ))
      .subscribe(res => console.log(res), err => console.log(err));
  }


  throwRetryCatch(){
    of("A", "B").pipe(
                        switchMap(c => c === 'B' ? throwError("Error at char :"+c) : of(c))
                        ,retry(3)
                        ,catchError(error => {
                          console.log(error);
                          return throwError("User Defined Error");
                        })
                      )
      .subscribe(res => console.log(res), err => console.log(err));
  }













}
