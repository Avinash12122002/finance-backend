const Record = require("../config/models/Record");

exports.getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    let totalIncome = 0;
    let totalExpense = 0;

    const categoryMap = {};

    records.forEach((rec) => {
      if (rec.type === "income") {
        totalIncome += rec.amount;
      } else {
        totalExpense += rec.amount;
      }

      if (!categoryMap[rec.category]) {
        categoryMap[rec.category] = 0;
      }

      categoryMap[rec.category] += rec.amount;
    });

    res.json({
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense,
      categoryBreakdown: categoryMap,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
