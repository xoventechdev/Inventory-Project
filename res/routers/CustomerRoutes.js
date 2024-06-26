import { Router } from "express";
import {
  CustomerCreate,
  CustomerDelete,
  CustomerDropDown,
  CustomerList,
  CustomerStatus,
  CustomerUpdate,
} from "../controllers/CustomerControllers.js";
import { AuthVerified } from "../middlewares/AuthVerification.js";

const CustomerRoutes = Router();

CustomerRoutes.post("/create", AuthVerified, CustomerCreate);
CustomerRoutes.put("/update/:id", AuthVerified, CustomerUpdate);
CustomerRoutes.get("/dropdownlist", AuthVerified, CustomerDropDown);
CustomerRoutes.get(
  "/tableList/:pageNo/:perPage/:searchKeyword",
  AuthVerified,
  CustomerList
);
CustomerRoutes.delete("/delete/:id", AuthVerified, CustomerDelete);
CustomerRoutes.put("/statusUpdate/:id", AuthVerified, CustomerStatus);

export default CustomerRoutes;
