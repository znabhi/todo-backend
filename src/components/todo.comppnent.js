import { TODO } from "../models/todo.model.js";
import { ApiError } from "../utils/ApiErrors.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Add a new todo
const addTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "Title and description are required.");
  }

  const todo = await TODO.create({ title, description });

  if (!todo) {
    throw new ApiError(400, "Failed to add todo.");
  }

  return res.json(new ApiResponse(200, todo, "Successfully added."));
});

// Get all todos
const getTodo = asyncHandler(async (req, res) => {
  const todos = await TODO.find();
  return res.json(
    new ApiResponse(200, todos, "Successfully fetched all todos.")
  );
});

// Edit a todo
const editTodo = asyncHandler(async (req, res) => {
  const { todoId } = req.params;
  const { title, description } = req.body;

  if (!todoId) {
    throw new ApiError(400, "Todo id is required.");
  } else if (!title && !description) {
    throw new ApiError(400, "Title and description are required.");
  }

  const updatedTodo = await TODO.findByIdAndUpdate(
    todoId,
    { title, description },
    { new: true }
  );

  if (!updatedTodo) {
    throw new ApiError(404, "Todo not found or not updated.");
  }

  return res.json(new ApiResponse(200, updatedTodo, "Successfully updated."));
});

// Delete a todo
const deleteTodo = asyncHandler(async (req, res) => {
  const { todoId } = req.params;

  if (!todoId) {
    throw new ApiError(400, "Todo Id is required.");
  }

  const deletedTodo = await TODO.findByIdAndDelete(todoId);

  if (!deletedTodo) {
    throw new ApiError(404, "Todo not found.");
  }

  return res.json(
    new ApiResponse(200, deletedTodo, "Todo deleted successfully.")
  );
});

export { addTodo, getTodo, editTodo, deleteTodo };
