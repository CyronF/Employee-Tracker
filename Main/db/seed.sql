INSERT INTO department
  (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('HR'),
  ('Finance');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Sales Lead', 60000 , 1),
  ('Salesperson', 50000 , 1),
  ('Lead Engineer', 100000, 2),
  ('Software Enginner', 80000, 2),
  ('Accountant', 100000, 3),
  ('HR Manager', 125000, 4),
  ('Lawyer', 100000, 4);

INSERT INTO employee
  (first_name, last_name, role_id, employee_id)
VALUES
  ('Jonathan', 'James', 1, NULL),
  ('Kathy', 'Simon', 2, 1),
  ('Gerald', 'Davis', 3, NULL),
  ('Seth', 'Goldberg', 4, 3),
  ('Cameron', 'Noel', 5, NULL),
  ('Heath', 'Wayne', 6, NULL),
  ('Vincent', 'Dawson', 7, 6);