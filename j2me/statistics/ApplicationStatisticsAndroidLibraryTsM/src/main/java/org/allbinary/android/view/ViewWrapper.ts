
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

        


import { View } from '../../../../android/view/View.js';
//not GWT import const View = globalThis.android.view.View;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseViewWrapper } from './BaseViewWrapper.js';
//not GWT import - same folder const BaseViewWrapper = globalThis.org.allbinary.android.view.BaseViewWrapper;

                
export class ViewWrapper extends BaseViewWrapper {
        

    private readonly view: View;

public constructor (view: View){

            super();
        this.view= view;
    
}


    public invalidate(){
this.view.invalidate();
    
}


    public postInvalidate(){
this.view.postInvalidate();
    
}


}



