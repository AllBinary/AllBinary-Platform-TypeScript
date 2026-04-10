
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
        




interface SimpleProgressActivityInterface {
        

    runOnUiThread(action: Runnable)

                @Throws(Exception::class)
            
    onSetProgress(value: number, text: string)

                @Throws(Exception::class)
            
    onDismissProgress(animationSequence: IntArray)

                @Throws(Exception::class)
            
    onShowProgress(indeterminate: boolean, animationSequence: IntArray)

}
                
            

