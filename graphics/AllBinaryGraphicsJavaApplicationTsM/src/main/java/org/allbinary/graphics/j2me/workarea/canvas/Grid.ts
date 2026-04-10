
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    

export class Grid
            extends Object
         {
        

    public grid: GPoint

    public isGridOn: boolean = true;
        
        

    public isGridPossible: boolean = false;
        
        

    private zoom: number = 3;
        
        

    public isChanged: boolean = true;
        
        
public constructor (){

            super();
            }

public constructor (grid: Grid){

            super();
            var grid = grid
this.grid= grid.grid
this.showGrid(grid.isGridOn)
this.isGridPossible= grid.isGridPossible
this.setZoom(grid.getZoom())
}


    public isGridOn(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isGridOn;
    
}


    public isGridPossible(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isGridPossible;
    
}


    public getGrid(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.grid;
    
}


    public getZoom(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.zoom;
    
}


    public showGrid(value: boolean){
var value = value
this.isGridOn= value
}


    public setZoom(zoom: number){
var zoom = zoom
this.zoom= zoom

                        if(this.zoom < 1)
                        
                                    {
                                    zoom= 1

                                    }
                                
this.isChanged= true
}


}
                
            

