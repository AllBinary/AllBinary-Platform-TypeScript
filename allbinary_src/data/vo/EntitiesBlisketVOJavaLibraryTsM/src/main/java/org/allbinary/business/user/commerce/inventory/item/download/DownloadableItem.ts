
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../../java/lang/Long.js';
        
import { Calendar } from '../../../../../../../../java/util/Calendar.js';
      //not GWT import const Calendar = globalThis.java.util.Calendar;

      
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { EntryData } from '../../../../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { BasicItemData } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { ProductIdGenerator } from '../../../../../../../../org/allbinary/data/generator/ProductIdGenerator.js';
      //not GWT import const ProductIdGenerator = globalThis.org.allbinary.data.generator.ProductIdGenerator;

      
import { StdUtil } from '../../../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { StringUtil } from '../../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TimeUtil } from '../../../../../../../../org/allbinary/time/TimeUtil.js';
      //not GWT import const TimeUtil = globalThis.org.allbinary.time.TimeUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DownloadItemData } from './DownloadItemData.js';
//not GWT import const DownloadItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadItemData;

                
export class DownloadableItem
            extends Object
         {
        

    private readonly id: string;

    private readonly basicItemId: string;

    private readonly enabled: string;

    private readonly system: string;

    private readonly platform: string;

    private readonly specialName: string;

    private readonly version: string;

    private readonly changes: string;

    private readonly licenseFile: string;

    private readonly file: string;

    private readonly size: Long;

    private readonly validTime: Long;

    private readonly retries: string;

public constructor (id: string){

            super();
        
    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;;
    
this.id= new ProductIdGenerator().getNext();
    
this.basicItemId= id;
    
this.enabled= EntryData.getInstance()!.YES;
    
this.system= "Java";
    
this.platform= "Android";
    
this.specialName= EMPTY_STRING;
    
this.version= EMPTY_STRING;
    
this.changes= EMPTY_STRING;
    
this.licenseFile= EMPTY_STRING;
    
this.file= EMPTY_STRING;
    
this.size= (0).toLong();
    
this.validTime= (0).toLong();
    
this.retries= EMPTY_STRING;
    
}


public constructor (hashMap: HashMap<any, any>){

            super();
        this.id= hashMap!.get(DownloadItemData.ID) as string;
    
this.basicItemId= hashMap!.get(BasicItemData.getInstance()!.ID) as string;
    
this.enabled= hashMap!.get(EntryData.getInstance()!.ENABLE) as string;
    
this.system= hashMap!.get(DownloadItemData.SYSTEM) as string;
    
this.platform= hashMap!.get(DownloadItemData.PLATFORM) as string;
    
this.specialName= hashMap!.get(DownloadItemData.SPECIAL_NAME) as string;
    
this.version= hashMap!.get(DownloadItemData.VERSION) as string;
    
this.changes= hashMap!.get(DownloadItemData.CHANGES) as string;
    
this.licenseFile= hashMap!.get(DownloadItemData.LICENSE_FILE) as string;
    
this.file= hashMap!.get(DownloadItemData.FILE) as string;
    

    var value: string = hashMap!.get(DownloadItemData.SIZE) as string;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(value))
                        
                                    {
                                    this.size= (value).toLong();
    

                                    }
                                
                        else {
                            this.size= new Long(0);
    

                        }
                            

    var validTime: string = hashMap!.get(DownloadItemData.VALID_TIME) as string;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(validTime))
                        
                                    {
                                    this.validTime= (validTime).toLong();
    

                                    }
                                
                        else {
                            
    var totalYears: string = hashMap!.get(DownloadItemData.VALID_TIME_YEARS) as string;;
    

    var totalMonths: string = hashMap!.get(DownloadItemData.VALID_TIME_MONTHS) as string;;
    

    var totalDays: string = hashMap!.get(DownloadItemData.VALID_TIME_DAYS) as string;;
    

    var totalHours: string = hashMap!.get(DownloadItemData.VALID_TIME_HOURS) as string;;
    

    var totalMinutes: string = hashMap!.get(DownloadItemData.VALID_TIME_MINUTES) as string;;
    

    var totalSeconds: string = hashMap!.get(DownloadItemData.VALID_TIME_SECONDS) as string;;
    

    var totalTime: number = TimeUtil.getInstance()!.getTotalTime(totalYears, totalMonths, totalDays, totalHours, totalMinutes, totalSeconds)!;;
    
this.validTime= new Long(totalTime);
    

                        }
                            
this.retries= hashMap!.get(DownloadItemData.RETRIES) as string;
    
}


    public toVector(): BasicArrayList{

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString()!;;
    

    var values: BasicArrayList = new BasicArrayListD();;
    
values.add(getId());
    
values.add(this.basicItemId);
    
values.add(this.enabled);
    
values.add(this.getSpecialName());
    
values.add(this.getVersion());
    
values.add(this.getChanges());
    
values.add(this.getSystem());
    
values.add(this.getPlatform());
    
values.add(this.getLicenseFile());
    
values.add(this.getFile());
    
values.add(this.getSize()!.toString());
    
values.add(this.getValidTime()!.toString());
    
values.add(this.getRetries());
    
values.add(time);
    
values.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public toHashMap(): HashMap<any, any>{

    var values: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
values.put(DownloadItemData.ID, this.getId());
    
values.put(BasicItemData.getInstance()!.ID, this.basicItemId);
    
values.put(EntryData.getInstance()!.ENABLE, this.enabled);
    
values.put(DownloadItemData.SYSTEM, this.getSystem());
    
values.put(DownloadItemData.PLATFORM, this.getPlatform());
    
values.put(DownloadItemData.SPECIAL_NAME, this.getSpecialName());
    
values.put(DownloadItemData.VERSION, this.getVersion());
    
values.put(DownloadItemData.CHANGES, this.getChanges());
    
values.put(DownloadItemData.LICENSE_FILE, this.getLicenseFile());
    
values.put(DownloadItemData.FILE, this.getFile());
    
values.put(DownloadItemData.SIZE, this.getSize()!.toString());
    
values.put(DownloadItemData.VALID_TIME, this.getValidTime()!.toString());
    
values.put(DownloadItemData.RETRIES, this.getRetries());
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
values.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public getSystem(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.system;
    
}


    public getPlatform(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.platform;
    
}


    public getSpecialName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.specialName;
    
}


    public getVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.version;
    
}


    public getChanges(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.changes;
    
}


    public getLicenseFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.licenseFile;
    
}


    public getFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file;
    
}


    public getSize(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.size;
    
}


    public getValidTime(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.validTime;
    
}


    public getRetries(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.retries;
    
}


}



