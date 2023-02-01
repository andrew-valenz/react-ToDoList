import { checkError, client } from './client.js';

export async function getTaskList() {
  const response = await client.from('task-list').select();
  return checkError(response);
}
getTaskList();

export async function createTask(description) {
  const response = await client.from('task-list').insert([{ description }]).single();
  return checkError(response);
}
createTask();
