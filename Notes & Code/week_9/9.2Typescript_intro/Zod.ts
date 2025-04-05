/*
> Type inference in Zod 
 - when using zod, we all are doing runtime validations. 
*/

import { z } from "zod";
import express from "express";
const app = express();

// define the backend for the profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "you must be 18 years old!!" }).optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  type finalUserSchema = z.infer<typeof userProfileSchema>;
  const updateBody: finalUserSchema = req.body; //Assign a type to the updateBody
  if (!success) {
    res.status(411).json({
      msg: "Error",
    });
    return;
  }

  // update DB here
  res.json({
    msg: "user updated",
  });
});

app.listen(3000, () => {
  console.log("server started!!");
});
