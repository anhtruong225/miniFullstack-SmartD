import Products from "../models/Products.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.find();
    if (!products.length) {
      throw { statusCode: 404, message: "product not found" };
    }
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Products.findById(id);
    if (!product) {
      throw { statusCode: 404, message: "product not found" };
    }
    res.send(product);
  } catch (error) {
    next(error);
  }
};

export const addNewProduct = async (req, res, next) => {
  try {
    const {
      product_name,
      description,
      category,
      image_URL,
      date_of_expiry,
      manufacture,
      country_of_origin,
      supplier,
      date_of_supply,
      quantity_in_items,
      quantity_remaining,
    } = req.body;
    const newProduct = await Products.create({
      product_name,
      category,
      description,
      image_URL,
      date_of_expiry,
      manufacture,
      country_of_origin,
      supplier,
      date_of_supply,
      quantity_in_items,
      quantity_remaining,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const {
    product_name,
    description,
    category,
    image_URL,
    date_of_expiry,
    manufacture,
    country_of_origin,
    supplier,
    date_of_supply,
    quantity_in_items,
    quantity_remaining,
  } = req.body;

  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      id,
      {
        product_name,
        description,
        category,
        image_URL,
        date_of_expiry,
        manufacture,
        country_of_origin,
        supplier,
        date_of_supply,
        quantity_in_items,
        quantity_remaining,
      },
      { new: true }
    );
    if (!updatedProduct) {
      throw { statusCode: 404, message: "product not found" };
    }
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

export const addTagToCategory = async (req, res, next) => {
  const { id } = req.params;
  const { category } = req.body;

  try {
    const product = await Products.findById(id);
    if (!product) {
      throw { statusCode: 404, message: "product not found" };
    }
    product.category.push(category);
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleteProduct = await Products.findByIdAndDelete(id);

    if (!deleteProduct) {
      throw { statusCode: 404, message: "product not found" };
    }
    res.status(200).json({ message: "product was deleted" });
  } catch (error) {
    next(error);
  }
};
