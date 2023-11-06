# <span style="font-size:larger;">SottApp</span>

Welcome to the repository of SottApp, a restaurant order and customer management application. This project was built using Node.js, TypeScript, Express, MongoDB, Mongoose, and Docker.

## <span style="font-size:larger;">How to Use</span>

1. <span style="font-size:larger;">Installation Requirements:</span>

   - Make sure you have Node.js installed on your machine.
   - Ensure that MongoDB is running on port 27017.

2. <span style="font-size:larger;">Clone the Repository:</span>

   - Execute the following command to clone the repository:
     ```
     git clone https://github.com/Xugnon/sottApp.git
     ```

3. <span style="font-size:larger;">Navigate to the Project Directory:</span>

   - Navigate to the project folder with the command:
     ```
     cd sottapp
     ```

4. <span style="font-size:larger;">Install Dependencies:</span>

   - Run the following command to install project dependencies:
     ```
     yarn
     ```

5. <span style="font-size:larger;">Start the Server:</span>

   - Start the server with the command:
     ```
     yarn dev
     ```

6. <span style="font-size:larger;">Access the API:</span>
   - The API will be accessible at: `http://localhost:3001`

<span style="font-size:larger;">Feel free to explore the application's routes and test its functionalities.</span>

## <span style="font-size:larger;">Application Routes</span>

- **GET /categories:** Lists categories.
- **POST /categories:** Creates a category.
- **GET /products:** Lists products.
- **POST /products:** Creates a product with image upload.
- **GET /categories/:categoryId/products:** Lists products by category.
- **GET /orders:** Lists orders.
- **POST /orders:** Creates an order.
- **PATCH /orders/:orderId:** Changes the order status.
- **DELETE /orders/:orderId:** Deletes/cancels an order.

## <span style="font-size:larger;">License</span>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.

---

<span style="font-size:larger;">Developed by Lucas Franco</span>
