import { parse } from "path";

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return ("jjpark2")
  }
  if (query.toLowerCase().includes("name")) {
    return ("Justin")
  }

  if (query.toLowerCase().includes("plus")) {
    const parts = query.split(" ");
    const num1 = parseInt(parts[2]);
    const num2 = parseInt(parts[4].slice(0, -1));
    return (String(num1 + num2))
  }
  if (query.toLowerCase().includes("largest")) {
    const parts = query.split(" ");
    const num1 = parseInt(parts[8]);
    const num2 = parseInt(parts[9]);
    const num3 = parseInt(parts[10]);
    return (String(Math.max(num1,num2,num3)))
  }
  if (query.toLowerCase().includes("multiplied by")) {
    const parts = query.split(" ");
    const num1 = parseInt(parts[2]);
    const num2 = parseInt(parts[5]);
    return (String(num1 * num2))
  }
  if (query.toLowerCase().includes("multiplied by")) {
    const parts = query.split(" ");
    const num1 = parseInt(parts[2]);
    const num2 = parseInt(parts[5]);
    return (String(num1 * num2))
  }
  if (query.toLowerCase().includes("both a square and a cube")) {
    let ret = ""
    const parts = query.split(" ");
    for (let i = 12; i <= 18; i++) {
      if ((Math.sqrt(parseInt(parts[1])) % 1 === 0) && Math.cbrt(parseInt(parts[1])) % 1 == 0) {
        ret = ret.concat(parts[1]);
      }
    }
    return (ret);
  }

  return "";
}
