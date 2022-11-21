//a table that contains the user id and the user id of the person they are following
import Relationship from "../models/relationship_model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Create and Save a new Relationship

export const createRelationship = async (req, res) => {
  // Validate request
  if (!req.body.follower_id || !req.body.followed_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  } else if (!req.headers.authorization) {
    res.status(401).send({
      message: "Unauthorized",
    });
    return;
  }

  // Get user id from token
  const token = req.headers.authorization;
  console.log(token);
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
  console.log(decoded.user);

  // Create a Relationship
  const relationship = {
    follower_id: decoded.user.id,
    followed_id: req.body.followed_id,
  };

  // Save Relationship in the database
  try {
    const newRelationship = await Relationship.create(relationship);
    res.send(newRelationship);
    console.log("Relationship created successfully!");
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Relationship.",
    });
  }
};

// Retrieve all Relationships from the database.

export const getRelationships = async (req, res) => {
  try {
    const relationships = await Relationship.findAll();
    res.send(relationships);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving relationships.",
    });
  }
};

// Find a single Relationship with an id

export const getRelationship = async (req, res) => {
  const id = req.params.id;
  try {
    const relationship = await Relationship.findByPk(id);
    res.send(relationship);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving relationships.",
    });
  }
};

// Update a Relationship by the id in the request

export const updateRelationship = async (req, res) => {
  const id = req.params.id;
  try {
    const relationship = await Relationship.update(req.body, {
      where: { id: id },
    });
    res.send(relationship);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while updating relationships.",
    });
  }
};

// Delete a Relationship with the specified id in the request

export const deleteRelationship = async (req, res) => {
  const id = req.params.id;
  try {
    const relationship = await Relationship.destroy({
      where: { id: id },
    });
    res.send(relationship);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while deleting relationships.",
    });
  }
};
