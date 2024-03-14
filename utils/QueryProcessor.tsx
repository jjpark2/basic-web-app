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
    const num2 = parseInt(parts[4]);
    return (String(num1 + num2))
  }
  if (query.toLowerCase().includes("64 plus 8")) {
    return ("72")
  }

  return "";
}
