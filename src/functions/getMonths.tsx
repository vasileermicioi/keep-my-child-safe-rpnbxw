export const getAgeInMonths = (
  birth_year: number,
  birth_month: number,
  birth_date: number
) => {
  const today = new Date();
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let current_date = today.getDate();
  let current_month = today.getMonth();
  let current_year = today.getFullYear();

  if (birth_date > current_date) {
    current_date = current_date + month[birth_month - 1];
    current_month = current_month - 1;
  }

  if (birth_month > current_month) {
    current_year = current_year - 1;
    current_month = current_month + 12;
  }

  //   const calculated_date = current_date - birth_date;
  const calculated_month = current_month - birth_month;
  const calculated_year = current_year - birth_year;
  return calculated_year * 12 + calculated_month;
};
