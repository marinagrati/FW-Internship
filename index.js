// 3. Here we also have multiple correct answers

// first solution [1,10,'0','1','false','true'] is a CORRECT answer because NON EMPTY strings in JS are truthy values
const truthyValues1 = arr.filter(Boolean);

// second solution [1,10,'1','true', ... ] is a CORRECT answer if you need a strict filtering
const truthyValues2 = arr.filter((val) => {
  return (
    !!val &&
    !["false", "0", "null", "undefined"].includes(String(val).toLowerCase())
  );
});
