const z = require("zod");

// here we use the zod library to create a schema for the user object
const userSchema = z.object({
  userName: z
    .string()
    .min(4, { message: "Username must be at least 4 characters long" })
    .max(20, { message: "Username cannot exceed 20 characters" })
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),

  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters long" })
    .max(20, { message: "First name cannot exceed 20 characters" })
    .trim(),

  lastName: z
    .string()
    .min(3, { message: "Last name must be at least 3 characters long" })
    .max(20, { message: "Last name cannot exceed 20 characters" })
    .trim(),
});

module.exports = userSchema;
