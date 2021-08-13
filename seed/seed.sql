USE employee_db;

INSERT INTO department(name)
	VALUES 
		("Sales"),
		("IT"),
		("HR"),
		("Office Administration");
    
INSERT INTO role (title, salary, department_id)
	VALUES
		("Sales Representative", 60000, 1),
		("IT Manager",180000, 2),
		("HR Manager", 150000, 3),
		("Director", 250000, 4);
    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
		("Janet", "Arnold", 1, 1),
		("Mike", "Sutherland", 2, 2),
		("Rona", "Swanson", 3, 3),
		("Simon", "Green", 4, 4);