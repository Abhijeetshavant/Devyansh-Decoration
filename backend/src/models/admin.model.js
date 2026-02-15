// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const adminSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },

//     password: {
//       type: String,
//       required: true,
//       minlength: 6,
//       select: false, // hide password by default
//     },

//     role: {
//       type: String,
//       enum: ["super_admin", "admin", "manager", "support"],
//       default: "admin",
//     },

//     permissions: [
//       {
//         type: String,
//         enum: [
//           "manage_users",
//           "manage_products",
//           "manage_orders",
//           "manage_categories",
//           "manage_payments",
//           "view_reports",
//         ],
//       },
//     ],

//     isActive: {
//       type: Boolean,
//       default: true,
//     },

//     lastLogin: {
//       type: Date,
//     },
//   },
//   { timestamps: true },
// );

// /* 🔐 Hash password before save */
// adminSchema.pre("save", async function () {
//   if (!this.isModified("password")) return;
//   this.password = await bcrypt.hash(this.password, 10);
// });

// /* 🔍 Compare password method */
// adminSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
// const AdminModel = mongoose.model("Admin", adminSchema);

// module.exports = AdminModel;
