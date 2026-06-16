// App entry points. Update the Play Store URL once the app is published.
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.raadapp.raad";
export const WEB_POS_URL = "https://pos.raadapp.com/login";

// Detect a mobile device from the user agent (used to decide store vs web).
export function isMobileUA(ua: string): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
    ua
  );
}
