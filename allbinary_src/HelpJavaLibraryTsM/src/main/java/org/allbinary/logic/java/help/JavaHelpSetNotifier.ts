
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { URL } from '../../../../../java/net/URL.js';
      //not GWT import const URL = globalThis.java.net.URL;

      
import { Vector } from '../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { HelpSet } from '../../../../../javax/help/HelpSet.js';
      //not GWT import const HelpSet = globalThis.javax.help.HelpSet;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class JavaHelpSetNotifier
            extends Object
         {
        

    private static vector: Vector = new Vector();

    static get(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return JavaHelpSetNotifier.vector;
    
}


    public static isNotified(helpSet: HelpSet): boolean{

    var isNotified: boolean = false;;
    

    var url: URL = helpSet!.getHelpSetURL()!;;
    

    var size: number = JavaHelpSetNotifier.vector.length!;;
    

    var urlArray: any[] = JavaHelpSetNotifier.vector.toArray()!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var nextURL: URL = urlArray[i]! as URL;;
    

                        if(url.toString()!.compareTo(nextURL!.toString()) == 0)
                        
                                    {
                                    isNotified= true;
    

                                    }
                                
}

JavaHelpSetNotifier.vector.add(url);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isNotified;
    
}


private constructor (){

            super();
        }


}



