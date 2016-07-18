interface JQueryAutogrowOptions {
    /**
     * defaults to $(document). The parent element events will be delegated to. 
     */
    context?: any;
    /**
     * defaults to true. Set to false if you don't want the resizing of the box to be animated.
     */
    animate?: boolean;
    /**
     * defaults to 200. Speed of the resize animation.
     */
    speed?: number;
    /**
     * defaults to true. Set to false if you don't want the box to stop shrinking when it hits its initial size.
     */
    fixMinHeight?: boolean;
    /**
     * defaults to 'autogrowclone'. Helper CSS class for the clone used for measuring sizes. 
     */
    cloneClass?: string;
    /**
     * defaults to false. Will trigger autogrow on init.
     */
    onInitialize?: boolean;

}

interface JQuery {
    autogrow(options?: JQueryAutogrowOptions): JQuery;
}


declare module 'autogrow' {
    export default JQuery;
}