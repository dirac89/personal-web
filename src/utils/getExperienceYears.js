const getExperienceYears = (startYear = 2018) => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };
  
  export default getExperienceYears;