
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoresInterface } from './HighScoresInterface.js';
//not GWT import - same folder const HighScoresInterface = globalThis.org.allbinary.game.score.HighScoresInterface;

                import { HighScore } from './HighScore.js';
//not GWT import - same folder const HighScore = globalThis.org.allbinary.game.score.HighScore;

                
export class HighScores
            extends Object
         implements HighScoresInterface {
        

    private orderedHighScoresList: BasicArrayList = new BasicArrayListD();

    private readonly name: string;

    private readonly heading: string;

    private readonly columnOneHeading: string = "Name";

    private readonly columnTwoHeading: string;

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

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("HighScores: ");
    
stringBuffer!.append(this.heading);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(CommonLabels.getInstance()!.TOTAL_LABEL);
    
stringBuffer!.appendint(this.orderedHighScoresList!.size());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



