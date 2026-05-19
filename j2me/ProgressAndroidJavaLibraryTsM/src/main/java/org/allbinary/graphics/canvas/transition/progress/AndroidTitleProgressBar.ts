
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Runnable } from '../../../../../../java/lang/Runnable.js';
        
import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      
import { NullProgressActivity } from '../../../../../../org/allbinary/android/activity/NullProgressActivity.js';
      
import { ProgressActivityInterface } from '../../../../../../org/allbinary/android/activity/ProgressActivityInterface.js';
      
import { SimpleProgressActivityInterface } from '../../../../../../org/allbinary/android/activity/SimpleProgressActivityInterface.js';
      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProgressCanvas } from './ProgressCanvas.js';
//import { ShowTitleProgressBarRunnable } from './ShowTitleProgressBarRunnable.js';
//import { DismissTitleProgressBarRunnable } from './DismissTitleProgressBarRunnable.js';
//import { TitleProgressBarPortionSetProgressRunnable } from './TitleProgressBarPortionSetProgressRunnable.js';
//import { TitleProgressBarSetProgressRunnable } from './TitleProgressBarSetProgressRunnable.js';

export class AndroidTitleProgressBar extends ProgressCanvas {
        

    private showTitleProgressBarRunnable: ShowTitleProgressBarRunnable = new this.ShowTitleProgressBarRunnable();

    private dismissTitleProgressBarRunnable: DismissTitleProgressBarRunnable = new this.DismissTitleProgressBarRunnable();

    private progressDialogPortionSetProgressRunnable: TitleProgressBarPortionSetProgressRunnable = new this.TitleProgressBarPortionSetProgressRunnable();

    private progressDialogSetProgressRunnable: TitleProgressBarSetProgressRunnable = new this.TitleProgressBarSetProgressRunnable();

    private progressActivity: ProgressActivityInterface = NullProgressActivity.NULL_PROGRESS_ACTIVITY;

    private portion: number = 0;
protected constructor (title: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public init(activity: ProgressActivityInterface){
this.progressActivity= activity;
    
}


    public isInitialized(): boolean{

                        if(this.progressActivity != NullProgressActivity.NULL_PROGRESS_ACTIVITY)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public start(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.START_METHOD_NAME);
    
super.start();
    
this.progressActivity!.runOnUiThread(this.showTitleProgressBarRunnable);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.START_METHOD_NAME, e);
    
}

}


    public end(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.END_METHOD_NAME);
    
this.progressActivity!.runOnUiThread(this.dismissTitleProgressBarRunnable);
    
super.end();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.END_METHOD_NAME, e);
    
}

}


    public addPortion(value: number, text: string, index: number){

        try {
            super.addPortion(value, text, index);
    
this.portion= value;
    
this.progressActivity!.runOnUiThread(this.progressDialogPortionSetProgressRunnable);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.ADD_PORTION, e);
    
}

}


    public addNormalPortion(value: number, text: string){

        try {
            super.addNormalPortion(value, text);
    
this.portion= value;
    
this.progressActivity!.runOnUiThread(this.progressDialogPortionSetProgressRunnable);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.ADD_PORTION, e);
    
}

}


    setValue(value: number){

        try {
            super.setValue(value);
    
this.progressActivity!.runOnUiThread(this.progressDialogSetProgressRunnable);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setValue", e);
    
}

}


    public waitUntilDisplayed(){
}


    public paint(graphics: Graphics){
}


//inner= member=true isStatic=
TitleProgressBarSetProgressRunnable = class
            extends Object
         implements Runnable {
        

    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    

        try {
            
    var value: number = Math.round(AndroidTitleProgressBar.prototype.getValue());
;
    
AndroidTitleProgressBar.prototype.progressActivity!.onTitleProgressBarSetProgress(value);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            
//inner= member=true isStatic=
TitleProgressBarPortionSetProgressRunnable = class
            extends Object
         implements Runnable {
        

    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    

        try {
            
    var value: number = Math.round((AndroidTitleProgressBar.prototype.getValue() +AndroidTitleProgressBar.prototype.getMaxValue() /AndroidTitleProgressBar.prototype.portion));
;
    
AndroidTitleProgressBar.prototype.progressActivity!.onTitleProgressBarSetProgress(value);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            
//inner= member=true isStatic=
ShowTitleProgressBarRunnable = class
            extends Object
         implements Runnable {
        

    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    

        try {
            
    var maxValue: number = Math.round(AndroidTitleProgressBar.prototype.getMaxValue());
;
    
AndroidTitleProgressBar.prototype.progressActivity!.onShowTitleProgressBar(maxValue, false);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            
//inner= member=true isStatic=
DismissTitleProgressBarRunnable = class
            extends Object
         implements Runnable {
        

    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    

        try {
            AndroidTitleProgressBar.prototype.progressActivity!.onDismissTitleProgressBar();
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            
}
                
            

