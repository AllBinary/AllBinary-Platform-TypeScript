
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
        



import { URL } from "../../../../../java/net/URL.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { HelpSet } from "../../../../../javax/help/HelpSet.js";

    

export class JavaHelpSetNotifier
            extends Object
         {
        

    private vector: Vector = new Vector();
        
        

    static get(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public static isNotified(helpSet: HelpSet): boolean{
var helpSet = helpSet

    var isNotified: boolean = false;
        
        


    var url: URL = helpSet!.getHelpSetURL()!;
        
        


    var size: number = vector.length!;
        
        


    var urlArray: any = {}[] = vector.toArray()!;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var nextURL: URL = urlArray[i]! as URL;
        
        


    
                        if(url.toString()!.compareTo(nextURL!.toString()) == 0)
                        
                                    {
                                    isNotified= true

                                    }
                                
}

add(url)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isNotified;
    
}

private constructor (){

            super();
            }


}
                
            

