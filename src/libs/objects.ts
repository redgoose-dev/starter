/**
 * convert pure object
 * `proxy`, `observerble`객체를 순수한 객체로 변환해준다.
 */
export function convertPureObject(obj: object): object
{
  return JSON.parse(JSON.stringify(obj));
}
