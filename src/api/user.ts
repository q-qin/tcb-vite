import request from './request';

// demo
export function demo (data: any) {
  return request.post('/demo', data);
}
