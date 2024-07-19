const { prisma } = require("../prisma/prisma-client");
const errorMessage = require("../utils/error-message");
const { format } = require("date-fns");

const TransactionController = {
  createTransaction: async (req, res, next) => {
    const { buyer, date, productId } = req.body;
    const id = Number.parseInt(productId);
    if (!buyer || !productId || !date) {
      return res.status(400).json({ error: "Field missing" });
    }

    try {
      // const product = await prisma.product.findUnique({
      //   where: { id },
      // });
      // if (!product) {
      //   return res.status(400).json({ error: "Product not found" });
      // }
      // const transaction = await prisma.transaction.create({
      //   data: {
      //     buyer,
      //     date,
      //     productId: id,
      //   },
      // });

      console.log(
        parseInt(
          format(new Date(date), "D", { useAdditionalDayOfYearTokens: true })
        )
      );
      res.status(201);
      // .json(transaction);
    } catch (error) {
      console.log(error);
      next(errorMessage(500, "Error in create product"));
    }
  },

  getAllTransactions: async (req, res, next) => {
    try {
      const transactions = await prisma.transaction.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(201).json(transactions);
    } catch (error) {
      console.log(error);
      next(errorMessage(500, "Error in create product"));
    }
  },
};

module.exports = TransactionController;
