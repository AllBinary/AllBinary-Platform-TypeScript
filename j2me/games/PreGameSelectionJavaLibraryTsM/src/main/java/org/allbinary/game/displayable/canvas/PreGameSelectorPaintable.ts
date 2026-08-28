
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
        



//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { CanvasDrawLineString } from '../../../../../org/allbinary/graphics/draw/CanvasDrawLineString.js';
      const CanvasDrawLineString = globalThis.org.allbinary.graphics.draw.CanvasDrawLineString;

      
//not game specific package import { InitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
      const InitUpdatePaintable = globalThis.org.allbinary.graphics.paint.InitUpdatePaintable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PreGameScrollSelectionForm } from './PreGameScrollSelectionForm.js';

export class PreGameSelectorPaintable extends InitUpdatePaintable {
        

    private readonly title: string;

    private canvasDrawLineString: CanvasDrawLineString;

    private readonly preGameScrollSelectionForm: PreGameScrollSelectionForm;

public constructor (title: string, preGameScrollSelectionForm: PreGameScrollSelectionForm){

            super();
        this.title= title;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    
this.canvasDrawLineString= new CanvasDrawLineString(displayInfo!.getLastHalfWidth(), 0);
    
this.preGameScrollSelectionForm= preGameScrollSelectionForm;
    
}


    public update(){

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    
this.canvasDrawLineString= new CanvasDrawLineString(displayInfo!.getLastHalfWidth(), 0);
    
}


    public paint(graphics: Graphics){
graphics.setColor(BasicColorFactory.getInstance()!.WHITE.intValue());
    
this.canvasDrawLineString!.paint(graphics, title, 0);
    
this.getPreGameSelectionForm()!.paint(graphics);
    
}


    public getPreGameSelectionForm(): PreGameScrollSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.preGameScrollSelectionForm;
    
}


}



