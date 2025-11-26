const employees = [
  { id: 1, name: "Alice", department: "Engineering", salary: 120000 },
  { id: 2, name: "Bob", department: "Engineering", salary: 130000 },
  { id: 3, name: "Charlie", department: "Marketing", salary: 90000 },
  { id: 4, name: "Diana", department: "Marketing", salary: 95000 },
  { id: 5, name: "Eve", department: "Engineering", salary: 125000 },
  { id: 6, name: "Frank", department: "Sales", salary: 80000 },
];

function groupByKey(arr, key) {
  const result = arr.reduce((acc, cur) => {
    const group = cur[key];

    if (!acc[group]) {
      acc[group] = {
        department: group,
        count: 0,
        totalSalary: 0,
      };
    }

    acc[group].count++;
    acc[group].totalSalary += cur.salary;
    acc[group].avgSalary = acc[group].totalSalary / acc[group].count;

    return acc;
  }, {});

  return Object.values(result);
}

console.log(groupByKey(employees, "department"));
