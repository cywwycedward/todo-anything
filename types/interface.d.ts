export interface IElectronWindowAPI {
    createWindow: (html:string,preload?:string,has_frame:boolean=true,safe_mode:boolean=true) => Promise<void>,
    createFloatingBar: () => Promise<void>
  }
  
  declare global {
    interface Window {
      electronWindowAPI: IElectronWindowAPI
    }
  }