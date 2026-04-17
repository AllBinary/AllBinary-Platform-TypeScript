
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    

export class PaintableComposite extends Paintable {
        

    private paintableArray: PaintableInterface[]
public constructor (paintableArray: PaintableInterface[]){

            super();
                //var paintableArray = paintableArray
this.paintableArray= paintableArray;
    
}


    public paint(graphics: Graphics){
    //var graphics = graphics




                        for (
    var index: number = paintableArray!.length -1;
        
        
index >= 0; index--)
        {
this.paintableArray[index]!.paint(graphics);
    
}

}


    public paintThreed(graphics: Graphics){
var graphics = graphics




                        for (
    var index: number = paintableArray!.length -1;
        
        
index >= 0; index--)
        {
this.paintableArray[index]!.paintThreed(graphics);
    
}

}


}
                
            

