
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
        




export interface ThirdPartyInApplicationPurchaseInterface {
        

    isPurchased(lockableFeature: LockableFeature): boolean

    onCreate(anyType: any = {}, stateObject: any = {})

    onDestroy()

    onStart()

    onActivityResult(requestCode: number, resultCode: number, dataObject: any = {})

    onSaveInstanceState(anyType: any = {})

    onStop()

    requestPurchase(lockableFeature: LockableFeature)

    requestReceipts()

    add(lockableFeature: LockableFeature)

    getUserName(): string

    isEnabled(): boolean

}
                
            

