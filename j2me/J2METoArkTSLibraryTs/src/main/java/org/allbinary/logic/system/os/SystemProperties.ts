
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

import deviceInfo from '@ohos.deviceInfo';

import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";


/*actual*/ export class SystemProperties
  extends Object
{


  private static readonly instance: SystemProperties = new SystemProperties();



  /*actual*/ public static getInstance(): SystemProperties{



    //if statement needs to be on the same line and ternary does not work the same way.
    return SystemProperties.instance;

  }

  private OS_NAME: string = "HarmonyOS";

  private constructor (){

    super();
  }


  /*actual*/ public getName(): string{


    // Equivalent to Java's System.getProperty("os.name")
    if(deviceInfo.osFullName == null || deviceInfo.osFullName.length == 0) {
      return this.OS_NAME;
    } else {
      return deviceInfo.osFullName;
    }

  }


  /*actual*/ public getArch(): string{


    // Equivalent to checking os.arch for CPU architecture
    return deviceInfo.abiList;

  }


  /*actual*/ public getVersion(): string{

    let major = deviceInfo.majorVersion;
    let senior = deviceInfo.seniorVersion;
    let feature = deviceInfo.featureVersion;

    return new StringMaker().appendint(major).append(CommonSeps.getInstance().PERIOD).appendint(senior).append(CommonSeps.getInstance().PERIOD).appendint(feature).toString();

  }


}
                
            

