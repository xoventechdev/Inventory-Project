import { Router } from "express";
import { AuthVerified } from "../middlewares/AuthVerification.js";
import {
  ExpenseTypeCreate,
  ExpenseTypeDelete,
  ExpenseTypeDropDown,
  ExpenseTypeList,
  ExpenseTypeStatus,
  ExpenseTypeUpdate,
} from "../controllers/expense/ExpenseTypeControllers.js";

const ExpenseTypeRoutes = new Router();

ExpenseTypeRoutes.post("/create", AuthVerified, ExpenseTypeCreate);
ExpenseTypeRoutes.put("/update/:id", AuthVerified, ExpenseTypeUpdate);
ExpenseTypeRoutes.get("/dropdownlist", AuthVerified, ExpenseTypeDropDown);
ExpenseTypeRoutes.get(
  "/tableList/:pageNo/:perPage/:searchKeyword",
  AuthVerified,
  ExpenseTypeList
);
ExpenseTypeRoutes.delete("/delete/:id", AuthVerified, ExpenseTypeDelete);
ExpenseTypeRoutes.put("/statusUpdate/:id", AuthVerified, ExpenseTypeStatus);

export default ExpenseTypeRoutes;
