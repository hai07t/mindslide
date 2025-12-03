const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

if (userTimeZone === "Asia/Ho_Chi_Minh" || userTimeZone === "Asia/Saigon") {
  var to = "https://www.google.com/";
  window.location.href = to;
}
