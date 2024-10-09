var icon1 = "../assets/icons/cloud-2.svg";
var icon3 = "../assets/icons/cloud-rain-1.svg";
var icon4 = "../assets/icons/cloud-rain-2.svg";
var icon5 = "../assets/icons/cloud-rain-lighting.svg";
var icon6 = "../assets/icons/cloud-rain.svg";
var icon7 = "../assets/icons/cloud.svg";
var icon8 = "../assets/icons/cloudest.svg";
var icon9 = "../assets/icons/hot.svg";
var icon10 = "../assets/icons/night-cloud.svg";
var icon11 = "../assets/icons/night-warm.svg";
var icon12 = "../assets/icons/night.svg";
var icon13 = "../assets/icons/sun-cloud-2.svg";
var icon14 = "../assets/icons/sun.svg";
var icon15 = "../assets/icons/warm.svg";
var icon17 = "../assets/icons/wind.svg";
var icon18 = "../assets/icons/sun-cloud.svg";
var icon19 = "../assets/icons/sun-cloud-3.svg";
export var dayIconNames = [{
  name: "Sunny",
  icon: icon14
}, {
  name: "Mostly Sunny",
  icon: icon18
}, {
  name: "Partly Sunny",
  icon: icon18
}, {
  name: "Intermittent Clouds",
  icon: icon19
}, {
  name: "Hazy Sunshine",
  icon: icon13
}, {
  name: "Mostly Cloudy",
  icon: icon7
}, {
  name: "Cloudy",
  icon: icon1
}, {
  name: "Dreary (Overcast)",
  icon: icon8
}, {
  name: "Fog",
  icon: icon8
}, {
  name: "Showers",
  icon: icon4
}, {
  name: "Mostly Cloudy w/ Showers",
  icon: icon3
}, {
  name: "Partly Sunny w/ Showers",
  icon: icon3
}, {
  name: "T-Storms",
  icon: icon5
}, {
  name: "Mostly Cloudy w/ T-Storms",
  icon: icon5
}, {
  name: "Partly Sunny w/ T-Storms",
  icon: icon4
}, {
  name: "Rain",
  icon: icon15
}, {
  name: "Flurries",
  icon: icon8
}, {
  name: "Mostly Cloudy w/ Flurries",
  icon: icon8
}, {
  name: "Partly Sunny w/ Flurries",
  icon: icon8
}, {
  name: "Snow",
  icon: icon8
}, {
  name: "Mostly Cloudy w/ Snow",
  icon: icon8
}, {
  name: "Ice",
  icon: icon8
}, {
  name: "Sleet",
  icon: icon8
}, {
  name: "Freezing Rain",
  icon: icon6
}, {
  name: "Rain and Snow",
  icon: icon6
}, {
  name: "Hot",
  icon: icon9
}, {
  name: "Cold",
  icon: icon8
}, {
  name: "Windy",
  icon: icon17
}, {
  name: "Clear",
  icon: icon12
}, {
  name: "Mostly Clear",
  icon: icon12
}, {
  name: "Partly Cloudy",
  icon: icon10
}, {
  name: "Intermittent Clouds",
  icon: icon10
}, {
  name: "Hazy Moonlight",
  icon: icon10
}, {
  name: "Mostly Cloudy",
  icon: icon10
}, {
  name: "Partly Cloudy w/ Showers",
  icon: icon11
}, {
  name: "Mostly Cloudy w/ Showers",
  icon: icon11
}, {
  name: "Partly Cloudy w/ T-Storms",
  icon: icon5
}, {
  name: "Mostly Cloudy w/ T-Storms",
  icon: icon5
}, {
  name: "Mostly Cloudy w/ Flurries",
  icon: icon5
}, {
  name: "Mostly Cloudy w/ Snow",
  icon: icon5
}];
export var nightIconNames = [{
  name: "Mostly Cloudy",
  icon: icon1
}, {
  name: "Cloudy",
  icon: icon1
}, {
  name: "Dreary (Overcast)",
  icon: icon8
}, {
  name: "Fog",
  icon: icon8
}, {
  name: "Showers",
  icon: icon4
}, {
  name: "Mostly Cloudy w/ Showers",
  icon: icon4
}, {
  name: "T-Storms",
  icon: icon5
}, {
  name: "Mostly Cloudy w/ T-Storms",
  icon: icon5
}, {
  name: "Partly Sunny w/ T-Storms",
  icon: icon4
}, {
  name: "Rain",
  icon: icon15
}, {
  name: "Flurries",
  icon: icon8
}, {
  name: "Mostly Cloudy w/ Flurries",
  icon: icon8
}, {
  name: "Partly Sunny w/ Flurries",
  icon: icon8
}, {
  name: "Snow",
  icon: icon8
}, {
  name: "Mostly Cloudy w/ Snow",
  icon: icon8
}, {
  name: "Ice",
  icon: icon8
}, {
  name: "Sleet",
  icon: icon8
}, {
  name: "Freezing Rain",
  icon: icon6
}, {
  name: "Rain and Snow",
  icon: icon6
}, {
  name: "Hot",
  icon: icon12
}, {
  name: "Cold",
  icon: icon8
}, {
  name: "Windy",
  icon: icon17
}, {
  name: "Clear",
  icon: icon12
}, {
  name: "Mostly Clear",
  icon: icon12
}, {
  name: "Partly Cloudy",
  icon: icon10
}, {
  name: "Intermittent Clouds",
  icon: icon10
}, {
  name: "Hazy Moonlight",
  icon: icon10
}, {
  name: "Mostly Cloudy",
  icon: icon10
}, {
  name: "Partly Cloudy w/ Showers",
  icon: icon11
}, {
  name: "Mostly Cloudy w/ Showers",
  icon: icon11
}, {
  name: "Partly Cloudy w/ T-Storms",
  icon: icon5
}, {
  name: "Mostly Cloudy w/ T-Storms",
  icon: icon5
}, {
  name: "Mostly Cloudy w/ Flurries",
  icon: icon5
}, {
  name: "Mostly Cloudy w/ Snow",
  icon: icon5
}];
export function getDayIcon(iconName) {
  return dayIconNames.find(function (icon) {
    return icon.name.toLowerCase() === iconName.toLowerCase();
  });
}
export function getNightIcon(iconName) {
  return nightIconNames.find(function (icon) {
    return icon.name.toLowerCase() === iconName.toLowerCase();
  });
}

// const icon = computed(() => {
//   if (props.day === "Day") {
//     return dayIconNames.find(
//       (icon) => icon.name.toLowerCase() === props.iconName.toLowerCase()
//     );
//   } else {
//     const icon = NightIconNames.find(
//       (icon) => icon.name.toLowerCase() === props.iconName.toLowerCase()
//     );
//     return icon;
//   }
// });