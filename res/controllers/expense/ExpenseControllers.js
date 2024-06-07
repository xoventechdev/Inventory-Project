import { ExpenseModel } from "../../models/expense/ExpenseModel.js";
import { CreateService } from "../../services/common/CreateService.js";
import { DeleteService } from "../../services/common/DeleteService.js";
import { DropDownService } from "../../services/common/DropDownService.js";
import { ListWithOneJoinService } from "../../services/common/ListWithOneJoinService.js";
import { StatusService } from "../../services/common/StatusService.js";
import { UpdateService } from "../../services/common/UpdateService.js";

export const ExpenseCreate = async (req, res) => {
  let data = await CreateService(req, ExpenseModel);
  res.status(200).json(data);
};

export const ExpenseUpdate = async (req, res) => {
  let data = await UpdateService(req, ExpenseModel);
  res.status(200).json(data);
};

export const ExpenseList = async (req, res) => {
  let searchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [{ name: searchRgx }];
  let joinStage = {
    $lookup: {
      from: "expense_types",
      localField: "typeID",
      foreignField: "_id",
      as: "type",
    },
  };
  let data = await ListWithOneJoinService(
    req,
    ExpenseModel,
    searchArray,
    joinStage
  );
  res.status(200).json(data);
};

export const ExpenseDropDown = async (req, res) => {
  let data = await DropDownService(req, ExpenseModel, { _id: 1, name: 1 });
  res.status(200).json(data);
};

export const ExpenseDelete = async (req, res) => {
  let data = await DeleteService(req, ExpenseModel);
  res.status(200).json(data);
};

export const ExpenseStatus = async (req, res) => {
  let data = await StatusService(req, ExpenseModel);
  res.status(200).json(data);
};