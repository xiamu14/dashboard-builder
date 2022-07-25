const data = Array.from(Array(7), (_, index) => ({
  date: `${index + 20}`,
  Direct: Math.random() * 30 + 5,
  Search: Math.random() * 30 + 5,
  Market: Math.random() * 30 + 5,
  "Social media": Math.random() * 30 + 5,
  other: Math.random() * 30 + 5,
}));

export default data;
