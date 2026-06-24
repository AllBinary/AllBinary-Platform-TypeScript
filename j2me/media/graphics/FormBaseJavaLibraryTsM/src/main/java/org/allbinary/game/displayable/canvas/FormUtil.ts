
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FormUtil
            extends Object
         {
        

    private static readonly instance: FormUtil = new FormUtil();

    public static getInstance(): FormUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FormUtil.instance;
    
}


    public createFormRectangle(): Rectangle{

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    var pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    var rectangle: Rectangle = new Rectangle(pointFactory!.createXY(30, 10), displayInfo!.getLastWidth() -30, displayInfo!.getLastHeight() -35);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangle;
    
}


}
                
            

