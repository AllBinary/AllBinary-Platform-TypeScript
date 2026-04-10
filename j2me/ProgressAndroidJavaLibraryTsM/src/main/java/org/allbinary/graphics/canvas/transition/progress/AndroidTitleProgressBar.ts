
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
        



import { Graphics } from "../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { NullProgressActivity } from "../../../../../../org/allbinary/android/activity/NullProgressActivity.js";

    
import { ProgressActivityInterface } from "../../../../../../org/allbinary/android/activity/ProgressActivityInterface.js";

    
import { SimpleProgressActivityInterface } from "../../../../../../org/allbinary/android/activity/SimpleProgressActivityInterface.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    

export class AndroidTitleProgressBar extends ProgressCanvas {
        

    private showTitleProgressBarRunnable: ShowTitleProgressBarRunnable = new ShowTitleProgressBarRunnable();
        
        

    private dismissTitleProgressBarRunnable: DismissTitleProgressBarRunnable = new DismissTitleProgressBarRunnable();
        
        

    private progressDialogPortionSetProgressRunnable: TitleProgressBarPortionSetProgressRunnable = new TitleProgressBarPortionSetProgressRunnable();
        
        

    private progressDialogSetProgressRunnable: TitleProgressBarSetProgressRunnable = new TitleProgressBarSetProgressRunnable();
        
        

    private progressActivity: ProgressActivityInterface = NullProgressActivity.NULL_PROGRESS_ACTIVITY;
        
        

    private portion: number = 0;
        
        
protected constructor (title: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(title, backgroundBasicColor, foregroundBasicColor){

            super();
            var title = title
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public init(activity: SimpleProgressActivityInterface){
var activity = activity
}


    public init(activity: ProgressActivityInterface){
var activity = activity
this.progressActivity= activity
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
            put(commonStrings!.START, this, commonStrings!.START_METHOD_NAME)
start()
runOnUiThread(showTitleProgressBarRunnable)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.START_METHOD_NAME, e)
}

}


    public end(){

        try {
            put(commonStrings!.START, this, commonStrings!.END_METHOD_NAME)
runOnUiThread(dismissTitleProgressBarRunnable)
end()
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.END_METHOD_NAME, e)
}

}


    public addPortion(value: number, text: string, index: number){
var value = value
var text = text
var index = index

        try {
            addPortion(value, text, index)
this.portion= value
runOnUiThread(progressDialogPortionSetProgressRunnable)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, ADD_PORTION, e)
}

}


    public addPortion(value: number, text: string){
var value = value
var text = text

        try {
            addPortion(value, text)
this.portion= value
runOnUiThread(progressDialogPortionSetProgressRunnable)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, ADD_PORTION, e)
}

}


    setValue(value: number){
var value = value

        try {
            setValue(value)
runOnUiThread(progressDialogSetProgressRunnable)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "setValue", e)
}

}


    public waitUntilDisplayed(){
}


    public paint(graphics: Graphics){
var graphics = graphics
}


export inner class TitleProgressBarSetProgressRunnable
            extends Object
        
                , Runnable {
        

    public run(){

        try {
            
    var value: number = this@AndroidTitleProgressBar.getValue().toInt();
        
        

onTitleProgressBarSetProgress(value)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}


}
                
            
export inner class TitleProgressBarPortionSetProgressRunnable
            extends Object
        
                , Runnable {
        

    public run(){

        try {
            
    var value: number = (this@AndroidTitleProgressBar.getValue() +this@AndroidTitleProgressBar.getMaxValue() /portion).toInt();
        
        

onTitleProgressBarSetProgress(value)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}


}
                
            
export inner class ShowTitleProgressBarRunnable
            extends Object
        
                , Runnable {
        

    public run(){

        try {
            
    var maxValue: number = this@AndroidTitleProgressBar.getMaxValue().toInt();
        
        

onShowTitleProgressBar(maxValue, false)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}


}
                
            
export inner class DismissTitleProgressBarRunnable
            extends Object
        
                , Runnable {
        

    public run(){

        try {
            onDismissTitleProgressBar()
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}


}
                
            
}
                
            

