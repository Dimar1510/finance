const { prisma } = require("../prisma/prisma-client");
const errorMessage = require("../utils/error-message");
const initProducts = require("../data/products");

const ProductController = {
  createProduct: async (req, res, next) => {
    const { price, expense, date, name } = req.body;
    if (!price || !expense || !date || !name) {
      return res.status(400).json({ error: "Field missing" });
    }

    try {
      const product = await prisma.product.create({
        data: {
          price: Number.parseInt(price),
          expense: Number.parseInt(expense),
          date,
          name,
        },
      });

      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      next(errorMessage(500, "Error in create product"));
    }
  },

  getAllProducts: async (req, res, next) => {
    try {
      const products = await prisma.product.findMany({
        include: {
          transactions: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      res.status(201).json(products);
    } catch (error) {
      console.log(error);
      next(errorMessage(500, "Error in create product"));
    }
  },

  populate: async (req, res, next) => {
    for (let item of initProducts) {
      try {
        await prisma.product.create({
          data: {
            price: item.price,
            expense: item.expense,
            date: item.date,
            name: item.name,
          },
        });
      } catch (error) {
        console.log(error);
        next(errorMessage(500, "Error in create product"));
      }
    }
    res.status(201).json({ message: "done" });
  },
};

module.exports = ProductController;
