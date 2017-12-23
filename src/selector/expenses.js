import moment from 'moment';
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day'): true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'):true;
    const regTest = new RegExp(text, 'i');

    const textMatch = ~expense.description.search(regTest);
    return startDateMatch && endDateMatch && textMatch;


  }).sort((expense1, expense2)=>{
    if(sortBy==='date'){
      return -1*(expense1.createdAt - expense2.createdAt);
    }else if (sortBy==='amount') {
      return -1*(expense1.amount - expense2.amount);

    }


  });

};
export default getVisibleExpenses;
