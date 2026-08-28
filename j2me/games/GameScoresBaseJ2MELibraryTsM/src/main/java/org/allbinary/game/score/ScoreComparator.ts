
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../java/lang/Long.js';
        
//not game specific package import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
      const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
//not game specific package import { DataInputStream } from '../../../../java/io/DataInputStream.js';
      const DataInputStream = globalThis.java.io.DataInputStream;

      
//not game specific package import { EOFException } from '../../../../java/io/EOFException.js';
      const EOFException = globalThis.java.io.EOFException;

      
//not game specific package import { IOException } from '../../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { RecordComparator, RecordComparatorI } from '../../../../javax/microedition/rms/RecordComparator.js';
      const RecordComparator = globalThis.javax.microedition.rms.RecordComparator;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ScoreComparator
            extends Object
         implements RecordComparator {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly isHighestBest: boolean;

public constructor (isHighestBest: boolean){

            super();
        this.isHighestBest= isHighestBest;
    
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


    public compare(recordOne: number[], recordTwo: number[]): number{

    var byteArrayInputStreamOne: ByteArrayInputStream = new ByteArrayInputStream(recordOne);;
    

    var inputStreamOne: DataInputStream = new DataInputStream(byteArrayInputStreamOne);;
    

    var byteArrayInputStreamTwo: ByteArrayInputStream = new ByteArrayInputStream(recordTwo);;
    

    var inputStreamTwo: DataInputStream = new DataInputStream(byteArrayInputStreamTwo);;
    

    var scoreOne: number = 0;;
    

    var scoreTwo: number = 0;;
    

        try {
            inputStreamOne!.readUTF();
    
inputStreamTwo!.readUTF();
    
scoreOne= inputStreamOne!.readLong();
    
scoreTwo= inputStreamTwo!.readLong();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "compare", e);
    
}

                //: 
/* catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "compare", e);
    
}
*/
                //: 
/* catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "compare", e);
    
}
*/

                        if(this.isHighestBest)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getHighTooLow(scoreOne, scoreTwo);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getLowTooHigh(scoreOne, scoreTwo);;
    

                        }
                            
}


    public getHighTooLow(scoreOne: number, scoreTwo: number): number{

                        if(scoreOne > scoreTwo)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparatorI.PRECEDES;
    

                                    }
                                
                             else 
                        if(scoreOne < scoreTwo)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparatorI.FOLLOWS;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparatorI.EQUIVALENT;
    

                        }
                            
}


    public getLowTooHigh(scoreOne: number, scoreTwo: number): number{

                        if(scoreOne < scoreTwo)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparatorI.PRECEDES;
    

                                    }
                                
                             else 
                        if(scoreOne > scoreTwo)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparatorI.FOLLOWS;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RecordComparatorI.EQUIVALENT;
    

                        }
                            
}


}



