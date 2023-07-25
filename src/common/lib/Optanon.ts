type WindowWithDataLayer = Window & {
  Optanon: any;
};

declare const window: WindowWithDataLayer;

const triggerGoogleAnalyticsEvent = (val1: string, val2: string) => {
  window.Optanon.TriggerGoogleAnalyticsEvent(val1, val2);
};

const exported = {
  triggerGoogleAnalyticsEvent,
};

export default exported;
