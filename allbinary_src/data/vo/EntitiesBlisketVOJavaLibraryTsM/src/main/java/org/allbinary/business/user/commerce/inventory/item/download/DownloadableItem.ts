
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
        



import { Calendar } from "../../../../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { EntryData } from "../../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { BasicItemData } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { ProductIdGenerator } from "../../../../../../../../org/allbinary/data/generator/ProductIdGenerator.js";

    
import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TimeUtil } from "../../../../../../../../org/allbinary/time/TimeUtil.js";

    

export class DownloadableItem
            extends Object
         {
        

    private readonly id: string

    private readonly basicItemId: string

    private readonly enabled: string

    private readonly system: string

    private readonly platform: string

    private readonly specialName: string

    private readonly version: string

    private readonly changes: string

    private readonly licenseFile: string

    private readonly file: string

    private readonly size: Long

    private readonly validTime: Long

    private readonly retries: string
public constructor (id: string){

            super();
            var id = id

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

this.id= ProductIdGenerator().
                            getNext()
this.basicItemId= id
this.enabled= EntryData.getInstance()!.YES
this.system= "Java"
this.platform= "Android"
this.specialName= EMPTY_STRING
this.version= EMPTY_STRING
this.changes= EMPTY_STRING
this.licenseFile= EMPTY_STRING
this.file= EMPTY_STRING
this.size= (0).toLong()
this.validTime= (0).toLong()
this.retries= EMPTY_STRING
}

public constructor (hashMap: HashMap<Any, Any>){

            super();
            var hashMap = hashMap
this.id= hashMap!.get(DownloadItemData.ID) as String
this.basicItemId= hashMap!.get(BasicItemData.ID) as String
this.enabled= hashMap!.get(EntryData.getInstance()!.ENABLE) as String
this.system= hashMap!.get(DownloadItemData.SYSTEM) as String
this.platform= hashMap!.get(DownloadItemData.PLATFORM) as String
this.specialName= hashMap!.get(DownloadItemData.SPECIAL_NAME) as String
this.version= hashMap!.get(DownloadItemData.VERSION) as String
this.changes= hashMap!.get(DownloadItemData.CHANGES) as String
this.licenseFile= hashMap!.get(DownloadItemData.LICENSE_FILE) as String
this.file= hashMap!.get(DownloadItemData.FILE) as String

    var value: string = hashMap!.get(DownloadItemData.SIZE) as String;
        
        


                        if(!StringValidationUtil.getInstance()!.isEmpty(value))
                        
                                    {
                                    this.size= (value).toLong()

                                    }
                                
                        else {
                            this.size= 0 as Long

                        }
                            

    var validTime: string = hashMap!.get(DownloadItemData.VALID_TIME) as String;
        
        


                        if(!StringValidationUtil.getInstance()!.isEmpty(validTime))
                        
                                    {
                                    this.validTime= (validTime).toLong()

                                    }
                                
                        else {
                            
    var totalYears: string = hashMap!.get(DownloadItemData.VALID_TIME_YEARS) as String;
        
        


    var totalMonths: string = hashMap!.get(DownloadItemData.VALID_TIME_MONTHS) as String;
        
        


    var totalDays: string = hashMap!.get(DownloadItemData.VALID_TIME_DAYS) as String;
        
        


    var totalHours: string = hashMap!.get(DownloadItemData.VALID_TIME_HOURS) as String;
        
        


    var totalMinutes: string = hashMap!.get(DownloadItemData.VALID_TIME_MINUTES) as String;
        
        


    var totalSeconds: string = hashMap!.get(DownloadItemData.VALID_TIME_SECONDS) as String;
        
        


    var totalTime: number = TimeUtil.getInstance()!.getTotalTime(totalYears, totalMonths, totalDays, totalHours, totalMinutes, totalSeconds)!;
        
        

this.validTime= totalTime as Long

                        }
                            
this.retries= hashMap!.get(DownloadItemData.RETRIES) as String
}


    public toVector(): Vector{

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = calendar.getTimeInMillis() as Long.
                            toString()!;
        
        


    var values: Vector = new Vector();
        
        

values.add(getId())
values.add(this.basicItemId)
values.add(this.enabled)
values.add(this.getSpecialName())
values.add(this.getVersion())
values.add(this.getChanges())
values.add(this.getSystem())
values.add(this.getPlatform())
values.add(this.getLicenseFile())
values.add(this.getFile())
values.add(this.getSize()!.toString())
values.add(this.getValidTime()!.toString())
values.add(this.getRetries())
values.add(time)
values.add(time)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public toHashMap(): HashMap<Any, Any>{

    var values: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

values.put(DownloadItemData.ID, this.getId())
values.put(BasicItemData.ID, this.basicItemId)
values.put(EntryData.getInstance()!.ENABLE, this.enabled)
values.put(DownloadItemData.SYSTEM, this.getSystem())
values.put(DownloadItemData.PLATFORM, this.getPlatform())
values.put(DownloadItemData.SPECIAL_NAME, this.getSpecialName())
values.put(DownloadItemData.VERSION, this.getVersion())
values.put(DownloadItemData.CHANGES, this.getChanges())
values.put(DownloadItemData.LICENSE_FILE, this.getLicenseFile())
values.put(DownloadItemData.FILE, this.getFile())
values.put(DownloadItemData.SIZE, this.getSize()!.toString())
values.put(DownloadItemData.VALID_TIME, this.getValidTime()!.toString())
values.put(DownloadItemData.RETRIES, this.getRetries())

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

values.put(EntryData.getInstance()!.LASTMODIFIED, time)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


    public getSystem(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return system;
    
}


    public getPlatform(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return platform;
    
}


    public getSpecialName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return specialName;
    
}


    public getVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return version;
    
}


    public getChanges(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return changes;
    
}


    public getLicenseFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return licenseFile;
    
}


    public getFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return file;
    
}


    public getSize(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return size;
    
}


    public getValidTime(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return validTime;
    
}


    public getRetries(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return retries;
    
}


}
                
            

