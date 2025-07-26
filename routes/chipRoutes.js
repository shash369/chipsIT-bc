import express from "express";
import { Chip } from "../models/Chip.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const chips = await Chip.find();
  res.json(chips);
});

router.post("/", async (req, res) => {
  const { value } = req.body;
  if (!value || !value.trim()) return res.status(400).json({ error: "Invalid chip" });

  const chip = new Chip({ value: value.trim() });
  await chip.save();
  res.status(201).json(chip);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Chip.findByIdAndDelete(id);
  res.json({ message: "Chip deleted" });
});

export default router;
