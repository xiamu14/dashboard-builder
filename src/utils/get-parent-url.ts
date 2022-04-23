export default function getParentUrl() {
  let url = null;
  if (parent !== window) {
    try {
      url = parent.location.href;
    } catch (error) {
      url = document.referrer;
    }
  }
  return url;
}
