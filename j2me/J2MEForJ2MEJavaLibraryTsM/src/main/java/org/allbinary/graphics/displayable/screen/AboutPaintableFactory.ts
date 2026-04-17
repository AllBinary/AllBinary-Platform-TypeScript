
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2022 AllBinary
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
        



import { AboutPaintable } from "../../../../../org/allbinary/game/paint/AboutPaintable.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AboutPaintableFactory
            extends Object
         {
        

    private static readonly instance: AboutPaintableFactory = new AboutPaintableFactory();
        
        

    public static getInstance(): AboutPaintableFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            
    var INFO: string[] = 
                                                        [
                                                            "Built with the","AllBinary Platform",StringUtil.getInstance()!.EMPTY_STRING,"Comments or Questions:","support@allbinary.com"
                                                        ];
        
        
;
    

    var DEVELOPERS: string[] = 
                                                        [
                                                            "Developed By:","Travis Berthelot"
                                                        ];
        
        
;
    
this.paintableArray= AboutPaintable.getInstance(INFO, DEVELOPERS)!.getPaintableArrayInstance();
    
}


    public paintableArray: Paintable[] = 
                                                [
                                                    NullPaintable.getInstance();
        
        
                                                ];
        
        

}
                
            

