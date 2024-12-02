// Switch to or create the database named 'dbpermadi'
db = db.getSiblingDB("dbpermadi");

// Create a collection named 'users'
db.createCollection("users");

// // Seed the 'users' collection with some sample data
// db.users.insertMany([
//   {
//     username: "admin",
//     email: "admin@dbpermadi.com",
//     role: "administrator",
//     createdAt: new Date()
//   },
//   {
//     username: "user1",
//     email: "user1@dbpermadi.com",
//     role: "user",
//     createdAt: new Date()
//   }
// ]);

// // Create another collection named 'products' (optional example)
// db.createCollection("products");

// // Seed the 'products' collection with some sample data
// db.products.insertMany([
//   {
//     name: "Product 1",
//     price: 100,
//     category: "Category A",
//     createdAt: new Date()
//   },
//   {
//     name: "Product 2",
//     price: 200,
//     category: "Category B",
//     createdAt: new Date()
//   }
// ]);

print("Database 'dbpermadi' and collections have been initialized.");
