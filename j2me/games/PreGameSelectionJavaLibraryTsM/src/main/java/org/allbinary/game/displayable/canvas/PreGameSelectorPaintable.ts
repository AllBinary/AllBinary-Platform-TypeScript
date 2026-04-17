
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { CanvasDrawLineString } from "../../../../../org/allbinary/graphics/draw/CanvasDrawLineString.js";

    
import { InitUpdatePaintable } from "../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PreGameScrollSelectionForm } from "./PreGameScrollSelectionForm.js";

export class PreGameSelectorPaintable extends InitUpdatePaintable {
        

    private readonly title: string

    private canvasDrawLineString: CanvasDrawLineString

    private readonly preGameScrollSelectionForm: PreGameScrollSelectionForm
public constructor (title: string, preGameScrollSelectionForm: PreGameScrollSelectionForm){

            super();
            var title = title
var preGameScrollSelectionForm = preGameScrollSelectionForm
this.title= title;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    
this.canvasDrawLineString= new CanvasDrawLineString(displayInfo!.getLastHalfWidth(), 0);
    
this.preGameScrollSelectionForm= preGameScrollSelectionForm;
    
}


    public update(){

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    
this.canvasDrawLineString= new CanvasDrawLineString(displayInfo!.getLastHalfWidth(), 0);
    
}


    public paint(graphics: Graphics){
var graphics = graphics
graphics.setColor(BasicColorFactory.getInstance()!.WHITE.toInt());
    
this.canvasDrawLineString!.paint(graphics, title, 0);
    
this.getPreGameSelectionForm()!.paint(graphics);
    
}


    public getPreGameSelectionForm(): PreGameScrollSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return preGameScrollSelectionForm;
    
}


}
                
            

