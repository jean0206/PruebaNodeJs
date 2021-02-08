console.log("Hola");

const radiansConvert = (grade) => {
  return grade * (Math.PI / 180);
};

const calculateDistance = (latOne, lenOne, latTwo, lenTwo, distance) => {
  let formule =
    6371 *
    Math.acos(
    Math.cos(radiansConvert(90 - latOne)) *
    Math.cos(radiansConvert(90 - latTwo)) +
    Math.sin(radiansConvert(90 - latOne)) *
    Math.sin(radiansConvert(90 - latTwo)) *
    Math.cos(radiansConvert(lenOne - lenTwo))
    );
  if (formule <= distance) {
    return true;
  } else return false;
};

module.exports = { calculateDistance };
