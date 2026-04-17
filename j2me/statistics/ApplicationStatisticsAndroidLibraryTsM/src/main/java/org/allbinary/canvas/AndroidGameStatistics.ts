
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
        



import { View } from "../../../android/view/View.js";

    
import { BaseViewWrapper } from "../../../org/allbinary/android/view/BaseViewWrapper.js";

    
import { ViewWrapper } from "../../../org/allbinary/android/view/ViewWrapper.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseGameStatistics } from "./BaseGameStatistics.js";

export class AndroidGameStatistics extends BaseGameStatistics {
        

    private view: BaseViewWrapper = BaseViewWrapper.NULL_VIEW_WRAPPER;
        
        

    private totalOnDraws: number= 0

    private readonly STRING_ARRAY: string[] = new Array(14);
        
        
public constructor (){

            super();
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < STRING_ARRAY.length; index++)
        {
this.STRING_ARRAY[index]= stringUtil!.EMPTY_STRING;
    
}

}


    public init(view: View){
var view = view
super.init();
    
this.view= new ViewWrapper(view);
    
this.totalOnDraws= 0;
    
}


    public process(){
view.postInvalidate();
    
}


    public nextOnDraw(){
this.totalOnDraws++;
    
}


    private readonly TOTAL_ONDRAWS: string = " Total onDraws: ";
        
        

    private readonly ONDRAWS_RATE: string = " onDraws(/10) Sec: ";
        
        

    public toStringArray(): string[]{

    var stringArray: string[] = super.toStringArray()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < stringArray!.length; index++)
        {
STRING_ARRAY[index]= stringArray[index]!;
    
}


    var totalTime: number = getTimeDelayHelper()!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;
        
        
;
    
totalTime= (totalTime /10000);
    
STRING_ARRAY[10]= TOTAL_ONDRAWS;
    
STRING_ARRAY[11]= (this.totalOnDraws).toString();
    
STRING_ARRAY[12]= ONDRAWS_RATE;
    
STRING_ARRAY[13]= (this.totalOnDraws /totalTime).toString();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return STRING_ARRAY;
    
}


    public toString(): string{

    var totalTime: number = getTimeDelayHelper()!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;
        
        
;
    
totalTime= (totalTime /1000);
    

                        if(totalTime > 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(super.toString(totalTime));
    

                        if(this.totalOnDraws > 0)
                        
                                    {
                                    stringBuffer!.append(TOTAL_ONDRAWS);
    
stringBuffer!.append(totalOnDraws.toString());
    
stringBuffer!.append(ONDRAWS_RATE);
    

    var drawsOverTime: string = (this.totalOnDraws /totalTime).toString()!;
        
        
;
    
stringBuffer!.append(drawsOverTime);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NOT;
    

                        }
                            
}


}
                
            

