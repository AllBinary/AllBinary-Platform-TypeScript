
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

        


            import { Integer } from '../../../../../../java/lang/Integer.js';
        
import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameNotificationEvent extends AllBinaryEventObject {
        

    private string: string = StringUtil.getInstance()!.EMPTY_STRING;

    private readonly seconds: Integer;

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;

    private readonly removeable: Boolean;

public constructor (anyType: any = {}, string: string, seconds: Integer, basicColor: BasicColor, permanent: Boolean){
            super(anyType);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setString(string);
    
this.seconds= seconds;
    
this.setBasicColorP(basicColor);
    
this.removeable= permanent;
    
}


    public getString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.string;
    
}


    public getSeconds(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.seconds;
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


    public getPermanent(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.removeable;
    
}


    public setString(string: string){
this.string= string;
    
}


    public setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
}


}



