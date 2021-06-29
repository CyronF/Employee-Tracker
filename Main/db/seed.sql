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
  
  ('Sales', 50000 , 6),
  ('Engineer', 100000, 7),
  ('Finance', 100000, 8),
  ('Legal', 100000, 9);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Jonathan', 'James', 4, 01),
  ('Kathy', 'Simon', 3, 02),
  ('Seth', 'Goldberg', 2, 03),
  ('Elizabeth', 'Noel', 1, 04)
