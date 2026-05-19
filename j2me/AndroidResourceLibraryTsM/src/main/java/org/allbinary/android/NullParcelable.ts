
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
        



            import hilog from '@ohos.hilog';
        
            import { Object } from '../../../java/lang/Object.js';


        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
import { Parcelable } from '../../../android/os/Parcelable.js';
      
import { Parcel } from '../../../android/os/Parcel.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NullParcelable
            extends Object
         implements Parcelable {
        

    public static readonly NULL_PARCELABLE: NullParcelable = new NullParcelable();

    public describeContents(): number{



                            throw new RuntimeException();
                    
}


    public writeToParcel(dest: Parcel, flags: number){
}


}
                
            

