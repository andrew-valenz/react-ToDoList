import { checkError, client } from './client.js';

export async function getTaskList() {
  const response = await client.from('task-list').select();
  return checkError(response);
}
getTaskList();
