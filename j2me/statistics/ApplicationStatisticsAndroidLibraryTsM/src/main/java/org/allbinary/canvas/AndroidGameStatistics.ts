
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Long } from '../../../java/lang/Long.js';
        
import { View } from '../../../android/view/View.js';
      
import { BaseViewWrapper } from '../../../org/allbinary/android/view/BaseViewWrapper.js';
      
import { ViewWrapper } from '../../../org/allbinary/android/view/ViewWrapper.js';
      
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseGameStatistics } from './BaseGameStatistics.js';

export class AndroidGameStatistics extends BaseGameStatistics {
        

    private view: BaseViewWrapper = BaseViewWrapper.NULL_VIEW_WRAPPER;

    private totalOnDraws: number= 0;

    private readonly ANDROID_STRING_ARRAY: string[] = new Array(14);

public constructor (){

            super();
        
    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    




                        for (
    var index: number = 0;index < this.ANDROID_STRING_ARRAY.length; index++)
        {
this.ANDROID_STRING_ARRAY[index]= stringUtil!.EMPTY_STRING;
    
}

}


    public initView(view: View){
super.init();
    
this.view= new ViewWrapper(view);
    
this.totalOnDraws= 0;
    
}


    public process(){
this.view.postInvalidate();
    
}


    public nextOnDraw(){
this.totalOnDraws++;
    
}


    private readonly TOTAL_ONDRAWS: string = " Total onDraws: ";

    private readonly ONDRAWS_RATE: string = " onDraws(/10) Sec: ";

    public toStringArray(): string[]{

    var stringArray: string[] = super.toStringArray()!;;
    




                        for (
    var index: number = 0;index < stringArray!.length; index++)
        {
this.ANDROID_STRING_ARRAY[index]= stringArray[index]!;
    
}


    var totalTime: number = this.getTimeDelayHelper()!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;;
    
totalTime= (totalTime /10000);
    
this.ANDROID_STRING_ARRAY[10]= this.TOTAL_ONDRAWS;
    
this.ANDROID_STRING_ARRAY[11]= (this.totalOnDraws).toString();
    
this.ANDROID_STRING_ARRAY[12]= this.ONDRAWS_RATE;
    
this.ANDROID_STRING_ARRAY[13]= (this.totalOnDraws /totalTime).toString();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ANDROID_STRING_ARRAY;
    
}


    public toString(): string{

    var totalTime: number = this.getTimeDelayHelper()!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;;
    
totalTime= (totalTime /1000);
    

                        if(totalTime > 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(super.toStringAt(totalTime));
    

                        if(this.totalOnDraws > 0)
                        
                                    {
                                    stringBuffer!.append(this.TOTAL_ONDRAWS);
    
stringBuffer!.append(this.totalOnDraws.toString());
    
stringBuffer!.append(this.ONDRAWS_RATE);
    

    var drawsOverTime: string = (this.totalOnDraws /totalTime).toString()!;;
    
stringBuffer!.append(drawsOverTime);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NOT;
    

                        }
                            
}


}
                
            

