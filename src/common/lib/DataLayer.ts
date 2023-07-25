type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

const logEvent = (data: { [key: string]: any }) => {
  window.dataLayer.push(data);
};

const getTrackerParams = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const gclid = urlParams.get("gclid");
  const utm_source = urlParams.get("utm_source");
  const utm_medium = urlParams.get("utm_medium");
  const utm_campaign = urlParams.get("utm_campaign");
  const utm_content = urlParams.get("utm_content");

  let ip;
  const ipify = await fetch("https://api.ipify.org?format=json");
  if (ipify) {
    const response = await ipify.json();
    if (response && response.ip) {
      ip = response.ip;
    }
  }

  const trackerParams = {
    gclid: gclid ? gclid.replace(/[^a-z0-9]/gi, "") : "",
    utm_source: utm_source ? utm_source.replace(/[^a-z0-9]/gi, "") : "",
    utm_medium: utm_medium ? utm_medium.replace(/[^a-z0-9]/gi, "") : "",
    utm_campaign: utm_campaign ? utm_campaign.replace(/[^a-z0-9]/gi, "") : "",
    utm_content: utm_content ? utm_content.replace(/[^a-z0-9]/gi, "") : "",
    referer: document.referrer,
    url: window.location.href,
    ip,
  };

  return trackerParams;
};

const exported = {
  logEvent,
  getTrackerParams,
};

export default exported;
