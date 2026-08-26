
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
        
//not game specific package import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
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
                
            

