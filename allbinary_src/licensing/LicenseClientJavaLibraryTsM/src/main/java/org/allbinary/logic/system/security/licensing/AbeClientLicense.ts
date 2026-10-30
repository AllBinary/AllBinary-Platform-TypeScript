
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
        
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbeLicenseInterface } from './AbeLicenseInterface.js';
//sameFolderImports - not GWT import - same folder const AbeLicenseInterface
import { LicenseType } from './LicenseType.js';
//sameFolderImports - not GWT import - same folder const LicenseType
import { AbeClientInformationData } from './AbeClientInformationData.js';
//sameFolderImports - not GWT import - same folder const AbeClientInformationData
import { LicenseTypeFactory } from './LicenseTypeFactory.js';
//sameFolderImports - not GWT import - same folder const LicenseTypeFactory

export class AbeClientLicense
            extends Object
         implements AbeLicenseInterface {
        

    public static hasRequiredKeys(resultHashtable: ABHashtable<any, any>): boolean{

    let abeClientInformationData: AbeClientInformationData = AbeClientInformationData.getInstance()!;;
    

                        if(resultHashtable!.containsKey(abeClientInformationData!.LICENSEID) && resultHashtable!.containsKey(abeClientInformationData!.LICENSESERVERS) && resultHashtable!.containsKey(abeClientInformationData!.KEY) && resultHashtable!.containsKey(abeClientInformationData!.LICENSE_TYPE))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    private hashtable: ABHashtable<any, any>;

    private id: string;

    private servers: BasicArrayList;

    private special: string;

    private licenseType: LicenseType;

public constructor (hashtable: ABHashtable<any, any>){

            super();
        this.hashtable= StdUtil.getInstance()!.createHashtable();
    

    let abeClientInformationData: AbeClientInformationData = AbeClientInformationData.getInstance()!;;
    

    let keyValue: any = hashtable.get(abeClientInformationData!.KEY)!;;
    

                        if(keyValue != 
                                    null
                                )
                        
                                    {
                                    
                        if(((value: any) => typeof value === 'string' || value instanceof String)(keyValue))
                        
                                    {
                                    this.hashtable.put(abeClientInformationData!.KEY, keyValue);
    

                                    }
                                

                                    }
                                
this.id= hashtable.get(abeClientInformationData!.LICENSEID) as string;
    

    let vector: BasicArrayList = hashtable.get(abeClientInformationData!.LICENSESERVERS) as BasicArrayList;;
    
this.servers= new BasicArrayListD();
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
this.servers.add(vector.get(index));
    
}


    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    
this.setSpecial(stringUtil!.getNonNull(hashtable.get(abeClientInformationData!.SPECIAL) as string));
    

    let licenseTypeString: string = stringUtil!.getNonNull(hashtable.get(abeClientInformationData!.LICENSE_TYPE) as string)!;;
    
this.licenseType= LicenseTypeFactory.getInstance()!.getInstance(licenseTypeString);
    
}


    public hasKey(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isValid();;
    
}


    public getKey(keyName: string): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable.get(keyName) as string;
    
}


    public getLicenseId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public getServers(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.servers;
    
}


    public isValid(): boolean{

    let stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(!stringValidationUtil!.isEmpty(this.getKey(AbeClientInformationData.getInstance()!.KEY)))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let BREAK: string = "<br/>";;
    
stringBuffer!.append("License Id: ");
    
stringBuffer!.append(this.getLicenseId());
    
stringBuffer!.append(BREAK);
    
stringBuffer!.append("Is Valid: ");
    
stringBuffer!.appendboolean(this.isValid());
    
stringBuffer!.append(BREAK);
    
stringBuffer!.append("Keys: ");
    
stringBuffer!.append(this.hashtable.toString());
    
stringBuffer!.append(BREAK);
    

    let serverVector: BasicArrayList = this.getServers()!;;
    

    let size: number = serverVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let nextServerString: string = serverVector!.get(index) as string;;
    
stringBuffer!.append("Server: ");
    
stringBuffer!.append(nextServerString);
    
stringBuffer!.append(BREAK);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    setSpecial(special: string){
this.special= special;
    
}


    public getSpecial(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special;
    
}


    public getLicenseType(): LicenseType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.licenseType;
    
}


}

