CREATE TABLE folders (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "name" TEXT NOT NULL,
    created TIMESTAMP DEFAULT now() NOT NULL
);