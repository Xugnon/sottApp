import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

export const router = Router();

//Multer for image upload
const upload = multer({
  storage: multer.diskStorage({
    //Save on 'uploads' folder
    destination(req, file, callback) {
      //__dirname is the full path to the file, so go back to a folder ('..') and save it in 'uploads'
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    //Change the name of the image to the current date next to the original name
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

//List categories
router.get('/categories', listCategories);

//Create category
router.post('/categories', createCategory);

//List products
router.get('/products', listProducts);

//Create product
router.post('/products', upload.single('image'), createProduct);

//Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

//List orders
router.get('/orders', (req, res) => {
  res.send('ok');
});

//Create order
router.post('/orders', (req, res) => {
  res.send('ok');
});

//Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});

//Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});
