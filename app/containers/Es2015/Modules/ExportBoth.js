const info = {
  name: 'Nader',
  age: '36',
  company: 'React Native Training',
  currentCity: 'Seattle',
};

const logInfo = () => {
  console.log('Name:', info.name);
  console.log('Age:', info.age);
  console.log('Company:', info.company);
};

export { logInfo, info as default };
