
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

    

export class HighScoresHelper2 extends HighScoresHelperBase {
        

    private readonly circularIndexUtil: CircularIndexUtil = CircularIndexUtil.getInstance(0, 0)!;
        
        

    private selectedHighScores: HighScores = NullHighScoresSingletonFactory.getInstance()!;
        
        

    public setSelectedHighScores(selectedHighScores: HighScores){
    //var selectedHighScores = selectedHighScores
this.selectedHighScores= selectedHighScores
}


    public getSelectedHighScores(): HighScores{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return selectedHighScores;
    
}


    public setHighScoresArray(highScoresArrayP: HighScores[]){
    //var highScoresArrayP = highScoresArrayP
setHighScoresArray(highScoresArrayP)
setSize(this.highScoresArrayP!.length)
this.selectHighScores()
}


    public selectHighScores(){

    
                        if(this.highScoresArrayP!.length == 0)
                        
                                    {
                                    this.setSelectedHighScores(NullHighScoresSingletonFactory.getInstance())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
next()

    var highScores: HighScores = this.highScoresArrayP[this.circularIndexUtil!.getIndex()]!;
        
        


    var index: number = 0;
        
        


        while(highScores!.getTotal() < 1 && index < this.highScoresArrayP!.length)
        {
highScores= this.highScoresArrayP[this.circularIndexUtil!.next()]!
index++
}

this.setSelectedHighScores(highScores)
}


}
                
            

