
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
type MyRandomFactory<T = any, U = any> = typeof MyRandomFactory extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MyRandomFactory;

import { LockedUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
//not GWT import const LockedUtil

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdvertisementProcessorInterface } from './AdvertisementProcessorInterface.js';
//sameFolderImports - not GWT import - same folder const AdvertisementProcessorInterface

export class Advertisements
            extends Object
         {
        

    private readonly bannerList: BasicArrayList = new BasicArrayListD();

    private readonly pageList: BasicArrayList = new BasicArrayListD();

    public addPage(advertisementProcessorInterface: AdvertisementProcessorInterface){

                        if(!this.pageList!.contains(advertisementProcessorInterface))
                        
                                    {
                                    this.pageList!.add(advertisementProcessorInterface);
    

                                    }
                                
}


    public startRandomPage(){

    let size: number = this.pageList!.size()!;;
    

                        if(size > 0)
                        
                                    {
                                    
    let random: number = this.myRandomFactory!.getAbsoluteNextInt(size)!;;
    

    let advertisementProcessorInterface: AdvertisementProcessorInterface = this.pageList!.objectArray[random]! as AdvertisementProcessorInterface;;
    
advertisementProcessorInterface!.start();
    

                                    }
                                
}


    private readonly myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;

    public processRandomPage(){

                        if(LockedUtil.getInstance()!.isLocked())
                        
                                    {
                                    
    let size: number = this.pageList!.size()!;;
    

                        if(size > 0)
                        
                                    {
                                    
    let random: number = this.myRandomFactory!.getAbsoluteNextInt(size)!;;
    

    let advertisementProcessorInterface: AdvertisementProcessorInterface = this.pageList!.objectArray[random]! as AdvertisementProcessorInterface;;
    
advertisementProcessorInterface!.process();
    

                                    }
                                

                                    }
                                
}


    public stopAllPage(){




                        for (
    let index: number = this.pageList!.size()!;--index >= 0; )
        {

    let advertisementProcessorInterface: AdvertisementProcessorInterface = this.pageList!.objectArray[index]! as AdvertisementProcessorInterface;;
    
advertisementProcessorInterface!.stop();
    
}

}


    public addBanner(advertisementProcessorInterface: AdvertisementProcessorInterface){

                        if(!this.bannerList!.contains(advertisementProcessorInterface))
                        
                                    {
                                    this.bannerList!.add(advertisementProcessorInterface);
    

                                    }
                                
}


    public startAll(){




                        for (
    let index: number = this.bannerList!.size()!;--index >= 0; )
        {

    let advertisementProcessorInterface: AdvertisementProcessorInterface = this.bannerList!.objectArray[index]! as AdvertisementProcessorInterface;;
    
advertisementProcessorInterface!.start();
    
}

}


    public stopAllBanner(){




                        for (
    let index: number = this.bannerList!.size()!;--index >= 0; )
        {

    let advertisementProcessorInterface: AdvertisementProcessorInterface = this.bannerList!.objectArray[index]! as AdvertisementProcessorInterface;;
    
advertisementProcessorInterface!.stop();
    
}

}


    public getBanner(index: number): AdvertisementProcessorInterface{

    let advertisementProcessorInterface: AdvertisementProcessorInterface = this.bannerList!.objectArray[index]! as AdvertisementProcessorInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return advertisementProcessorInterface;
    
}


    public stopAll(){
this.stopAllBanner();
    
this.stopAllPage();
    
}


}

