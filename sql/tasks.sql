DROP TABLE IF EXISTS TaskItems;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TYPE involvement AS ENUM ('R', 'A', 'C', 'I');



CREATE TABLE Projects (
  id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,


  PRIMARY KEY (id)
)

CREATE TABLE TaskItems (
  id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  level involvement,
  project_id uuid,


  PRIMARY KEY (id),

  CONSTRAINT fk_project
      FOREIGN KEY(project_id) 
	  REFERENCES Projects(id)
)

