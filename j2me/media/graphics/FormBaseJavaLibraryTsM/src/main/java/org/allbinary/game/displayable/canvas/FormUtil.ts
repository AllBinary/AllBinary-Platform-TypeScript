
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
        



import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { RectangleFactory } from "../../../../../org/allbinary/graphics/RectangleFactory.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class FormUtil
            extends Object
         {
        

    private static readonly instance: FormUtil = new FormUtil();
        
        

    public static getInstance(): FormUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public createFormRectangle(): Rectangle{

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        


    var rectangle: Rectangle = new Rectangle(PointFactory.getInstance()!.getInstance(30, 10), displayInfo!.getLastWidth() -30, displayInfo!.getLastHeight() -35);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangle;
    
}


    public createPopupMenuRectangle(): Rectangle{

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        


    var myFont: MyFont = MyFont.getInstance()!;
        
        


    var popupMenuRectangle: Rectangle = RectangleFactory.SINGLETON;
        
        


    
                        if(displayInfo!.getLastHeight() < 320)
                        
                                    {
                                    popupMenuRectangle= Rectangle(PointFactory.getInstance()!.getInstance(0, 25), myFont!.stringWidth(3), (myFont!.DEFAULT_CHAR_HEIGHT *4) +2)

                                    }
                                
                        else {
                            popupMenuRectangle= Rectangle(PointFactory.getInstance()!.getInstance(0, displayInfo!.getLastHalfHeight() -70), myFont!.stringWidth(3), (myFont!.DEFAULT_CHAR_HEIGHT *5))

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return popupMenuRectangle;
    
}


}
                
            

