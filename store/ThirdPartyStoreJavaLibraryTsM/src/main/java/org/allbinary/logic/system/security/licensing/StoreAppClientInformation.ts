
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
        



import { LongArrayIdentifierInterface } from "../../../../../../org/allbinary/thirdparty/store/LongArrayIdentifierInterface.js";

    

export class StoreAppClientInformation extends AbeClientInformation
                , LongArrayIdentifierInterface {
        

    private readonly longArrayIdentifier: LongArray
public constructor (name: string, version: string, specialName: string, shortName: string, longArrayIdentifier: LongArray)                        

                            : super(name, version, specialName, shortName){

            super();
                //var name = name
    //var version = version
    //var specialName = specialName
    //var shortName = shortName
var longArrayIdentifier = longArrayIdentifier


                            //For kotlin this is before the body of the constructor.
                    
this.longArrayIdentifier= longArrayIdentifier
}


    public getLongArrayIdentifier(): LongArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return longArrayIdentifier;
    
}


}
                
            

