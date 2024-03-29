import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotdogService {
  private hotdogCollection : AngularFirestoreCollection;
  
  private hotdog:Observable<Object[]>;

  constructor(private db: AngularFirestore) {
    this.hotdogCollection= this.db.collection('hotdog')
    
    this.hotdog = this.hotdogCollection.snapshotChanges().pipe(
      
      map(actions => {
        return actions.map(hotdog =>{
          let dogTemp = hotdog.payload.doc.data()
          return dogTemp;
        })
      })  
    )
   }

  public addDog(hotdog){
   return this.hotdogCollection.add(hotdog)
  }

  public getDogs(){
    return this.hotdog
  }
}
