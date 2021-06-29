import {Component,
    Input,
    Output,
    EventEmitter} from "@angular/core"

@Component({
    selector: "grid-ui",
    templateUrl :'./customerapp.grid.html'
})
export class GridComponent{
    // for the column names
    gridColumns: Array<any> = new Array<any>();
    // grid data 
    gridData: Array<any> = new Array<any>();

    @Input("grid-columns")
    set setGridColumns(_gridColumns:Array<any>){
       this.gridColumns = _gridColumns;     
    }
    @Input("grid-data")
    set setGridData(_gridData:Array<any>){
        this.gridData = _gridData;     
     }
     
     @Output("grid-selected")
     eventemitter: EventEmitter<Object> = 
     new EventEmitter<Object>();

     SelectGrid(_selected:Object){
         this.eventemitter.emit(_selected);
     }
     
}