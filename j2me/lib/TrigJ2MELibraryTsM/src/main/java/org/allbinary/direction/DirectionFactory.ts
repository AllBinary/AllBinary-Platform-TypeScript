
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
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonPhoneStrings } from "../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DirectionFactory
            extends Object
         {
        

    private static readonly instance: DirectionFactory = new DirectionFactory();
        
        

    public static getInstance(): DirectionFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly NAME: string = "DIRECTION";
        
        

    public readonly LEFT: Direction = new Direction(CommonPhoneStrings.getInstance()!.LEFT, "WEST", 0, 1);
        
        

    public readonly RIGHT: Direction = new Direction(CommonPhoneStrings.getInstance()!.RIGHT, "EAST", 1, 0);
        
        

    public readonly DOWN: Direction = new Direction(CommonPhoneStrings.getInstance()!.DOWN, "SOUTH", 2);
        
        

    public readonly UP: Direction = new Direction(CommonPhoneStrings.getInstance()!.UP, "NORTH", 3);
        
        

    public readonly UP_LEFT: Direction

    public readonly UP_RIGHT: Direction

    public readonly DOWN_LEFT: Direction

    public readonly DOWN_RIGHT: Direction

    public readonly NOT_BORDERED_WITH: Direction = new Direction("NOT_BORDERED_WITH", "NOT_BORDERED_WITH", 8);
        
        

    public readonly NO_DIRECTION: Direction = new Direction("NO_DIRECTION", "NO_DIRECTION", 9);
        
        

    public readonly TOP: Direction = new Direction("TOP", "TOP", 10);
        
        

    public readonly BOTTOM: Direction = new Direction("BOTTOM", "BOTTOM", 11);
        
        

    public readonly ALL_DIRECTION: Direction = new Direction("ALL_DIRECTION", "ALL_DIRECTION", 12);
        
        
private constructor (){

            super();
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    
UP_LEFT= new Direction("UP LEFT", stringBuffer!.append(UP.getOtherName())!.append(commonSeps!.SPACE)!.append(LEFT.getOtherName())!.toString(), 4);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
UP_RIGHT= new Direction("UP RIGHT", stringBuffer!.append(UP.getOtherName())!.append(commonSeps!.SPACE)!.append(RIGHT.getOtherName())!.toString(), 5);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
DOWN_LEFT= new Direction("DOWN LEFT", stringBuffer!.append(DOWN.getOtherName())!.append(commonSeps!.SPACE)!.append(LEFT.getOtherName())!.toString(), 6);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
DOWN_RIGHT= new Direction("DOWN RIGHT", stringBuffer!.append(DOWN.getOtherName())!.append(commonSeps!.SPACE)!.append(RIGHT.getOtherName())!.toString(), 7);
    
}


}
                
            

