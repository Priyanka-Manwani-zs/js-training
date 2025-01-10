const generateRandomDates = (count) => {
  const dates = [];
  for (let i = 0; i < count; i++) {
    const randomDate = new Date(
      new Date().getFullYear(),
      Math.floor(Math.random() * 12),
      Math.ceil(Math.random() * 31)
    );
    dates.push(randomDate);
  }
  return dates;
};

const populateDates = () => {
  const dates = generateRandomDates(10);

  const col1ListItems = document.querySelectorAll("#col1-dates li");
  const col2ListItems = document.querySelectorAll("#col2-dates li");
  const col3ListItems = document.querySelectorAll("#col3-dates li");
  const descendingDates = [...dates].sort((a, b) => b - a);
  const ascendingDates = [...dates].sort((a, b) => a - b);

  const populateListItems = (listItems, datesArray) => {
    datesArray.forEach((date, index) => {
      if (listItems[index]) {
        listItems[index].textContent = date.toDateString();
      }
    });
  };

  populateListItems(col1ListItems, dates);
  populateListItems(col2ListItems, descendingDates);
  populateListItems(col3ListItems, ascendingDates);
};

window.onload = populateDates;
