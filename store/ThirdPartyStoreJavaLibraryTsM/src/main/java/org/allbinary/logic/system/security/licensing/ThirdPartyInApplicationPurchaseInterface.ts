
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

        


















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LockableFeature } from './LockableFeature.js';
//sameFolderImports - not GWT import - same folder const LockableFeature

export interface ThirdPartyInApplicationPurchaseInterface {
        

    isPurchased(lockableFeature: LockableFeature): boolean;

    onCreate(anyType: any, stateObject: any): void;

    onDestroy(): void;

    onStart(): void;

    onActivityResult(requestCode: number, resultCode: number, dataObject: any): void;

    onSaveInstanceState(anyType: any): void;

    onStop(): void;

    requestPurchase(lockableFeature: LockableFeature): void;

    requestReceipts(): void;

    add(lockableFeature: LockableFeature): void;

    getUserName(): string;

    isEnabled(): boolean;

}

