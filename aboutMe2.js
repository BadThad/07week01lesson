const fetchName = (displayData) => {
  setTimeout(() => {
    const myName = "My name is Peter Fänge.";
    displayData(myName);
  }, 1000);
};

const fetchAge = (displayData) => {
  setTimeout(() => {
    const age = "I a 36 years old.";
    displayData(age);
  }, 1000);
};

const fetchLocation = (displayData) => {
  setTimeout(() => {
    const location =
      "I was born in Peshawar, Pakistan but I now i live in Viken, Sweden.";
    displayData(location);
  }, 1000);
};

const fetchHobbies = (displayData) => {
  setTimeout(() => {
    const hobbies =
      "My hobbies include reading, gaming, gardening, and woodwork.";
    displayData(hobbies);
  }, 1000);
};

const displayData = (data) => {
  console.log(data);
};

fetchName(displayData);
fetchAge(displayData);
fetchLocation(displayData);
fetchHobbies(displayData);
