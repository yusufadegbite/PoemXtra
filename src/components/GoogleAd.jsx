import { useEffect } from "react";

const GoogleAd = ({ adClient, adSlot, adFormat = "auto", fullWidth = true }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
             style={{ display: "block" }}
             data-ad-client={adClient}
             data-ad-slot={adSlot}
             data-ad-format={adFormat}
             data-full-width-responsive={fullWidth.toString()}>
        </ins>
    );
};

export default GoogleAd;
