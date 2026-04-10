
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
        



import { ByteArrayInputStream } from "../../../../java/io/ByteArrayInputStream.js";

    
import { DataInputStream } from "../../../../java/io/DataInputStream.js";

    
import { EOFException } from "../../../../java/io/EOFException.js";

    
import { IOException } from "../../../../java/io/IOException.js";

    
import { RecordComparator } from "../../../../javax/microedition/rms/RecordComparator.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class ScoreComparator
            extends Object
        
                , RecordComparator {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly isHighestBest: boolean
public constructor (isHighestBest: boolean){

            super();
                //var isHighestBest = isHighestBest
this.isHighestBest= isHighestBest
}


    public getBestScore(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isHighestBest
                        ?       
                                Long.MAX_VALUE
                                :

                            0;

    ;
    
}


    public compare(recordOne: ByteArray, recordTwo: ByteArray): number{
    //var recordOne = recordOne
    //var recordTwo = recordTwo

    var byteArrayInputStreamOne: ByteArrayInputStream = new ByteArrayInputStream(recordOne);
        
        


    var inputStreamOne: DataInputStream = new DataInputStream(byteArrayInputStreamOne);
        
        


    var byteArrayInputStreamTwo: ByteArrayInputStream = new ByteArrayInputStream(recordTwo);
        
        


    var inputStreamTwo: DataInputStream = new DataInputStream(byteArrayInputStreamTwo);
        
        


    var scoreOne: number = 0;
        
        


    var scoreTwo: number = 0;
        
        


        try {
            readUTF()
readUTF()
scoreOne= inputStreamOne!.readLong()
scoreTwo= inputStreamTwo!.readLong()
} catch(e: EOFException)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, "compare", e)
}
 catch(e: IOException)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, "compare", e)
}
 catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, "compare", e)
}


    
                        if(this.isHighestBest)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getHighTooLow(scoreOne, scoreTwo);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getLowTooHigh(scoreOne, scoreTwo);
    

                        }
                            
}


    public getHighTooLow(scoreOne: number, scoreTwo: number): number{
    //var scoreOne = scoreOne
    //var scoreTwo = scoreTwo

    
                        if(scoreOne > scoreTwo)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparator.PRECEDES;
    

                                    }
                                
                             else 
    
                        if(scoreOne < scoreTwo)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparator.FOLLOWS;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparator.EQUIVALENT;
    

                        }
                            
}


    public getLowTooHigh(scoreOne: number, scoreTwo: number): number{
    //var scoreOne = scoreOne
    //var scoreTwo = scoreTwo

    
                        if(scoreOne < scoreTwo)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparator.PRECEDES;
    

                                    }
                                
                             else 
    
                        if(scoreOne > scoreTwo)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparator.FOLLOWS;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparator.EQUIVALENT;
    

                        }
                            
}


}
                
            

