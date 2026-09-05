
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
        
//not plain js import { StdUtil } from '../../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not plain js import { ABHashtable } from '../../../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbeLicenseInterface } from './AbeLicenseInterface.js';
//not GWT import const AbeLicenseInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeLicenseInterface;

                import { LicenseType } from './LicenseType.js';
//not GWT import const LicenseType = globalThis.org.allbinary.logic.system.security.licensing.LicenseType;

                import { AbeClientInformationData } from './AbeClientInformationData.js';
//not GWT import const AbeClientInformationData = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationData;

                import { LicenseTypeFactory } from './LicenseTypeFactory.js';
//not GWT import const LicenseTypeFactory = globalThis.org.allbinary.logic.system.security.licensing.LicenseTypeFactory;

                
export class AbeClientLicense
            extends Object
         implements AbeLicenseInterface {
        

    public static hasRequiredKeys(resultHashtable: ABHashtable): boolean{

    var abeClientInformationData: AbeClientInformationData = AbeClientInformationData.getInstance()!;;
    

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


    private hashtable: ABHashtable;

    private id: string;

    private servers: BasicArrayList;

    private special: string;

    private licenseType: LicenseType;

public constructor (hashtable: ABHashtable){

            super();
        this.hashtable= StdUtil.getInstance()!.createHashtable();
    

    var abeClientInformationData: AbeClientInformationData = AbeClientInformationData.getInstance()!;;
    

    var keyValue: any = hashtable.get(abeClientInformationData!.KEY)!;;
    

                        if(keyValue != 
                                    null
                                )
                        
                                    {
                                    
                        if(keyValue instanceof String)
                        
                                    {
                                    this.hashtable.put(abeClientInformationData!.KEY, keyValue);
    

                                    }
                                

                                    }
                                
this.id= hashtable.get(abeClientInformationData!.LICENSEID) as string;
    

    var vector: BasicArrayList = hashtable.get(abeClientInformationData!.LICENSESERVERS) as BasicArrayList;;
    
this.servers= new BasicArrayListD();
    

    var size: number = vector.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.servers.add(vector.get(index));
    
}


    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    
this.setSpecial(stringUtil!.getNonNull(hashtable.get(abeClientInformationData!.SPECIAL) as string));
    

    var licenseTypeString: string = stringUtil!.getNonNull(hashtable.get(abeClientInformationData!.LICENSE_TYPE) as string)!;;
    
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

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(!stringValidationUtil!.isEmpty(this.getKey(AbeClientInformationData.getInstance()!.KEY)))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

    var BREAK: string = "<br/>";;
    
stringBuffer!.append("License Id: ");
    
stringBuffer!.append(this.getLicenseId());
    
stringBuffer!.append(BREAK);
    
stringBuffer!.append("Is Valid: ");
    
stringBuffer!.appendboolean(this.isValid());
    
stringBuffer!.append(BREAK);
    
stringBuffer!.append("Keys: ");
    
stringBuffer!.append(this.hashtable.toString());
    
stringBuffer!.append(BREAK);
    

    var serverVector: BasicArrayList = this.getServers()!;;
    

    var size: number = serverVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var nextServerString: string = serverVector!.get(index) as string;;
    
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



