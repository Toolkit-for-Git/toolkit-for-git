/**
 * * Remote.ts
 * This is the remote class for managing remote connections.
 */

export class Remote {
    private _name: string
    private _url: string

    public constructor(url: string, name?: string) {
        this._url = url
        if (name === undefined) {
            this._name = "devops"
            return
        }
        this._name = name
     }

     /**
      * Get remote name
      * @return {string} - The remote name
      */
     public get name(): string {
         return this._name
     }

     /**
      * Get remote url
      * @return {string} - The remote url
      */
     public get url(): string {
         return this._url
     }

     /**
      * Set remote name
      * @param {string} value - The remote name
      */
     public set name(value: string) {
         this._name = value
     }

     /**
      * Set remote url
      * @param {string} value - Remote url address to set as
      */
     public set url(value: string) {
         this._url = value
     }
 }
