function timeZoneAlert(event) {
  alert(
    `it is ${moment
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A")} in ${event.target.value}`
  );
}
let city = document.querySelector("#cities");
city.addEventListener("change", timeZoneAlert);
