import Product from '../models/product.model.js'


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

export const postProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res
            .status(400)
            .json({ success: false, message: 'Please provide all fields' });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error('Error in product creation:', error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

export const putProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price, image },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: `Deleted product with id: ${id}` });
    } catch (error) {
        res.status(404).json({ success: false, message: "Product doesn't exist" });
    }
}