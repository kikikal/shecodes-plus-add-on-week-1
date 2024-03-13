function timeZoneAlert(event) {
  let timeZone = "";
  if (event.target.value === "paris") {
    timeZone = `Europe/Paris`;
  }
  if (event.target.value === "tokyo") {
    timeZone = "Asia/Tokyo";
  }
  if (event.target.value === "sydney") {
    timeZone = "Australia/Sydney";
  }
  alert(
    `it is ${moment
      .tz(timeZone)
      .format("dddd, MMMM D, YYYY h:mm A")} in ${timeZone}`
  );
}
let city = document.querySelector("#cities");
city.addEventListener("change", timeZoneAlert);
