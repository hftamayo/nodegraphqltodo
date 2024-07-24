import * as yup from 'yup';

const createTodoSchema = yup.object({
  title: yup.string().trim().required('Title is Required'),
  description: yup.string().trim().required('Description is Required'),
});

const updateTodoSchema = yup.object({
  title: yup.string().trim().optional(),
  description: yup.string().trim().optional(),
  completed: yup.bool().optional(),
});

export default {
  createTodoSchema,
  updateTodoSchema,
};
