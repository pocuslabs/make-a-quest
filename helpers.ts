import slugify from "slugify"

export function slugatron(str: string): string {
  const remove = new RegExp("[^\w\d\s]", "g");

  return slugify(str, { lower: true, remove });
}