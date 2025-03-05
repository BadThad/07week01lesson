const fetchName = (callback) => {
  setTimeout(() => {
    console.log("My name is Peter Fänge.");
    callback();
  }, 1000);
};

const fetchAge = (callback) => {
  setTimeout(() => {
    console.log("I a 36 years old.");
    callback();
  }, 1000);
};

const fetchLocation = (callback) => {
  setTimeout(() => {
    console.log("I was born in Peshawar, Pakistan but I now i live in Viken, Sweden.");
    callback();
  }, 1000);
};

const fetchHobbies = (callback) => {
  setTimeout(() => {
    console.log("My hobbies include reading, gaming, gardening, and woodwork.");
    callback();
  }, 1000);
};

fetchName(() => {
    fetchAge(() => {
        fetchLocation(() => {
            fetchHobbies(() => {}
          );
        });
    });
});

