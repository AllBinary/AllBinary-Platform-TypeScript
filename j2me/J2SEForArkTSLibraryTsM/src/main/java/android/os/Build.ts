import ArkTsBuild from '@ohos.deviceInfo';
import identifier from '@ohos.identifier.oaid';
import { BusinessError } from '@ohos.base';

/*actual*/ export class Build
{

  /**
   * Returns a unique ID: OAID if permitted, otherwise falls back to safe alternatives.
   */
  private static async getSafeIdentifier(): Promise<string> {
    // 1. Attempt to get OAID (Requires ohos.permission.APP_TRACKING_CONSENT)
    try {
      const oaid = await identifier.getOAID();
      // If tracking is disabled, getOAID returns a string of zeros
      if (oaid && oaid !== '00000000-0000-0000-0000-000000000000') {
        return oaid;
      }
    } catch (err) {
      const error = err as BusinessError;
      console.error(`OAID failed (Code: ${error.code}): ${error.message}`);
    }

    // 2. Use AAID as a fallback for app-instance identification
    // This is the recommended "safe" ID for most non-ads use cases
    // Note: AAID resets if the app is uninstalled.
    try {
      // Some versions expose AAID via deviceInfo or AAID service
      // Replace with your specific SDK's AAID retrieval method if necessary
      // Requires ohos.permission.sec.ACCESS_UDID
      return ArkTsBuild.udid || 'anonymous_id';
    } catch (e) {
      return 'unavailable';
    }
  }

  public static async init() {
    try {
      // This converts Promise<string> to string
      const id: string = await Build.getSafeIdentifier();
      Build.FINGERPRINT = id;
      console.log("Device ID is: " + id);
    } catch (error) {
      console.error("Could not retrieve ID", error);
    }
  }

  private static getSafeBuildTime(): number {
    // 1. Get raw build time (usually a numeric string or 'unknown')
    const rawBuildTime = ArkTsBuild.buildTime;

    // 2. Safely parse to number
    const parsedTime = Number(rawBuildTime);

    // 3. Return 0 or a default timestamp if parsing fails
    if (isNaN(parsedTime)) {
      console.warn('Failed to parse buildTime: ' + rawBuildTime);
      return 0; // Or a fallback default
    }

    return parsedTime;
  }

  public static readonly BOARD: string = ArkTsBuild.hardwareModel;
  public static readonly BRAND: string = ArkTsBuild.brand;
  public static readonly DEVICE: string = ArkTsBuild.manufacture;
  public static FINGERPRINT: string = "Loading...";
  public static readonly HOST: string = ArkTsBuild.buildHost;
  public static readonly ID: string = ArkTsBuild.versionId;
  public static readonly MODEL: string = ArkTsBuild.productModel;
  public static readonly PRODUCT: string = ArkTsBuild.productSeries;
  public static readonly TAGS: string = ArkTsBuild.securityPatchTag;
  public static readonly TIME: number = Build.getSafeBuildTime();
  public static readonly TYPE: string = ArkTsBuild.deviceType;
  public static readonly USER: string = ArkTsBuild.buildUser;

}

