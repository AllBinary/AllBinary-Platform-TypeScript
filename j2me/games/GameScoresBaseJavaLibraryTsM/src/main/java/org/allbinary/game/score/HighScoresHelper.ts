
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
        



import { CircularIndexUtil } from "../../../../org/allbinary/util/CircularIndexUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { HighScoresHelperBase } from "./HighScoresHelperBase.js";

import { HighScores } from "./HighScores.js";

export class HighScoresHelper extends HighScoresHelperBase {
        

    private readonly circularIndexUtil: CircularIndexUtil = CircularIndexUtil.getInstance(0, 0)!;
        
        

    public setHighScoresArray(highScoresArrayP: HighScores[]){
    //var highScoresArrayP = highScoresArrayP
super.setHighScoresArray(highScoresArrayP);
    
this.circularIndexUtil!.setSize(this.highScoresArrayP!.length);
    
}


    lastIndex: number =  -1;
        
        

    public getNextHighScores(): HighScores{

    var highScores: HighScores = this.highScoresArrayP[this.circularIndexUtil!.getIndex()]!;
        
        
;
    

    var index: number = 0;
        
        
;
    

        while((highScores!.getTotal() < 1 || lastIndex == this.circularIndexUtil!.getIndex()) && index < this.highScoresArrayP!.length)
        {
this.circularIndexUtil!.next();
    
highScores= this.highScoresArrayP[this.circularIndexUtil!.getIndex()]!;
    
index++;
    
}

lastIndex= this.circularIndexUtil!.getIndex();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScores;
    
}


    public isAnyHighScores(): boolean{

                        if(highScoresArrayP!.length < 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var anyScores: boolean = false;
        
        
;
    

    var highScores: HighScores
;
    




                        for (
    var index: number = highScoresArrayP!.length -1;
        
        
index >= 0; index--)
        {
highScores= highScoresArrayP[index]!;
    

                        if(highScores!.getTotal() > 0)
                        
                                    {
                                    anyScores= true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyScores;
    
}


}
                
            

