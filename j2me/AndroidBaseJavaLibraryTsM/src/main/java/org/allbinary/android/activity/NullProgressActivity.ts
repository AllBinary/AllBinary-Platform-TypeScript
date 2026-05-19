
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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


        
            import { Runnable } from '../../../../java/lang/Runnable.js';
        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProgressActivityInterface } from './ProgressActivityInterface.js';

export class NullProgressActivity
            extends Object
         implements ProgressActivityInterface {
        

    public static readonly NULL_PROGRESS_ACTIVITY: NullProgressActivity = new NullProgressActivity();

    public runOnUiThread(action: Runnable){
}


    public onDismissTitleProgressBar(){
}


    public onShowTitleProgressBar(value: number, indeterminate: boolean){
}


    public onTitleProgressBarSetProgress(value: number){
}


}
                
            

