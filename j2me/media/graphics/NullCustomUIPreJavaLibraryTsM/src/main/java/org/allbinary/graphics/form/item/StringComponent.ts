
        /* Generated Code Do Not Modify */
        



import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StringComponent
            extends Object
         {
        

    public static readonly NULL_STRING_COMPONENT: StringComponent = new StringComponent();
        
        

    public getBackgroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicColorFactory.getInstance()!.WHITE;
    
}


    public setBackgroundBasicColor(backgroundBasicColor: BasicColor){
var backgroundBasicColor = backgroundBasicColor
}


    public getForegroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicColorFactory.getInstance()!.WHITE;
    
}


    public setForegroundBasicColor(foregroundBasicColor: BasicColor){
var foregroundBasicColor = foregroundBasicColor
}


}
                
            

