
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

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseGameStatistics } from "./BaseGameStatistics.js";

/*actual*/ export class GameStatisticsFactory extends BaseGameStatistics {
        

    private static readonly instance: GameStatisticsFactory = new GameStatisticsFactory();
        
        

    /*actual*/ public static getInstance(): GameStatisticsFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private stringBuffer: StringMaker = new StringMaker();
        
        

    public add(string: string){
var string = string

                        if(this.stringBuffer!.length() > 12000)
                        
                                    {
                                    this.stringBuffer!.delete(0, this.stringBuffer!.length());
    
this.stringBuffer!.append("Old Stats Cleared");
    

                                    }
                                
this.stringBuffer!.append(string);
    
}


    /*actual*/ public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(super.toString())!.append(this.stringBuffer!.toString())!.toString();

                        ;
    
}


}
                
            

