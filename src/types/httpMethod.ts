export const HTTPMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
} as const;
export type HTTPMethod = (typeof HTTPMethod)[keyof typeof HTTPMethod];