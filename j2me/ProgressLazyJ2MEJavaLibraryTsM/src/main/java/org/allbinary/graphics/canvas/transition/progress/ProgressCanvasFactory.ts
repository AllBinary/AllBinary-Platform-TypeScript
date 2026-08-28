
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
        
//not game specific package import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { PaintableInterface } from '../../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
//not game specific package import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LazyProgressCanvas } from './LazyProgressCanvas.js';
import { ProgressCanvas } from './ProgressCanvas.js';

export class ProgressCanvasFactory
            extends Object
         {
        

    private static PROGRESS_FORM_SCREEN: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): ProgressCanvas{

                        if(ProgressCanvasFactory.PROGRESS_FORM_SCREEN == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    ProgressCanvasFactory.PROGRESS_FORM_SCREEN= new LazyProgressCanvas(StringUtil.getInstance()!.EMPTY_STRING, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ProgressCanvasFactory.PROGRESS_FORM_SCREEN as ProgressCanvas;
    
}


    public static getLazyInstance(): PaintableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ProgressCanvasFactory.getInstance();;
    
}


}



