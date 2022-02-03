const comma = (str) => String(str).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

const uncomma = (str) => String(str).replace(/[^\d]+/g, '');

const addCommaToMoney = (money) => comma(uncomma(money));

export default addCommaToMoney;
