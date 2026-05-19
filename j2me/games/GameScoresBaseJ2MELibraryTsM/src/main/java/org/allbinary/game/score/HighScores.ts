
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
        
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoresInterface } from './HighScoresInterface.js';
import { HighScore } from './HighScore.js';

export class HighScores
            extends Object
         implements HighScoresInterface {
        

    private orderedHighScoresList: BasicArrayList = new BasicArrayListD();

    private readonly name: string

    private readonly heading: string

    private readonly columnOneHeading: string = "Name";

    private readonly columnTwoHeading: string
public constructor (name: string, heading: string, columnTwoHeading: string){

            super();
        this.name= name;
    
this.heading= heading;
    
this.columnTwoHeading= columnTwoHeading;
    
}


    public setList(orderedHighScoresList: BasicArrayList){
this.orderedHighScoresList= orderedHighScoresList;
    
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.orderedHighScoresList;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getList()!.size();;
    
}


    public addHighScore(newHighScore: HighScore){
this.orderedHighScoresList!.add(newHighScore);
    
}


    public getHeading(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.heading;
    
}


    public getColumnOneHeading(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.columnOneHeading;
    
}


    public getColumnTwoHeading(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.columnTwoHeading;
    
}


                //@Throws(Exception.constructor)
            
    public isBestScore(newHighScore: HighScore): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append("HighScores: ");
    
stringBuffer!.append(this.heading);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(CommonLabels.getInstance()!.TOTAL_LABEL);
    
stringBuffer!.appendint(this.orderedHighScoresList!.size());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

