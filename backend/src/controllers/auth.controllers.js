// const userModel = require("../models/user.model");
// const AdminModel = require("../models/admin.model");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// async function registerUser(req, res) {
//   const { name, email, password } = req.body;

//   // console.log(name, email, password);
//   // // console.log(req.body);

//   const isUserAlreadyExists = await userModel.findOne({
//     email,
//   });
//   if (isUserAlreadyExists) {
//     return res.status(400).json({
//       message: "user already exists",
//     });
//   }
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = await userModel.create({
//     name,
//     email,
//     password: hashedPassword,
//   });

//   const token = jwt.sign(
//     {
//       id: user._id,
//     },
//     "process.env.JET_SECRET",
//   );

//   res.cookie("token", token);

//   res.status(201).json({
//     message: "user register successfully",
//     user: {
//       _id: user._id,
//       email: user.email,
//       name: user.name,
//     },
//   });
// }

// async function loginUser(req, res) {
//   const { email, password } = req.body;

//   const user = await userModel.findOne({
//     email,
//   });
//   if (!user) {
//     return res.status(400).json({
//       message: "Invalid email or password",
//     });
//   }

//   const isPasswordValid = await bcrypt.compare(password, user.password);

//   if (!isPasswordValid) {
//     return res.status(400).json({
//       message: "Invalid email or password",
//     });
//   }

//   const token = jwt.sign(
//     {
//       id: user._id,
//     },
//     "process.env.JWT_SECRET",
//   );

//   res.cookie("token", token);
//   res.status(200).json({
//     message: "user logged in sucessfully",
//     user: {
//       id: user._id,
//       email: user.email,
//       name: user.name,
//     },
//   });
// }

// function logoutUser(req, res) {
//   res.clearCookie("token");
//   res.status(200).json({
//     message: "user logged out successfuly",
//   });
// }
// async function registerAdmin(req, res) {
//   try {
//     const { name, email, password, role, permissions } = req.body;

//     // 1️⃣ Validate input
//     if (!name || !email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email and password are required",
//       });
//     }

//     // 2️⃣ Check if admin already exists
//     const existingAdmin = await AdminModel.findOne({ email });
//     if (existingAdmin) {
//       return res.status(409).json({
//         success: false,
//         message: "Admin already exists with this email",
//       });
//     }

//     // 3️⃣ Create admin
//     const admin = await AdminModel.create({
//       name,
//       email,
//       password, // auto-hashed by pre-save hook
//       role: role || "admin",
//       permissions: permissions || [],
//     });

//     // 4️⃣ Response (no password)
//     res.status(201).json({
//       success: true,
//       message: "Admin registered successfully",
//       admin: {
//         id: admin._id,
//         name: admin.name,
//         email: admin.email,
//         role: admin.role,
//         permissions: admin.permissions,
//       },
//     });
//   } catch (error) {
//     console.error("Register Admin Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// }
// async function loginAdmin(req, res) {
//   try {
//     const { email, password } = req.body;

//     // 1️⃣ Validate input
//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Email and password are required",
//       });
//     }

//     // 2️⃣ Find admin & include password
//     const admin = await AdminModel.findOne({ email }).select("+password");

//     if (!admin) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }

//     // 3️⃣ Check account status
//     if (!admin.isActive) {
//       return res.status(403).json({
//         success: false,
//         message: "Admin account is disabled",
//       });
//     }

//     // 4️⃣ Compare password
//     const isMatch = await admin.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }

//     // 5️⃣ Generate JWT
//     const token = jwt.sign(
//       {
//         id: admin._id,
//         role: admin.role,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" },
//     );

//     // 6️⃣ Save last login
//     admin.lastLogin = new Date();
//     await admin.save();

//     // 7️⃣ Set token in HTTP-only cookie ✅
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
//     });

//     // 8️⃣ Response (NO token in JSON)
//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       admin: {
//         id: admin._id,
//         name: admin.name,
//         email: admin.email,
//         role: admin.role,
//         permissions: admin.permissions,
//       },
//     });
//   } catch (error) {
//     console.error("Login Admin Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// }
// function logoutAdmin(req, res) {
//   res.clearCookie("token");
//   res.status(200).json({
//     message: "Admin logged out successfully",
//   });
// }

// module.exports = {
//   registerUser,
//   loginUser,
//   logoutUser,
//   registerAdmin,
//   loginAdmin,
//   logoutAdmin,
// };
