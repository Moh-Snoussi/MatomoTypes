export declare namespace Matomo {
    export type Tracker = {
        addDownloadExtensions: Function,
        addEcommerceItem: Function,
        addListener: Function,
        addPlugin: Function,
        addTracker: Function,
        alwaysUseSendBeacon: Function,
        appendToTrackingUrl: Function,
        clearEcommerceCart: Function,
        deleteCookies: Function,
        deleteCustomDimension: Function,
        deleteCustomVariable: Function,
        deleteCustomVariables: Function,
        disableCookies: Function,
        disableCrossDomainLinking: Function,
        disableHeartBeatTimer: Function,
        disablePerformanceTracking: Function,
        disableQueueRequest: Function,
        discardHashTag: Function,
        enableCrossDomainLinking: Function,
        enableHeartBeatTimer: Function,
        enableJSErrorTracking: Function,
        enableLinkTracking: Function,
        forgetConsentGiven: Function,
        forgetUserOptOut: Function,
        getAttributionCampaignKeyword: Function,
        getAttributionCampaignName: Function,
        getAttributionInfo: Function,
        getAttributionReferrerTimestamp: Function,
        getAttributionReferrerUrl: Function,
        getCookie: Function,
        getCookieDomain: Function,
        getCookiePath: Function,
        getCrossDomainLinkingUrlParameter: Function,
        getCurrentUrl: Function,
        getCustomData: Function,
        getCustomDimension: Function,
        getCustomVariable: Function,
        getEcommerceItems: Function,
        getLinkTrackingTimer: Function,
        getNumTrackedPageViews: Function,
        getPiwikUrl: Function,
        getRememberedConsent: Function,
        getRequest: Function,
        getSessionCookieTimeout: Function,
        getSiteId: Function,
        getTrackerUrl: Function,
        getUserId: Function,
        getVisitorId: Function,
        getVisitorInfo: Function,
        hasConsent: Function,
        hasCookies: Function,
        hasRememberedConsent: Function,
        isConsentRequired: Function,
        isCrossDomainLinkingEnabled: Function,
        isUserOptedOut: Function,
        killFrame: Function,
        logAllContentBlocksOnPage: Function,
        optUserOut: Function,
        ping: Function,
        queueRequest: Function,
        redirectFile: Function,
        rememberConsentGiven: Function,
        removeDownloadExtensions: Function,
        removeEcommerceItem: Function,
        requireConsent: Function,
        resetUserId: Function,
        setAPIUrl: Function,
        setCampaignKeywordKey: Function,
        setCampaignNameKey: Function,
        setConsentGiven: Function,
        setConversionAttributionFirstReferrer: Function,
        setCookieDomain: Function,
        setCookieNamePrefix: Function,
        setCookiePath: Function,
        setCountPreRendered: Function,
        setCrossDomainLinkingTimeout: Function,
        setCustomData: Function,
        setCustomDimension: Function,
        setCustomRequestProcessing: Function,
        setCustomUrl: Function,
        setCustomVariable: Function,
        setDoNotTrack: Function,
        setDocumentTitle: Function,
        setDomains: Function,
        setDownloadClasses: Function,
        setDownloadExtensions: Function,
        setEcommerceView: Function,
        setGenerationTimeMs: Function,
        setIgnoreClasses: Function,
        setLinkClasses: Function,
        setLinkTrackingTimer: Function,
        setReferralCookieTimeout: Function,
        setReferrerUrl: Function,
        setRequestContentType: Function,
        setRequestMethod: Function,
        setRequestQueueInterval: Function,
        setSecureCookie: Function,
        setSessionCookie: Function,
        setSessionCookieTimeout: Function,
        setSiteId: Function,
        setTrackerUrl: Function,
        setUserId: Function,
        setVisitStandardLength: Function,
        setVisitorCookieTimeout: Function,
        storeCustomVariablesInCookie: Function,
        trackAllContentImpressions: Function,
        trackContentImpression: Function,
        trackContentImpressionsWithinNode: Function,
        trackContentInteraction: Function,
        trackContentInteractionNode: Function,
        trackEcommerceCartUpdate: Function,
        trackEcommerceOrder: Function,
        trackEvent: Function,
        trackGoal: Function,
        trackLink: Function,
        trackPageView: Function,
        trackRequest: Function,
        trackSiteSearch: Function,
        trackVisibleContentImpressions: Function
    }

    export type TrackerEntry = [keyof Tracker | ((this: Tracker) => void), ...Array<any>]


    export type TrackingCollector = Array<TrackerEntry>
}