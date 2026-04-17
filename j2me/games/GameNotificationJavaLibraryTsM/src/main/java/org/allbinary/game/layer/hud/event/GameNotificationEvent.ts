
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameNotificationEvent extends AllBinaryEventObject {
        

    private string: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private readonly seconds: Integer

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;
        
        

    private readonly removeable: Boolean
public constructor (anyType: any = {}, string: string, seconds: Integer, basicColor: BasicColor, permanent: Boolean)                        

                            : super(anyType){

            super();
            var anyType = anyType
var string = string
var seconds = seconds
var basicColor = basicColor
var permanent = permanent


                            //For kotlin this is before the body of the constructor.
                    
this.setString(string);
    
this.seconds= seconds;
    
this.setBasicColorP(basicColor);
    
this.removeable= permanent;
    
}


    public getString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return string;
    
}


    public getSeconds(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return seconds;
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


    public getPermanent(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return removeable;
    
}


    public setString(string: string){
var string = string
this.string= string;
    
}


    public setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor;
    
}


}
                
            

