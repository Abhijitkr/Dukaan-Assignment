import _ from "lodash";

const transactions = [
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
];

const transactionData = Array.from({ length: 342 }, () => transactions[0]);

export function getTransactions(page, limit) {
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit; i++) {
    array.push(transactionData[i]);
  }
  return array;
}

export function getTransactionsLength() {
  return transactionData.length;
}

// export function getPaginationRange(totalPage, page, limit, siblings) {
//   let totalPageNoInArray = 5 + siblings;
//   if (totalPageNoInArray >= totalPage) return _.range(1, totalPage + 1);

//   let leftSiblingsIndex = Math.max(page - siblings, 1);
//   let rightSiblingsIndex = Math.min(page + siblings, totalPage);

//   let showLeftDots = leftSiblingsIndex > 2;
//   let showRightDots = rightSiblingsIndex > totalPage - 2;

//   if (!showLeftDots && showRightDots) {
//     let leftItemsCount = 3 + 2 * siblings;
//     let leftRange = _.range(1, leftItemsCount + 1);
//     return [...leftRange, totalPage];
//   } else if (showLeftDots && !showRightDots) {
//     let rightItemsCount = 3 + 2 * siblings;
//     let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
//     return [1, ...rightRange];
//   } else {
//     return _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
//   }
// }

export function getPaginationRange(totalPage, page, limit, siblings) {
  let totalPageNoInArray = 5 + siblings;
  if (totalPageNoInArray >= totalPage) return _.range(1, totalPage + 1);

  let leftSiblingsIndex = Math.max(page - siblings, 1);
  let rightSiblingsIndex = Math.min(page + siblings, totalPage);

  let showLeftDots = leftSiblingsIndex > 2;
  let showRightDots = rightSiblingsIndex > totalPage - 2;

  if (!showLeftDots && showRightDots) {
    let leftItemsCount = 3 + 2 * siblings;
    let leftRange = _.range(1, leftItemsCount + 1);
    return [...leftRange, " ...", totalPage];
  } else if (showLeftDots && !showRightDots) {
    let rightItemsCount = 3 + 2 * siblings;
    let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
    return [1, "... ", ...rightRange];
  } else {
    let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
    return [1, "... ", ...middleRange, " ...", totalPage];
  }
}
