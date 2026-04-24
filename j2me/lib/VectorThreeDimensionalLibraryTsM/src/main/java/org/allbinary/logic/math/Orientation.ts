
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Orientation
            extends Object
         {
        

    public NONE: Orientation = new Orientation(0, 0, 0);
        
        

    private SINGLETON: Orientation = new Orientation(0, 0, 0);
        
        

    public static getInstance(yaw: number, pitch: number, roll: number): Orientation{
var yaw = yaw
var pitch = pitch
var roll = roll
SINGLETON.yaw.set(yaw);
    
SINGLETON.pitch.set(pitch);
    
SINGLETON.roll.set(roll);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public yaw: BasicDecimal = new BasicDecimal(0);
        
        

    public pitch: BasicDecimal = new BasicDecimal(0);
        
        

    public roll: BasicDecimal = new BasicDecimal(0);
        
        
private constructor (yaw: number, pitch: number, roll: number){

            super();
        var yaw = yaw
var pitch = pitch
var roll = roll
this.yaw.set(yaw);
    
this.pitch.set(pitch);
    
this.roll.set(roll);
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Y: ");
    
stringBuffer!.append(this.yaw.toString());
    
stringBuffer!.append(" P: ");
    
stringBuffer!.append(this.pitch.toString());
    
stringBuffer!.append(" R: ");
    
stringBuffer!.append(this.roll.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

