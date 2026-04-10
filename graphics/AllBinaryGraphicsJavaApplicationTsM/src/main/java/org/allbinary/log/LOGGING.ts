
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
        



import { Vector } from "../../../java/util/Vector.js";

    

export class LOGGING
            extends Object
         {
        

    private logging: Vector = new Vector();
        
        

    public static contains(logType: LOGGING): boolean{
var logType = logType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return logging.contains(logType!.toString());
    
}


    public static readonly GRAPHICSPAINT: LOGGING = new LOGGING("Graphics Paint");
        
        

    public static readonly GRAPHICSCREATION: LOGGING = new LOGGING("Graphics Creation");
        
        

    public static readonly GRAPHICSDELETION: LOGGING = new LOGGING("Graphics Deletion");
        
        

    public static readonly LOADINGERROR: LOGGING = new LOGGING("Loading Error");
        
        

    public static readonly MENUEVENT: LOGGING = new LOGGING("Menu Action Event");
        
        

    public static readonly MOUSEEVENT: LOGGING = new LOGGING("Mouse Action Event");
        
        

    public static readonly KEYEVENT: LOGGING = new LOGGING("Keyboard Action Event");
        
        

    public static readonly ACTIONEVENT: LOGGING = new LOGGING("Action Event");
        
        

    public static readonly ADJUSTMENTEVENT: LOGGING = new LOGGING("Adjustment Action Event");
        
        

    public static readonly COMPONENTEVENT: LOGGING = new LOGGING("Component Action Event");
        
        

    public static readonly CONTAINEREVENT: LOGGING = new LOGGING("Container Action Event");
        
        

    public static readonly FOCUSEVENT: LOGGING = new LOGGING("Focus Action Event");
        
        

    public static readonly HIERARCHYEVENT: LOGGING = new LOGGING("Hierarchy Action Event");
        
        

    public static readonly INPUTEVENT: LOGGING = new LOGGING("Input Action Event");
        
        

    public static readonly INVOCATIONEVENT: LOGGING = new LOGGING("Invocation Action Event");
        
        

    public static readonly ITEMEVENT: LOGGING = new LOGGING("Item Action Event");
        
        

    public static readonly PAINTEVENT: LOGGING = new LOGGING("Paint Action Event");
        
        

    public static readonly TEXTEVENT: LOGGING = new LOGGING("Text Action Event");
        
        

    public static readonly WINDOWEVENT: LOGGING = new LOGGING("Window Action Event");
        
        

    private name: string
private constructor (value: string){

            super();
            var value = value
this.name= value
add(value)
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


}
                
            

