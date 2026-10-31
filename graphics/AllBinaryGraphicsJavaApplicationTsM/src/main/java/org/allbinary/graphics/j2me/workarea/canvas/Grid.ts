
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Grid
            extends Object
         {
        

    public grid: GPoint;

    public isGridOn: boolean = true;

    public isGridPossible: boolean = false;

    private zoom: number = 3;

    public isChanged: boolean = true;

    public constructor(...args: any[]) {
        super();if(args.length === 0) {
            
            this.constructor$0();
            
        }
        else if(args.length === 1) {
            
            this.constructor$1(args[0]);
            
        }
        
    }
    
    private constructor$0(): void {
        
    }
    
    private constructor$1(grid: Grid): void {
        this.grid= grid.grid;
    
this.showGrid(grid.isGridOn);
    
this.isGridPossible= grid.isGridPossible;
    
this.setZoom(grid.getZoom());
    

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
this.isGridOn= value;
    
}


    public setZoom(zoom: number){
this.zoom= zoom;
    

                        if(this.zoom < 1)
                        
                                    {
                                    zoom= 1;
    

                                    }
                                
this.isChanged= true;
    
}


}

