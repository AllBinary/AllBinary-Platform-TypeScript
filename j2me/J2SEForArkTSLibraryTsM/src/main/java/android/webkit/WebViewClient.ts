import { WebView } from "./WebView";


/*actual*/ export class WebViewClient
{
  onPageFinished(view: WebView, url: string) {
    throw new Error('Method not implemented.');
  }
  onReceivedError(view: WebView, errorCode: number, description: string, failingUrl: string) {
    throw new Error('Method not implemented.');
  }

}
