
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { InitUpdatePaintable } from '../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
      //not GWT import const InitUpdatePaintable = globalThis.org.allbinary.graphics.paint.InitUpdatePaintable;

      
import { NullInitUpdatePaintable } from '../../../../org/allbinary/graphics/paint/NullInitUpdatePaintable.js';
      //not GWT import const NullInitUpdatePaintable = globalThis.org.allbinary.graphics.paint.NullInitUpdatePaintable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SelectionHudPaintable } from './SelectionHudPaintable.js';
//not GWT import const SelectionHudPaintable = globalThis.org.allbinary.game.layer.SelectionHudPaintable;

                
export class RTSLayerInfoPaintable extends InitUpdatePaintable {
        

    private initUpdatePaintable: InitUpdatePaintable = NullInitUpdatePaintable.getInstance()!;

public constructor (){

            super();
        }


    public update(){
this.initUpdatePaintable!.update();
    
}


    public paint(graphics: Graphics){
this.initUpdatePaintable!.paint(graphics);
    
}


    public updateRTSLayerInfoInit(hudPaintable: InitUpdatePaintable){
this.initUpdatePaintable= hudPaintable;
    
}


    public updateRTSLayerInfoSelection(hudPaintable: SelectionHudPaintable){
hudPaintable!.updateSelectionInfo();
    
this.initUpdatePaintable= hudPaintable;
    
}


}



