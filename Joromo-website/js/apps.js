// JoCare Pharmacy - Interactive Client-Side Functionality

// 1. Live Daily Operating Status Indicator (Top Bar & Hero)
function updateStoreStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1-6 = Mon-Sat
  const hour = now.getHours();


